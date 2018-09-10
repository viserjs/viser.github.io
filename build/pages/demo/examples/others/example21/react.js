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
    { time: '10:10', call: 4, waiting: 2, people: 2 },
    { time: '10:15', call: 2, waiting: 6, people: 3 },
    { time: '10:20', call: 13, waiting: 2, people: 5 },
    { time: '10:25', call: 9, waiting: 9, people: 1 },
    { time: '10:30', call: 5, waiting: 2, people: 3 },
    { time: '10:35', call: 8, waiting: 2, people: 1 },
    { time: '10:40', call: 13, waiting: 1, people: 2 }
];
var scale = [{
        dataKey: 'call',
        min: 0
    }, {
        dataKey: 'people',
        min: 0
    }, {
        dataKey: 'waiting',
        min: 0
    }];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data, scale: scale },
            React.createElement(viser_react_1.Tooltip, null),
            React.createElement(viser_react_1.Legend, { custom: true, allowAllCanceled: true, items: [
                    { value: 'waiting', marker: { symbol: 'square', fill: '#3182bd', radius: 5 } },
                    { value: 'people', marker: { symbol: 'hyphen', stroke: '#fdae6b', radius: 5, lineWidth: 3 } }
                ], onClick: function (ev, chart) {
                    var item = ev.item;
                    var value = item.value;
                    var checked = ev.checked;
                    var geoms = chart.getAllGeoms();
                    for (var i = 0; i < geoms.length; i++) {
                        var geom = geoms[i];
                        if (geom.getYScale().field === value) {
                            if (checked) {
                                geom.show();
                            }
                            else {
                                geom.hide();
                            }
                        }
                    }
                } }),
            React.createElement(viser_react_1.Axis, { dataKey: "people", grid: null, label: {
                    textStyle: {
                        fill: '#fdae6b'
                    }
                } }),
            React.createElement(viser_react_1.Bar, { position: "time*waiting", color: "#3182bd" }),
            React.createElement(viser_react_1.SmoothLine, { position: "time*people", color: "#fdae6b", size: 3 }),
            React.createElement(viser_react_1.Point, { shape: "circle", position: "time*people", color: "#fdae6b", size: 3 })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map