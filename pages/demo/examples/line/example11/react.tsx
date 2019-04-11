import { Chart, Tooltip, Axis, Line, Guide, Legend } from 'viser-react';
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
    fontSize: 12,
    stroke: 'white',
    lineWidth: 2,
    fontWeight: 10
  },
  point: {
    stroke: '#2fc25b',
    r: 4
  }
}
const style2 = {
  text: {
    textAlign: 'right',
    fontSize: 12,
    stroke: 'white',
    lineWidth: 2,
    fontWeight: 10
  },
  point: {
    r: 4
  },
  line: {
    stroke: '#A3B1BF',
    lineWidth: 2
  }
}

export default class App extends React.Component {
  state = {
    data:[]
  };
  componentDidMount() {
    $.getJSON('/assets/data/blockchain.json', data => {
      this.setState({ data:data });
    });
  }
  render() {
    const {data} = this.state;
    if (!data.length) {
      return null;
    }
    const Vguide:any=Guide;
    return (
      <Chart forceFit data={data} height={400} padding={[30, 20, 70, 30]} scale={[{
        dataKey:'nlp',
        min: 0,
        max: 100
      },{
        dataKey:'blockchain',
        min: 0,
        max: 100
      }]}>
        <Tooltip crosshairs={false}/>
        <Legend position='top-center'/>
        <Axis dataKey="date" label={label}/>
        <Axis dataKey="blockchain" label={label}/>
        <Axis dataKey="nlp" show={false}/>
        <Line position="date*blockchain" color='#1890ff'/>
        <Line position="date*nlp" color='#2fc25b'/>
        <Vguide 
          type="dataMarker" 
          top={true}
          position={['2016-02-28', 9]} 
          content={'Blockchain 首超 NLP'}
          style={style}
          lineLength={30}
        />
        <Vguide 
          type="dataMarker"
          top={true}
          position={['2017-12-17', 100]} 
          content={'2017-12-17, 受比特币影响，\n blockchain搜索热度达到顶峰\n峰值：100'}
          style={style2}
          lineLength={30}
        />
      </Chart>
    );
  }
}
