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
        dataKey: 'date',
        type: 'time',
        nice: false,
        mask: 'MM-DD',
        tickCount: 10,
    }, {
        dataKey: 'range',
        min: 20,
        max: 35,
        nice: false,
        tickInterval: 2,
    }, {
        dataKey: 'mean',
        min: 20,
        max: 35,
        nice: false,
    }, {
        dataKey: 'stockRange',
        min: 20,
        max: 35,
        nice: false,
    }];
var tooltipOpts = {
    crosshairs: {
        type: 'line',
    },
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
        $.getJSON('/assets/data/stock-2.json', function (sourceData) {
            var dv = new DataSet.View().source(sourceData);
            dv.transform({
                type: 'map',
                callback: function (obj) {
                    obj.stockRange = [obj.start, obj.end, obj.highest, obj.lowest];
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
                React.createElement(viser_react_1.Tooltip, __assign({}, tooltipOpts)),
                React.createElement(viser_react_1.Axis, { dataKey: "mean", show: false }),
                React.createElement(viser_react_1.Axis, { dataKey: "stockRange", show: false }),
                React.createElement(viser_react_1.Area, { position: "date*range" }),
                React.createElement(viser_react_1.Candle, { position: "date*stockRange", color: ['trend', function (val) {
                            if (val === 'up') {
                                return '#f04864';
                            }
                            if (val === 'down') {
                                return '#2fc25b';
                            }
                        }], tooltip: 'start*end*highest*lowest' }),
                React.createElement(viser_react_1.Line, { position: "date*mean", color: "#FACC14" }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map