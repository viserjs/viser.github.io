import { Chart, Axis, Legend, Polygon } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as $ from 'jquery';

const dataPre = {
  transform: {
    sizeByCount: '$state.sizeEncoding', // calculate bin size by binning count
    type: 'bin.rectangle',
    fields: [ 'x', 'y' ], // 对应坐标轴上的一个点
    bins: [ 20, 10 ]
  }
};

class App extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    $.getJSON('/data/heatmap-2.json', (data) => {
      this.setState({ data });
    });
  }
  render() {
    const { data } = this.state;
    const seriesOpts = {
      quickType: 'polygon',
      color: ['count', '#BAE7FF-#1890FF-#0050B3'],
      position: 'x*y',
    };
    return (
      <div>
        <Chart forceFit height={400} data={data} dataPre={dataPre}>
          <Legend offset={40} />
          <Axis />
          <Polygon {...seriesOpts} />
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));

