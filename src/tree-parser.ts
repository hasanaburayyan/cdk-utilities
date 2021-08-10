
import * as cdk from '@aws-cdk/core';
import { ParseTree } from './models/parse-tree';

export class ConstructTreeParser {
  private readonly _rootNode: cdk.App;

  constructor(node: cdk.App) {
    this._rootNode = node;
  }

  public generateParseTree(): ParseTree {
    return new ParseTree(this._rootNode);
  }

  public generateTreeStructure(): string {
    return new ParseTree(this._rootNode).genTreeStructure();
  }

  public get rootNode(): cdk.App {
    return this._rootNode;
  }
}
