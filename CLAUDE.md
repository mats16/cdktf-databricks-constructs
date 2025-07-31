# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **CDKTF Databricks Constructs** - a TypeScript library providing higher-level (L2+) constructs for Databricks using CDK for Terraform (CDKTF). The project follows AWS CDK patterns and is managed by Projen.

## Essential Commands

All commands should be run with npm/yarn or prefixed with `npx projen`:

```bash
# Build and test
npm run build          # Full build: compile + test + package
npm run compile        # TypeScript compilation only
npm run test           # Run tests with coverage
npm run test:watch     # Watch mode for tests

# Code quality
npm run format         # Format code with Prettier
npm run eslint         # Lint code

# Development
npm run watch          # Watch and rebuild on changes
npm run docgen         # Generate API documentation

# Release
npm run release        # Create a release (updates version, changelog, etc.)
```

## Architecture Overview

### Construct Hierarchy
The library implements L2 constructs (higher-level abstractions) that wrap Databricks Terraform provider resources:

1. **Provisioning Module** (`src/provisioning/`)
   - `Workspace` - Creates Databricks workspaces (Classic or Serverless modes)
   - `Credentials` - Manages AWS IAM cross-account roles
   - `Storage` - Configures S3 buckets for workspace root storage

2. **Unity Catalog Module** (`src/unity-catalog/`)
   - `UnityCatalogMetastore` - Sets up Unity Catalog with S3 backend
   - `UnityCatalogRole` - Creates IAM roles for data access

### Key Design Patterns
- **Builder Pattern**: All constructs use configuration interfaces (e.g., `WorkspaceConfig`)
- **Composition**: Constructs can be used independently or composed together
- **Secure Defaults**: Security best practices are built-in with override options
- **Multi-language Support**: JSII generates bindings for Python, Java, C#, and Go

### Testing Strategy
- Jest for unit tests with coverage reporting
- Test files follow the pattern `*.test.ts`
- Coverage reports in HTML, JSON, and lcov formats
- Test results output to `test-reports/` directory

## Important Context

1. **Projen Managed**: Many files are auto-generated. Modify `.projenrc.ts` to change project configuration, not the generated files directly.

2. **CDKTF Version**: Uses CDKTF 0.21.0 with Terraform provider bindings. Check provider versions when adding new resources.

3. **TypeScript Strict Mode**: The project uses strict TypeScript settings. All code must pass strict type checking.

4. **API Documentation**: API.md is auto-generated from TSDoc comments. Keep comments up-to-date.

5. **Current State**: This is a pre-1.0 project (v0.0.0). The API may change significantly before the first stable release.

## Common Development Tasks

When implementing new constructs:
1. Follow the existing pattern in `src/provisioning/workspace.ts`
2. Create a configuration interface extending `Construct`
3. Implement proper defaults and validation
4. Add comprehensive TSDoc comments for API documentation
5. Write unit tests covering the construct's behavior

When debugging:
- Check generated Terraform JSON in synthesized output
- Use `console.log` in tests to inspect construct properties
- Verify provider versions match expected APIs