# Documentation Versioning Setup

This documentation site supports multiple versions of the Sockeon documentation.

## Version Configuration

Versions are configured in `.vitepress/versions.json`. Each version has:
- `version`: The version identifier (e.g., "latest", "1.0")
- `label`: The display label (e.g., "Latest", "v1.0")
- `path`: The URL path prefix (e.g., "/" for latest, "/v1.0/" for v1.0)

## Directory Structure

- `docs/` - Contains the latest version documentation
- `docs/v1.0/` - Contains version 1.0 specific documentation
- Add more version directories as needed (e.g., `docs/v2.0/`)

## Version Selector

The version selector appears in the navigation bar and allows users to switch between different documentation versions.

## Adding a New Version

1. Add a new entry to `.vitepress/versions.json`
2. Create a new directory for the version (e.g., `docs/v2.0/`)
3. Copy or create version-specific documentation in that directory
4. The version selector will automatically include the new version

## Notes

- The "latest" version should always point to the root path "/"
- Version-specific paths should start with "/v" followed by the version number
- When switching versions, the system will try to maintain the current page path

