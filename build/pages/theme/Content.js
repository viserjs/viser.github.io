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
var Left_1 = require("./Left");
var Right_1 = require("./Right");
var Content = /** @class */ (function (_super) {
    __extends(Content, _super);
    function Content() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Content.prototype.render = function () {
        return React.createElement("div", { className: "theme-content" },
            React.createElement(Left_1.default, { pageLan: this.props.pageLan }),
            React.createElement(Right_1.default, { pageLan: this.props.pageLan }));
    };
    return Content;
}(React.Component));
exports.default = Content;
//# sourceMappingURL=Content.js.map