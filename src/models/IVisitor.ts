import { Node } from './parse-tree';

/**
 * Visitor interface
 */
export interface IVisitor {
  preVisit(node: Node): void;
  visit(node: Node): void;
  postVisit(node: Node): void;
}
