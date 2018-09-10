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
var values = ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'];
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
        $.getJSON('/assets/data/polar-heatmap.json', function (data) {
            _this.setState({ data: data });
        });
    };
    App.prototype.render = function () {
        var data = this.state.data;
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: 40, data: this.state.data },
                React.createElement(viser_react_1.Tooltip, { showTitle: null }),
                React.createElement(viser_react_1.Coord, { type: "polar", innerRadius: 0.2 }),
                React.createElement(viser_react_1.Axis, { dataKey: "week", grid: null, line: null, tickLine: null, label: null }),
                React.createElement(viser_react_1.Axis, { dataKey: "time", grid: null, line: null, tickLine: null, label: { offset: 3 } }),
                React.createElement(viser_react_1.Polygon, { position: "time*week", color: ['value', '#BAE7FF-#1890FF-#0050B3'], tooltip: "week*time*value", style: {
                        stroke: '#fff',
                        lineWidth: 1,
                    } }),
                values.map(function (val, idx) {
                    var position = [0, idx];
                    var content = val;
                    return (React.createElement(viser_react_1.Guide, { key: val, type: "text", top: true, position: position, content: val, style: {
                            fill: '#fff',
                            textAlign: 'center',
                            shadowBlur: 2,
                            shadowColor: 'rgba(0, 0, 0, .45)'
                        } }));
                }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map