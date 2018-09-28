import * as React from 'react';
import { Chart, View, Polygon, Point } from 'viser-react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

export default class App extends React.Component {
  state = {
    data: [],
    dv: {},
    airports: [],
  };
  componentDidMount() {
    $.getJSON('/assets/data/usa.geo-1.json', data => {
      $.getJSON('/assets/data/airport-1.json', airports => {
        const dv = new DataSet.View().source(data).source(data, {
          type: 'GeoJSON',
        });
        this.setState({ data, airports, dv });
      });
    });
  }

  render() {
    const { airports, dv } = this.state;
    return (
      <Chart
        forceFit={true}
        height={500}
        padding={0}
        scale={[
          {
            dataKey: 'longitude',
            max: -66,
            min: -125,
            // sync: true
          },
          {
            dataKey: 'latitude',
            max: 50,
            min: 24,
            // sync: true
          },
        ]}
      >
        <View data={dv}>
          <Polygon
            position="longitude*latitude"
            color="#ddd"
            style={{ stroke: '#666', lineWidth: 1 }}
          />
        </View>
        <View data={airports.slice(1, 100)}>
          <Point
            position="longitude*latitude"
            shape={[
              'iata',
              () => [
                'path',
                'M15 0C6.716 0 0 6.656 0 14.866c0 8.211 15 35.135 15 35.135s15-26.924 15-35.135C30 6.656 23.284 0 15 0zm-.049 19.312c-2.557 0-4.629-2.055-4.629-4.588 0-2.535 2.072-4.589 4.629-4.589 2.559 0 4.631 2.054 4.631 4.589 0 2.533-2.072 4.588-4.631 4.588z',
              ],
            ]}
            size={40}
            color="#666"
          />
        </View>
      </Chart>
    );
  }
}
