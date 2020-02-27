import * as React from 'react';
import * as $ from 'jquery';
import { Area, Axis, Chart, Tooltip, Brush } from 'viser-react';
const DataSet = require('@antv/data-set');

export default class App extends React.Component {
  state = {
    date: [],
    data: [],
    scale1: [],
    scale2: [],
    ds: {
      createView: () => void 0,
    },
  };
  handleMove = e => {
    const date = e.date;
    this.setState({ date });
  };
  getDv = () => {
    const { ds, data, date } = this.state;
    const dv = ds.createView();
    dv.source(data).transform({
      type: 'filter',
      callback: function callback(obj) {
        // console.log(obj);
        if (date.length !== 0) {
          return date.indexOf(obj.date) > -1;
        }
        return obj;
      },
    });
    return dv;
  };
  componentDidMount() {
    $.getJSON('/assets/data/sp500.json', data => {
      const ds = new DataSet({
        state: {
          dates: null,
        },
      });
      const totalDv = ds.createView().source(data);
      const scale1 = [
        {
          dataKey: 'date',
          tickCount: 10,
          type: 'time',
          mask: 'MMM D YYYY',
        },
        {
          dataKey: 'price',
          min: totalDv.min('price'),
          max: totalDv.max('price'),
        },
      ];
      const scale2 = [
        {
          dataKey: 'date',
          tickCount: 10,
          type: 'time',
          mask: 'YYYY',
        },
      ];
      this.setState({ scale1, scale2, data, ds });
    });
  }
  render() {
    const { data, scale1, scale2 } = this.state;
    if (!data.length) {
      return null;
    }
    const dv = this.getDv();
    return (
      <div id="mountNode">
        <div id="canvas1">
          <Chart
            forceFit={true}
            height={400}
            animate={false}
            padding={[100, 40, 50, 80]}
            data={dv}
            scale={scale1}
          >
            <Axis />
            <Area position="date*price" shape="smooth" opacity={0.85} />
          </Chart>
        </div>
        <div id="canvas2">
          <Chart
            forceFit={true}
            height={100}
            padding={[5.4, 60, 80]}
            data={data}
            scale={scale2}
          >
            <Axis dataKey="date" />
            <Axis dataKey="price" show={false} />
            <Area
              position="date*price"
              active={false}
              shape="smooth"
              opacity={0.85}
            />
            <Brush
              canvas={null}
              type="x"
              dragable={true}
              onBrushmove={this.handleMove}
              onDragmove={this.handleMove}
            />
          </Chart>
        </div>
      </div>
    );
  }
}
