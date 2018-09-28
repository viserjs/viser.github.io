import { Chart, Tooltip, Axis, Line, Area, Guide } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';

const guides = [
  {
    type: 'regionFilter',
    top: true,
    start: ['min', 0],
    end: ['max', 'min'],
    color: '#18a1cd',
  },
  {
    type: 'regionFilter',
    top: true,
    start: ['min', 'max'],
    end: ['max', 0],
    color: '#FF4D4F',
  },
  {
    type: 'region',
    top: false,
    start: [2000, 'max'],
    end: [2016, 'min'],
  },
  {
    type: 'dataMarker',
    top: true,
    position: [1977, 0.18],
    content: '时间进入1977年后，全球气\n温开始呈现整体升高趋势。',
    lineLength: 50,
    style: {
      text: {
        textAlign: 'right',
        fontSize: 13,
      },
      point: {
        stroke: '#FF4D4F',
      },
    },
  },
  {
    type: 'dataMarker',
    top: true,
    position: [1940, 0.08],
    content: '1940年，气温变化首次出现正值。',
    lineLength: 50,
    style: {
      text: {
        textAlign: 'right',
        fontSize: 13,
      },
      point: {
        stroke: '#FF4D4F',
      },
    },
  },
];

export default class App extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    $.getJSON('/assets/data/tempChange.json', data => {
      this.setState({
        data,
      });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Chart forceFit height={440} data={data}>
        <Tooltip />
        <Axis />
        <Area position="year*change" color="white" shape="smooth" />
        <Line position="year*change" color="white" shape="smooth" />
        {guides.map((opts: any, i: number) => {
          return <Guide key={i} {...opts} />;
        })}
      </Chart>
    );
  }
}
