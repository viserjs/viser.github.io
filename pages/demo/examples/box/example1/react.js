export const template =
`import { Chart, Tooltip, Axis, Box, LiteChart } from '../../../packages/viser-react/src/index';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const tooltipOpts = {
      showTitle: false,
      crosshairs: {
        type: 'rect'
      },
      itemTpl: '<li data-index={index} style="margin-bottom:4px;">'
          + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
          + '{name}<br/>'
          + '<span style="padding-left: 16px">最大值：{high}</span><br/>'
          + '<span style="padding-left: 16px">上四分位数：{q3}</span><br/>'
          + '<span style="padding-left: 16px">中位数：{median}</span><br/>'
          + '<span style="padding-left: 16px">下四分位数：{q1}</span><br/>'
          + '<span style="padding-left: 16px">最小值：{low}</span><br/>'
          + '</li>'
    };
    const boxStyle = {
      stroke: '#545454',
      fill: '#1890FF',
      fillOpacity: 0.3
    };
    const boxTooltip = ['x*low*q1*median*q3*high', (x, low, q1, median, q3, high) => {
      return {
        name: x,
        low,
        q1,
        median,
        q3,
        high
      };
    }];
    return (
      <div>
        <Chart forceFit height={400} data={data} dataPre={dataPre} scale={scale}>
          <Tooltip {...tooltipOpts}/>
          <Axis />
          <Box position='x*range' style={boxStyle} tooltip={boxTooltip}/>
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
`;
