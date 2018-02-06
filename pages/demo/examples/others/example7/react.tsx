import { Chart, Axis, Tooltip, Coord, JitterPoint } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
import * as _ from 'lodash';

const scale = [{
  dataKey: 'type',
  range: [0, 1]
}];

const axis1Opts = {
  dataKey: 'clarity',
  grid: {
    align: 'center',
    lineStyle: {
      lineDash: [0, 0]
    }
  }
};

const jitterPointOpts = {
  position: 'clarity*type',
  color: 'clarity',
  shape: 'circle',
  opacity: 0.65,
};

export default class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/diamond.json', (data) => {
      data.forEach((obj: any) => {
        obj.type = '1';
      });
      this.setState({data: data});
    })
  }
  render() {
    const { data } = this.state;

    return (
      <div>
        <Chart forceFit height={400} padding={[ 40, 100, 80, 80 ]} data={data} scale={scale}>
          <Tooltip />
          <Coord type="polar"/>
          <Axis {...axis1Opts}/>
          <JitterPoint {...jitterPointOpts}/>
        </Chart>
      </div>
    );
  }
}


