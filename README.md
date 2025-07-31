# CDKTF Databricks Constructs

[![npm version](https://badge.fury.io/js/cdktf-databricks-constructs.svg)](https://badge.fury.io/js/cdktf-databricks-constructs)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Higher-level (L2+) constructs for [Databricks](https://www.databricks.com/) using [CDK for Terraform (CDKTF)](https://developer.hashicorp.com/terraform/cdktf).

This library provides easy-to-use, opinionated constructs that simplify deploying and managing Databricks resources with best practices built-in.

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

## (TBD) Quick Start

```typescript
import { App, TerraformStack } from 'cdktf';
import { DatabricksProvider } from '@cdktf/provider-databricks/lib/provider';
import { DatabricksWorkspace } from 'cdktf-databricks-constructs';

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new DatabricksProvider(this, 'databricks', {
      host: process.env.DATABRICKS_HOST,
      token: process.env.DATABRICKS_TOKEN,
    });

    // Example usage (constructs to be implemented)
    new DatabricksWorkspace(this, 'workspace', {
      name: 'my-workspace',
      region: 'us-west-2',
      // More configuration options...
    });
  }
}

const app = new App();
new MyStack(app, 'my-databricks-stack');
app.synth();
```

## (TBD) Available Constructs

🚧 **Under Development** - This library is currently in early development. The following constructs are planned:

- **DatabricksWorkspace** - Complete workspace setup with networking and security
- **DatabricksCluster** - Managed compute clusters with auto-scaling
- **DatabricksJob** - Scheduled and triggered job workflows
- **DatabricksNotebook** - Notebook management and deployment
- **DatabricksSecretScope** - Secret management integration
- **DatabricksUnityTable** - Unity Catalog table management

## Development

### (TBD) Prerequisites

- Node.js 18+
- yarn or npm

### (TBD) Setup

```bash
# Clone the repository
git clone https://github.com/mats.kazuki/cdktf-databricks-constructs.git
cd cdktf-databricks-constructs

# Install dependencies
yarn install

# Build the project
yarn build

# Run tests
yarn test
```

### (TBD) Project Structure

```
├── src/              # Source code
├── test/             # Test files
├── docs/             # Documentation
├── examples/         # Usage examples
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
