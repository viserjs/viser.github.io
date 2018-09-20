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
    { "term": "Zombieland", "count": 9 },
    { "term": "Wieners", "count": 8 },
    { "term": "Toy Story", "count": 8 },
    { "term": "trashkannon", "count": 7 },
    { "term": "the GROWLERS", "count": 6 },
    { "term": "mudweiser", "count": 6 },
    { "term": "ThunderCats", "count": 4 },
    { "term": "The Taqwacores - Motion Picture", "count": 4 },
    { "term": "The Shawshank Redemption", "count": 2 },
    { "term": "The Olivia Experiment", "count": 1 },
];
var scale = [{
        dataKey: 'count',
        max: 2,
    }];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: [20, 80], data: data, scale: scale },
                React.createElement(viser_react_1.Tooltip, null),
                React.createElement(viser_react_1.Coord, { type: "theta", innerRadius: 0.2, startAngle: -90, endAngle: 180 }),
                React.createElement(viser_react_1.Bar, { position: "term*count", color: "#8543e0", shape: "line", select: false, style: { lineAppendWidth: 10 } }),
                React.createElement(viser_react_1.Point, { position: "term*count", color: "#8543e0", shape: "circle" }),
                data.map(function (obj) {
                    var position = [obj.term, 0];
                    var content = obj.term.toString();
                    return (React.createElement(viser_react_1.Guide, { key: content, type: "text", position: position, content: content, style: { textAlign: 'right' } }));
                }),
                React.createElement(viser_react_1.Guide, { type: "text", position: ['50%', '50%'], content: "Music", style: {
                        textAlign: 'center',
                        fontSize: 24,
                        fill: '#8543e0',
                    } }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map