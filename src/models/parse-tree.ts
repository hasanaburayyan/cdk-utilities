import * as cdk from '@aws-cdk/core';
import { IVisitor } from './IVisitor';
import { PrintTreeStructureVisitor } from './print-tree-structure-visitor';
import { PrintVisitor } from './print-visitor';

export class Node {
  //@internal
  private readonly _nodePath: string;
  //@internal
  private readonly _nodeId: string;
  //@ts-ignore
  //@internal
  private _parentNode: Node;
  //@internal
  private _childrenNodes: Node[];
  //@internal
  private readonly _originalNode: cdk.ConstructNode;

  constructor(node: cdk.ConstructNode, parent?: Node, children?: Node[]) {
    this._originalNode = node;
    this._nodePath = node.path;
    this._nodeId = node.id;

    if (parent) {
      this._parentNode = parent;
    }

    if (children) {
      this._childrenNodes = children;
    } else {
      this._childrenNodes = [];
    }
  }

  public set parentNode(node: Node) {
    this._parentNode = node;
  }

  public get parentNode(): Node {
    return this._parentNode;
  }

  public set childrenNodes(nodes: Node[]) {
    this._childrenNodes = nodes;
  }

  public get childrenNodes(): Node[] {
    return this._childrenNodes;
  }

  public get originalNode(): cdk.ConstructNode {
    return this._originalNode;
  }

  public addChild(node: Node) {
    this._childrenNodes.push(node);
  }

  public get nodePath(): string {
    return this._nodePath;
  }

  public get nodeId(): string {
    return this._nodeId;
  }

  public accept(visitor: IVisitor) {
    visitor.preVisit(this);
    this._childrenNodes.forEach(child => {
      child.accept(visitor);
    });
    visitor.visit(this);
    visitor.postVisit(this);
  }

}

export class ParseTree {
  private readonly _root: Node;

  constructor(app: cdk.App) {
    app.synth();
    this._root = new Node(app.node);
    app.node.children.forEach(child => {
      this.createTree(child.node, this._root);
    });
  }

  /**
   * Create The Tree
   */
  public createTree(constructNode: cdk.ConstructNode, parent?: Node) {
    let node = new Node(constructNode, parent);
    if (parent) {
      parent.addChild(node);
    }
    constructNode.children.forEach(child => {
      this.createTree(child.node, node);
    });
  }

  public findPaths(): string {
    const printVisitor = new PrintVisitor();
    this._root.accept(printVisitor);
    return printVisitor.paths;
  }

  public genTreeStructure(): string {
    const printStructureVisitor = new PrintTreeStructureVisitor();
    this._root.accept(printStructureVisitor);
    return printStructureVisitor.output;
  }
}
