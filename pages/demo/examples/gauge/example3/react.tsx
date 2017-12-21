import { registerShape, Chart, Axis, Tooltip, Coord, Point, Guide, Series } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

registerShape('point', 'pointer', {
  draw(cfg, container) {
    let point = cfg.points[0]; // 获取第一个标记点
    point = this.parsePoint(point);
    const center = this.parsePoint({ // 获取极坐标系下画布中心点
      x: 0,
      y: 0
    });
    // 绘制指针
    container.addShape('line', {
      attrs: {
        x1: center.x,
        y1: center.y,
        x2: point.x,
        y2: point.y + 15,
        stroke: cfg.color,
        lineWidth: 5,
        lineCap: 'round'
      }
    });
    return container.addShape('circle', {
      attrs: {
        x: center.x,
        y: center.y,
        r: 9.75,
        stroke: cfg.color,
        lineWidth: 4.5,
        fill: '#fff'
      }
    });
  }
});

const scale = [{
  dataKey: 'value',
  min: 0,
  max: 9,
  tickInterval: 1,
  nice: false
}];

const data = [{
  value: 7,
}];

const color = ['#0086FA', '#FFBF00', '#F5222D'];

class App extends React.Component {
  render() {
    const val = data[0].value;

    return (
      <div>
        <Chart forceFit height={500} data={data} scale={scale}>
          <Coord
            type="polar"
            startAngle={-202.5}
            endAngle={22.5}
            radius={0.75}
          />
          <Axis
            dataKey="value"
            zIndex={2}
            line={null}
            label={{
              offset: -16,
              textStyle: {
                fontSize: 18,
                textAlign: 'center',
                textBaseline: 'middle'
              }
            }}
            subTickCount={4}
            subTickLine={{
              length: -8,
              stroke: '#fff',
              strokeOpacity: 1,
            }}
            tickLine={{
              length: -17,
              stroke: '#fff',
              strokeOpacity: 1,
            }}
            grid={null}
          />
          <Axis dataKey="1" show={false} />

          <Series
            gemo="point"
            position="value*1"
            shape="pointer"
            color="#8C8C8C"
            active={false}
          />

          <Guide
            type="arc"
            zIndex={0}
            top={false}
            start={[0, 0.945]}
            end={[9, 0.945]}
            style={{
              stroke: '#CBCBCB',
              lineWidth: 18,
            }}
          />

          <Guide
            type="arc"
            zIndex={1}
            start={[0, 0.945]}
            end={[Math.max(0, Math.min(3, val)), 0.945]}
            style={{
              stroke: color[0],
              lineWidth: 18,
            }}
          />
          <Guide
            type="arc"
            zIndex={1}
            start={[3, 0.945]}
            end={[Math.max(3, Math.min(6, val)), 0.945]}
            style={{
              stroke: color[1],
              lineWidth: 18,
            }}
          />
          <Guide
            type="arc"
            zIndex={1}
            start={[6, 0.945]}
            end={[Math.max(6, Math.min(9, val)), 0.945]}
            style={{
              stroke: color[2],
              lineWidth: 18,
            }}
          />

          <Guide
            type="html"
            position={['50%', '95%']}
            html={`
              <div style="width: 300px;text-align: center;">
                <p style="font-size: 20px; color: #545454;margin: 0;">合格率</p>
                <p style="font-size: 36px;color: #545454;margin: 0;">${val * 10}%</p>
              </div>
            `}
          />
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));