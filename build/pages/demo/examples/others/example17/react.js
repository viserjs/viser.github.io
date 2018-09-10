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
var data = [];
var n = 31;
for (var i = 0; i < 372; i++) {
    var now = Date();
    data[i] = {};
    data[i].time = new Date(now).getTime() + i * 1000 * 3600 * 24;
    var random = Math.floor(Math.random() * 10);
    if (((i % n > 2) && (i % n < 4)) || ((i % n >= 6) && (i % n < 7))) {
        data[i].value = 30 + random * 7;
    }
    else if ((i % n >= 4) && (i % n < 6)) {
        data[i].value = 60 + random * 8;
    }
    else {
        data[i].value = 10 + random * 5;
    }
}
var scale = [{
        dataKey: 'time',
        type: 'timeCat',
        mask: 'YYYY.MM.DD'
    }, {
        dataKey: 'value',
        min: 0,
    }];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: [0, 60, 30, 0], data: data, scale: scale },
                React.createElement(viser_react_1.Tooltip, { showTitle: null }),
                React.createElement(viser_react_1.Coord, { type: "helix", startAngle: 0.5 * Math.PI, endAngle: 12.5 * Math.PI }),
                React.createElement(viser_react_1.Axis, { dataKey: "time", line: null }),
                React.createElement(viser_react_1.Interval, { position: "time*value", color: ['value', '#ffffff-#1890FF'], size: 0.45 }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map