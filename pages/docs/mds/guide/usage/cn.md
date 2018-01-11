## 用法

我们以 viser-react 举例写[一个 chore 图为例](https://antv.alipay.com/zh-cn/g2/3.x/demo/relation/chord.html)，viser-vue 和 viser-ng 的用法类似。

### 引入库

首先是引入 viser-react 的需要的子组件，以及必要的依赖，如 React, ReactDOM。

其中所有的子组件分为几类：

- 容器类：Chart, View, FacetView, Facet, LiteChart,
- 标准组件类：Coord, Tooltip, Legend, Guide, Axis, Series, 
- 图形组件类：Pie, Sector, Line, SmoothLine, DashLine, Area, StackArea, SmoothArea, Bar, StackBar, DodgeBar, Interval, StackInterval, DodgeInterval, Point, JitterPoint, Funnel, Pyramid, Schema, Box, Candle, Polygon, Contour, Heatmap, Edge, Sankey

```js
import { Chart, Tooltip, Edge, View, Polygon, Coord } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
```

### 数据处理

数据处理完全沿用 data-set.js 的处理。data-set 有丰富的数据处理方法，具体请参考 g2 官网的 [data-set 部分](https://antv.alipay.com/zh-cn/g2/3.x/tutorial/data-set.html).

```js
const DataSet = require('@antv/data-set');

const ds: any = new DataSet();
const dv = ds.createView().source(data, {
  type: 'graph',
  edges: d => d.links
});

dv.transform({
  type: 'diagram.arc',
  sourceWeight: e => e.sourceWeight,
  targetWeight: e => e.targetWeight,
  weight: true,
  marginRatio: 0.3
});
```

### 图表实现

图表实现完全沿用 g2 对于图形语法的表达。

我们观察原生 g2 的语法：

```js
const chart = new G2.Chart({
  container: 'mountNode',
  forceFit: true,
  height: window.innerHeight
});
chart.legend(false);
chart.tooltip({
  showTitle: false
});

chart.scale({
  x: {
    sync: true
  },
  y: {
    sync: true
  }
});

const edgeView = chart.view();
edgeView.source(dv.edges);
edgeView.coord('polar').reflect('y');
edgeView.axis(false);
edgeView.edge()
  .position('x*y')
  .shape('arc')
  .color('source')
  .opacity(0.5)
  .tooltip('source*target*value');

const nodeView = chart.view();
nodeView.source(dv.nodes);
nodeView.coord('polar').reflect('y');
nodeView.axis(false);
nodeView.polygon()
  .position('x*y')
  .color('id')
  .label('name', {
    labelEmit: true,
    textStyle: {
      fill: '#8c8c8c'
    }
  });

chart.render();
```

我们看到有几个部分，Chart, Lengend, Tooltip, Scale 的配置，这些是公共配置，g2 提供 View 的能力，因此对应到 viser-react 中也需要两个 View，一个是边（edge），一个是节点（node）。然后每一个 api 都被抽象成了配置，而不是连续的调用。所以，我们看到对应到 viser-react 中的代码是：

```js
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const label = [
      'name', {
        labelEmit: true,
        textStyle: {
          fill: '#8c8c8c'
        },
      }
    ];

    const scale = [{
      dataKey: 'x',
      sync: true,
    }, {
      dataKey: 'y',
      sync: true,
    }];

    return (
      <div>
        <Chart forceFit height={window.innerHeight} scale={scale}>
          <View data={dv.edges}>
            <Coord type="polar" direction="yReverse" />
            <Edge position='x*y' color='source' shape='arc' opacity={0.5} tooltip={'source*target*value'} />
          </View>
          <View data={dv.nodes}>
            <Coord type="polar" direction="yReverse" />
            <Polygon position='x*y' color='id' label={label} />
          </View>
        </Chart>
      </div>
    );
  }
}
```

### 最后

对于图表大部分实现上的问题，都是 g2 提供的，并不是 Viser 提供的。希望你可以先对 g2 的用法能够熟悉，viser 不会单独列 g2 的 API，就这一点没有意义，但我们会对一些小变化在特点一节列出。