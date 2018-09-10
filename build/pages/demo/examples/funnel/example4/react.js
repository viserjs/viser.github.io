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
var data = [
    { action: '访问', visitor: 500, site: '站点1' },
    { action: '浏览', visitor: 400, site: '站点1' },
    { action: '交互', visitor: 300, site: '站点1' },
    { action: '下单', visitor: 200, site: '站点1' },
    { action: '完成', visitor: 100, site: '站点1' },
    { action: '访问', visitor: 550, site: '站点2' },
    { action: '浏览', visitor: 420, site: '站点2' },
    { action: '交互', visitor: 280, site: '站点2' },
    { action: '下单', visitor: 150, site: '站点2' },
    { action: '完成', visitor: 80, site: '站点2' }
];
data.sort(function (obj1, obj2) {
    return obj1.visitor - obj2.visitor;
});
var scale = [{
        dataKey: 'percent',
        formatter: function (val) {
            return val * 100 + '%';
        }
    }];
var tooltipOpts = {
    crosshairs: false,
    showTitle: false,
    itemTpl: '<li data-index={index} style="margin-bottom:4px;">'
        + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
        + '{name}<br/>'
        + '<span style="padding-left: 16px">{value}</span>'
        + '</li>'
};
var facetOpts = {
    type: 'mirror',
    fields: ['site'],
    transpose: true,
    padding: 0,
    eachView: function (view, facet) {
        view.interval()
            .position('action*visitor')
            .color('action', ['#BAE7FF', '#69C0FF', '#40A9FF', '#1890FF', '#0050B3'])
            .shape('funnel')
            .tooltip('site*action*visitor', function (site, action, visitor) {
            return {
                name: site,
                value: action + ': ' + visitor
            };
        })
            .style({
            lineWidth: 1,
            stroke: '#fff'
        });
        data.map(function (obj) {
            if (obj.site === facet.colValue) {
                view.guide().text({
                    top: true,
                    position: [obj.action, 'min'],
                    content: obj.visitor,
                    style: {
                        fill: '#fff',
                        fontSize: '12',
                        textAlign: facet.colIndex ? 'start' : 'end',
                        shadowBlur: 2,
                        shadowColor: 'rgba(0, 0, 0, .45)'
                    },
                    offsetX: facet.colIndex ? 10 : -10
                });
            }
        });
    }
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: [30, 120, 95], data: data, scale: scale },
                React.createElement(viser_react_1.Tooltip, __assign({}, tooltipOpts)),
                React.createElement(viser_react_1.Coord, { type: "theta", radius: 0.8, innerRadius: 0.7 }),
                React.createElement(viser_react_1.Legend, { reversed: true }),
                React.createElement(viser_react_1.Facet, __assign({}, facetOpts)))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map