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
    { month: 'Jan', value: 51 },
    { month: 'Feb', value: 91 },
    { month: 'Mar', value: 34 },
    { month: 'Apr', value: 47 },
    { month: 'May', value: 63 },
    { month: 'June', value: 58 },
    { month: 'July', value: 56 },
    { month: 'Aug', value: 77 },
    { month: 'Sep', value: 99 },
    { month: 'Oct', value: 106 },
    { month: 'Nov', value: 88 },
    { month: 'Dec', value: 56 },
];
var scale = [{
        dataKey: 'month',
        min: 0,
        max: 1,
    }];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data, scale: scale },
            React.createElement(viser_react_1.Tooltip, null),
            React.createElement(viser_react_1.Axis, null),
            React.createElement(viser_react_1.Line, { position: "month*value", shape: "hv" })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map