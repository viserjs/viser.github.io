"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var viser_graph_1 = require("viser-graph");
var data_1 = require("./data");
viser_graph_1.registerNode('treeNode', {
    anchor: [[0, 0.5], [0.5, 1]]
});
viser_graph_1.registerEdge('VH', {
    getPath: function getPath(item) {
        var points = item.getPoints();
        var start = points[0];
        var end = points[points.length - 1];
        return [['M', start.x, start.y], ['L', start.x, end.y], ['L', end.x, end.y]];
    }
});
var layout = new viser_graph_1.Layouts.IndentedTree({
    direction: 'LR',
    indent: 30,
    getVGap: function getVGap() {
        // 竖向间距
        return 4;
    }
});
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
        size: 16,
        label: function (obj) {
            return obj.name;
        },
    },
    edge: {
        shape: 'VH'
    },
    data: {
        roots: [data_1.data]
    },
    events: {
        onAfterchange: function (ev, graph) {
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
                label.translate(dx, dy);
            });
            graph.draw();
        }
    },
}).render();
//# sourceMappingURL=json.js.map