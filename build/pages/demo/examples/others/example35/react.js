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
        $.getJSON('/assets/data/periodic-table.hex.json', function (data) {
            var dv = new DataSet.View().source(data, {
                type: 'hex'
            });
            _this.setState({ data: dv });
        });
    };
    App.prototype.render = function () {
        var data = this.state.data;
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: 10, data: data },
                React.createElement(viser_react_1.Tooltip, { showTitle: false }),
                React.createElement(viser_react_1.Polygon, { position: 'x*y', color: 'category', style: {
                        stroke: 'white',
                        lineWidth: 2
                    }, label: ['symbol', {
                            offset: 0,
                            textStyle: {
                                fontSize: 14,
                                fontWeight: 500
                            }
                        }], tooltip: 'symbol*name*number*atomic_mass*category' }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map