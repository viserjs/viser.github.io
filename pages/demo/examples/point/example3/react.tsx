import { Chart, Tooltip, Axis, Point, Legend } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as $ from 'jquery';

class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/data/dv-grades.json', (data) => {
      this.setState({ data });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Chart forceFit height={500} data={data}>
        <Legend reversed />
        <Tooltip
          crosshairs= {{ type: 'cross' }}
        />
        <Axis dataKey="Score" grid={null} />
        <Axis
          dataKey="Class"
          tickLine={null}
          subTickCount={1}
          subTickLine={{
            lineWidth: 1,
            stroke: '#BFBFBF',
            length: 4,
          }}
          grid={{
            align: 'center',
            lineStyle: {
              stroke: '#8C8C8C',
              lineWidth: 1,
              lineDash: [3, 3],
            },
          }}
        />
        <Point
          position="Class*Score"
          color="Grade"
          adjust="jitter"
          size={4}
          opacity={0.65}
        />
      </Chart>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);
