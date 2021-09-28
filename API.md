# API Reference <a name="API Reference"></a>


## Structs <a name="Structs"></a>

### KvMap <a name="cdk-utilities.KvMap"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { KvMap } from 'cdk-utilities'

const kvMap: KvMap = { ... }
```

## Classes <a name="Classes"></a>

### ConstructTreeParser <a name="cdk-utilities.ConstructTreeParser"></a>

Construct Tree Parser which when given an cdk app, it will generate different tree structures and meta data.

#### Initializers <a name="cdk-utilities.ConstructTreeParser.Initializer"></a>

```typescript
import { ConstructTreeParser } from 'cdk-utilities'

new ConstructTreeParser(node: App)
```

##### `node`<sup>Required</sup> <a name="cdk-utilities.ConstructTreeParser.parameter.node"></a>

- *Type:* [`@aws-cdk/core.App`](#@aws-cdk/core.App)

---

#### Methods <a name="Methods"></a>

##### `generateParseTree` <a name="cdk-utilities.ConstructTreeParser.generateParseTree"></a>

```typescript
public generateParseTree()
```

##### `generateTreeStructure` <a name="cdk-utilities.ConstructTreeParser.generateTreeStructure"></a>

```typescript
public generateTreeStructure()
```


#### Properties <a name="Properties"></a>

##### `rootNode`<sup>Required</sup> <a name="cdk-utilities.ConstructTreeParser.property.rootNode"></a>

```typescript
public readonly rootNode: App;
```

- *Type:* [`@aws-cdk/core.App`](#@aws-cdk/core.App)

Return back the root node of the Parse Tree which is a cdk app.

---


### Node <a name="cdk-utilities.Node"></a>

#### Initializers <a name="cdk-utilities.Node.Initializer"></a>

```typescript
import { Node } from 'cdk-utilities'

new Node(node: ConstructNode, parent?: Node, children?: Node[])
```

##### `node`<sup>Required</sup> <a name="cdk-utilities.Node.parameter.node"></a>

- *Type:* [`@aws-cdk/core.ConstructNode`](#@aws-cdk/core.ConstructNode)

---

##### `parent`<sup>Optional</sup> <a name="cdk-utilities.Node.parameter.parent"></a>

- *Type:* [`cdk-utilities.Node`](#cdk-utilities.Node)

---

##### `children`<sup>Optional</sup> <a name="cdk-utilities.Node.parameter.children"></a>

- *Type:* [`cdk-utilities.Node`](#cdk-utilities.Node)[]

---

#### Methods <a name="Methods"></a>

##### `accept` <a name="cdk-utilities.Node.accept"></a>

```typescript
public accept(visitor: IVisitor)
```

###### `visitor`<sup>Required</sup> <a name="cdk-utilities.Node.parameter.visitor"></a>

- *Type:* [`cdk-utilities.IVisitor`](#cdk-utilities.IVisitor)

---

##### `addChild` <a name="cdk-utilities.Node.addChild"></a>

```typescript
public addChild(node: Node)
```

###### `node`<sup>Required</sup> <a name="cdk-utilities.Node.parameter.node"></a>

- *Type:* [`cdk-utilities.Node`](#cdk-utilities.Node)

---


#### Properties <a name="Properties"></a>

##### `nodeId`<sup>Required</sup> <a name="cdk-utilities.Node.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* `string`

---

##### `nodePath`<sup>Required</sup> <a name="cdk-utilities.Node.property.nodePath"></a>

```typescript
public readonly nodePath: string;
```

- *Type:* `string`

---

##### `originalNode`<sup>Required</sup> <a name="cdk-utilities.Node.property.originalNode"></a>

```typescript
public readonly originalNode: ConstructNode;
```

- *Type:* [`@aws-cdk/core.ConstructNode`](#@aws-cdk/core.ConstructNode)

---

##### `childrenNodes`<sup>Required</sup> <a name="cdk-utilities.Node.property.childrenNodes"></a>

```typescript
public readonly childrenNodes: Node[];
```

- *Type:* [`cdk-utilities.Node`](#cdk-utilities.Node)[]

---

##### `parentNode`<sup>Required</sup> <a name="cdk-utilities.Node.property.parentNode"></a>

```typescript
public readonly parentNode: Node;
```

- *Type:* [`cdk-utilities.Node`](#cdk-utilities.Node)

---


### ParseTree <a name="cdk-utilities.ParseTree"></a>

#### Initializers <a name="cdk-utilities.ParseTree.Initializer"></a>

```typescript
import { ParseTree } from 'cdk-utilities'

