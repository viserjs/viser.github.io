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
        $.getJSON('/assets/data/scatter.json', function (data) {
            _this.setState({ data: data });
        });
    };
    App.prototype.render = function () {
        var data = this.state.data;
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data },
            React.createElement(viser_react_1.Tooltip, { showTitle: false, crosshairs: { type: 'cross' }, itemTpl: "\n            <li data-index={index} style=\"margin-bottom:4px;\">\n              <span style=\"background-color:{color};\" class=\"g2-tooltip-marker\"></span>\n              {name}<br />{value}\n            </li>\n          " }),
            React.createElement(viser_react_1.Axis, null),
            React.createElement(viser_react_1.Point, { position: "height*weight", size: 4, opacity: 0.65, tooltip: ['gender*height*weight', function (gender, height, weight) {
                        return {
                            name: gender,
                            value: height + '(cm), ' + weight + '(kg)'
                        };
                    }], shape: "circle" })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map