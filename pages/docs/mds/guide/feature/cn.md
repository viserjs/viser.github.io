## 特点

这里我们讨论下 viser 和 g2 的差异之处，这里我们以 viser-react 举例，以便于您的理解。

### 组件分类

Viser 中所有的子组件分为几类：

- 容器组件：Chart, View, FacetView, Facet, LiteChart；
- 标准组件：Coord, Tooltip, Legend, Guide, Axis, Series；
- 图形组件：Pie, Sector, Line, SmoothLine, DashLine, Area, StackArea, SmoothArea, Bar, StackBar, DodgeBar, Interval, StackInterval, DodgeInterval, Point, JitterPoint, Funnel, Pyramid, Schema, Box, Candle, Polygon, Contour, Heatmap, Edge, Sankey。

容器组件代表它们是可以对应一组渲染，比如 Chart 容器包含组件绘制的所有步骤，而 G2 的图表可以由多个[视图 View 构成](https://antv.alipay.com/zh-cn/g2/3.x/tutorial/how-to-create-view.html)，同时各个视图可以拥有各自的数据源，那么 View 也会包含组件绘制的一部分步骤。此外 [Facet](https://antv.alipay.com/zh-cn/g2/3.x/tutorial/facet.html), FacetView 是类似的，具体可以参考 demo 中的写法。

标准组件对应 [G2 的图表组成](https://antv.alipay.com/zh-cn/g2/3.x/tutorial/understanding-g2-charts.html) 包括了 Axis, Legend, Geom, Tooltip 和 Guide。对应到 viser 是 Axis, Legend, Series, Tooltip 和 Guide，另外将 Coord 也设置为组件。其中，Series 来代替 Geom，原因是大部分其它图表库更强调 Series 概念，G2 从图形语法层面将这一概念抽象成 Geom。

图形组件是对 Series 类型的扩展，其实就是所有 [geom 类型](https://antv.alipay.com/zh-cn/g2/3.x/tutorial/geom.html)。将它们具象化成组件，以方便在使用时理解。虽然我们还是可以用 Series 来做为组件，但推荐直接使用具体的图形名称来表示组件，例如 Bar 和 Line 等。这样方便语义化的使用。具体举例，比如：

```js
/*
 * G2
 */
chart.line().position('year*value');
```
```js
/*
 * Viser-react
 */
<Line position="year*value" />
```

### dataKey 字段映射

对于字段映射的方式，viser 使用 `dataKey` 的方式来设置，与其它属性并列，比如在设置 `scale` 时，g2 的 `key` 就是数据的列字段，而 viser 里就是 `dataKey` 来表示：

```js
/*
 * G2
 */
chart.scale({
  x: { sync: true },
  y: { sync: true },
});
```
```js
/*
 * Viser-react
 */
const scale = [{
  dataKey: 'x',
  sync: true,
}, {
  dataKey: 'y',
  sync: true,
}];
<Chart scale={scale} {...others}>
</Chart>
```

其它，类似于 Legend, Axis 部分的字段映射使用同样的方式，用 `dataKey` 代表列字段。但在 Series 中并不是对单个字段映射，而且它是属性的一部分，因为我们的处理方式不同，使用数组的方式来表达。比如 `label` 属性中列字段是 `name`，并有配置，那么我们在 viser 中使用就直接使用一个数组来代表：

```js
/*
 * G2
 */
nodeView.polygon()
.position('x*y')
.color('id')
.label('name', {
  labelEmit: true,
  textStyle: {
    fill: '#8c8c8c'
  }
});
```
```js
/*
 * Viser-react
 */
const label = [
  'name', {
    labelEmit: true,
    textStyle: {
      fill: '#8c8c8c'
    },
  }
];
<Polygon position='x*y' color='id' label={label} />
```

### Coord 的方向

Coord 组件用于表示 g2 中 coord 的相关内容。针对直角坐标系的图表，我们提供了 `direction` 这一优化后的参数用来展现 g2 中的 `transpose`, `reflect` 和 `scale` 这几个属性。根据X轴，Y轴的位置，我们提供了8种坐标系的排列，分别有 BL, BR, LT, LB, RB, RT, TL, TR。B 代表 bottom, T 代表 top，L 代表 left，R 代表 right。具体举例，比如：

```js
/*
 * G2
 */
chart.coord().transpose().scale(1, -1);
```
```js
/*
 * Viser-react
 */
<Coord type="rect" direction="LT" />
```
映射关系如下：

| direction | 配置                                                        |
| :-------- | :-----                                                     |
| BL(默认）  | chart.coord('rect');                                       |
| BR        | chart.coord('rect').scale(-1, 1);                          |
| LT        | chart.coord('rect').transpose().scale(1, -1);              |
| LB        | chart.coord('rect').transpose();                           |
| RB        | chart.coord('rect').transpose().reflect();                 |
| RT        | chart.coord('rect').transpose().reflect().scale(-1, 1);    |
| TL        | chart.coord('rect').reflect();                             |
| TR        | chart.coord('rect').reflect().scale(-1, 1);                |

### Guide 的类型

Guide 在 g2 中直接会指定，比如 `chart.guide().line()`，在 viser 中均使用 Guide 组件，类型就使用 `type` 字段来表示，比如：

```js
/*
 * G2
 */
chart.guide().line()
```
```js
/*
 * Viser-react
 */
<Guide type="line" />
```

另外，提供了两种平行和正交快捷设置，因此增加了 `quickType` 的字段，value 则对应是 `parallel` 和 `normal`，比如：

```js
/*
 * G2
 */
chart.guide.line({
  start: ['min', 2],
  end: ['max', 2],
});
```
```js
/*
 * Viser-react
 */
<Guide type="line" quickType="parallel" data={2} />
```

### Formatter 格式化方法

我们加入了 `d3-format` 库来增强 `label` 需要数据处理的能力，也就是说简单场景下的数据格式化，可以直接用 d3 提供的格式化表达式来完成。比如：

```js
/*
 * G2
 */
chart.scale({
  percent: {
    min: 0,
    formatter(val) {
      return (val * 100).toFixed(2) + '%';
    }
  }
});
```
```js
/*
 * Viser-react
 */
const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.2%',
}];
```

### 事件

Viser 的事件对于 [g2 的事件](https://antv.alipay.com/zh-cn/g2/3.x/tutorial/chart-event.html) 来说看起来不太一样，viser 是直接绑定在元素上的，因此对于事件来说，在哪里用就在哪里绑定。但 g2 使用中常常使用到 chart 实例，因此 viser 将 chart 实例放在了回调函数第二个参数上，比如：

```js
/*
 * G2
 */
chart.on('mousedown', ev => {});
```
```js
/*
 * Viser-react
 */
handleMouseDown = (ev, chart) => {}
<Chart onMouseDown={this.handleMouseDown}>
</Chart>
```

对于 Axis 来说，原来的 `chart.on('axis-title: click', ev => {})`，在 Axis 上绑定就会有一个 `onTitleClick` 的属性，其它的以此类推。