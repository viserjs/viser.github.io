# Viser-graph 方法 Api

## Layouts

Layouts 提供如下集中布局，同时也支持自定义布局

#### 紧凑树 Layouts.CompactBoxTree

```javascript
var layout = new Layouts.CompactBoxTree({
  // direction: 'LR', // 方向（LR/RL/H/TB/BT/V）
  getHGap: function getHGap() {
    return 100; // 横向间距
  },
  getVGap: function getVGap() {
    return 10; // 竖向间距
  },
});
```

<img src="//cdn.nlark.com/lark/0/2018/png/124533/1533110599036-a9c03524-6ddd-4ffb-a498-4c6b328e64cf.png" width="500px"/>

#### 系统树 Layouts.Dendrogram

```javascript
var layout = new Layouts.Dendrogram({
  direction: 'LR',
  nodeSize: 20,
  rankSep: 400,
});
```

<img src="//cdn.nlark.com/lark/0/2018/png/124533/1533110637920-cc576981-0da8-4b86-a362-8a1d85fa2489.png" width="500px"/>

#### 生态树 Layouts.IndentedTree

```javascript
var layout = new Layouts.IndentedTree({
  direction: 'LR', // 方向（LR/RL/H）
  indent: 30, // 缩进量
  getVGap: function getVGap() {
    return 4; // 竖向间距
  },
});
```

<img src="//cdn.nlark.com/lark/0/2018/png/124533/1533110689020-a0719ae1-30b2-4565-b2bd-21a2e3accc46.png" width="300px"/>

#### 脑图：Layouts.Mindmap

```javascript
var layout = new Layouts.Mindmap({
  direction: 'H', // 方向（LR/RL/H/TB/BT/V）
  getHGap: function getHGap() {
    return 100; // 横向间距
  },
  getVGap: function getVGap() {
    return 10; // 竖向间距
  },
});
```

<img src="//cdn.nlark.com/lark/0/2018/png/124533/1533110746761-1770f71e-aa46-4da4-a8fb-d8b2e7c3be29.png" width="500px"/>

#### Layout 公共参数列表

```
direction [String] 树布局的方向，默认为LR，可选值为 LR（根节点在左，往右布局） RL（根节点在右，往左布局） H（根节点在中间，水平对称布局）
   TB（根节点在上，往下布局） BT（根节点在下，往上布局） V（根节点在中间，垂直对称布局）
   Layout.IndentedTree只有前三个方向，也就是LR／RL／H
getHGap [Function|Number] 横向间距，默认18
getVGap [Function|Number] 竖向间距，默认18
```

#### 特殊参数列表

系统树 Dendrogram

```
nodeSep  [Function|Number] 节点间距
nodeSize  [Function|Number] 节点大小
rankSep  层级间距
subTreeSep   子树间隔
```

生态树 IndentedTree

```
indent  [Function|Number] 缩进量
```

详细可见： https://antv.alipay.com/zh-cn/g6/1.x/api/layouts.html

### registerNode

注册新节点

```
// 普通节点
registerNode(name, {
  draw: (item) =>{},
  drawKeyShape:(item) =>{},
  drawLabel: (item) =>{},
  getSize: (item) =>{},
  getColor:(item) =>{},
  getStyle: (item) =>{},
  getPath:(item) =>{},
  getLabel: (item) =>{},
  afterDraw: (item) =>{},
  enterAnimate: (item) =>{},
  leaveAnimate: (item) =>{},
  drawText: (item) =>{},
  getText: (item) =>{},
  anchor: [
    [ 0, 0.5 ],
    [ 1, 0.5 ]
  ],
  anchor: {
    type: 'rect'
  },
});
// html节点
registerNode('html', {
  cssSize: true,
  draw: (item) =>{},
  getHtml: (item) =>{},
});
registerNode('treeNode', {
    anchor: [[0, 0.5], [1, 0.5]]
});
```

### registerEdge

注册边

```
registerEdge(name, {
  draw: (item) =>{},
  drawKeyShape:(item) =>{},
  drawLabel: (item) =>{},
  getSize: (item) =>{},
  getColor:(item) =>{},
  getStyle: (item) =>{},
  getPath:(item) =>{},
  getLabel: (item) =>{},
  afterDraw:  (item) =>{},
});
```

示例：

```
registerEdge('smooth', {
  getPath: function getPath(item) {
    var points = item.getPoints();
    var start = points[0];
    var end = points[points.length - 1];
    var hgap = Math.abs(end.x - start.x);
    if (end.x > start.x) {
        return [['M', start.x, start.y], ['C', start.x + hgap / 4, start.y, end.x - hgap / 2, end.y, end.x, end.y]];
    }
    return [['M', start.x, start.y], ['C', start.x - hgap / 4, start.y, end.x + hgap / 2, end.y, end.x, end.y]];
  }
});
```

### registerGroup

注册组

```
registerGroup(name, {
  draw: (item) =>{},
  drawKeyShape:(item) =>{},
  drawLabel: (item) =>{},
  drawExpanded:  (item) =>{},
  drawCollapsed:  (item) =>{},
  getLabel: (item) =>{},
});
```
