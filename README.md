# CDKTF Databricks Constructs

[![npm version](https://badge.fury.io/js/cdktf-databricks-constructs.svg)](https://badge.fury.io/js/cdktf-databricks-constructs)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Higher-level (L2+) constructs for [Databricks](https://www.databricks.com/) using [CDK for Terraform (CDKTF)](https://developer.hashicorp.com/terraform/cdktf).

This library provides easy-to-use, opinionated constructs that simplify deploying and managing Databricks resources with best practices built-in.

## Design Philosophy

Our constructs follow two core principles:

1. **🔗 Non-Destructive AWS Integration** - Never modify existing AWS resources, only reference them or create new ones when needed
2. **✨ Transparent Resource Creation** - Automatically create required AWS resources (IAM roles, S3 buckets) without explicit user configuration

## Features

- 🏗️ **High-level constructs** - Simplified APIs for common Databricks patterns
- 🔒 **Secure by default** - Built-in security best practices
- 📦 **Multi-language support** - Generated bindings for TypeScript, Python, Java, C#, and Go
- 🧪 **Well-tested** - Comprehensive test coverage
- 📚 **Comprehensive docs** - Complete API documentation and examples

## Installation

### TypeScript/JavaScript

```bash
npm install cdktf-databricks-constructs
# or
yarn add cdktf-databricks-constructs
```

### (TBD) Python

```bash
pip install cdktf-databricks-constructs
```

### (TBD) Java

Add to your `pom.xml`:

```xml
<dependency>
    <groupId>io.github.mats-kazuki</groupId>
    <artifactId>cdktf-databricks-constructs</artifactId>
    <version>LATEST</version>
</dependency>
```

## Quick Start

### Deployment with CDKTF

1. **Prerequisites**
   - AWS Account with appropriate permissions
   - Databricks Account (for workspace creation)
   - Node.js 18+ and npm/yarn installed
   - CDKTF CLI installed: `npm install -g cdktf-cli`

2. **Setup Environment Variables**
   ```bash
   cp .env.example .env
   # Edit .env with your credentials
   export $(cat .env | xargs)
   ```

3. **Deploy Infrastructure**
   ```bash
   # Install dependencies
   npm install

   # Build the project
   npm run build

   # Initialize CDKTF (first time only)
   cdktf init --local

   # Deploy the stack
   cdktf deploy
   ```

4. **Example Usage**
   See `main.ts` for a complete example that creates:
   - Databricks workspace with AWS backend
   - Unity Catalog metastore
   - IAM roles and S3 buckets

### Using as a Library

```typescript
import { App, TerraformStack } from 'cdktf';
import { AwsProvider } from '@cdktf/provider-aws/lib/provider';
import { DatabricksProvider } from '@cdktf/provider-databricks/lib/provider';
import { Workspace, Credentials, Storage } from 'cdktf-databricks-constructs';

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // Configure providers
    new AwsProvider(this, 'aws', { region: 'us-east-1' });
    new DatabricksProvider(this, 'databricks', {
      host: 'https://accounts.cloud.databricks.com',
      accountId: process.env.DATABRICKS_ACCOUNT_ID,
      username: process.env.DATABRICKS_ACCOUNT_USER,
      password: process.env.DATABRICKS_ACCOUNT_PASSWORD,
    });

    // Create workspace with dependencies
    const creds = new Credentials(this, 'creds', {
      accountId: process.env.DATABRICKS_ACCOUNT_ID!,
      awsAccountId: process.env.AWS_ACCOUNT_ID!,
      credentialsName: 'my-credentials',
    });

    const storage = new Storage(this, 'storage', {
      accountId: process.env.DATABRICKS_ACCOUNT_ID!,
      bucketName: 'my-databricks-root-storage',
    });

    new Workspace(this, 'workspace', {
      accountId: process.env.DATABRICKS_ACCOUNT_ID!,
      workspaceName: 'my-workspace',
      region: 'us-east-1',
      credentialsId: creds.credentialsId,
      storageConfigurationId: storage.storageConfigurationId,
    });
  }
}

const app = new App();
new MyStack(app, 'my-databricks-stack');
app.synth();
```

## Available Constructs

### Currently Implemented

- **Workspace** - Databricks workspace creation (Classic and Serverless modes)
- **Credentials** - AWS IAM cross-account role configuration
- **Storage** - S3 bucket setup for workspace root storage
- **UnityCatalogMetastore** - Unity Catalog metastore with S3 backend
- **UnityCatalogRole** - IAM roles for Unity Catalog data access

### Planned Constructs

🚧 **Under Development** - The following constructs are planned:

- **DatabricksCluster** - Managed compute clusters with auto-scaling
- **DatabricksJob** - Scheduled and triggered job workflows
- **DatabricksNotebook** - Notebook management and deployment
- **DatabricksSecretScope** - Secret management integration
- **DatabricksUnityTable** - Unity Catalog table management

## Development

### Prerequisites

- Node.js 18+
- npm or yarn
- AWS CLI configured (for AWS deployments)
- Databricks account credentials

### Setup

```bash
# Clone the repository
git clone https://github.com/mats.kazuki/cdktf-databricks-constructs.git
cd cdktf-databricks-constructs

# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm run test
```

### Project Structure

```
├── src/              # Source code
│   ├── provisioning/ # Workspace provisioning constructs
│   └── unity-catalog/# Unity Catalog constructs
├── test/             # Test files
├── lib/              # Compiled JavaScript
├── dist/             # Distribution packages
├── main.ts           # Example CDKTF application
├── cdktf.json        # CDKTF configuration
└── .projenrc.ts      # Projen configuration
```

## Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Run tests: `yarn test`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## (TBD) Documentation

- [API Documentation](./API.md)
- [Examples](./examples)
- [CDK for Terraform Documentation](https://developer.hashicorp.com/terraform/cdktf)
- [Databricks Documentation](https://docs.databricks.com/)

## Roadmap

- [ ] Core workspace constructs
- [ ] Compute cluster management
- [ ] Job and workflow constructs
- [ ] Unity Catalog integration
- [ ] Multi-cloud support (AWS, Azure, GCP)
- [ ] Advanced networking constructs
- [ ] Monitoring and observability helpers

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Support

- 📖 [Documentation](https://github.com/mats.kazuki/cdktf-databricks-constructs)
- 🐛 [Issue Tracker](https://github.com/mats.kazuki/cdktf-databricks-constructs/issues)
- 💬 [Discussions](https://github.com/mats.kazuki/cdktf-databricks-constructs/discussions)

---

Made with ❤️ by [mats](https://github.com/mats.kazuki)
