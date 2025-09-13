#!/usr/bin/env bash
set -e
JSON_MODE=false
for arg in "$@"; do case "$arg" in --json) JSON_MODE=true ;; --help|-h) echo "Usage: $0 [--json] - Check changelog update prerequisites"; exit 0 ;; esac; done

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT=$(git rev-parse --show-toplevel)
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Define changelog-related paths
CHANGELOG_DIR="$REPO_ROOT/.changelog"
MAIN_CHANGELOG="$REPO_ROOT/src/stories/CHANGELOG.mdx"
TEMPLATES_DIR="$CHANGELOG_DIR/templates"

# Check if we're on a valid branch for changelog updates
check_changelog_branch() {
    local branch="$1"
    if [[ "$branch" == "main" || "$branch" == "master" ]]; then
        echo "WARNING: You're on the main branch. Consider creating a feature branch for changelog updates." >&2
        return 0
    fi
    return 0
}

# Check for git changes
check_git_status() {
    if [[ -n $(git status --porcelain) ]]; then
        echo "WARNING: You have uncommitted changes. Consider committing them before updating changelog." >&2
        return 1
    fi
    return 0
}

# Check file existence helper
check_file() { [[ -f "$1" ]] && echo "  ✓ $2" || echo "  ✗ $2"; }
check_dir() { [[ -d "$1" && -n $(ls -A "$1" 2>/dev/null) ]] && echo "  ✓ $2" || echo "  ✗ $2"; }

# Main prerequisite checks
check_changelog_branch "$CURRENT_BRANCH"

if [[ ! -d "$CHANGELOG_DIR" ]]; then
    echo "ERROR: Changelog directory not found: $CHANGELOG_DIR"
    echo "Initialize changelog structure first."
    exit 1
fi

if [[ ! -f "$MAIN_CHANGELOG" ]]; then
    echo "ERROR: Main changelog not found: $MAIN_CHANGELOG"
    echo "Create the main changelog file first."
    exit 1
fi

# Check for package.json to determine version
PACKAGE_JSON="$REPO_ROOT/package.json"
if [[ ! -f "$PACKAGE_JSON" ]]; then
    echo "WARNING: package.json not found. Version detection may be limited." >&2
fi

if $JSON_MODE; then
    # Collect available changelog components
    components=()
    [[ -f "$MAIN_CHANGELOG" ]] && components+=("CHANGELOG.mdx")
    [[ -d "$TEMPLATES_DIR" ]] && components+=("templates/")
    [[ -f "$PACKAGE_JSON" ]] && components+=("package.json")

    json_components=$(printf '"%s",' "${components[@]}")
    json_components="[${json_components%,}]"

    current_version=""
    if [[ -f "$PACKAGE_JSON" ]]; then
        current_version=$(grep '"version"' "$PACKAGE_JSON" | sed 's/.*"version": *"\([^"]*\)".*/\1/')
    fi

    printf '{"REPO_ROOT":"%s","CURRENT_BRANCH":"%s","CURRENT_VERSION":"%s","AVAILABLE_COMPONENTS":%s}\n' \
        "$REPO_ROOT" "$CURRENT_BRANCH" "$current_version" "$json_components"
else
    echo "CHANGELOG STATUS:"
    echo "  Repository: $REPO_ROOT"
    echo "  Current branch: $CURRENT_BRANCH"

    if [[ -f "$PACKAGE_JSON" ]]; then
        current_version=$(grep '"version"' "$PACKAGE_JSON" | sed 's/.*"version": *"\([^"]*\)".*/\1/' 2>/dev/null || echo "unknown")
        echo "  Current version: $current_version"
    fi

    echo ""
    echo "AVAILABLE COMPONENTS:"
    check_file "$MAIN_CHANGELOG" "Main changelog (CHANGELOG.mdx)"
    check_dir "$TEMPLATES_DIR" "Changelog templates"
    check_file "$PACKAGE_JSON" "Package version (package.json)"

    echo ""
    echo "GIT STATUS:"
    if check_git_status; then
        echo "  ✓ Working directory clean"
    else
        echo "  ⚠ Uncommitted changes present"
    fi
fi

print_next_steps() {
  echo ""
  cat <<'EOF'
NEXT STEPS

1) Update changelog from git commits
   # Generate changelog from commits since last tag
   .changelog/scripts/bash/update-change-log.sh --update

   # Or generate from specific git reference
   .changelog/scripts/bash/update-change-log.sh --update --since=v1.0.0

   # Or generate with custom version and date
   .changelog/scripts/bash/update-change-log.sh --update --version=1.1.0 --date=2025-01-18

2) Review and edit the generated changelog
   # Open the changelog file to review generated entries
   ${EDITOR:-nano} src/stories/CHANGELOG.mdx

3) Commit and push
   git add src/stories/CHANGELOG.mdx
   # If you bumped the version in package.json, use it below:
   VERSION=$(jq -r '.version' package.json 2>/dev/null || echo "x.y.z")
   git commit -m "docs(changelog): update for v${VERSION}"
   git push origin "$(git rev-parse --abbrev-ref HEAD)"

