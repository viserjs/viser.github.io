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
    { x: '分类一', y: [76, 100] },
    { x: '分类二', y: [56, 108] },
    { x: '分类三', y: [38, 129] },
    { x: '分类四', y: [58, 155] },
    { x: '分类五', y: [45, 120] },
    { x: '分类六', y: [23, 99] },
    { x: '分类七', y: [18, 56] },
    { x: '分类八', y: [18, 34] },
];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data },
            React.createElement(viser_react_1.Tooltip, null),
            React.createElement(viser_react_1.Axis, null),
            React.createElement(viser_react_1.Bar, { position: "x*y" })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map