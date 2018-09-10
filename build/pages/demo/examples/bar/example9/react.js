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
        dataKey: 'depth',
        tickInterval: 4
    }];
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
        $.getJSON('/assets/data/diamond.json', function (sourceData) {
            var dv = new DataSet.View().source(sourceData);
            dv.transform({
                type: 'bin.histogram',
                field: 'depth',
                binWidth: 4,
                as: ['depth', 'count'],
            });
            _this.setState({ data: dv.rows });
        });
    };
    App.prototype.render = function () {
        var data = this.state.data;
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data, scale: scale },
            React.createElement(viser_react_1.Tooltip, { crosshairs: false, inPlot: false, position: "top" }),
            React.createElement(viser_react_1.Axis, null),
            React.createElement(viser_react_1.Bar, { position: "depth*count" })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map