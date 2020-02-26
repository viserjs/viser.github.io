import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserGraphModule, GlobalG6 } from 'viser-graph-ng';

GlobalG6.registerNode('area', {
  draw(cfg, group) {

    const baseR = 30;

    // Ref line
    let refR = baseR;
    const refInc = 10;
    for (let i = 0; i < 6; i++) {
      group.addShape('circle', {
        // attrs: style
        attrs: {
          x: 0, // 居中
          y: 0,
          r: refR += refInc,
          stroke: '#bae7ff',
          // stroke: 'rgba(255,255,255,0.4)',
          lineDash: [ 4, 4 ]

        }
      });
    }
    const everyIncAngle = 2 * Math.PI * (360 / 5) / 360;
    const tempIncValues = [ baseR, baseR, baseR, baseR, baseR ];
    const allRs = [];
    cfg.details.forEach(cat => {

      const oneRs = [];
      cat.values.forEach((v, i) => {
        const R = tempIncValues[i] + v * 0.4;
        oneRs.push(R);
        tempIncValues[i] = R;
      });
      allRs.push(oneRs);

    });
    const strokeColors = [
      'rgba(91, 143, 249,1)',
      'rgba(90, 216, 166,1)',
      'rgba(246, 189, 22,1)',
      'rgba(232, 104, 74,1)',
      'rgba(255, 157, 77,1)'
    ];
    const fillColors = [
      'rgba(91, 143, 249,0.5)',
      'rgba(90, 216, 166,0.5)',
      'rgba(246, 189, 22,0.5)',
      'rgba(232, 104, 74,0.5)',
      'rgba(255, 157, 77,0.5)'
    ];


    allRs.reverse().forEach((Rs, index) => {
      let curAngle = 0;
      const poss = [];
      Rs.forEach(r => {
        const xPos = r * Math.cos(curAngle);
        const yPos = r * Math.sin(curAngle);
        curAngle += everyIncAngle;
        poss.push([ xPos, yPos ]);
      });
      const Ls = poss.map((p, i) => {
        if (i === 0) {
          return [ 'M', ...p ];
        }
        return [ 'L', ...p ];
      });

      group.addShape('path', {
        attrs: {
          path: [
            ...Ls,
            [ 'Z' ] // 封闭
          ],
          stroke: strokeColors[index],
          fill: fillColors[index]
        }
      });

    });
    let nowAngle2 = 0;
    const everyIncAngleCat = 2 * Math.PI * (360 / 5) / 360;
    for (let i = 0; i < 5; i++) {
      const r = 30 + 60;
      const xPos = r * Math.cos(nowAngle2);
      const yPos = r * Math.sin(nowAngle2);

      group.addShape('path', {
        attrs: {
          path: [
            [ 'M', 0, 0 ],
            [ 'L', xPos, yPos ]

          ],
          lineDash: [ 4, 4 ],

          stroke: 'darkgray' // 颜色应用到边上，如果应用到填充，则使用 fill: cfg.color
        }
      });
      nowAngle2 += everyIncAngleCat;
    }

    // 添加一个和背景色相同的圆形
    group.addShape('circle', {
      // attrs: style
      attrs: {
        x: 0, // 居中
        y: 0,
        r: baseR,
        fill: cfg.centerColor,
        stroke: 'darkgray'
      }
    });

    if (cfg.label) {
      group.addShape('text', {
        // attrs: style
        attrs: {
          x: 0, // 居中
          y: 0,
          textAlign: 'center',
          textBaseline: 'middle',
          text: cfg.label,
          fill: 'white',
          fontStyle: 'bold'
        }
      });
    }
    return group;
  }
});

const data = {
  nodes: [
    {
      id: 'nodeD',
      x: 150,
      y: 150,
      label: 'Area1',
      shape: 'area',
      anchorPoints: [
      [ 0, 0.5 ], [ 1, 0.5 ]
      ],
      details: [
        { cat: 'pv', values: [ 20, 30, 40, 30, 30 ], color: '#5ad8a6' },
          { cat: 'dal', values: [ 40, 30, 20, 30, 50 ], color: '#ff99c3' },
          { cat: 'uv', values: [ 40, 30, 30, 40, 40 ], color: '#6dc8ec' },
          { cat: 'sal', values: [ 20, 30, 50, 20, 20 ], color: '#269a99' },
          { cat: 'cal', values: [ 10, 10, 20, 20, 20 ], color: '#9270CA' }
      ],
      centerColor: '#5b8ff9'
    },
    {
      id: 'nodeD2',
      x: 500,
      y: 150,
      label: 'Area2',
      shape: 'area',
      anchorPoints: [
      [ 0, 0.5 ], [ 1, 0.5 ]
      ],
      details: [
        { cat: 'pv', values: [ 10, 10, 80, 20, 10 ], color: '#5ad8a6' },
        { cat: 'dal', values: [ 20, 30, 10, 50, 40 ], color: '#ff99c3' },
        { cat: 'uv', values: [ 10, 50, 30, 20, 30 ], color: '#6dc8ec' },
        { cat: 'sal', values: [ 70, 30, 20, 20, 20 ], color: '#269a99' },
        { cat: 'cal', values: [ 50, 10, 20, 70, 30 ], color: '#9270CA' }
      ],
      centerColor: '#5b8ff9'
    }
  ],
  edges: [
    {
      source: 'nodeD',
      target: 'nodeD2'
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
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-graph [width]="graph.width" [height]="graph.height" [data]="graph.data">
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
