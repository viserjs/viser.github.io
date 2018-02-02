import { Chart, Axis, Legend, Tooltip, View, Coord, Point, Interval, Guide } from 'viser-react';
import * as React from 'react';
import * as _ from 'lodash';
const data = [
  {"title":"Revenue","subtitle":"US$, in thousands","ranges":[150,225,300],"actual":270,"target":250},
  {"title":"Profit","subtitle":"%","ranges":[20,25,30],"actual":23,"target":26},
  {"title":"Order Size","subtitle":"US$, average","ranges":[350,500,600],"actual":100,"target":550},
  {"title":"New Customers","subtitle":"count","ranges":[1400,2000,2500],"actual":1650,"target":2100},
  {"title":"Satisfaction","subtitle":"out of 5","ranges":[3.5,4.25,5],"actual":3.2,"target":4.4}
];

const scale = [{
  dataKey: 'population',
  tickInterval: 1000000,
}];

const colorMap = {
  'Under 5 Years': '#E3F4BF',
  '5 to 13 Years': '#BEF7C8',
  '14 to 17 Years': '#86E6C8',
  '18 to 24 Years': '#36CFC9',
  '25 to 44 Years': '#209BDD',
  '45 to 64 Years': '#1581E6',
  '65 Years and Over': '#0860BF'
};

const legendItems = [
  {
    value: '差',
    marker: {symbol: 'square', fill: '#FFA39E', radius: 5}
  },
  {
    value: '良',
    marker: {symbol: 'square', fill: '#FFD591', radius: 5}
  },
  {
    value: '优',
    marker: {symbol: 'square', fill: '#A7E8B4', radius: 5}
  },
  {
    value: '实际值',
    marker: {symbol: 'square', fill: '#223273', radius: 5}
  },
  {
    value: '目标值',
    marker: {
      symbol: 'line',
      stroke: '#262626',
      radius: 5
    }
  },
];

export default class App extends React.Component {

  render() {
    let y = 0;
    const yGap = 0.1;
    return (
      <div>
        <Chart forceFit height={400} padding={[100, 150]} data={data} scale={scale}>
          <Tooltip />
          <Legend custom={true} clickable={false} items={legendItems}/>
          {
            data.map((item, i) => {
              const ranges = data[i].ranges;
              const scale = [{
                dataKey: 'actual',
                min: 0,
                max: ranges[2],
                nice: false
              }, {
                dataKey: 'target',
                min: 0,
                max: ranges[2],
                nice: false
              }];
              const start = {x:0, y};
              const end = {x:1, y: y+yGap};
              y += yGap + 0.125;
              return (<View key={`view-${i}`} start={start} end={end} data={[data[i]]} scale={scale}>
                <Coord type="rect" direction='LB'/>
                <Axis dataKey="target" show={false}/>
                <Axis dataKey="actual" position="right"/>
                <Point position="title*target" color="#square" shape="line" size={12} style={{lineWidth: 2}}/>
                <Interval position="title*actual" color="#223273" size={15}/>
                <Guide type="region" start={[-1, 0]} end={[1, ranges[0]]} style={{
                  fill: '#FFA39E',
                  fillOpacity: 0.85
                }}/>
                <Guide type="region" start={[-1, ranges[0]]} end={[1, ranges[1]]} style={{
                  fill: '#FFD591',
                  fillOpacity: 0.85
                }}/>
                <Guide type="region" start={[-1, ranges[1]]} end={[1, ranges[2]]} style={{
                  fill: '#A7E8B4',
                  fillOpacity: 0.85
                }}/>
              </View>);
            })
          }
        </Chart>
      </div>
    );
  }
}


