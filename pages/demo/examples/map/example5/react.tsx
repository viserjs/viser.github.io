import { Chart, Tooltip, Legend, View, Polygon, Point, Edge } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';

const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'longitude',
  max: -66,
  min:-125,
  sync: true
}, {
  dataKey: 'latitude',
  max: 50,
  min:24,
  sync: true
}];

export default class App extends React.Component {
  state = {
    mapDv: [],
    airports: [],
    subFlights: [],
    flights: [],
    preId: '',
    airView: '',
  };

  getFlights = (iata: any) => {
    const { flights } = this.state;
    var rst = [];
    flights.forEach(function (flight) {
        if (flight.origin === iata || flight.destination === iata) {
            rst.push(flight);
        }
    });
    return rst;
  }

  componentDidMount() {
    $.when($.getJSON('/assets/data/usa.geo.json'),
      $.getJSON('/assets/data/flights-airport.json'),
      $.getJSON('/assets/data/airport.json'))
    .then((mapData, flights, airports) => {
      mapData = mapData[0];
      flights = flights[0];
      airports = airports[0];

      var map = [];
      var features = mapData.features;
      // 获取出所有的地图区域名称
      for (var i = 0; i < features.length; i++) {
          var name = features[i].properties.name;
          map.push({
              "name": name
          });
      }

      var mapDv = new DataSet.View().source(mapData, {
          type: 'GeoJSON'
      });
      mapDv.transform({
          type: 'map',
          callback: function(row) {
              row.code = row.properties.code;
              return row;
          }
      });

      var countByAirport = {};
      var subFlights = [];
      // 计算飞机的起飞、降落数
      flights.forEach(function (flight) {
          var origin = flight.origin,
              destination = flight.destination;
          countByAirport[origin] = (countByAirport[origin] || 0) + 1;
          countByAirport[destination] = (countByAirport[destination] || 0) + 1;
      });

      // Only consider airports with at least one flight.
      var airportByIata = {};
      airports = airports.filter(function (airport) {
          airportByIata[airport.iata] = airport;
          if (countByAirport[airport.iata]) {
              airport.count = countByAirport[airport.iata]; // 加入班次数量
              airport.id = airport.iata;
              return true;
          }
      });
      flights.forEach(function(flight) {
          var origin = airportByIata[flight.origin];
          var destination = airportByIata[flight.destination];
          flight.longitude = [origin.longitude, destination.longitude];
          flight.latitude = [origin.latitude, destination.latitude];
      });

      this.setState({ mapDv, airports, subFlights, flights });
    });
  }

  plotMove = (ev, chart) => {
    debugger;
    if (chart && chart._attrs && (chart._attrs.views.length === 3)) {
      const airView = chart._attrs.views[1];
      const flightView = chart._attrs.views[2];
      var preId = this.state.preId;

      var records = airView.getSnapRecords({
          x: ev.x,
          y: ev.y
      });

      var subFlights = [];
      if (records.length) {
          var obj = records[0]._origin;
          var iata = obj.iata;
          if (preId !== iata) {
              subFlights = this.getFlights(iata);
              flightView.changeData(subFlights);
              preId = iata;
          }
      }
      this.setState({
        preId,
        subFlights,
      });
    }
  }

  plotLeave = (ev, chart) => {
    if (chart && chart._attrs && (chart._attrs.views.length === 3)) {
      const subFlights = this.state.subFlights;
      const flightView = chart._attrs.views[2];
      if (subFlights && subFlights.length) {
        this.setState({subFlights: []});
        flightView.changeData([]);
      }
    }
  }

  render() {
    const { mapDv, airports, subFlights } = this.state;
    return (
      <div>
        <Chart forceFit height={400} animate={false} padding={0} scale={scale}
          onPlotMove={this.plotMove} onPlotLeave={this.plotLeave}>
          <Tooltip showTitle={false}/>
          <Legend dataKey="trend" position="left"/>
          <View data={mapDv} >
            <Polygon position="longitude*latitude" style={{
                fill: '#DDDDDD',
                stroke: '#b1b1b1',
                lineWidth: 0.5,
                fillOpacity: 0.85
            }} />
          </View>
          <View data={airports} >
            <Point position="longitude*latitude" shape="circle" color="rgb(97,145,185)" style={{
                stroke: '#eee',
                lineWidth: 1
            }} size={['count', [ 3, 18 ]]} tooltip="iata*count"/>
          </View>
          <View data={subFlights} >
            <Tooltip showTitle={false}/>
            <Edge position="longitude*latitude" />
          </View>
        </Chart>
      </div>
    );
  }
}


