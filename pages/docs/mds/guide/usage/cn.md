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

我们看到有几个部分，Chart, Lengend, Tooltip, Scale 的配置，这些是公共配置，g2 提供 View 的能力，这里需要两个 View，一个是边（edge），一个是节点（node）。

对应到 viser-react 中的代码是：

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

#### 细节一: 字段映射

可以看到和 G2 的代码可以一一对应，其中看到一个细节，对于字段映射的方式，viser 使用 dataKey 的方式来设置，与其它属性并列，比如：

```js
// G2
chart.scale({
  x: {
    sync: true
  },
  y: {
    sync: true
  }
});

// Viser-react
const scale = [{
  dataKey: 'x',
  sync: true,
}, {
  dataKey: 'y',
  sync: true,
}];
```

其它的类似于 Legend, Axis 等字段映射使用同样的方式。

#### 细节二：gemo 配置的设置方式

Gemo 的设置往往非常复杂，在 g2 中也是不定参数，不定形式，因此使用数组的方式来表达。比如上面的 label 属性：

```js
// G2
nodeView.polygon()
.position('x*y')
.color('id')
.label('name', {
  labelEmit: true,
  textStyle: {
    fill: '#8c8c8c'
  }
});

// Viser-react
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

#### 细节三：Gemo 类型

Gemo 扩展了所有的基本类型：Pie, Sector, Line, SmoothLine, DashLine, Area, StackArea, SmoothArea, Bar, StackBar, DodgeBar, Interval, StackInterval, DodgeInterval, Point, JitterPoint, Funnel, Pyramid, Schema, Box, Candle, Polygon, Contour, Heatmap, Edge, Sankey。这些组件等于设置了对应的 gemo 或 adjust 的配置。

```js
<Series gemo={'line'} />
<Line />
```

以上两者是等同的。

### 最后

Viser 大部分不熟悉用法的问题主要是对 G2 不熟悉的结果。希望对 G2 的用法能够熟悉，Viser 不会单独列 API。