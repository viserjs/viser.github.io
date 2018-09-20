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
var DataSet = require('@antv/data-set');
var sourceData = [
    { action: '浏览网站', pv: 50000 },
    { action: '放入购物车', pv: 35000 },
    { action: '生成订单', pv: 25000 },
    { action: '支付订单', pv: 15000 },
    { action: '完成交易', pv: 8000 },
];
var dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'percent',
    field: 'pv',
    dimension: 'action',
    as: 'percent'
});
var data = dv.rows;
var scale = {
    dataKey: 'percent',
    nice: false,
};
var tooltipOpts = {
    showTitle: false,
    itemTpl: '<li data-index={index} style="margin-bottom:4px;">'
        + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
        + '{name}<br/>'
        + '<span style="padding-left: 16px">浏览人数：{pv}</span><br/>'
        + '<span style="padding-left: 16px">占比：{percent}</span><br/>'
        + '</li>'
};
var funnelOpts = {
    position: 'action*percent',
    color: ['action', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF']],
    label: ['action*pv', function (action, pv) {
            return action + ' ' + pv;
        }, {
            offset: 35,
            labelLine: {
                lineWidth: 1,
                stroke: 'rgba(0, 0, 0, 0.15)',
            }
        }],
    tooltip: ['action*pv*percent', function (action, pv, percent) { return ({
            name: action,
            percent: Math.floor(percent * 100) + '%',
            pv: pv,
        }); }]
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: [20, 120, 95], data: data, scale: scale },
                React.createElement(viser_react_1.Tooltip, __assign({}, tooltipOpts)),
                React.createElement(viser_react_1.Legend, null),
                React.createElement(viser_react_1.Coord, { type: "rect", direction: "LT" }),
                React.createElement(viser_react_1.Pyramid, __assign({}, funnelOpts)),
                data.map(function (obj, i) {
                    var content = parseInt(String(obj.percent * 100)) + '%';
                    return (React.createElement(viser_react_1.Guide, { key: "guide-text-" + i, type: "text", top: true, position: {
                            action: obj.action,
                            percent: 'median'
                        }, content: content, style: {
                            fill: '#fff',
                            fontSize: '12',
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