USAGE OPTIONS
--update              Generate changelog from git commits
--allow-empty         Create stub entry if no commits found
--version=X.Y.Z       Use custom version instead of package.json
--date=YYYY-MM-DD     Use custom date instead of today
--since=REF           Generate from commits since specific git reference

TIPS
- Run with --json to programmatically inspect status:
    ./path/to/this-script.sh --json | jq
- Use conventional commit format for better categorization:
    feat: add new feature
    fix: resolve bug
    docs: update documentation
- Stay off main/master for edits; open a PR once the changelog looks good.
EOF
}

# Function to collect and process git commits since last tag or specified range
collect_git_commits() {
    local version="$1"
    local date="$2"
    local since_ref="${3:-}"

    # Arrays to hold different types of changes (using regular arrays with case statements)
    local entries_feat=""
    local entries_fix=""
    local entries_refactor=""
    local entries_style=""
    local entries_docs=""
    local entries_perf=""
    local entries_build=""
    local entries_ci=""
    local entries_test=""
    local entries_chore=""

    # Determine commit range
    local commit_range=""
    if [[ -n "$since_ref" ]]; then
        commit_range="$since_ref..HEAD"
    else
        # Find the last tag or use all commits if no tags exist
        local last_tag=$(git describe --tags --abbrev=0 2>/dev/null || echo "")
        if [[ -n "$last_tag" ]]; then
            commit_range="$last_tag..HEAD"
        else
            # If no tags, get commits from the beginning
            commit_range="HEAD"
        fi
    fi

    # Get commits with format: hash|date|subject
    local commits
    if [[ "$commit_range" == "HEAD" ]]; then
        commits=$(git log --pretty=format:"%H|%ad|%s" --date=short HEAD 2>/dev/null || echo "")
    else
        commits=$(git log --pretty=format:"%H|%ad|%s" --date=short "$commit_range" 2>/dev/null || echo "")
    fi

    if [[ -z "$commits" ]]; then
        return 1
    fi

    # Process each commit
    while IFS='|' read -r hash commit_date subject; do
        if [[ -z "$subject" ]]; then
            continue
        fi

        # Get changed files for this commit to help categorize
        local changed_files=$(git show --name-only --pretty=format: "$hash" 2>/dev/null | grep -v '^$' | head -3)
        
        # Extract conventional commit type from subject
        local type="chore"
        local scope=""
        local description="$subject"

        # Parse conventional commit format: type(scope): description
        if [[ $subject =~ ^([a-z]+): ]]; then
            type="${BASH_REMATCH[1]}"
            description="${subject#*: }"
        fi

        # Extract scope separately if present
        if [[ $subject == *"("*"): "* ]]; then
            scope=$(echo "$subject" | sed -n 's/^[a-z]*(\([^)]*\)):.*$/(\1)/p')
        fi


        # Auto-detect type from changed files if not conventional commit
        if [[ "$type" == "chore" && "$subject" != *":"* ]]; then
            if echo "$changed_files" | grep -q -E "\.(tsx?|jsx?)$"; then
                # Check if it's a new component
                if echo "$changed_files" | grep -q "components.*\.tsx$" && git show --name-status "$hash" | grep -q "^A"; then
                    type="feat"
                # Check if it's a fix
                elif [[ $subject =~ (fix|bug|resolve|correct) ]]; then
                    type="fix"
                # Check if it's refactor
                elif [[ $subject =~ (refactor|update|enhance|improve) ]]; then
                    type="refactor"
                else
                    type="refactor"
                fi
            elif echo "$changed_files" | grep -q -E "\.(md|mdx)$"; then
                type="docs"
            elif echo "$changed_files" | grep -q -E "(package\.json|\.config\.|vite\.|tsconfig)" ; then
                type="build"
            fi
        fi

        # Map commit types to changelog sections
        case "$type" in
            feat|feature) type="feat" ;;
            fix|bugfix) type="fix" ;;
            refactor) type="refactor" ;;
            style) type="style" ;;
            docs|doc) type="docs" ;;
            perf|performance) type="perf" ;;
            build) type="build" ;;
            ci) type="ci" ;;
            test|tests) type="test" ;;
            *) type="chore" ;;
        esac

        # Capitalize first word of description
        description="$(echo "$description" | sed 's/^./\U&/')"

        # Remove trailing periods
        description="${description%.}"

        # Create slug from commit hash (short version)
        local slug="${hash:0:7}"

        # Add scope if present
        if [[ -n "$scope" ]]; then
            description="$description $scope"
        fi

        # Add entry to appropriate section
        local entry="- $description ($slug, $commit_date)\n"
        case "$type" in
            feat) entries_feat+="$entry" ;;
            fix) entries_fix+="$entry" ;;
            refactor) entries_refactor+="$entry" ;;
            style) entries_style+="$entry" ;;
            docs) entries_docs+="$entry" ;;
            perf) entries_perf+="$entry" ;;
            build) entries_build+="$entry" ;;
            ci) entries_ci+="$entry" ;;
            test) entries_test+="$entry" ;;
            *) entries_chore+="$entry" ;;
        esac

    done <<< "$commits"

    # Generate changelog section
    echo "## [$version] - $date"
    echo ""

    # Output sections in specified order
    if [[ -n "$entries_feat" ]]; then
        echo "### Added"
        echo ""
        echo -e "$entries_feat"
    fi

    if [[ -n "$entries_refactor" || -n "$entries_style" ]]; then
        echo "### Changed"
        echo ""
        [[ -n "$entries_refactor" ]] && echo -e "$entries_refactor"
        [[ -n "$entries_style" ]] && echo -e "$entries_style"
    fi

    if [[ -n "$entries_fix" ]]; then
        echo "### Fixed"
        echo ""
        echo -e "$entries_fix"
    fi

    if [[ -n "$entries_perf" ]]; then
        echo "### Performance"
        echo ""
        echo -e "$entries_perf"
    fi

    if [[ -n "$entries_docs" ]]; then
        echo "### Documentation"
        echo ""
        echo -e "$entries_docs"
    fi

    if [[ -n "$entries_build" ]]; then
        echo "### Build"
        echo ""
        echo -e "$entries_build"
    fi

    if [[ -n "$entries_ci" ]]; then
        echo "### CI"
        echo ""
        echo -e "$entries_ci"
    fi

    if [[ -n "$entries_test" ]]; then
        echo "### Tests"
        echo ""
        echo -e "$entries_test"
    fi

    if [[ -n "$entries_chore" ]]; then
        echo "### Chore"
        echo ""
        echo -e "$entries_chore"
    fi
}

