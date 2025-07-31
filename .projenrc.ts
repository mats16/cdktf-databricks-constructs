import { cdktf } from 'projen';
const project = new cdktf.ConstructLibraryCdktf({
  author: 'mats',
  authorAddress: 'mats.kazuki@gmail.com',
  cdktfVersion: '^0.21.0',
  constructsVersion: '^10.4.2',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.8.0',
  name: 'cdktf-databricks-constructs',
  description: 'L2 constructs for Databricks',
  projenrcTs: true,
  repositoryUrl:
    'https://github.com/mats.kazuki/cdktf-databricks-constructs.git',

  packageName: 'cdktf-databricks-constructs',

  deps: [],
  peerDeps: [
    '@cdktf/provider-aws@^21.5.0',
    '@cdktf/provider-databricks@^15.3.0',
    '@cdktf/provider-time@^11.0.0',
  ],
  devDeps: [
    '@cdktf/provider-aws@^21.5.0',
    '@cdktf/provider-databricks@^15.3.0',
    '@cdktf/provider-time@^11.0.0',
  ],

  prettier: true,
  prettierOptions: {
    settings: {
      singleQuote: true,
      tabWidth: 2,
    },
  },

  gitignore: [
    'cdktf.out/**',
    '*.tfstate',
    '*.tfstate.backup',
    '*.tfstate.lock.info',
  ],
});

project.addTask('format', {
  description: 'Format the code',
  steps: [
    {
      exec: 'npx prettier --write "src/**/*.ts"',
    },
  ],
});

project.synth();
