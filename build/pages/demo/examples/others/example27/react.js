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
var REGRESSION_METHODS = [
    'boxcar',
    'cosine',
    'epanechnikov',
    'gaussian',
    'quartic',
    'triangular',
    'tricube',
    'triweight',
    'uniform'
];
var scale = [{
        dataKey: 'x',
        alias: 'depth',
        min: 50,
        max: 70,
        sync: true,
    }, {
        dataKey: 'y',
        alias: '概率密度分布',
        sync: true
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
        $.getJSON('/assets/data/diamond.json', function (data) {
            _this.setState({ data: data });
        });
    };
    App.prototype.render = function () {
        var data = this.state.data;
        if (!data.length) {
            return (React.createElement("div", null));
        }
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data, scale: scale },
                React.createElement(viser_react_1.Axis, null),
                React.createElement(viser_react_1.Tooltip, null),
                REGRESSION_METHODS.map(function (method, i) {
                    if (!data.length) {
                        return null;
                    }
                    var dv = new DataSet.View().source(data);
                    dv.transform({
                        type: 'kernel-smooth.regression',
                        method: method,
                        field: 'depth',
                        extent: [50, 70]
                    });
                    return (React.createElement(viser_react_1.View, { data: dv, scale: scale, key: "view-" + i },
                        React.createElement(viser_react_1.Line, { position: "x*y", color: viser_react_1.Global.colors_16[i] })));
                }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map