# Function to append changelog entry
append_changelog_entry() {
    local version="$1"
    local date="$2"
    local allow_empty="${3:-false}"
    local since_ref="${4:-}"

    local temp_file=$(mktemp)
    local changelog_entry=""

    # Try to collect git commits
    changelog_entry=$(collect_git_commits "$version" "$date" "$since_ref")

    # If no commits found and allowEmpty is true, create stub entry
    if [[ -z "$changelog_entry" && "$allow_empty" == "true" ]]; then
        changelog_entry="## [$version] - $date

### Changed

- Internal updates"
    fi

    if [[ -n "$changelog_entry" ]]; then
        # Read existing changelog and find insertion point
        if [[ -f "$MAIN_CHANGELOG" ]]; then
            # Write changelog entry to temp file first
            echo "$changelog_entry" > "$temp_file.entry"
            
            # Check if changelog has [Unreleased] section
            if grep -q "^## \[Unreleased\]" "$MAIN_CHANGELOG" 2>/dev/null; then
                # Insert after [Unreleased] section
                {
                    # Print everything up to and including the [Unreleased] section
                    sed -n '1,/^## \[Unreleased\]/p' "$MAIN_CHANGELOG"
                    echo ""
                    # Insert the new changelog entry
                    cat "$temp_file.entry"
                    echo ""
                    # Print everything after the [Unreleased] section
                    sed -n '/^## \[Unreleased\]/,$p' "$MAIN_CHANGELOG" | tail -n +2
                } > "$temp_file"
            else
                # No [Unreleased] section, append to end
                {
                    cat "$MAIN_CHANGELOG"
                    echo ""
                    cat "$temp_file.entry"
                } > "$temp_file"
            fi

            mv "$temp_file" "$MAIN_CHANGELOG"
            rm -f "$temp_file.entry"
            echo "✓ Changelog updated with version $version"
        else
            echo "ERROR: Main changelog file not found: $MAIN_CHANGELOG"
            rm -f "$temp_file" "$temp_file.entry"
            return 1
        fi
    else
        echo "No commits found and allowEmpty not specified"
        rm -f "$temp_file"
        return 1
    fi
}

# Add command line options for updating changelog
UPDATE_CHANGELOG=false
ALLOW_EMPTY=false
CUSTOM_VERSION=""
CUSTOM_DATE=""
SINCE_REF=""

for arg in "$@"; do
    case "$arg" in
        --update) UPDATE_CHANGELOG=true ;;
        --allow-empty) ALLOW_EMPTY=true ;;
        --version=*) CUSTOM_VERSION="${arg#*=}" ;;
        --date=*) CUSTOM_DATE="${arg#*=}" ;;
        --since=*) SINCE_REF="${arg#*=}" ;;
    esac
done

# If update flag is set, append changelog entry
if $UPDATE_CHANGELOG; then
    # Determine version
    if [[ -n "$CUSTOM_VERSION" ]]; then
        version="$CUSTOM_VERSION"
    elif [[ -f "$PACKAGE_JSON" ]]; then
        version=$(grep '"version"' "$PACKAGE_JSON" | sed 's/.*"version": *"\([^"]*\)".*/\1/')
    else
        version="0.0.0-unreleased"
    fi

    # Determine date
    if [[ -n "$CUSTOM_DATE" ]]; then
        date="$CUSTOM_DATE"
    else
        date=$(date +%Y-%m-%d)
    fi

    append_changelog_entry "$version" "$date" "$ALLOW_EMPTY" "$SINCE_REF"
    exit 0
fi

# ... keep your existing logic above ...
# At the very end of the non-JSON branch, print the prompt:
if ! $JSON_MODE; then
    print_next_steps
fi
