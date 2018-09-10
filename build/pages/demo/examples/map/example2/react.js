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
var scale = [{
        dataKey: 'longitude',
        sync: true,
    }, {
        dataKey: 'latitude',
        sync: true,
    }];
var userDataScale = [{
        dataKey: 'trend',
        alias: '每100位女性对应的男性数量',
    }];
var view1Opts = {
    quickType: 'polygon',
    position: 'longitude*latitude',
    style: {
        fill: '#fff',
        stroke: '#ccc',
        lineWidth: 1
    },
    tooltip: false,
};
var view2Opts = {
    quickType: 'polygon',
    position: 'longitude*latitude',
    opacity: 'value',
    color: ['trend', ['#F51D27', '#0A61D7']],
    tooltip: 'name*trend',
    animate: {
        leave: {
            animation: 'fadeOut'
        }
    },
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            geoData: [],
            data: [],
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        $.when($.getJSON('/assets/data/worldGeo.json'), $.getJSON('/assets/data/map-2.json')).then(function (geoData, data) {
            var worldMap = new DataSet.View().source(geoData[0], {
                type: 'GeoJSON',
            });
            var userDv = new DataSet.View().source(data[0]).transform({
                geoDataView: worldMap,
                field: 'name',
                type: 'geo.region',
                as: ['longitude', 'latitude'],
            }).transform({
                type: 'map',
                callback: function (obj) {
                    obj.trend = (obj.value > 100) ? '男性更多' : '女性更多';
                    return obj;
                }
            });
            _this.setState({ geoData: worldMap, data: userDv });
        });
    };
    App.prototype.render = function () {
        var _a = this.state, geoData = _a.geoData, data = _a.data;
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: [20, 20], scale: scale },
                React.createElement(viser_react_1.Tooltip, { showTitle: false }),
                React.createElement(viser_react_1.Legend, { dataKey: 'trend', position: 'left' }),
                React.createElement(viser_react_1.View, { data: geoData, scale: scale },
                    React.createElement(viser_react_1.Polygon, __assign({}, view1Opts))),
                React.createElement(viser_react_1.View, { data: data, scale: userDataScale },
                    React.createElement(viser_react_1.Polygon, __assign({}, view2Opts))))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map