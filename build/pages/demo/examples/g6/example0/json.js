"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var viser_graph_1 = require("viser-graph");
var data = {
    nodes: [{
            id: 'node1',
            x: 100,
            y: 200
        }, {
            id: 'node2',
            x: 300,
            y: 200
        }],
    edges: [{
            id: 'edge1',
            target: 'node2',
            source: 'node1'
        }]
};
new viser_graph_1.ViserGraph({
    graph: {
        container: 'mount',
        width: 500,
        height: 500,
        fitView: 'cc',
        fitViewPadding: true,
        animate: true,
        type: 'graph',
    },
    data: data,
    events: {
        onClick: function (ev, graph) {
            console.log('click', ev, graph);
        }
    },
    zoom: {
        min: 1,
        max: 10,
    },
}).render();
//# sourceMappingURL=json.js.map