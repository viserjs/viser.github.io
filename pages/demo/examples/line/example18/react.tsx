import { Chart, Tooltip, Axis, Line, Legend } from 'viser-react';
import * as $ from 'jquery';
import * as React from 'react';

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

export default class App extends React.Component {
  state = {
    data:[]
  };
  componentDidMount() {
    $.getJSON('/assets/data/oil-price.json', data => {
      this.setState({ data });
    });
  }
  render() {
    const {data} = this.state;
    if (!data.length) {
      return null;
    }
    return (
      <Chart forceFit data={data} height={400} padding={[20, 110, 70, 35]} scale={[{
        dataKey: 'date',
        range: [0, 1],
        tickCount: 10,
        type: 'timeCat'
      }]}>
        <Tooltip crosshairs='y' shared={true}/>
        <Legend attachLast={true}/>
        <Axis dataKey="date" label={label}/>
        <Axis dataKey="price" label={label}/>
        <Line position="date*price" shape='hv' color='country'/>
      </Chart>
    );
  }
}