new ParseTree(app: App)
```

##### `app`<sup>Required</sup> <a name="cdk-utilities.ParseTree.parameter.app"></a>

- *Type:* [`@aws-cdk/core.App`](#@aws-cdk/core.App)

---

#### Methods <a name="Methods"></a>

##### `createTree` <a name="cdk-utilities.ParseTree.createTree"></a>

```typescript
public createTree(constructNode: ConstructNode, parent?: Node)
```

###### `constructNode`<sup>Required</sup> <a name="cdk-utilities.ParseTree.parameter.constructNode"></a>

- *Type:* [`@aws-cdk/core.ConstructNode`](#@aws-cdk/core.ConstructNode)

---

###### `parent`<sup>Optional</sup> <a name="cdk-utilities.ParseTree.parameter.parent"></a>

- *Type:* [`cdk-utilities.Node`](#cdk-utilities.Node)

---

##### `findPaths` <a name="cdk-utilities.ParseTree.findPaths"></a>

```typescript
public findPaths()
```

##### `genTreeStructure` <a name="cdk-utilities.ParseTree.genTreeStructure"></a>

```typescript
public genTreeStructure()
```




### PrintTreeStructureVisitor <a name="cdk-utilities.PrintTreeStructureVisitor"></a>

- *Implements:* [`cdk-utilities.IVisitor`](#cdk-utilities.IVisitor)

#### Initializers <a name="cdk-utilities.PrintTreeStructureVisitor.Initializer"></a>

```typescript
import { PrintTreeStructureVisitor } from 'cdk-utilities'

new PrintTreeStructureVisitor()
```

#### Methods <a name="Methods"></a>

##### `makeIndent` <a name="cdk-utilities.PrintTreeStructureVisitor.makeIndent"></a>

```typescript
public makeIndent()
```

##### `postVisit` <a name="cdk-utilities.PrintTreeStructureVisitor.postVisit"></a>

```typescript
public postVisit(node: Node)
```

###### `node`<sup>Required</sup> <a name="cdk-utilities.PrintTreeStructureVisitor.parameter.node"></a>

- *Type:* [`cdk-utilities.Node`](#cdk-utilities.Node)

---

##### `preVisit` <a name="cdk-utilities.PrintTreeStructureVisitor.preVisit"></a>

```typescript
public preVisit(node: Node)
```

###### `node`<sup>Required</sup> <a name="cdk-utilities.PrintTreeStructureVisitor.parameter.node"></a>

- *Type:* [`cdk-utilities.Node`](#cdk-utilities.Node)

---

##### `visit` <a name="cdk-utilities.PrintTreeStructureVisitor.visit"></a>

```typescript
public visit(node: Node)
```

###### `node`<sup>Required</sup> <a name="cdk-utilities.PrintTreeStructureVisitor.parameter.node"></a>

- *Type:* [`cdk-utilities.Node`](#cdk-utilities.Node)

---


#### Properties <a name="Properties"></a>

##### `indent`<sup>Required</sup> <a name="cdk-utilities.PrintTreeStructureVisitor.property.indent"></a>

```typescript
public readonly indent: string;
```

- *Type:* `string`

---

##### `indentLevel`<sup>Required</sup> <a name="cdk-utilities.PrintTreeStructureVisitor.property.indentLevel"></a>

```typescript
public readonly indentLevel: number;
```

- *Type:* `number`

---

##### `knownChildrenSeen`<sup>Required</sup> <a name="cdk-utilities.PrintTreeStructureVisitor.property.knownChildrenSeen"></a>

```typescript
public readonly knownChildrenSeen: KvMap;
```

- *Type:* [`cdk-utilities.KvMap`](#cdk-utilities.KvMap)

---

##### `lastIndentLevel`<sup>Required</sup> <a name="cdk-utilities.PrintTreeStructureVisitor.property.lastIndentLevel"></a>

```typescript
public readonly lastIndentLevel: number;
```

- *Type:* `number`

---

##### `output`<sup>Required</sup> <a name="cdk-utilities.PrintTreeStructureVisitor.property.output"></a>

```typescript
public readonly output: string;
```

- *Type:* `string`

---


### PrintVisitor <a name="cdk-utilities.PrintVisitor"></a>

- *Implements:* [`cdk-utilities.IVisitor`](#cdk-utilities.IVisitor)

#### Initializers <a name="cdk-utilities.PrintVisitor.Initializer"></a>

```typescript
import { PrintVisitor } from 'cdk-utilities'

