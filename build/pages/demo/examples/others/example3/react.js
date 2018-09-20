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
var data = [
    { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
    { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
    { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' },
    { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands' },
    { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden' },
    { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' },
    { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France' },
    { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway' },
    { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' },
    { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' },
    { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' },
    { x: 65.5, y: 126.4, z: 35.3, name: 'US', country: 'United States' },
    { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary' },
    { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' },
    { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' },
];
var scale = [{
        dataKey: 'x',
        alias: 'Daily fat intake',
        tickInterval: 5,
        nice: false,
        max: 96,
        min: 62,
    }, {
        dataKey: 'y',
        alias: 'Daily sugar intake',
        tickInterval: 50,
        nice: false,
        max: 165,
        min: 0,
    }, {
        dataKey: 'z',
        alias: 'Obesity(adults) %',
    }];
var axis1Opts = {
    dataKey: 'x',
    label: {
        formatter: function (val) {
            return val + ' gr';
        },
    },
    grid: {
        lineStyle: {
            stroke: '#d9d9d9',
            lineWidth: 1,
            lineDash: [2, 2],
        },
    },
};
var axis2Opts = {
    dataKey: 'y',
    title: {
        offset: 64,
    },
    label: {
        formatter: function (val) {
            if (val > 0) {
                return val + ' gr';
            }
        },
    }
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, plotBackground: {
                    stroke: '#ccc',
                    lineWidth: 1,
                }, data: data, scale: scale },
                React.createElement(viser_react_1.Tooltip, { title: 'country' }),
                React.createElement(viser_react_1.Axis, { dataKey: 'x', label: {
                        formatter: function (val) {
                            return val + ' gr'; // 格式化坐标轴显示文本
                        }
                    }, grid: {
                        lineStyle: {
                            stroke: '#d9d9d9',
                            lineWidth: 1,
                            lineDash: [2, 2],
                        },
                    } }),
                React.createElement(viser_react_1.Axis, { dataKey: 'y', title: {
                        offset: 64,
                    }, label: {
                        formatter: function (val) {
                            if (val > 0) {
                                return val + ' gr';
                            }
                        }
                    } }),
                React.createElement(viser_react_1.Point, { position: 'x*y', color: '#1890ff', size: ['z', [10, 40]], label: ['name*country', {
                            offset: 0,
                            textStyle: {
                                fill: '#1890FF'
                            },
                        }
                    ], opacity: 0.3, shape: 'circle', tooltip: 'x*y*z', style: {
                        lineWidth: 1,
                        stroke: '#1890ff'
                    } }),
                React.createElement(viser_react_1.Guide, { type: 'line', top: true, start: [65, 'min'], end: [65, 'max'], text: {
                        content: 'Safe fat intake 65g/day',
                        position: 'end',
                        autoRotate: false,
                        style: {
                            textAlign: 'start'
                        }
                    } }),
                React.createElement(viser_react_1.Guide, { type: 'line', top: true, start: ['min', 50], end: ['max', 50], text: {
                        content: 'Safe sugar intake 50g/day',
                        position: 'end',
                        style: {
                            textAlign: 'end'
                        }
                    } }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map