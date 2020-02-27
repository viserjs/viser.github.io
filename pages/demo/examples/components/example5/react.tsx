import { Chart, Tooltip, Axis, Line, Area, Legend, Guide } from 'viser-react';
import * as React from 'react';

function findMax(data) {
  var maxValue = 0;
  var maxObj = null;
  for (var i = 0; i < data.length; i++) {
    var d = data[i];
    if (d.value > maxValue /* && d.type === 'today'*/) {
      maxValue = d.value;
      maxObj = d;
    }
  }
  return maxObj;
}

const scale = [
  {
    dataKey: 'time',
    alias: '时间',
    type: 'time',
    mask: 'MM:ss',
    nice: false,
  },
  {
    dataKey: 'value',
    alias: '占用率',
    min: 0,
    max: 120,
  },
  {
    dataKey: 'type',
    type: 'cat',
  },
];

export default class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    setInterval(() => {
      const data = this.state.data.slice();
      var now = new Date();
      var time = now.getTime();
      var value1 = ~~30 + Math.random() * 50;
      var direction = Math.random() > 0.5 ? 1 : -1;
      var value2 = value1 + Math.random() * 20 * direction;
      if (data.length >= 200) {
        data.shift();
        data.shift();
      }
      data.push({
        time: time,
        value: value2,
        type: 'yesterday',
      });
      data.push({
        time: time,
        value: value1,
        type: 'today',
      });

      if (data.length > 20) {
        data.shift();
        data.shift();
      }
      this.setState({ data });
    }, 1000);
  }
  render() {
    const { data } = this.state;
    if (!data.length) {
      return null;
    }
    return (
      <Chart
        forceFit
        height={440}
        data={data}
        scale={scale}
        padding={[10, 100, 50, 50]}
      >
        <Tooltip />
        <Axis />
        <Legend attachLast />
        <Legend dataKey="predict" show={false} />
        <Line
          position="time*value"
          shape="smooth"
          color={['type', ['#cccccc', '#2593fc']]}
          size={2}
          animate={{
            update: {
              duration: 0,
            },
          }}
        />
        <Guide
          type="line"
          top={true}
          start={['min', 60]}
          end={['max', 60]}
          lineStyle={{
            stroke: '#F5222D',
            lineWidth: 2,
          }}
          text={{
            content: '预警线',
            position: 'start',
            offsetX: 20,
            offsetY: -5,
          }}
        />
        {/* <Guide
          type="regionFilter"
          top={true}
          start={['min', 60]}
          end={['max', 60]}
          color="#F5222D"
          apply={['line']}
        /> */}
        <Guide
          type="dataMarker"
          top={true}
          content="当前最大峰值"
          position={() => {
            var obj = findMax(data);
            if (obj) {
              return [obj.time, obj.value];
            }
            return [0, 0];
          }}
          style={{
            text: {
              fontSize: 13,
            },
            point: {
              stroke: '#606060',
            },
          }}
          lineLength={50}
        />
      </Chart>
    );
  }
}
