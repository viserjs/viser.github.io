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
    { "question": "问题 1", "percent": 0.21 },
    { "question": "问题 2", "percent": 0.40 },
    { "question": "问题 3", "percent": 0.49 },
    { "question": "问题 4", "percent": 0.52 },
    { "question": "问题 5", "percent": 0.53 },
    { "question": "问题 6", "percent": 0.84 },
    { "question": "问题 7", "percent": 1.0 },
    { "question": "问题 8", "percent": 1.2 }
];
var scale = [{
        dataKey: 'percent',
        min: 0,
        max: 2,
    }];
var interval1Opts = {
    position: 'question*percent',
    color: ['percent', '#BAE7FF-#1890FF-#0050B3'],
    tooltip: ['percent', function (val) {
            return {
                name: '占比',
                value: val * 100 + '%',
            };
        }],
    label: ['percent', {
            offset: -5,
        }],
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 500, padding: [40, 40, 130, 40], data: data, scale: scale },
                React.createElement(viser_react_1.Tooltip, { title: "question" }),
                React.createElement(viser_react_1.Coord, { type: "polar", innerRadius: 0.1, direction: "rotate" }),
                React.createElement(viser_react_1.Interval, __assign({}, interval1Opts)),
                data.map(function (obj, i) {
                    var position = [obj.question, 0];
                    var content = obj.question + ' ';
                    return (React.createElement(viser_react_1.Guide, { type: "text", key: "guide-text-" + i, position: position, content: content, style: { textAlign: 'right' } }));
                }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map