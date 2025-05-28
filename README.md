# BetaNXT Design System

## Publishing to GitHub Packages

This package is published to GitHub Packages registry. The publishing process is automated using GitHub Actions.

### Publishing a New Version

There are two ways to publish a new version:

1. **Create a GitHub Release**:

   - Go to the repository's Releases page on GitHub
   - Click "Create a new release"
   - Enter a tag version (e.g., v1.0.0)
   - The workflow will automatically publish the package

2. **Manually trigger the workflow**:
   - Go to the "Actions" tab in the GitHub repository
   - Select "Publish Package to GitHub Packages" workflow
   - Click "Run workflow"
   - Select the branch and specify version bump type (patch, minor, major, or specific version)
   - Click "Run workflow"

### Consuming the Package

To use this package in other projects:

1. Authenticate with GitHub Packages:

   ```
   echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" >> ~/.npmrc
   ```

2. Create or update `.npmrc` in your project:

   ```
   @rolemodel:registry=https://npm.pkg.github.com
   ```

3. Install the package:
   ```
   npm install @rolemodel/betanxt-design-system
   ```

### Access Control

Only users with write access to the repository can publish new versions of the package.

---
