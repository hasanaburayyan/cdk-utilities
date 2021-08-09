import { IVisitor } from './IVisitor';
import { Node } from './parse-tree';

export interface KvMap {
  [key: string]: number;
}

export class PrintTreeStructureVisitor implements IVisitor {
  indent = '|';
  indentLevel = 0;
  lastIndentLevel = 0;
  output:string = '';
  public knownChildrenSeen: KvMap = {};

  preVisit(node: Node) {
    if (node.nodePath == '') {return;}
    if (node.parentNode) {
      if (this.knownChildrenSeen[node.parentNode.nodeId]) {
        this.knownChildrenSeen[node.parentNode.nodeId] += 1;
      } else {
        this.knownChildrenSeen[node.parentNode.nodeId] = 1;
      }
    }

    let parentChildrenSeen = node.parentNode?.nodeId ? this.knownChildrenSeen[node.parentNode.nodeId] : 1;

    if (this.indentLevel != this.lastIndentLevel) {this.makeIndent();}

    if (this.indentLevel == 0) {
      this.output = this.output.concat(node.nodeId, '\n');
    } else {
      if (parentChildrenSeen == node.parentNode?.childrenNodes.length || node.parentNode?.childrenNodes.length == 1) {
        this.indent = this.indent.slice(0, -1);
        this.output = this.output.concat(this.indent, '`-- ', node.nodeId, '\n');
        this.indent = this.indent + ' ';
      } else {
        this.output = this.output.concat(this.indent, '-- ', node.nodeId, '\n');
      }
    }
    this.indentLevel += 1;

  }

  //@ts-ignore
  visit(node: Node) {
    if (node.nodePath == '') {return;}
    this.indentLevel -= 1;
  }

  //@ts-ignore
  postVisit(node: Node) {/**Nothing To See Here*/}

  makeIndent() {
    if (this.indentLevel == 1) {
      this.lastIndentLevel ++;
      return;
    }
    if (this.indentLevel > this.lastIndentLevel) {
      while (this.indentLevel > this.lastIndentLevel) {
        this.indent = this.indent + '    |';
        this.lastIndentLevel++;
      }
    } else {
      while (this.indentLevel < this.lastIndentLevel) {
        this.indent = this.indent.substr(0, this.indent.length - 5);
        this.lastIndentLevel --;
      }
    }
  }
}
