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
    { "month": '一月', "tem": 7, "city": "tokyo" },
    { "month": '二月', "tem": 6.9, "city": "tokyo" },
    { "month": '三月', "tem": 9.5, "city": "tokyo" },
    { "month": '四月', "tem": 14.5, "city": "tokyo" },
    { "month": '五月', "tem": 18.2, "city": "tokyo" },
    { "month": '六月', "tem": 21.5, "city": "tokyo" },
    { "month": '七月', "tem": 25.2, "city": "tokyo" },
    { "month": '八月', "tem": 26.5, "city": "tokyo" },
    { "month": '九月', "tem": 23.3, "city": "tokyo" },
    { "month": '十月', "tem": 18.3, "city": "tokyo" },
    { "month": '十一月', "tem": 13.9, "city": "tokyo" }
];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("style", null, "\n            .g2-tooltip-title {\n              margin-top: 12px;\n            }\n            .g2-tooltip-list td {\n              border: 1px solid #cdcdcd;\n              padding: 5px 8px;\n              font-size: 12px;\n            }\n          "),
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data },
                React.createElement(viser_react_1.Tooltip, { defaultPoint: { month: '七月', tem: 25.2 }, containerTpl: "\n              <div class=\"g2-tooltip\">\n                <p class=\"g2-tooltip-title\"></p>\n                <table class=\"g2-tooltip-list\"></table>\n              </div>\n            ", itemTpl: "\n              <tr class=\"g2-tooltip-list-item\">\n                <td style=\"color:{color}\">{name}</td>\n                <td>{value}</td>\n              </tr>\n            ", offset: 50, g2Tooltip: {
                        position: 'absolute',
                        visibility: 'hidden',
                        border: '1px solid #efefef',
                        backgroundColor: 'white',
                        color: '#000',
                        opacity: "0.8",
                        padding: '5px 15px',
                        transition: 'top 200ms,left 200ms'
                    }, g2TooltipList: {
                        margin: '10px'
                    } }),
                React.createElement(viser_react_1.Axis, null),
                React.createElement(viser_react_1.Line, { position: "month*tem" }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map