import { Chart, Tooltip, Coord, View, Polygon, Heatmap } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'latitude',
  sync: true,
  nice: false,
}, {
  dataKey: 'longitude',
  sync: true,
  nice: false,
}];

export default class App extends React.Component {
  state = {
    geoData: {},
    data: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/usa.geo.json').then((geoData) => {
      const userData = [];
      const geoDv = new DataSet.View().source(geoData, {
          type: 'GeoJSON'
      }).transform({
          type: 'map',
          callback(row) {
              userData.push({
                  longitude: row.centroidX,
                  latitude: row.centroidY,
                  name: row.name,
                  value: Math.random() * (1000 - 1)
              });
              return row;
          }
      });

      this.setState({ geoData: geoDv, data: userData });
    });
  }

  render() {
    const { geoData, data } = this.state;

    return (
      <div>
        <Chart forceFit height={400} padding={[0, 20, 0]} scale={scale}>
          <View data={geoData} scale={scale}>
            <Polygon position="longitude*latitude" color='gray' label={['name', {offset: 0}]} />
          </View>
          <View data={data}>
            <Heatmap position="longitude*latitude" size={18}
              color={['value', '#F51D27-#FA541C-#FF8C12-#FFC838-#FAFFA8-#80FF73-#12CCCC-#1890FF-#6E32C2']}
              style={{
                blur: 23,
              }}
            />
          </View>
        </Chart>
      </div>
    );
  }
}


