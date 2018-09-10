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
var React = require("react");
require("./Tabsld.scss");
var TabSld = /** @class */ (function (_super) {
    __extends(TabSld, _super);
    function TabSld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            visible: typeof _this.props.visible !== 'undefined' ? _this.props.visible : false
        };
        _this.handleVisible = function () {
            _this.setState({ visible: !_this.state.visible });
        };
        return _this;
    }
    TabSld.prototype.render = function () {
        return React.createElement("div", { className: "tab-sld" },
            React.createElement("h3", { className: "tit", onClick: this.handleVisible }, this.props.title || "title"),
            React.createElement("div", { className: "tab-body" + (this.state.visible ? ' on' : '') }, this.props.children));
    };
    return TabSld;
}(React.Component));
exports.default = TabSld;
//# sourceMappingURL=Tabsld.js.map