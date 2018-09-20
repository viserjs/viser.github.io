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
        $.getJSON('/assets/data/dv-grades.json', function (data) {
            _this.setState({ data: data });
        });
    };
    App.prototype.render = function () {
        var data = this.state.data;
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data },
            React.createElement(viser_react_1.Legend, { reversed: true }),
            React.createElement(viser_react_1.Tooltip, { crosshairs: { type: 'cross' } }),
            React.createElement(viser_react_1.Axis, { dataKey: "Score", grid: null }),
            React.createElement(viser_react_1.Axis, { dataKey: "Class", tickLine: null, subTickCount: 1, subTickLine: {
                    lineWidth: 1,
                    stroke: '#BFBFBF',
                    length: 4,
                }, grid: {
                    align: 'center',
                    lineStyle: {
                        stroke: '#8C8C8C',
                        lineWidth: 1,
                        lineDash: [3, 3],
                    },
                } }),
            React.createElement(viser_react_1.Point, { position: "Class*Score", color: "Grade", adjust: "jitter", size: 4, opacity: 0.65, shape: "circle" })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map