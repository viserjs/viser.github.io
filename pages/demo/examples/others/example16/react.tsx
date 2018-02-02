import { Chart, Axis, Legend, Tooltip, Coord, Guide, Polygon } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';

const values = ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'];

export default class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/polar-heatmap.json', (data) => {
      this.setState({ data });
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <Chart forceFit height={400} padding={40} data={this.state.data}>
          <Tooltip showTitle={null} />
          <Coord type="polar" innerRadius={0.2} />
          <Axis dataKey="week" grid={null} line={null} tickLine={null} label={null} />
          <Axis dataKey="time" grid={null} line={null} tickLine={null} label={{ offset: 3 }} />
          <Polygon
            position="time*week"
            color={['value', '#BAE7FF-#1890FF-#0050B3']}
            tooltip="week*time*value"
            style={{
              stroke: '#fff',
              lineWidth: 1,
            }}
          />
          {
            values.map((val: any, idx) => {
              const position = [0, idx];
              const content = val;

              return (<Guide key={val} type="text" top={true} position={position} content={val} style={{
                fill: '#fff',
                textAlign: 'center',
                shadowBlur: 2,
                shadowColor: 'rgba(0, 0, 0, .45)'
              }}/>)
            })
          }
        </Chart>
      </div>
    );
  }
}

