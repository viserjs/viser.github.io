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
var sourceData = {
    name: 'root',
    children: [
        { name: '分类 1', value: 560 },
        { name: '分类 2', value: 500 },
        { name: '分类 3', value: 150 },
        { name: '分类 4', value: 140 },
        { name: '分类 5', value: 115 },
        { name: '分类 6', value: 95 },
        { name: '分类 7', value: 90 },
        { name: '分类 8', value: 75 },
        { name: '分类 9', value: 98 },
        { name: '分类 10', value: 60 },
        { name: '分类 11', value: 45 },
        { name: '分类 12', value: 40 },
        { name: '分类 13', value: 40 },
        { name: '分类 14', value: 35 },
        { name: '分类 15', value: 40 },
        { name: '分类 16', value: 40 },
        { name: '分类 17', value: 40 },
        { name: '分类 18', value: 30 },
        { name: '分类 19', value: 28 },
        { name: '分类 20', value: 16 }
    ]
};
var dv = new DataSet.View().source(sourceData, {
    type: 'hierarchy',
});
dv.transform({
    field: 'value',
    type: 'hierarchy.treemap',
    tile: 'treemapResquarify',
    as: ['x', 'y'],
});
var data = dv.getAllNodes().map(function (node) { return (__assign({}, node, { name: node.data.name, value: node.data.value })); });
var scale = [{
        dataKey: 'value',
        nice: false,
    }];
var itemTpl = "<li data-index={index}>\n  <span style=\"background-color:{color};\" class=\"g2-tooltip-marker\"></span>\n  {name}<br/>\n  <span style=\"padding-left: 16px\">\u6D4F\u89C8\u4EBA\u6570\uFF1A{count}</span><br/>\n</li>";
var style = {
    lineWidth: 1,
    stroke: '#fff',
};
var tooltip = ['name', function (name, count) { return ({ name: name, count: count }); }];
var label = ['name', {
        offset: 0,
        textStyle: {
            textBaseline: 'middle',
        },
        formatter: function (val) {
            if (val !== 'root') {
                return val;
            }
        }
    }];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data, scale: scale, padding: 0 },
            React.createElement(viser_react_1.Tooltip, { showTitle: false, itemTpl: itemTpl }),
            React.createElement(viser_react_1.Polygon, { position: "x*y", color: "name", tooltip: tooltip, style: style, label: label })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map