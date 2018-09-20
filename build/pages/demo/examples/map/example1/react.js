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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var viser_react_1 = require("viser-react");
var React = require("react");
var $ = require("jquery");
var DataSet = require('@antv/data-set');
var tooltipOpts = {
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
var scale = [{
        dataKey: 'x',
        sync: true,
        nice: false,
    }, {
        dataKey: 'y',
        sync: true,
        nice: false,
    }];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            geoData: {},
            data: [],
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        $.when($.getJSON('/assets/data/worldGeo.json'), $.getJSON('/assets/data/map-1.json')).then(function (geoData, data) {
            var dv = new DataSet.View().source(geoData[0], {
                type: 'GeoJSON'
            }).transform({
                type: 'geo.projection',
                projection: 'geoMercator',
                as: ['x', 'y', 'centroidX', 'centroidY'],
            });
            var userData = new DataSet.View().source(data[0]).transform({
                type: 'map',
                callback: function (obj) {
                    var projectedCoord = dv.geoProjectPosition([obj.lng * 1, obj.lat * 1], 'geoMercator');
                    obj.x = projectedCoord[0];
                    obj.y = projectedCoord[1];
                    obj.deaths = obj.deaths * 1;
                    obj.magnitude = obj.magnitude * 1;
                    return obj;
                }
            });
            _this.setState({ geoData: dv, data: userData });
        });
    };
    App.prototype.render = function () {
        var _a = this.state, geoData = _a.geoData, data = _a.data;
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: [0, 20, 0], scale: scale },
                React.createElement(viser_react_1.Coord, { type: "rect", direction: "TL" }),
                React.createElement(viser_react_1.Tooltip, __assign({}, tooltipOpts)),
                React.createElement(viser_react_1.View, { data: geoData, scale: scale },
                    React.createElement(viser_react_1.Polygon, { position: "x*y", style: {
                            fill: '#ddd',
                            stroke: '#b1b1b1',
                            lineWidth: 0.5,
                            fillOpacity: 0.85,
                        }, tooltip: false })),
                React.createElement(viser_react_1.View, { data: data },
                    React.createElement(viser_react_1.Point, { position: "x*y", size: ['deaths', [2, 30]], opacity: 0.45, color: "#FF2F29", tooltip: "date*location*lat*lng*deaths*magnitude", shape: "circle" })))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map