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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var viser_graph_react_1 = require("viser-graph-react");
var React = require("react");
var data = {
    "name": "Modeling Methods",
    "children": [
        {
            "name": "Classification",
            "children": [
                {
                    "name": "Logistic regression"
                },
                {
                    "name": "Linear discriminant analysis"
                },
                {
                    "name": "Rules"
                },
                {
                    "name": "Decision trees"
                },
                {
                    "name": "Naive Bayes"
                },
                {
                    "name": "K nearest neighbor"
                },
                {
                    "name": "Probabilistic neural network"
                },
                {
                    "name": "Support vector machine"
                }
            ]
        },
        {
            "name": "Consensus",
            "children": [
                {
                    "name": "Models diversity",
                    "children": [
                        {
                            "name": "Different initializations"
                        },
                        {
                            "name": "Different parameter choices"
                        },
                        {
                            "name": "Different architectures"
                        },
                        {
                            "name": "Different modeling methods"
                        },
                        {
                            "name": "Different training sets"
                        },
                        {
                            "name": "Different feature sets"
                        }
                    ]
                },
                {
                    "name": "Methods",
                    "children": [
                        {
                            "name": "Classifier selection"
                        },
                        {
                            "name": "Classifier fusion"
                        }
                    ]
                },
                {
                    "name": "Common",
                    "children": [
                        {
                            "name": "Bagging"
                        },
                        {
                            "name": "Boosting"
                        },
                        {
                            "name": "AdaBoost"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Regression",
            "children": [
                {
                    "name": "Multiple linear regression"
                },
                {
                    "name": "Partial least squares"
                },
                {
                    "name": "Multi-layer feedforward neural network"
                },
                {
                    "name": "General regression neural network"
                },
                {
                    "name": "Support vector regression"
                }
            ]
        }
    ]
};
// 注册脑图节点
viser_graph_react_1.registerNode('mindNode', {
    anchor: [[0, 0.5], [1, 0.5]]
});
// 注册脑图边
viser_graph_react_1.registerEdge('mindEdge', {
    getPath: function getPath(item) {
        var points = item.getPoints();
        var start = points[0];
        var end = points[points.length - 1];
        var hgap = Math.abs(end.x - start.x);
        if (end.x > start.x) {
            return [['M', start.x, start.y], ['C', start.x + hgap / 4, start.y, end.x - hgap / 2, end.y, end.x, end.y]];
        }
        return [['M', start.x, start.y], ['C', start.x - hgap / 4, start.y, end.x + hgap / 2, end.y, end.x, end.y]];
    }
});
var layout = new viser_graph_react_1.Layouts.Mindmap({
    direction: 'H',
    getHGap: function getHGap() {
        // 横向间距
        return 100;
    },
    getVGap: function getVGap() {
        // 竖向间距
        return 10;
    }
});
var graph = {
    container: 'mount',
    width: 500,
    height: 500,
    fitView: 'autoZoom',
    fitViewPadding: true,
    animate: true,
    type: 'tree',
    layout: layout,
    data: {
        roots: [data]
    },
    onAfterchange: function (ev, graph) {
        graph.getNodes().forEach(function (node) {
            var model = node.getModel();
            var label = node.getLabel();
            var keyShape = node.getKeyShape();
            var parent = node.getParent();
            var box = keyShape.getBBox();
            var labelBox = label.getBBox();
            var dx = (box.maxX - box.minX + labelBox.maxX - labelBox.minX) / 2 + 8;
            var dy = (box.maxY - box.minY) / 2 + 8;
            if (parent) {
                var parentModel = parent.getModel();
                if (parentModel.x > model.x) {
                    dx = -dx;
                }
                dy = 0;
            }
            else {
                dx = 0;
            }
            label.translate(dx, dy);
        });
        graph.draw();
    }
};
var node = {
    size: 8,
    shape: 'mindNode',
    label: function label(model) {
        return {
            text: model.name,
            stroke: '#fff',
            lineWidth: 3
        };
    },
};
var edge = {
    shape: 'mindEdge'
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(viser_graph_react_1.Graph, __assign({}, graph),
                React.createElement(viser_graph_react_1.Node, __assign({}, node)),
                React.createElement(viser_graph_react_1.Edge, __assign({}, edge)))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map