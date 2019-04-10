import { Chart, Tooltip, Axis, Line, Guide, Point } from 'viser-react';
import * as $ from 'jquery';
import * as React from 'react';

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}
const style = {
  text: {
    textAlign: 'left',
    stroke: '#fff',
    lineWidth: 2
  }
}
const styleR = {
  text: {
    textAlign: 'right',
    stroke: '#fff',
    lineWidth: 2
  }
}

export default class App extends React.Component {
  state = {
    data:[]
  };
  componentDidMount() {
    $.getJSON('/assets/data/income.json', data => {
      this.setState({ data });
    });
  }
  render() {
    const { data} = this.state;
    const Vguide:any=Guide;
    return (
      <Chart forceFit data={data} height={400} padding={[20, 20, 70, 20]} scale={[{
        dataKey:'time',
        range: [0, 1]
      }]}>
        <Tooltip />
        <Axis dataKey="time" label={label}/>
        <Axis dataKey="rate" label={label}/>
        <Line position="time*rate"/>
        <Vguide 
          type="dataMarker" 
          position={['2014-01-03', 6.763]} 
          content={'受稳健货币政策影响，协定存款利\n率居高不下,收益率达6.763%'}
          style={style}
        />
        <Vguide 
          type="dataMarker" 
          position={['2013-05-31', 2.093]} 
          content={'余额宝刚成立时，并未达到目标资产\n配置，故收益率较低'}
          style={style}
        />
        <Vguide 
          type="dataMarker" 
          position={['2016-09-04', 2.321]} 
          content={'受积极货币政策的影响，收益率降\n到历史最低2.321%'}
          lineLength={30}
          autoAdjust={false}
          style={styleR}
        />
        <Vguide 
          type="dataRegion" 
          start={['2016-12-02', 2.517]}
          end={['2017-03-24', 3.83]}
          content=''
          lineLength={50}
        />
        <Vguide 
          type="dataMarker" 
          position={['2016-12-02', 2.517]} 
          content={'宏观经济过热，受稳健货币政策影\n响，余额宝收益率随之上升'}
          lineLength={130}
          autoAdjust={false}
          style={style}
        />
        <Vguide 
          type="dataMarker" 
          position={['2017-03-24', 3.83]} 
          content=''
          lineLength={50}
        />
      </Chart>
    );
  }
}
