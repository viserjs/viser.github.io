import { Chart, Tooltip, Axis, Point } from 'viser-react';

import * as React from 'react';
import * as $ from 'jquery';

export default class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/scatter.json', (data) => {
      this.setState({ data });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Chart forceFit height={400} data={data}>
        <Tooltip
          showTitle={false}
          crosshairs= {{ type: 'cross' }}
          itemTpl= {`
            <li data-index={index} style="margin-bottom:4px;">
              <span style="background-color:{color};" class="g2-tooltip-marker"></span>
              {name}<br />{value}
            </li>
          `}
        />
        <Axis />
        <Point
          position="height*weight"
          color="gender"
          size={4}
          opacity={0.65}
          tooltip={['gender*height*weight', (gender, height, weight) => {
            return {
              name: gender,
              value: height + '(cm), ' + weight + '(kg)'
            };
          }]}
          shape="circle"
        />
      </Chart>
    );
  }
}





