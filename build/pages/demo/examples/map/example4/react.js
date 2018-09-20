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
        dataKey: 'x',
        nice: false,
        sync: true
    }, {
        dataKey: 'y',
        nice: false,
        sync: true
    }];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            bgData: [],
            data: [],
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        $.getJSON('/assets/data/us-states.hex.json', function (data) {
            var dv = new DataSet.View().source(data, {
                type: 'hex',
                width: 100,
                height: 100,
            });
            _this.setState({ bgData: dv._gridRows, data: dv });
        });
    };
    App.prototype.render = function () {
        var _a = this.state, bgData = _a.bgData, data = _a.data;
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: 20, scale: scale },
                React.createElement(viser_react_1.Tooltip, { showTitle: false }),
                React.createElement(viser_react_1.Coord, null),
                React.createElement(viser_react_1.View, { data: bgData },
                    React.createElement(viser_react_1.Polygon, { position: "x*y", color: "grey", opacity: 0.5, style: {
                            stroke: 'white',
                            lineWidth: 1
                        }, tooltip: "key" })),
                React.createElement(viser_react_1.View, { data: data },
                    React.createElement(viser_react_1.Polygon, { position: "x*y", color: "#2FC25B", style: {
                            stroke: 'white',
                            lineWidth: 5
                        }, label: ['key', {
                                offset: 0,
                                textStyle: {
                                    fontSize: 14,
                                    fontWeight: 500
                                }
                            }], tooltip: "capital" })))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map