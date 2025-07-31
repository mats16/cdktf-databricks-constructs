import { cdktf } from 'projen';
const project = new cdktf.ConstructLibraryCdktf({
  author: 'mats',
  authorAddress: 'mats.kazuki@gmail.com',
  cdktfVersion: '^0.13.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.8.0',
  name: 'cdktf-databricks-constructs',
  description: 'L2 constructs for Databricks',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/mats.kazuki/cdktf-databricks-constructs.git',

  deps: [
    '@cdktf/provider-aws@^21.5.0',
    '@cdktf/provider-databricks@^15.3.0',
    '@cdktf/provider-time@^11.0.0',
  ],
  devDeps: [
    'prettier',
  ],
  packageName: 'cdktf-databricks-constructs',
});

project.package.setScript('format', 'npx prettier --write "src/**/*.ts"');

project.synth();
