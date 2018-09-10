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
viser_react_1.registerShape('point', 'pointer', {
    draw: function (cfg, container) {
        var point = cfg.points[0];
        point = this.parsePoint(point);
        var center = this.parsePoint({
            x: 0,
            y: 0,
        });
        container.addShape('line', {
            attrs: {
                x1: center.x,
                y1: center.y,
                x2: point.x,
                y2: point.y + 15,
                stroke: cfg.color,
                lineWidth: 5,
                lineCap: 'round',
            }
        });
        return container.addShape('circle', {
            attrs: {
                x: center.x,
                y: center.y,
                r: 9.75,
                stroke: cfg.color,
                lineWidth: 4.5,
                fill: '#fff',
            }
        });
    }
});
var scale = [{
        dataKey: 'value',
        min: 0,
        max: 9,
        tickInterval: 1,
        nice: false,
    }];
var data = [
    { value: 5.6 },
];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data, scale: scale },
                React.createElement(viser_react_1.Coord, { type: "polar", startAngle: -202.5, endAngle: 22.5, radius: 0.75 }),
                React.createElement(viser_react_1.Axis, { dataKey: "value", zIndex: 2, line: null, label: {
                        offset: -16,
                        textStyle: {
                            fontSize: 18,
                            textAlign: 'center',
                            textBaseline: 'middle'
                        }
                    }, subTickCount: 4, subTickLine: {
                        length: -8,
                        stroke: '#fff',
                        strokeOpacity: 1,
                    }, tickLine: {
                        length: -17,
                        stroke: '#fff',
                        strokeOpacity: 1,
                    }, grid: null }),
                React.createElement(viser_react_1.Axis, { dataKey: "1", show: false }),
                React.createElement(viser_react_1.Series, { gemo: "point", position: "value*1", shape: "pointer", color: "#1890FF", active: false }),
                React.createElement(viser_react_1.Guide, { type: "arc", zIndex: 0, top: false, start: [0, 0.945], end: [9, 0.945], style: {
                        stroke: '#CBCBCB',
                        lineWidth: 18,
                    } }),
                React.createElement(viser_react_1.Guide, { type: "arc", zIndex: 1, start: [0, 0.945], end: [data[0].value, 0.945], style: {
                        stroke: '#1890FF',
                        lineWidth: 18,
                    } }),
                React.createElement(viser_react_1.Guide, { type: "html", position: ['50%', '95%'], html: "\n              <div style=\"width: 300px;text-align: center;\">\n                <p style=\"font-size: 20px; color: #545454;margin: 0;\">\u5408\u683C\u7387</p>\n                <p style=\"font-size: 36px;color: #545454;margin: 0;\">" + data[0].value * 10 + "%</p>\n              </div>\n            " }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map