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
var data = [{ country: '中国', cost: 96 }, { country: '德国', cost: 121 }, { country: '美国', cost: 100 }, { country: '日本', cost: 111 }, { country: '韩国', cost: 102 }, { country: '法国', cost: 124 }, { country: '意大利', cost: 123 }, { country: '荷兰', cost: 111 }, { country: '比利时', cost: 123 }, { country: '英国', cost: 109 }, { country: '加拿大', cost: 115 }, { country: '俄罗斯', cost: 99 }, { country: '墨西哥', cost: 91 }, { country: '印度', cost: 87 }, { country: '瑞士', cost: 125 }, { country: '澳大利亚', cost: 130 }, { country: '西班牙', cost: 109 }, { country: '巴西', cost: 123 }, { country: '泰国', cost: 91 }, { country: '印尼', cost: 83 }, { country: '波兰', cost: 101 }, { country: '瑞典', cost: 116 }, { country: '奥地利', cost: 111 }, { country: '捷克', cost: 107 }];
var scale = [{
        dataKey: 'cost',
        min: 0,
    }];
var axis1Opts = {
    dataKey: 'cost',
    label: null,
    tickLine: null,
    line: {
        stroke: '#E9E9E9',
        lineDash: [3, 3]
    }
};
var axis2Opts = {
    dataKey: 'country',
    grid: {
        align: 'center'
    },
    tickLine: null,
    label: {
        Offset: 10,
        textStyle: {
            textAlign: 'center' // 设置坐标轴 label 的文本对齐方向
        }
    }
};
var interval1Opts = {
    position: 'country*cost',
    color: 'country',
    label: ['cost', {
            offset: -15,
            textStyle: {
                textAlign: 'center',
                fontSize: 11,
                shadowBlur: 2,
                shadowColor: 'rgba(0, 0, 0, .45)'
            }
        }],
    style: {
        lineWidth: 1,
        stroke: '#fff',
    },
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: [40, 40, 130, 40], data: data, scale: scale },
                React.createElement(viser_react_1.Coord, { type: "polar" }),
                React.createElement(viser_react_1.Axis, __assign({}, axis1Opts)),
                React.createElement(viser_react_1.Axis, __assign({}, axis2Opts)),
                React.createElement(viser_react_1.Legend, { dataKey: "country", itemWidth: 50 }),
                React.createElement(viser_react_1.Axis, { dataKey: "percent", title: { offset: 40, text: '百分比' } }),
                React.createElement(viser_react_1.Interval, __assign({}, interval1Opts)))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map