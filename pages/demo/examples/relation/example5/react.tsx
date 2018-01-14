import { Chart, Tooltip, Polygon } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const label = [
  'value', {
    offset: 0,
    textStyle: {
      fill: '#fff',
      fontSize: '12',
      textAlign: 'center',
      shadowBlur: 2,
      shadowColor: 'rgba(0, 0, 0, .45)'
    },
  },
];

class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/voronoi.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData);
      dv.transform({
        type: 'diagram.voronoi',
        fields: ['x', 'y'],
        size: [800, 600],
        as: ['_x', '_y'],
      });
      this.setState({ data: dv.rows });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Chart forceFit height={500} data={data} padding={0}>
        <Tooltip showTitle={false} />
        <Polygon position="_x*_y" color="value" label={label} />
      </Chart>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));