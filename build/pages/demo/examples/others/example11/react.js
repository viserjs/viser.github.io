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
var DataSet = require('@antv/data-set');
var DataView = DataSet.DataView;
var data = [
    { year: 2007, area: '亚太地区', profit: 7860 * 0.189 },
    { year: 2007, area: '非洲及中东', profit: 7860 * 0.042 },
    { year: 2007, area: '拉丁美洲', profit: 7860 * 0.025 },
    { year: 2007, area: '中欧和东欧', profit: 7860 * 0.018 },
    { year: 2007, area: '西欧', profit: 7860 * 0.462 },
    { year: 2007, area: '北美', profit: 7860 * 0.265 },
    { year: 2011, area: '亚太地区', profit: 7620 * 0.539 },
    { year: 2011, area: '非洲及中东', profit: 7620 * 0.065 },
    { year: 2011, area: '拉丁美洲', profit: 7620 * 0.065 },
    { year: 2011, area: '中欧和东欧', profit: 7620 * 0.034 },
    { year: 2011, area: '西欧', profit: 7620 * 0.063 },
    { year: 2011, area: '北美', profit: 7620 * 0.234 }
];
var views = function (view, facet) {
    var data = facet.data;
    var dv = new DataView();
    dv.source(data)
        .transform({
        type: 'percent',
        field: 'profit',
        dimension: 'area',
        as: 'percent'
    });
    return {
        data: dv,
        scale: {
            dataKey: 'percent',
            formatter: '.2%',
        },
        coord: {
            type: 'theta',
            innerRadius: 0.35,
        },
        series: {
            quickType: 'stackBar',
            position: 'percent',
            color: 'area',
            label: ['percent', {
                    offset: -8,
                }],
            style: {
                lineWidth: 1,
                stroke: '#fff',
            }
        }
    };
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: 80, data: data },
                React.createElement(viser_react_1.Tooltip, { showTitle: false }),
                React.createElement(viser_react_1.Legend, { dataKey: "area", offset: 20 }),
                React.createElement(viser_react_1.Facet, { type: "rect", fields: ['year'], padding: 20, rowTitle: null, colTitle: {
                        offsetY: -30,
                        style: {
                            fontSize: 18,
                            textAlign: 'center',
                            fill: '#999'
                        }
                    }, views: views }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map