import { Chart, Axis, Legend, Tooltip, Polygon } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/heatmap-5.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData);
      dv.transform({
        type: 'bin.rectangle',
        fields: ['carat', 'price'],
      });
      this.setState({ data: dv.rows });
    });
  }

  render() {
    const { data } = this.state;
    const seriesOpts = {
      quickType: 'polygon',
      color: ['count', [ '#BAE7FF', '#1890FF', '#0050B3' ]],
      position: 'x*y',
    };

    return (
      <div>
        <Chart forceFit height={400} data={data}>
          <Legend offset={40} />
          <Tooltip showTitle={false} />
          <Axis />
          <Polygon {...seriesOpts} />
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));

