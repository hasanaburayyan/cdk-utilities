const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Hasan Abu-Rayyan',
  authorAddress: 'hasanaburayyan21@gmail.com',
  cdkVersion: '1.117.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-utilities',
  repositoryUrl: 'https://git-codecommit.us-east-1.amazonaws.com/v1/repos/cdk-utilities',
  devDeps: [

  ],
  deps: [
    '@aws-cdk/core',
    '@aws-cdk/aws-s3',
    '@aws-cdk/cloud-assembly-schema',
  ],
  peerDeps: [
    '@aws-cdk/core',
    '@aws-cdk/aws-s3',
    '@aws-cdk/cloud-assembly-schema',
  ],
  publishToPypi: {
    distName: 'cdk_tree_parser',
    module: 'cdk_tree_parser',
  },
  // cdkDependencies: undefined,        /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  // cdkTestDependencies: undefined,    /* AWS CDK modules required for testing. */
  // deps: [],                          /* Runtime dependencies of this module. */
  // description: undefined,            /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                       /* Build dependencies for this module. */
  // packageName: undefined,            /* The "name" in package.json. */
  // projectType: ProjectType.UNKNOWN,  /* Which type of project this is (library/app). */
  // release: undefined,                /* Add release management to this project. */
});
project.synth();
