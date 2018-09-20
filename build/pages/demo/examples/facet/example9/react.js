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
var $ = require("jquery");
var DataSet = require('@antv/data-set');
var DataView = DataSet.DataView;
var scale = [{
        dataKey: 'Species',
        sync: true,
    }];
var views = function (view, facet) {
    var obj = {};
    if (facet.rowIndex === facet.colIndex) {
        var dv = new DataView();
        dv.source(facet.data)
            .transform({
            type: 'bin.histogram',
            field: facet.colField,
            bins: 30,
            as: [facet.colField, 'count'],
            groupBy: ['Species']
        });
        obj = {
            data: dv.rows,
            series: {
                quickType: 'stackBar',
                position: facet.colField + '*count',
                color: 'Species',
                opacity: 0.85,
            }
        };
    }
    else {
        obj = {
            series: {
                quickType: 'point',
                shape: 'circle',
                color: 'Species',
                position: [facet.colField, facet.rowField],
                opacity: 0.3,
                size: 3,
            }
        };
    }
    return obj;
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: [],
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        $.getJSON('/assets/data/iris.json', function (sourceData) {
            _this.setState({ data: sourceData });
        });
    };
    App.prototype.render = function () {
        var data = this.state.data;
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data, scale: scale },
            React.createElement(viser_react_1.Tooltip, null),
            React.createElement(viser_react_1.Legend, null),
            React.createElement(viser_react_1.Axis, null),
            React.createElement(viser_react_1.Facet, { type: "matrix", fields: ['SepalLength', 'SepalWidth', 'PetalLength', 'PetalWidth'], views: views })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map