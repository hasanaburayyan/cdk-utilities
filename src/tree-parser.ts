
import * as cdk from '@aws-cdk/core';
import { ParseTree } from './models/parse-tree';

/**
 * Construct Tree Parser which when given an cdk app, it will generate different tree structures and
 * meta data
 *
 * @example
 *
 * // Create A New ConstructTreeParser
 * // First create a cdk app object
 * const app = new cdk.App()
 * // Add Constructs/Stacks to your app
 * new SomeStack(app, 'some-stack-id', props)
 * // Create ConstructTreeParser
 * new ConstructTreeParser(app)
 *
 */
export class ConstructTreeParser {
  private readonly _rootNode: cdk.App;

  constructor(node: cdk.App) {
    this._rootNode = node;
  }

  /**
   * Generate and return Parse Tree which implements visitor pattern methods (preVisit, visit, postVisit)
   *
   * You may not need the Parse Tree unless you intend to do further processing, rather you can just generate
   * structures using existing generation functions.
   */
  public generateParseTree(): ParseTree {
    return new ParseTree(this._rootNode);
  }

  /**
   * Generate a tree structure string
   *
   * @example
   * new ConstructTreeParser(app).generateTreeStructure();
   *
   * Tree
   * some-stack
   *  `-- some-bucket-id
   *      |-- Notifications
   *      `-- Resource
   */
  public generateTreeStructure(): string {
    return new ParseTree(this._rootNode).genTreeStructure();
  }

  /**
   * Return back the root node of the Parse Tree which is a cdk app
   */
  public get rootNode(): cdk.App {
    return this._rootNode;
  }
}
