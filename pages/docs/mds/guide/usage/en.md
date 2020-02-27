## Usage

Let's give an example with viser-react [a chore example](https://antv.alipay.com/zh-cn/g2/3.x/demo/relation/chord.html)，viser-vue or viser-ng has similar usage.

### Import modules

The first is to import the sub components needed by viser-react and the necessary dependencies,such as React, ReactDOM.

```js
import { Chart, Tooltip, Edge, View, Polygon, Coord } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
```

### DataSet

DataSet is fully follow the handle methods by data-set.js. data-set has rich data handle methods,Please refer to the details by g2 Official network [data-set part](https://antv.alipay.com/zh-cn/g2/3.x/tutorial/data-set.html).

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

### Chart Realization

The chart realization is fully follow the chart grammar by g2.

Let's observe the grammar of protogenesis g2：

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

We see several parts,the configurations of Chart, Lengend, Tooltip, Scale,These are public configurations,g2 provide us the ability of View, therefore,Corresponding to viser-react, we also need two View, one is edge, and the other is node. Then every API is abstracted into a configuration instead of continuous calls. Therefore，we see the code corresponding to viser-react is：

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

### Final

For chart realization, they are all features of G2 graphical syntax, not provided by viser, which provides framework-level lightweight encapsulation. Hopefully you'll be familiar with the use of G2 first. Viser won't list the APIs for G2 separately, but we'll list some of the features of the VISER separately.