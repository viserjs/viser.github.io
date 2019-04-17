<template>
  <div>
    <v-graph :width="graph.width" :height="graph.width"
      :fit-view="graph.fitView" :fit-view-padding="graph.fitViewPadding"
      :animate="graph.animate" :type="graph.type"
      :layout="graph.layout"
      :data="graph.data"
      :on-afterchange="graph.onAfterchange">
      <v-node :shape="node.shape" :size="node.size" :label="node.label"></v-node>
      <v-edge :shape="edge.shape" ></v-edge>
    </v-graph>
  </div>
</template>

<script>
const data = {
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
              "name": "Different parameter choi9999999999999999999ces"
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
import { registerNode, registerEdge, Layouts } from 'viser-graph-vue';

// 注册脑图节点
registerNode('treeNode', {
  anchor: [[0, 0.5], [1, 0.5]]
});
// 注册脑图边
registerEdge('smooth', {
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

var layout = new Layouts.CompactBoxTree({
  getHGap: function getHGap() /* d */ {
    // 横向间距
    return 100;
  },
  getVGap: function getVGap() /* d */ {
    // 竖向间距
    return 10;
  }
});

const graph = {
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
  onAfterchange: function(ev, graph) {
    graph.getNodes().forEach(function(node) {
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
};

const node = {
  size: 8,
  shape: 'mindNode',
  label: function (obj) {
    return obj.name;
  },
};

const edge = {
  shape: 'smooth'
};

export default {
  data() {
    return {
      graph,
      node,
      edge,
    };
  },
  methods: {

  }
};
</script>
