import { Chart, Tooltip, Coord, View, Polygon, Point } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const tooltipOpts = {
  showTitle: false,
  containerTpl: '<div class="g2-tooltip">'
    + '<table class="g2-tooltip-list"></table></div>',
  itemTpl: '<tr data-index={index}><td style="padding: 5px; background-color:#545454">{name}</td><td style="padding: 5px; background-color:#fff;color: #000">{value}</td></tr>',
  g2Tooltip: {
    borderRadius: '2px',
    backgroundColor: '#DDDDDD',
    padding: 0,
    border: '1px solid #333'
  }
};

const scale = [{
  dataKey: 'x',
  sync: true,
  nice: false,
}, {
  dataKey: 'y',
  sync: true,
  nice: false,
}];

class App extends React.Component {
  state = {
    geoData: {},
    data: null,
  };

  componentDidMount() {
    $.when(
      $.getJSON('/data/worldGeo.json'),
      $.getJSON('/data/map-1.json')
    ).then((geoData, data) => {
      const dv = new DataSet.View().source(geoData[0], {
          type: 'GeoJSON'
      }).transform({
        type: 'geo.projection',
        projection: 'geoMercator',
        as: ['x', 'y', 'centroidX', 'centroidY'],
      });

      const userData = new DataSet.View().source(data[0]).transform({
        type: 'map',
        callback: (obj) => {
          const projectedCoord = dv.geoProjectPosition([obj.lng * 1, obj.lat * 1], 'geoMercator');
          obj.x = projectedCoord[0];
          obj.y = projectedCoord[1];
          obj.deaths = obj.deaths * 1;
          obj.magnitude = obj.magnitude * 1;
          return obj;
        }
      });

      this.setState({ geoData: dv, data: userData});
    });
  }

  render() {
    const { geoData, data } = this.state;
    if (!geoData || !data) {
      return (<div>Loading ...</div>);
    }
    return (
      <div>
        <Chart forceFit height={600} padding={[0, 20, 40]} data={geoData} scale={scale}>
          <Coord type={'rect'} direction={'TL'} />
          <Tooltip {...tooltipOpts}/>
          <View viewId='111' data={geoData} scale={scale}>
            <Polygon position='x*y' style={{
              fill: '#DDDDDD',
              stroke: '#fff',
              lineWidth: 0.5,
              fillOpacity: 0.85,
            }} tooltip={false}/>
          </View>
          <View data={data}>
            <Point position='x*y' size={['deaths', [2, 30]]} opacity={0.45} color='#FF2F29' tooltip='date*location*lat*lng*deaths*magnitude'/>
          </View>
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
