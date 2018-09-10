"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var viser_graph_1 = require("viser-graph");
var data_1 = require("./data");
viser_graph_1.registerNode('treeNode', {
    anchor: [[0, 0.5], [1, 0.5]]
});
viser_graph_1.registerEdge('smooth', {
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
// 准备布局配置
var layoutCfg = {
    "direction": "LR",
    "nodeSize": 20,
    "rankSep": 400
};
// 自定义树节点
var DEFAULT_NODE_SIZE = layoutCfg.nodeSize;
// 生成树图实例
var layout = new viser_graph_1.Layouts.Dendrogram(layoutCfg);
new viser_graph_1.ViserGraph({
    graph: {
        container: 'mount',
        width: 500,
        height: 500,
        fitView: 'autoZoom',
        fitViewPadding: true,
        animate: true,
        type: 'tree',
        layout: layout,
    },
    node: {
        shape: 'treeNode',
        size: 8,
        label: function (obj) {
            return obj.name;
        },
    },
    edge: {
        shape: 'smooth'
    },
    data: {
        roots: [data_1.data]
    },
    events: {
        onAfterchange: function (ev, graph) {
            console.log('onAfterchange json');
            graph.getNodes().forEach(function (node) {
                var model = node.getModel();
                var label = node.getLabel();
                var keyShape = node.getKeyShape();
                var children = node.getChildren();
                var parent = node.getParent();
                var box = keyShape.getBBox();
                var labelBox = label.getBBox();
                var dx = (box.maxX - box.minX + labelBox.maxX - labelBox.minX) / 2 + 8;
                var dy = 0;
                if (children.length != 0) {
                    dx = -dx;
                }
                label.translate(dx, dy);
            });
            graph.draw();
        }
    },
}).render();
//# sourceMappingURL=json.js.map