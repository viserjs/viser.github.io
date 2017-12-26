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
  ticks: [2.25, 3.75, 5.25, 6.75],
  nice: false
}];

const data = [
  { value: 6 }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Chart forceFit height={400} data={data} scale={scale}>
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
              offset: -20,
              formatter: (val: string | number):string => {
                if (val === '2.25') {
                  return '差';
                } else if (val === '3.75') {
                  return '中';
                } else if (val === '5.25') {
                  return '良';
                }
                return '优';
              },
              textStyle: {
                fontSize: 18,
                textAlign: 'center'
              }
            }}
            tickLine={null}
            grid={null}
          />
          <Axis dataKey="1" show={false} />

          <Series
            gemo="point"
            position="value*1"
            shape="pointer"
            color="#1890FF"
            active={false}
          />

          <Guide
            type="line"
            start={[3, 0.905]}
            end={[3.0035, 0.85]}
            lineStyle={{
              stroke: '#19AFFA',
              lineDash: null,
              lineWidth: 3,
            }}
          />
          <Guide
            type="line"
            start={[4.5, 0.905]}
            end={[4.5, 0.85]}
            lineStyle={{
              stroke: '#19AFFA',
              lineDash: null,
              lineWidth: 3,
            }}
          />
          <Guide
            type="line"
            start={[6, 0.905]}
            end={[6.0035, 0.85]}
            lineStyle={{
              stroke: '#19AFFA',
              lineDash: null,
              lineWidth: 3,
            }}
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
            end={[data[0].value, 0.945]}
            style={{
              stroke: '#1890FF',
              lineWidth: 18,
            }}
          />
          <Guide
            type="html"
            position={['50%', '95%']}
            html={`
              <div style="width: 300px;text-align: center;">
                <p style="font-size: 20px; color: #545454;margin: 0;">合格率</p>
                <p style="font-size: 36px;color: #545454;margin: 0;">${data[0].value * 10}%</p>
              </div>
            `}
          />
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));