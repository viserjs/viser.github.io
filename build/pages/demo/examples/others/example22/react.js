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
/**
 * 获取卡吉图数据点
 * @param  {Array} points 原始数据点
 * @param  {String} x x维度字段名
 * @param  {String} y y维度字段名
 * @return {Array} data 卡吉图数据点
 **/
function getKagiData(points, x, y) {
    // 初始最小值
    var min = points[0][y];
    // 初始最大值
    var max = points[0][y];
    // 初始绘制起点
    var start = points[0];
    // 阳线和阴线判断标志
    var isPos = points[1][y] >= points[0][y] ? true : false;
    // 初始绘制方向，1为向上，－1为向下
    var direction = isPos ? 1 : -1;
    // 阈值，默认为最大值的4%
    var maxValue = getMax(points, y);
    var threshold = maxValue * 0.04;
    // 阴线数组
    var negPath = [];
    // 阳线数组
    var posPath = [];
    var tmp1 = {};
    tmp1[x] = start[x];
    tmp1[y] = start[y];
    pushPoint(tmp1, isPos, posPath, negPath, x, y);
    if (points.length > 1) {
        for (var i = 0; i <= points.length - 1; i++) {
            // 浮动超过阈值时执行算法
            if (Math.abs(start[y] - points[i][y]) > threshold) {
                if (direction > 0) {
                    if (points[i][y] >= start[y]) {
                        isPos = getVerticalPoints(start, points[i], max, direction, negPath, posPath, isPos, x, y);
                        start[y] = points[i][y];
                    }
                    else {
                        var tmp2 = {};
                        tmp2[x] = points[i][x];
                        tmp2[y] = start[y];
                        pushPoint(tmp2, isPos, posPath, negPath, x, y);
                        start[x] = points[i][x];
                        direction = -1; // 转向
                        isPos = getVerticalPoints(start, points[i], min, direction, negPath, posPath, isPos, x, y);
                        max = start[y]; // 更新当前最高点
                        start = points[i]; // 更新当前绘制起点
                    }
                }
                else {
                    if (points[i][y] < start[y]) {
                        isPos = getVerticalPoints(start, points[i], min, direction, negPath, posPath, isPos, x, y);
                        start[y] = points[i][y];
                    }
                    else {
                        var tmp3 = {};
                        tmp3[x] = points[i][x];
                        tmp3[y] = start[y];
                        pushPoint(tmp3, isPos, posPath, negPath, x, y);
                        start[x] = points[i][x];
                        direction = 1;
                        isPos = getVerticalPoints(start, points[i], max, direction, negPath, posPath, isPos, x, y);
                        min = start[y]; // 更新当前最低点
                        start = points[i];
                    }
                }
            }
        }
    }
    return posPath.concat(negPath);
}
/**
 * 获取卡吉图垂直线数据点
 * @param  {Array} start 起点坐标
 * @param  {Array} end 终点坐标
 * @param  {Number} changePoint 转折点y坐标
 * @param  {Number} direction 绘制方向
 * @param  {Array} negPath 阴线数组
 * @param  {Array} posPath 阳线数组
 * @param  {Boolean} isPos 是否阳线标志位
 * @param  {String} x x维度字段名
 * @param  {String} y y维度字段名
 * @return  {Boolean} isPos 是否阳线标志位
 **/
function getVerticalPoints(start, end, changePoint, direction, negPath, posPath, isPos, x, y) {
    // 阳线和阴线相互转换的判断条件
    var condition = direction > 0 ? (end[y] > changePoint) && (start[y] < changePoint) && !isPos : (end[y] < changePoint) && (start[y] > changePoint) && isPos;
    var tmp1 = {};
    tmp1[x] = start[x];
    tmp1[y] = changePoint;
    var tmp2 = {};
    tmp2[x] = start[x];
    tmp2[y] = end[y];
    if (condition) {
        pushPoint(tmp1, isPos, posPath, negPath, x, y, true);
        isPos = isPos ? false : true;
        pushPoint(tmp2, isPos, posPath, negPath, x, y);
    }
    else {
        pushPoint(tmp2, isPos, posPath, negPath, x, y);
    }
    return isPos;
}
/**
 * 将卡吉图数据分别放入阳线数组和阴线数组
 * @param  {Object} point 当前数据点
 * @param  {Boolean} isPos 是否阳线标志位
 * @param  {Array} negPath 阴线数组
 * @param  {Array} posPath 阳线数组
 * @param  {String} x x维度字段名
 * @param  {String} y y维度字段名
 * @param  {Boolean} isChangePoint 是否转折点
 **/
function pushPoint(point, isPos, posPath, negPath, x, y, isChangePoint) {
    if (isChangePoint === void 0) { isChangePoint = false; }
    var tmpPoint = {};
    tmpPoint[x] = point[x];
    tmpPoint[y] = isChangePoint ? point[y] : null; // 转折点阳线和阴线都有数据，非转折点阳线或阴线的数据点为空
    if (isPos) {
        point.type = 'pos';
        posPath.push(point);
        tmpPoint.type = 'neg';
        negPath.push(tmpPoint);
    }
    else {
        point.type = 'neg';
        negPath.push(point);
        tmpPoint.type = 'pos';
        posPath.push(tmpPoint);
    }
}
function getMax(points, y) {
    var max = points[points.length - 1][y];
    if (points.length > 0) {
        for (var i = points.length - 1; i >= 0; i--) {
            max = points[i][y] > max ? points[i][y] : max;
        }
    }
    return max;
}
var scale = [{
        dataKey: 'date',
        type: 'cat',
        tickCount: 10,
        range: [0, 1]
    }];
var tooltipOpts = {
    crosshairs: {
        type: 'line'
    }
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            kagiData: []
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        $.getJSON('/assets/data/kagi.json', function (data) {
            _this.setState({ kagiData: getKagiData(data, 'date', 'value') });
        });
    };
    App.prototype.render = function () {
        var kagiData = this.state.kagiData;
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: kagiData, scale: scale },
                React.createElement(viser_react_1.Tooltip, __assign({}, tooltipOpts)),
                React.createElement(viser_react_1.Axis, null),
                React.createElement(viser_react_1.Legend, null),
                React.createElement(viser_react_1.Path, { position: "date*value", color: ['type', function (val) {
                            if (val === 'pos') {
                                return '#f04864';
                            }
                            return '#2fc25b';
                        }], size: ['type', function (val) {
                            if (val === 'pos') {
                                return 2;
                            }
                            return 1;
                        }] }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map