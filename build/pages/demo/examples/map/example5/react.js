"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var viser_react_1 = require("viser-react");
var React = require("react");
var $ = require("jquery");
var DataSet = require('@antv/data-set');
var scale = [{
        dataKey: 'longitude',
        max: -66,
        min: -125,
        sync: true
    }, {
        dataKey: 'latitude',
        max: 50,
        min: 24,
        sync: true
    }];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            mapDv: [],
            airports: [],
            subFlights: [],
            flights: [],
            preId: '',
            airView: '',
        };
        _this.getFlights = function (iata) {
            var flights = _this.state.flights;
            var rst = [];
            flights.forEach(function (flight) {
                if (flight.origin === iata || flight.destination === iata) {
                    rst.push(flight);
                }
            });
            return rst;
        };
        _this.plotMove = function (ev, chart) {
            debugger;
            if (chart && chart._attrs && (chart._attrs.views.length === 3)) {
                var airView = chart._attrs.views[1];
                var flightView = chart._attrs.views[2];
                var preId = _this.state.preId;
                var records = airView.getSnapRecords({
                    x: ev.x,
                    y: ev.y
                });
                var subFlights = [];
                if (records.length) {
                    var obj = records[0]._origin;
                    var iata = obj.iata;
                    if (preId !== iata) {
                        subFlights = _this.getFlights(iata);
                        flightView.changeData(subFlights);
                        console.log(subFlights);
                        preId = iata;
                    }
                }
                _this.setState({
                    preId: preId,
                    subFlights: subFlights,
                });
            }
        };
        _this.plotLeave = function (ev, chart) {
            if (chart && chart._attrs && (chart._attrs.views.length === 3)) {
                var subFlights = _this.state.subFlights;
                var flightView = chart._attrs.views[2];
                if (subFlights && subFlights.length) {
                    _this.setState({ subFlights: [] });
                    flightView.changeData([]);
                }
            }
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        $.when($.getJSON('/assets/data/usa.geo.json'), $.getJSON('/assets/data/flights-airport.json'), $.getJSON('/assets/data/airport.json'))
            .then(function (mapData, flights, airports) {
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
                callback: function (row) {
                    row.code = row.properties.code;
                    return row;
                }
            });
            var countByAirport = {};
            var subFlights = [];
            // 计算飞机的起飞、降落数
            flights.forEach(function (flight) {
                var origin = flight.origin, destination = flight.destination;
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
            flights.forEach(function (flight) {
                var origin = airportByIata[flight.origin];
                var destination = airportByIata[flight.destination];
                flight.longitude = [origin.longitude, destination.longitude];
                flight.latitude = [origin.latitude, destination.latitude];
            });
            _this.setState({ mapDv: mapDv, airports: airports, subFlights: subFlights, flights: flights });
        });
    };
    App.prototype.render = function () {
        var _a = this.state, mapDv = _a.mapDv, airports = _a.airports, subFlights = _a.subFlights;
        console.log('render', mapDv, airports, subFlights);
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, animate: false, padding: 0, scale: scale, onPlotMove: this.plotMove, onPlotLeave: this.plotLeave },
                React.createElement(viser_react_1.Tooltip, { showTitle: false }),
                React.createElement(viser_react_1.Legend, { dataKey: "trend", position: "left" }),
                React.createElement(viser_react_1.View, { data: mapDv },
                    React.createElement(viser_react_1.Polygon, { position: "longitude*latitude", style: {
                            fill: '#DDDDDD',
                            stroke: '#b1b1b1',
                            lineWidth: 0.5,
                            fillOpacity: 0.85
                        } })),
                React.createElement(viser_react_1.View, { data: airports },
                    React.createElement(viser_react_1.Point, { position: "longitude*latitude", shape: "circle", color: "rgb(97,145,185)", style: {
                            stroke: '#eee',
                            lineWidth: 1
                        }, size: ['count', [3, 18]], tooltip: "iata*count" })),
                React.createElement(viser_react_1.View, { data: subFlights },
                    React.createElement(viser_react_1.Tooltip, { showTitle: false }),
                    React.createElement(viser_react_1.Edge, { position: "longitude*latitude" })))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map