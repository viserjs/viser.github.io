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
        dataKey: 'exp_dat',
        type: 'time',
        mask: 'M/YY',
        tickCount: 14
    }, {
        dataKey: 'exp_amo',
        type: 'log',
        ticks: [225, 1000000, 2000000, 4000000, 6000000]
    }];
var axis1Opts = {
    dataKey: 'exp_dat',
    tickLine: null,
    label: {
        textStyle: {
            fontSize: 14
        }
    }
};
var axis2Opts = {
    dataKey: 'exp_amo',
    tickLine: null,
    line: null,
    grid: {
        lineStyle: {
            lineDash: null,
            stroke: '#999'
        }
    },
    label: {
        formatter: function (val) {
            var formatted;
            if (+val === 225) {
                formatted = 0;
            }
            else {
                formatted = val / 1000000;
            }
            return '$' + formatted + 'M';
        }
    }
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
        $.getJSON('/assets/data/time-scatter.json', function (sourceData) {
            var dv = new DataSet.View().source(sourceData);
            dv.transform({
                type: 'map',
                callback: function (obj) {
                    obj.exp_amo = obj.exp_amo * 1;
                    return obj;
                }
            });
            _this.setState({ data: dv.rows });
        });
    };
    App.prototype.render = function () {
        var data = this.state.data;
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data, scale: scale },
                React.createElement(viser_react_1.Tooltip, { showTitle: false }),
                React.createElement(viser_react_1.Axis, __assign({}, axis1Opts)),
                React.createElement(viser_react_1.Axis, __assign({}, axis2Opts)),
                React.createElement(viser_react_1.Point, { position: 'exp_dat*exp_amo', size: ['exp_amo', [1, 10]], opacity: 'exp_amo', shape: 'circle', tooltip: 'exp_dat*can_nam*spe_nam*exp_amo' }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map