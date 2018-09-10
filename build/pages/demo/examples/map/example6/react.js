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
        dataKey: 'latitude',
        sync: true,
        nice: false,
    }, {
        dataKey: 'longitude',
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
        $.getJSON('/assets/data/usa.geo.json').then(function (geoData) {
            var userData = [];
            var geoDv = new DataSet.View().source(geoData, {
                type: 'GeoJSON'
            }).transform({
                type: 'map',
                callback: function (row) {
                    userData.push({
                        longitude: row.centroidX,
                        latitude: row.centroidY,
                        name: row.name,
                        value: Math.random() * (1000 - 1)
                    });
                    return row;
                }
            });
            _this.setState({ geoData: geoDv, data: userData });
        });
    };
    App.prototype.render = function () {
        var _a = this.state, geoData = _a.geoData, data = _a.data;
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: [0, 20, 0], scale: scale },
                React.createElement(viser_react_1.View, { data: geoData, scale: scale },
                    React.createElement(viser_react_1.Polygon, { position: "longitude*latitude", color: 'gray', label: ['name', { offset: 0 }] })),
                React.createElement(viser_react_1.View, { data: data },
                    React.createElement(viser_react_1.Heatmap, { position: "longitude*latitude", size: 18, color: ['value', '#F51D27-#FA541C-#FF8C12-#FFC838-#FAFFA8-#80FF73-#12CCCC-#1890FF-#6E32C2'], style: {
                            blur: 23,
                        } })))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map