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
// import * as jQuery from 'jquery';
var utils_1 = require("../common/utils");
require("./index.scss");
var Nav = /** @class */ (function (_super) {
    __extends(Nav, _super);
    function Nav(props) {
        var _this = _super.call(this, props) || this;
        _this.handleVisible = function () {
            _this.setState({
                visible: !_this.state.visible,
            });
        };
        _this.handleClick = function (e, value, completed, key) {
            e.preventDefault();
            if (value !== _this.state.selected && completed) {
                utils_1.setInitNav(value);
                _this.setState({
                    selected: utils_1.getInitNav() || 'viser',
                    visible: !_this.state.visible,
                });
                if (typeof _this.props.setTypeKey !== 'undefined') {
                    _this.props.setTypeKey(key);
                }
            }
        };
        _this.state = {
            visible: false,
            selected: utils_1.getInitNav() || 'viser',
            dropitem: [
                {
                    name: 'viser',
                    image: 'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/icon/g2-c94ef.svg',
                    completed: true,
                    keys: 'viser',
                },
                {
                    name: 'viser-graph',
                    image: 'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/icon/g6-b4554.svg',
                    completed: true,
                    keys: 'viserGraph',
                },
                {
                    name: 'viser-cell',
                    image: 'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/icon/f2-d360c.svg',
                    completed: false,
                    keys: null,
                },
            ],
        };
        return _this;
    }
    Nav.prototype.componentDidMount = function () {
        var self = this;
        if (!utils_1.getInitNav()) {
            utils_1.setInitNav(self.state.selected);
        }
        window.document.addEventListener('click', function (e) {
            var target = e.target;
            var nav = window.document.getElementById('viser-nav');
            if (!nav.contains(target)) {
                self.setState({ visble: false });
            }
        });
        if (typeof this.props.setTypeKey !== 'undefined') {
            var state_1 = self.state;
            state_1.dropitem.forEach(function (item) {
                if (item.name === state_1.selected) {
                    self.props.setTypeKey(item.keys);
                }
            });
        }
    };
    Nav.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "viser-dropdown" },
            React.createElement("a", { className: "visble-tit", onClick: this.handleVisible }, this.state.selected),
            React.createElement("div", { className: "viser-dropmenu", style: { display: this.state.visible ? 'block' : 'none' } }, this.state.dropitem.map(function (item, index) { return (React.createElement("a", { href: "javascript:;", key: index, onClick: function (e) {
                    return _this.handleClick(e, item.name, item.completed, item.keys);
                } },
                item.image && (React.createElement("i", { className: "pic", style: { backgroundImage: "url(" + item.image + ")" } })),
                item.name,
                !item.completed && (React.createElement("span", null, _this.props.pageLan === 'cn' ? '建设中' : 'constructing')))); }))));
    };
    return Nav;
}(React.Component));
exports.default = Nav;
//# sourceMappingURL=index.js.map