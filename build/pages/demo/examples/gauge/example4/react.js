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
var scale = [{
        dataKey: 'type',
        range: [0, 1],
    }, {
        dataKey: 'value',
        sync: true,
    }];
var dataBackground = [];
for (var i = 0; i < 50; i++) {
    dataBackground.push({
        type: i + '',
        value: 10,
    });
}
var dataFront = [];
for (var i = 0; i < 50; i++) {
    var item = {
        type: i + '',
        value: 10,
    };
    if (i === 25) {
        item.value = 14;
    }
    if (i > 25) {
        item.value = 0;
    }
    dataFront.push(item);
}
var insideScale = [{
        dataKey: 'type',
        tickCount: 3
    }];
var insideAxisLabel = {
    offset: -15,
    textStyle: {
        textAlign: 'center',
        fill: '#CBCBCB',
        fontSize: 18
    },
    formatter: function (val) {
        if (val === '49') {
            return 50;
        }
        return val;
    }
};
var frontIntervalColor = ['value', '#3023AE-#53A0FD'];
var frontGuidePosition = ['50%', '65%'];
var frontGuideStyle = {
    fill: '#CBCBCB',
    fontSize: 64,
    textAlign: 'center',
    textBaseline: 'middle',
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, scale: scale, animate: false },
                React.createElement(viser_react_1.View, { data: dataBackground },
                    React.createElement(viser_react_1.Coord, { type: "polar", startAngle: -202.5, endAngle: 22.5, innerRadius: 0.75, radius: 0.8 }),
                    React.createElement(viser_react_1.Interval, { position: "type*value", color: "#CBCBCB", size: 6 })),
                React.createElement(viser_react_1.View, { data: dataBackground, scale: insideScale },
                    React.createElement(viser_react_1.Axis, { dataKey: "value", show: false }),
                    React.createElement(viser_react_1.Axis, { dataKey: "type", grid: null, line: null, tickLine: null, label: insideAxisLabel }),
                    React.createElement(viser_react_1.Coord, { type: "polar", startAngle: -202.5, endAngle: 22.5, innerRadius: 0.95, radius: 0.55 }),
                    React.createElement(viser_react_1.Interval, { position: "type*value", color: "#CBCBCB", size: 6 })),
                React.createElement(viser_react_1.View, { data: dataFront },
                    React.createElement(viser_react_1.Coord, { type: "polar", startAngle: -202.5, endAngle: 22.5, innerRadius: 0.75, radius: 0.8 }),
                    React.createElement(viser_react_1.Interval, { position: "type*value", color: frontIntervalColor, opacity: 1, size: 6 }),
                    React.createElement(viser_react_1.Guide, { type: "text", position: frontGuidePosition, content: "26\u00B0", style: frontGuideStyle })))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map