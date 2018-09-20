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
var scale = [{
        dataKey: 'LifeExpectancy',
        alias: '人均寿命（年）',
    }, {
        dataKey: 'Population',
        type: 'pow',
        alias: '人口总数',
    }, {
        dataKey: 'GDP',
        alias: '人均国内生产总值($)',
    }, {
        dataKey: 'Country',
        alias: '国家/地区',
    }];
var colorMap = {
    'Asia': viser_react_1.Global.colors[0],
    'Americas': viser_react_1.Global.colors[1],
    'Europe': viser_react_1.Global.colors[2],
    'Oceania': viser_react_1.Global.colors[3],
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: [],
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        $.getJSON('/assets/data/bubble.json', function (data) {
            _this.setState({ data: data });
        });
    };
    App.prototype.render = function () {
        var data = this.state.data;
        var laeblFormatter = function (value) {
            return (value / 1000).toFixed(0) + 'k';
        };
        if (!data.length) {
            return (React.createElement("div", null));
        }
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data, scale: scale },
            React.createElement(viser_react_1.Tooltip, { showTitle: false }),
            React.createElement(viser_react_1.Legend, { dataKey: "Population", show: false }),
            React.createElement(viser_react_1.Axis, { dataKey: "GDP", label: { formatter: laeblFormatter } }),
            React.createElement(viser_react_1.Point, { position: "GDP*LifeExpectancy", color: ['continent', function (val) { return colorMap[val]; }], size: ['Population', [4, 65]], style: ['continent', {
                        lineWidth: 1,
                        strokeOpacity: 1,
                        fillOpacity: 0.3,
                        opacity: 0.65,
                        stroke: function (val) { return colorMap[val]; },
                    }], tooltip: "Country*Population*GDP*LifeExpectancy", shape: "circle" })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map