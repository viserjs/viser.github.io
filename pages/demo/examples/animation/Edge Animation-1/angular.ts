import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserGraphModule, GlobalG6 } from 'viser-graph-ng';

GlobalG6.registerEdge('circle-running', {
  afterDraw(cfg, group) {
    // 获得当前边的第一个图形，这里是边本身的 path
    const shape = group.get('children')[0];
    // 边 path 的起点位置
    const startPoint = shape.getPoint(0);

    // 添加红色 circle 图形
    const circle = group.addShape('circle', {
      attrs: {
        x: startPoint.x,
        y: startPoint.y,
        fill: '#1890ff',
        r: 3
      }
    });

    // 对红色圆点添加动画
    circle.animate({
      // 动画重复
      repeat: true,
      // 每一帧的操作，入参 ratio：这一帧的比例值（Number）。返回值：这一帧需要变化的参数集（Object）。
      onFrame(ratio) {
        // 根据比例值，获得在边 path 上对应比例的位置。
        const tmpPoint = shape.getPoint(ratio);
        // 返回需要变化的参数集，这里返回了位置 x 和 y
        return {
          x: tmpPoint.x,
          y: tmpPoint.y
        };
      }
    }, 3000); // 一次动画的时间长度
  }
}, 'cubic');  // 该自定义边继承内置三阶贝塞尔曲线 cubic

const data = {
  nodes: [{
    id: 'node1',
    x: 100,
    y: 100,
    label: '节点1',
    labelCfg: {
      position: 'top'
    }
  }, {
    id: 'node2',
    x: 300,
    y: 200,
    color: '#40a9ff',
    label: '节点2',
    labelCfg: {
      position: 'left',
      offset: 10
    }
  }],
  edges: [{
    source: 'node1',
    target: 'node2'
  }
  ]
};

const graph = {
  data,
  type: 'graph',
  container: 'mount',
  width: 500,
  height: 500,
  pixelRatio: 2,
  renderer: 'svg',
  fitView: true,
  defaultNode: {
    size: 45,
    style: {
      fill: '#DEE9FF',
      stroke: '#5B8FF9'
    }
  },
  defaultEdge: {
    shape: 'circle-running',
    style: {
      lineWidth: 2,
      stroke: '#bae7ff'
    }
  }
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-graph [width]="graph.width" [height]="graph.height" [data]="graph.data"
      [defaultNode]="graph.defaultNode" [defaultEdge]="graph.defaultEdge"
    >
    </v-graph>
  </div>
  `
})

class AppComponent {
  data = data;
  graph = graph;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ViserGraphModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export default class AppModule {}
