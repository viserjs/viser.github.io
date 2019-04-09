import { Chart, Tooltip, Axis, Line, Guide, Point } from 'viser-react';
import * as $ from 'jquery';
import * as React from 'react';

const TICKS = ["2012-09", "2013-05", "2014-01", "2014-09", "2015-05", "2016-01", "2016-09", "2017-05", "2018-02"];

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
    $.getJSON('/assets/data/salesTrend.json', data => {
      this.setState({ data });
    });
  }
  render() {
    const { data} = this.state;
    const Vchart:any=Chart;
    return (
      <Vchart forceFit data={data} height={400} padding={[50, 20, 50, 20]} scale={[{
        dataKey:'date',
        ticks: TICKS
      }]}>
        <Tooltip />
        <Axis dataKey="buyin" show={false}/>
        <Axis dataKey="date" label={label}/>
        <Line position="date*buyin"/>
        <Point 
          position="date*buyin" 
          size={['date',function(val) {
            if (TICKS.indexOf(val) >= 0) {
              return 3;
            }
            return 0;
          }]}
          label={['date*buyin', function(date, buyin) {
            if (TICKS.indexOf(date) >= 0) {
              return buyin + '万';
            }
            return '';
          }, {
            textStyle: {
              fill: '#7a7a7a',
              fontSize: 12,
              stroke: 'white',
              lineWidth: 2,
              fontWeight: 300
            }
          }]}
          style={{
            lineWidth: 2
          }}
        />
        <Guide 
          type="line" 
          top={true} 
          start={['2012-09', 5396]}
          end={['2018-02', 5396]}
          lineStyle={{
            stroke: '#595959',
            lineWidth: 1,
            lineDash: [3, 3]
          }}
          text={{
            position: 'start',
            style: {
              fill: '#8c8c8c',
              fontSize: 12,
              fontWeight: 300
            },
            content: '均值线 5,396万',
            offsetY: -5
          }}
        />
      </Vchart>
    );
  }
}
