## Feature

Here we discuss the differences between viser and g2, and here we take viser-react as an example for your understanding.

### Components classification

All sub components in Viser classify into several categories:

- Container components: Chart, View, FacetView, Facet, LiteChart；
- Standard components: Coord, Tooltip, Legend, Guide, Axis, Series；
- Graphic components: Pie, Sector, Line, SmoothLine, DashLine, Area, StackArea, SmoothArea, Bar, StackBar, DodgeBar, Interval, StackInterval, DodgeInterval, Point, JitterPoint, Funnel, Pyramid, Schema, Box, Candle, Polygon, Contour, Heatmap, Edge, Sankey.

Container components represent a set of renderings that correspond to them, such as the Chart container containing all the steps of component drawing,G2 charts can be composed of multiple [views](https://antv.alipay.com/zh-cn/g2/3.x/tutorial/how-to-create-view.html)，At the same time, each view can have its own data source, so the View also contains part of the component drawing steps.In addition [Facet](https://antv.alipay.com/zh-cn/g2/3.x/tutorial/facet.html), is similar as FacetView,you can refer to the detail method of writing in demo.

Standard components corresponding to [Chart composition of G2](https://antv.alipay.com/zh-cn/g2/3.x/tutorial/understanding-g2-charts.html) include Axis, Legend, Geom, Tooltip and Guide.Corresponding to viser is Axis, Legend, Series, Tooltip and Guide, and Coord is also set to components. Series replaces Geom because most other chart libraries place more emphasis on Series concepts, which G2 abstracts into Geom from a graphical syntax level.

 Graphic components is an extension to the Series type, which is all of the [geom type](https://antv.alipay.com/zh-cn/g2/3.x/tutorial/geom.html).They are figurative into components to facilitate understanding when used. Although we can still use Series as a component, it is recommended to represent components directly using specific graphical names, such as Bar and Line. This facilitates the use of semantics.Specific examples, such as:

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

### dataKey field mapping

For the way fields are mapped, viser uses `dataKey` to set them in parallel with other attributes, such as when setting `scale`, the `key` of G2 is the column field of the data, and the `dataKey` in the viser represents:

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

Others, similar to Legend, map fields in the Axis section use a same way, using `dataKey` to represent column fields. But in Series it's not a single field mapping, and it's part of a property because we're dealing with it differently, expressed in arrays. For example, if the column field in the `label` attribute is `name` and configured, then we use an array directly in the viser to represent:

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

### The angle of Coord

[Coord](https://antv.alipay.com/zh-cn/g2/3.x/tutorial/coord.html) which the default `startAngle` and `endAngle` are expressed in radians, such as 180 degrees, and the radians in JS are `2*Math.PI`. For the user, the angle is still simpler and more intuitive, so the viser uses the angle instead of the radian.

```js
/*
 * G2
 */
chart.coord('polar', {
  startAngle: 2 * Math.PI,
})
```
```js
/*
 * Viser-react
 */
<Coord type="polar" startAngle={180} />
```

### The direction of Coord

The Coord component is used to represent the relevant contents of coord in G2. For chart in Cartesian coordinates, we provide an optimized parameter `direction` to show the `transpose`, `reflect`, and `scale` attributes in g2. According to the positions of the X and Y axis, we provide eight coordinate systems, BL, BR, LT, LB, RB, RT, TL, TR. B represents bottom, T represents top, L represents left, R represents right. Specific examples, such as:

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
The mapping relations in rectangular coordinates are as follows:

| direction  | config                                                     |
| :--------  | :-----                                                     |
| BL(default)| chart.coord('rect');                                       |
| BR         | chart.coord('rect').scale(-1, 1);                          |
| LT         | chart.coord('rect').transpose().scale(1, -1);              |
| LB         | chart.coord('rect').transpose();                           |
| RB         | chart.coord('rect').transpose().reflect();                 |
| RT         | chart.coord('rect').transpose().reflect().scale(-1, 1);    |
| TL         | chart.coord('rect').reflect();                             |
| TR         | chart.coord('rect').reflect().scale(-1, 1);                |

Similarly, we also provide four directions for polar coordinate systems, the most important of which are `rotate` and `reverse`. The mapping relations are as follows:

| direction | config                                                     |
| :-------- | :-----                                                     |
| rotate    | chart.coord('rect').transpose();                           |
| xReverse  | chart.coord('rect').reflect('x');                          |
| yReverse  | chart.coord('rect').reflect('y');                          |
| reverse   | chart.coord('rect').reflect();                             |

### The type of Guide

Guides are specified directly in g2, such as `chart.guide().line()`, using the Guide component in the viser, and types are represented by `type` fields, such as:

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

In addition, two parallel and orthogonal shortcuts are provided, so the `quickType` field is added, and the value corresponds to `parallel` and `normal`, such as:

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

### Formatting method

We added the `d3-format` to enhance the ability of `label` to require data processing, that is, data formatting in simple scenarios can be done directly with the formatting expressions provided by d3. such as:

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

### Event

Viser events look different for [G2 events](https://antv.alipay.com/zh-cn/g2/3.x/tutorial/chart-event.html). Visers are directly bound to elements, so for events, they are bound wherever they are used. But chart instances are often used in G2 usage, so viser puts the chart instance on the second parameter of the callback function, such as:

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

For Axis, the original `chart.on('axis-title: click', EV => {})` binds to Axis and has an `onTitleClick` attribute, and so on.