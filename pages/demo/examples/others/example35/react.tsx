import { Chart, Axis, Tooltip, Polygon } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
import * as _ from 'lodash';
const DataSet = require('@antv/data-set');

export default class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/periodic-table.hex.json', (data) => {
      const dv = new DataSet.View().source(data, {
        type: 'hex'
      });
      this.setState({ data: dv });
    })
  }

  render() {
    const  { data } = this.state;
    return (
      <div>
        <Chart forceFit height={400} padding={10} data={data}>
          <Tooltip showTitle={false} />
          <Polygon position='x*y' color='category' style={{
            stroke: 'white',
            lineWidth: 2
          }} label={['symbol', {
            offset: 0,
            textStyle: {
              fontSize: 14,
              fontWeight: 500
            }
          }]} tooltip='symbol*name*number*atomic_mass*category' />
        </Chart>
      </div>
    );
  }
}


