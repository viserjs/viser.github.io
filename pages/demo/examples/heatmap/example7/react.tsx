import { Chart, Axis, Legend, Tooltip, Polygon } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as $ from 'jquery';

const dataPre = {
  transform: {
    sizeByCount: '$state.sizeEncoding', // calculate bin size by binning count
    type: 'bin.hexagon',
    fields: [ 'x', 'y' ], // 对应坐标轴上的一个点
    bins: [ 10, 5 ]
  }
};

class App extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    $.getJSON('/data/heatmap-5.json', (data) => {
      this.setState({ data });
    });
  }
  render() {
    const { data } = this.state;
    const axis1Opts = {
      dataKey: 'x',
      grid: {
        lineStyle: {
          stroke: '#d9d9d9',
          lineWidth: 1,
          lineDash: [ 2, 2 ]
        }
      }
    };
    const seriesOpts = {
      quickType: 'polygon',
      color: ['count', '#BAE7FF-#1890FF-#0050B3'],
      position: 'x*y',
      style: {
        lineWidth: 1,
        stroke: '#fff'
      }
    };
    return (
      <div>
        <Chart forceFit height={400} data={data} dataPre={dataPre}>
          <Legend offset={40}/>
          <Tooltip showTitle={false} crosshairs={false}/>
          <Axis {...axis1Opts}/>
          <Polygon {...seriesOpts}/>
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));

