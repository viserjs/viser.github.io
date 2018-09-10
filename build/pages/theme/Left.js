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
var Tabsld_1 = require("./Components/Tabsld");
var translation_1 = require("./translation");
var Left = /** @class */ (function (_super) {
    __extends(Left, _super);
    function Left() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Left.prototype.render = function () {
        return React.createElement("div", { className: "theme-left theme-pannel" },
            React.createElement(Tabsld_1.default, { title: translation_1.getTransText('', this.props.pageLan), visible: true }),
            React.createElement(Tabsld_1.default, { title: "cxfassdf" }),
            React.createElement(Tabsld_1.default, { title: "cxfassdf" }),
            React.createElement(Tabsld_1.default, { title: "cxfassdf" }),
            React.createElement(Tabsld_1.default, { title: "cxfassdf" }),
            React.createElement(Tabsld_1.default, { title: "cxfassdf" }));
    };
    return Left;
}(React.Component));
exports.default = Left;
//# sourceMappingURL=Left.js.map