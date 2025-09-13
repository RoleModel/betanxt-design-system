---
name: changelog
description: Update the repo changelog using .changelog structure; generate a dependency-ordered tasks.md with concrete shell commands.
---

Given the context provided as an argument, do this:

1. Run `.changelog/scripts/bash/update-chagne-log.sh --json` from the repo root and parse REPO_ROOT, CURRENT_BRANCH, CURRENT_VERSION, and AVAILABLE_COMPONENTS. All paths must be absolute. If that path fails, try .changelog/scripts/bash/update-change-log.sh --json.

2. Collect unreleased fragments:
   • Directory: <REPO_ROOT>/.changelog/unreleased/
   • Templates directory: <REPO_ROOT>/.changelog/templates/
   • Each fragment filename follows: YYYY-MM-DD-<type>-<slug>.md where <type> ∈ {feat, fix, docs, chore, refactor, perf, test, build, ci, style}.
   • Read each fragment’s markdown body to use as the entry text.
3. Determine the release version and date:
   • Version: prefer CURRENT_VERSION (from package.json via the script JSON). If $ARGUMENTS contains an explicit version, use that instead.
   • Date: YYYY-MM-DD (today) unless $ARGUMENTS supplies a date.
4. Output a single markdown block that is ready to be appended into src/CHANGELOG.md, formatted to Keep a Changelog:
   • Heading: ## [<version>] - <date>
   • Subsections in this order; include only those that have entries:
   • Added (feat)
   • Changed (refactor, style)
   • Fixed (fix)
   • Performance (perf)
   • Documentation (docs)
   • Build (build)
   • CI (ci)
   • Tests (test)
   • Chore (chore)
   • For each fragment, place a bullet under the correct subsection:
   • Bullet format: - <entry text> (<slug>, <YYYY-MM-DD>)
   • If $ARGUMENTS provides issue/PR links or scopes, append: [#123](link) / (scope: xyz).
5. Rules for merging & normalization:
   • Preserve fragment markdown (inline code, links) exactly.
   • Capitalize first word; no trailing periods for bullets.
   • De-duplicate identical lines across fragments.
   • Sort bullets within each subsection by date descending, then by slug.
   • If no fragments are found, output a stub section with ### Changed and a single bullet: - Internal updates (only if $ARGUMENTS specifies allowEmpty=true).
6. Do not include any shell commands or status text in the output — only the markdown section. Do not modify existing CHANGELOG headers. The output must be immediately appendable to <REPO_ROOT>/src/CHANGELOG.md.

Context for generation: $ARGUMENTS

Example shape (structure only; you must fill with real entries):

## [1.4.0] - 2025-09-17

### Added

- New bulk uploader for holdings (bulk-uploader, 2025-09-16)

### Fixed

- Prevent double-submit on Save (save-guard, 2025-09-15)

### Documentation

- Clarify token export pipeline (tokens-docs, 2025-09-14)

Edge cases:
• If on main/master, still generate the section (we’re formatting text only).
• If a fragment type is unknown, place under ### Changed.
• If CURRENT_VERSION is missing and $ARGUMENTS has none, use 0.0.0-unreleased.