new PrintVisitor()
```

#### Methods <a name="Methods"></a>

##### `postVisit` <a name="cdk-utilities.PrintVisitor.postVisit"></a>

```typescript
public postVisit(node: Node)
```

###### `node`<sup>Required</sup> <a name="cdk-utilities.PrintVisitor.parameter.node"></a>

- *Type:* [`cdk-utilities.Node`](#cdk-utilities.Node)

---

##### `preVisit` <a name="cdk-utilities.PrintVisitor.preVisit"></a>

```typescript
public preVisit(node: Node)
```

###### `node`<sup>Required</sup> <a name="cdk-utilities.PrintVisitor.parameter.node"></a>

- *Type:* [`cdk-utilities.Node`](#cdk-utilities.Node)

---

##### `visit` <a name="cdk-utilities.PrintVisitor.visit"></a>

```typescript
public visit(node: Node)
```

###### `node`<sup>Required</sup> <a name="cdk-utilities.PrintVisitor.parameter.node"></a>

- *Type:* [`cdk-utilities.Node`](#cdk-utilities.Node)

---


#### Properties <a name="Properties"></a>

##### `paths`<sup>Required</sup> <a name="cdk-utilities.PrintVisitor.property.paths"></a>

```typescript
public readonly paths: string;
```

- *Type:* `string`

---


## Protocols <a name="Protocols"></a>

### IVisitor <a name="cdk-utilities.IVisitor"></a>

- *Implemented By:* [`cdk-utilities.PrintTreeStructureVisitor`](#cdk-utilities.PrintTreeStructureVisitor), [`cdk-utilities.PrintVisitor`](#cdk-utilities.PrintVisitor), [`cdk-utilities.IVisitor`](#cdk-utilities.IVisitor)

Visitor interface.

#### Methods <a name="Methods"></a>

##### `postVisit` <a name="cdk-utilities.IVisitor.postVisit"></a>

```typescript
public postVisit(node: Node)
```

###### `node`<sup>Required</sup> <a name="cdk-utilities.IVisitor.parameter.node"></a>

- *Type:* [`cdk-utilities.Node`](#cdk-utilities.Node)

---

##### `preVisit` <a name="cdk-utilities.IVisitor.preVisit"></a>

```typescript
public preVisit(node: Node)
```

###### `node`<sup>Required</sup> <a name="cdk-utilities.IVisitor.parameter.node"></a>

- *Type:* [`cdk-utilities.Node`](#cdk-utilities.Node)

---

##### `visit` <a name="cdk-utilities.IVisitor.visit"></a>

```typescript
public visit(node: Node)
```

###### `node`<sup>Required</sup> <a name="cdk-utilities.IVisitor.parameter.node"></a>

- *Type:* [`cdk-utilities.Node`](#cdk-utilities.Node)

---


