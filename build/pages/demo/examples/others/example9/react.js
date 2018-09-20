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
var text = ['MIDNIGHT', '3 AM', '6 AM', '9 AM', 'NOON', '3 PM', '6 PM', '9 PM'];
var data = [];
for (var i = 0; i < 24; i++) {
    var item = {};
    item.type = i + '';
    item.value = 10;
    data.push(item);
}
var dv = new DataSet.View().source(data).transform({
    type: 'percent',
    field: 'value',
    dimension: 'type',
    as: 'percent'
});
var stackInterval1Opts = {
    position: 'percent',
    color: ['type', ['rgba(255, 255, 255, 0)']],
    style: {
        stroke: '#444',
        lineWidth: 1
    },
    tooltip: false,
    select: false,
};
var stackInterval2Opts = {
    position: 'type*value',
    size: ['type', function (val) {
            if (val % 3 === 0) {
                return 4;
            }
            else {
                return 0;
            }
        }],
    color: '#444',
    tooltip: false,
    label: ['type', function (val) {
            if (val % 3 === 0) {
                return text[val / 3];
            }
            return '';
        }, {
            offset: 15,
            textStyle: {
                fontSize: 12,
                fontWeight: 'bold',
                fill: '#bfbfbf'
            }
        }]
};
var userData = [
    { type: '睡眠', value: 70 },
    { type: '淡茶 & 烟斗 & 冥想', value: 10 },
    { type: '写作', value: 10 },
    { type: '教课', value: 40 },
    { type: '酒吧吃肉配白酒', value: 40 },
    { type: '散步', value: 10 },
    { type: '拜访马大大', value: 30 },
    { type: '阅读', value: 30 },
];
var userDv = new DataSet.View().source(userData).transform({
    type: 'percent',
    field: 'value',
    dimension: 'type',
    as: 'percent'
});
var userScale = [{
        dataKey: 'percent',
        formatter: function (val) {
            return (val * 100).toFixed(2) + '%';
        }
    }];
var stackInterval3Opts = {
    position: 'percent',
    color: 'type',
    label: ['type', {
            offset: 40,
        }],
    select: false,
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: 80 },
                React.createElement(viser_react_1.Tooltip, { showTitle: false }),
                React.createElement(viser_react_1.View, { data: dv },
                    React.createElement(viser_react_1.Coord, { type: "theta", innerRadius: 0.9 }),
                    React.createElement(viser_react_1.StackInterval, __assign({}, stackInterval1Opts)),
                    React.createElement(viser_react_1.Guide, { type: "text", position: ['50%', '50%'], content: "24 hours", style: {
                            lineHeight: 240,
                            fontSize: '30',
                            fill: '#262626',
                            textAlign: 'center'
                        } })),
                React.createElement(viser_react_1.View, { data: dv },
                    React.createElement(viser_react_1.Coord, { type: "polar", innerRadius: 0.9 }),
                    React.createElement(viser_react_1.StackInterval, __assign({}, stackInterval2Opts))),
                React.createElement(viser_react_1.View, { data: userDv, scale: userScale },
                    React.createElement(viser_react_1.Coord, { type: "theta", innerRadius: 0.75 }),
                    React.createElement(viser_react_1.StackInterval, __assign({}, stackInterval3Opts))))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map