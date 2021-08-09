import { IVisitor } from './IVisitor';
import { Node } from './parse-tree';
export class PrintVisitor implements IVisitor {
  private _paths: string;

  constructor() {
    this._paths = '';
  }

  // @ts-ignore
  public preVisit(node: Node) {
    if (node.nodePath != '') {
      this._paths += node.nodePath.concat('\n');
    }
  }

  // @ts-ignore
  public visit(node: Node) {

  }

  // @ts-ignore
  public postVisit(node: Node) {}

  public get paths(): string {
    return this._paths;
  }
}
