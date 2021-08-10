import '@aws-cdk/assert/jest';
import * as s3 from '@aws-cdk/aws-s3';
import { App, Stack, Construct, StackProps } from '@aws-cdk/core';
import { ConstructTreeParser } from '../src/tree-parser';

/**
 * Test Resources
 */
class testStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new s3.Bucket(this, 'some-bucket-id', {
      bucketName: 'some-bucket-name',
    });
  }
}

test('Accept Tree', () => {
  const app = new App();
  const treeParser = new ConstructTreeParser(app);

  expect(treeParser.rootNode).toBeTruthy();
});


test('Create Parse Tree', () => {
  // GIVEN
  const app = new App();
  new testStack(app, 'some-stack');
  const treeParser = new ConstructTreeParser(app);

  // WHEN
  const parseTree = treeParser.generateParseTree();
  const paths = parseTree.findPaths();

  // THEN
  expect(paths).toBe(
    `Tree
some-stack
some-stack/some-bucket-id
some-stack/some-bucket-id/Notifications
some-stack/some-bucket-id/Resource
`);
});

test('Create Tree Structure', () => {
  // GIVEN
  const app = new App();
  new testStack(app, 'some-stack');
  const treeParser = new ConstructTreeParser(app);

  // WHEN
  const parseTree = treeParser.generateParseTree();
  const treeStructure = parseTree.genTreeStructure();

  // THEN
  expect(treeStructure).toBe(
    `Tree
some-stack
\`-- some-bucket-id
     |-- Notifications
     \`-- Resource
`);
});
