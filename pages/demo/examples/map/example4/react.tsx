import { Chart, Tooltip, Coord, View, Polygon, Point } from 'viser-react';

import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'x',
  nice: false,
  sync: true
}, {
  dataKey: 'y',
  nice: false,
  sync: true
}];

export default class App extends React.Component {
  state = {
    bgData: [],
    data: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/us-states.hex.json', (data) => {
      const dv = new DataSet.View().source(data, {
          type: 'hex',
          width: 100,
          height: 100,
      });
      this.setState({bgData: dv._gridRows, data: dv});
    });
  }

  render() {
    const { bgData, data } = this.state;

    return (
      <div>
        <Chart forceFit height={400} padding={20} scale={scale}>
          <Tooltip showTitle={false} />
          <Coord />
          <View data={bgData}>
            <Polygon position="x*y" color="grey" opacity={0.5}
              style={{
                stroke: 'white',
                lineWidth: 1
              }} tooltip="key"
            />
          </View>
          <View  data={data}>
            <Polygon position="x*y" color="#2FC25B"
              style={{
                stroke: 'white',
                lineWidth: 5
              }}
              label={['key', {
                offset: 0,
                textStyle: {
                    fontSize: 14,
                    fontWeight: 500
                }
              }]}
              tooltip="capital"
            />
          </View>
        </Chart>
      </div>
    );
  }
}


