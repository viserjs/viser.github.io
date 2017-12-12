import { Chart, Axis, Legend, Tooltip, Polygon } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    $.getJSON('/data/heatmap-1.json', (data) => {
      const source = [];
      for(let i = 0; i < data.length; i ++) {
        const item = data[i];
        const obj = {} as any;
        obj.name = item[0];
        obj.day = item[1];
        obj.sales = item[2];
        source.push(obj);
      }

      this.setState({ data: source });
    });
  }
  render() {
    const { data } = this.state;
    const scale = [{
      dataKey: 'name',
      type: 'cat',
      values: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
    }, {
      dataKey: 'day',
      type: 'cat',
      values: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    }];

    const axis1Opts = {
      dataKey: 'name',
      tickLine: null,
      grid: {
        align: 'center',
        lineStyle: {
          lineWidth: 1,
          lineDash: null,
          stroke: '#f0f0f0'
        }
      }
    };
    const axis2Opts = {
      dataKey: 'day',
      title: null,
      grid: {
        align: 'center',
        lineStyle: {
          lineWidth: 1,
          lineDash: null,
          stroke: '#f0f0f0'
        },
        showFirstLine: true
      }
    };
    const seriesOpts = {
      quickType: 'polygon',
      color: ['sales', '#BAE7FF-#1890FF-#0050B3'],
      position: 'name*day',
      label: ['sales', {
        offset: -2,
        textStyle: {
          fill: '#fff',
          shadowBlur: 2,
          shadowColor: 'rgba(0, 0, 0, .45)'
        }
      }],
      style: {
        lineWidth: 1,
        stroke: '#fff'
      }
    };

    return (
      <div>
        <Chart forceFit height={400} data={data} scale={scale}>
          <Legend />
          <Tooltip />
          <Axis {...axis1Opts}/>
          <Axis {...axis2Opts}/>
          <Polygon {...seriesOpts}/>
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));

