import { Chart, View, Tooltip, Coord, StackInterval, Guide } from 'viser-react';
import * as React from 'react';
import * as _ from 'lodash';
const DataSet = require('@antv/data-set');

const text = [ 'MIDNIGHT', '3 AM', '6 AM', '9 AM', 'NOON', '3 PM', '6 PM', '9 PM' ];
const data = [];
for (let i = 0; i < 24; i++) {
  const item = {} as any;
  item.type = i + '';
  item.value = 10;
  data.push(item);
}

const dv = new DataSet.View().source(data).transform({
  type: 'percent',
  field: 'value',
  dimension: 'type',
  as: 'percent'
});

const stackInterval1Opts = {
  position: 'percent',
  color: ['type', ['rgba(255, 255, 255, 0)']],
  style: {
    stroke: '#444',
    lineWidth: 1
  },
  tooltip: false,
  select: false,
};

const stackInterval2Opts = {
  position: 'type*value',
  size: ['type', function(val) {
    if (val % 3 === 0) {
      return 4;
    } else {
      return 0;
    }
  }],
  color: '#444',
  tooltip: false,
  label: ['type', function(val) {
    if (val % 3 === 0) {
      return text[val / 3];
    }
    return '';
  }, {
    offset: 15,
    textStyle: {
      fontSize: 12,
      fontWeight: 'bold',
      fill: '#bfbfbf'
    }
  }]
};

const userData = [
  { type: '睡眠', value: 70 },
  { type: '淡茶 & 烟斗 & 冥想', value: 10 },
  { type: '写作', value: 10 },
  { type: '教课', value: 40 },
  { type: '酒吧吃肉配白酒', value: 40 },
  { type: '散步', value: 10 },
  { type: '拜访马大大', value: 30 },
  { type: '阅读', value: 30 },
];

const userDv = new DataSet.View().source(userData).transform({
  type: 'percent',
  field: 'value',
  dimension: 'type',
  as: 'percent'
});

const userScale = [{
  dataKey: 'percent',
  formatter: (val: any) => {
    return (val * 100).toFixed(2) + '%';
  }
}];

const stackInterval3Opts = {
  position: 'percent',
  color: 'type',
  label: ['type', {
    offset: 40,
  }],
  select: false,
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Chart forceFit height={400} padding={80}>
          <Tooltip showTitle={false} />
          <View data={dv}>
            <Coord type="theta" innerRadius={0.9} />
            <StackInterval {...stackInterval1Opts} />
            <Guide type="text" position={[ '50%', '50%' ]} content="24 hours"
              style={{
                lineHeight: 240,
                fontSize: '30',
                fill: '#262626',
                textAlign: 'center'}}
            />
          </View>
          <View data={dv}>
            <Coord type="polar" innerRadius={0.9} />
            <StackInterval {...stackInterval2Opts} />
          </View>
          <View data={userDv} scale={userScale}>
            <Coord type="theta" innerRadius={0.75} />
            <StackInterval {...stackInterval3Opts} />
          </View>
        </Chart>
      </div>
    );
  }
}


