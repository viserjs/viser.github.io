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
var nodesLabel = [
    'name', {
        offset: 0,
        textStyle: function (text, item) {
            if (item.point.hasChildren) {
                return {
                    opacity: 0
                };
            }
            return {
                textBaseline: 'middle',
                fill: 'grey',
                fontSize: 9,
                textAlign: 'center'
            };
        }
    },
];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: {},
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        $.getJSON('/assets/data/flare.json', function (sourceData) {
            var dv = new DataSet.View().source(sourceData, {
                type: 'hierarchy',
            });
            dv.transform({
                type: 'hierarchy.circle-packing',
            });
            var data = dv.getAllNodes().map(function (node) { return ({
                hasChildren: !!(node.data.children && node.data.children.length),
                name: node.data.name.split(/(?=[A-Z][^A-Z])/g).join('\n'),
                value: node.value,
                depth: node.depth,
                x: node.x,
                y: node.y,
                r: node.r
            }); });
            _this.setState({
                data: data,
            });
        });
    };
    App.prototype.render = function () {
        var data = this.state.data;
        return (React.createElement(viser_react_1.Chart, { height: 400, width: 400, data: data, padding: 0 },
            React.createElement(viser_react_1.Tooltip, { showTitle: false }),
            React.createElement(viser_react_1.Point, { position: "x*y", shape: "circle", tooltip: "name", size: ['r', function (r) { return r * 400; }], color: ['r', 'rgb(252, 253, 191)-rgb(231, 82, 99)-rgb(183, 55, 121)'], style: { stroke: 'rgb(183, 55, 121)' }, label: nodesLabel })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map