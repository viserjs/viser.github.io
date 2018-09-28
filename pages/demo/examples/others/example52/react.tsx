import * as React from 'react';
import * as $ from 'jquery';
import { Area, Axis, Chart, Slider, Plugin, Legend, Tooltip } from 'viser-react';
const DataSet = require('@antv/data-set');

const getJSON = src => new Promise(resolve => $.getJSON(src, data => resolve(data)));

export default class App extends React.Component {
  state = {
    data: [],
    start: '2009/7/20 0:00',
    end: '2009/9/9 0:00'
  }
  onChange = (_ref) => {
    var startValue = _ref.startValue,
      endValue = _ref.endValue;
    this.setState({
      start: startValue,
      end: endValue
    });
  }
  getData = () => {
    const { data, start, end } = this.state;
    const ds = new DataSet({
      state: {
        start: new Date(start).getTime(),
        end: new Date(end).getTime()
      }
    });
    const dv = ds.createView('origin').source(data);
    dv.transform({
      type: 'filter',
      callback: function callback(obj) {
        const time = new Date(obj.time).getTime(); // !注意：时间格式，建议转换为时间戳进行比较
        return time >= ds.state.start && time <= ds.state.end;
      }
    });
    return { dv, ds };
  }
  async componentDidMount() {
    const data = await getJSON('/assets/data/rain-flow.json');
    await this.setState({
      data,
    });
    const { dv, ds } = this.getData();
    this.setState({
      start: ds.state.start,
      end: ds.state.end
    })
  }
  render() {
    const { data, start, end } = this.state;
    const { dv } = this.getData();
    const scale = [
      {
        dataKey: 'time',
        type: 'time',
        tickCount: 8,
        mask: 'm/dd hh:MM'
      },
      {
        dataKey: 'flow',
        alias: '流量(m^3/s)'
      },
      {
        dataKey: 'rain',
        alias: '降雨量(mm)'
      }
    ];
    if (data.length === 0) {
      return null;
    }
    return (
      <div>
        <Chart
          forceFit={true}
          height={400}
          padding={[40, 40, 40, 80]}
          animate={false}
          data={dv}
          scale={scale}
        >
          <Tooltip />
          <Axis dataKey="rain" grid={null} />
          <Axis dataKey="flow" title={{ text: 'flow' }} />
          <Legend
            custom={true}
            position="top"
            items={[
              {
                value: 'flow',
                marker: {
                  symbol: 'circle',
                  fill: 'l(100) 0:#a50f15 1:#fee5d9',
                  radius: 5
                }
              },
              {
                value: 'rain',
                marker: {
                  symbol: 'circle',
                  fill: 'l(100) 0:#293c55 1:#f7f7f7',
                  radius: 5
                }
              }
            ]}
          />
          <Area position="time*flow" color='l(100) 0:#a50f15 1:#fee5d9' opacity={.85} />
          <Area position="time*rain" color='l(100) 0:#293c55 1:#f7f7f7' opacity={.85} />
        </Chart>
        <Plugin>
          <Slider
            width="auto"
            height={26}
            start={start}
            end={end}
            xAxis='time'
            yAxis='flow'
            scales={{
              time: {
                type: 'time',
                tickCount: 10,
                mask: 'M/DD H:mm'
              }
            }}
            data={data}
            backgroundChart={{
              type: 'line'
            }}
            onChange={this.onChange.bind(this)}
          />
        </Plugin>
      </div>
    )
  }
} 