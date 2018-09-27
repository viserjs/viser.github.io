import * as React from 'react';
import { Chart, Tooltip, Axis, Line, View } from 'viser-react';
const DataSet = require('@antv/data-set');

const second = 1000;
const minute = 1000 * 60;
const hour = 60 * minute;
const day = 24 * hour;

function toInterge(number,other?) {
  const fix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (Math.round(number) === number) {
    return '' + number;
  }
  return '' + Number(number).toFixed(fix);
}

function humanizeDuration(duration,other?) {
  const fix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (duration === 0) {
    return 0;
  }
  if (duration < minute) {
    return toInterge(duration / second, fix) + ' 秒';
  }
  if (duration < hour) {
    return toInterge(duration / minute, fix) + ' 分';
  }
  if (duration < day) {
    return toInterge(duration / hour, fix) + '小时';
  }
  return toInterge(duration / hour / 24, fix) + ' 天';
}

const data = [{
    "date": 1489593600000,
    "pv": 17,
    "successRate": 0.23529411764705882,
    "time": 12351000,
    "count": 4
  }, {
    "date": 1489680000000,
    "pv": 10,
    "successRate": 0.6,
    "time": 18000,
    "count": 6
  }, {
    "date": 1489766400000,
    "pv": 3,
    "successRate": 0,
    "time": 0,
    "count": 0
  }, {
    "date": 1489852800000,
    "pv": 3,
    "successRate": 0,
    "time": 0,
    "count": 0
  }, {
    "date": 1489939200000,
    "pv": 18,
    "successRate": 0.2222222222222222,
    "time": 21157000,
    "count": 4
  }, {
    "date": 1490025600000,
    "pv": 32,
    "successRate": 0.25,
    "time": 3543000,
    "count": 8
  }, {
    "date": 1490112000000,
    "pv": 25,
    "successRate": 0.56,
    "time": 10000,
    "count": 14
  }, {
    "date": 1490198400000,
    "pv": 23,
    "successRate": 0.43478260869565216,
    "time": 24000,
    "count": 10
  }, {
    "date": 1490284800000,
    "pv": 7,
    "successRate": 0.2857142857142857,
    "time": 0,
    "count": 2
  }];

  const dash = [{
    "count": 4,
    "date": 1489593600000,
    "time": null
  }, {
    "count": 6,
    "date": 1489680000000,
    "time": 18000
  }, {
    "count": 0,
    "date": 1489766400000,
    "time": 0
  }, {
    "count": 0,
    "date": 1489852800000,
    "time": 0
  }, {
    "count": 4,
    "date": 1489939200000,
    "time": 21157000
  }, {
    "count": 8,
    "date": 1490025600000,
    "time": null
  }, {
    "count": 14,
    "date": 1490112000000,
    "time": null
  }, {
    "count": 10,
    "date": 1490198400000,
    "time": 24000
  }, {
    "count": 2,
    "date": 1490284800000,
    "time": 0
  }];

  function pick(data, field) {
    return data.map(function(item) {
      const result = {};
      for (let key in item) {
        if (item.hasOwnProperty(key) && field.indexOf(key) !== -1) {
          result[key] = item[key];
        }
      }
      return result;
    });
  }

  const padding = [20, 80, 80, 80];
  const scale = [
    {
        dataKey: 'date',
        alias: '日期',
        type: 'time',
        mask: 'MM-DD' 
    },
    {
        dataKey: 'pv',
        alias: '进入次数',
        min: 0 
    },
    {
        dataKey: 'count',
        alias: '次数'
    },
    {
        dataKey: 'time',
        alias: '平均时长',
        sync: true,
        formatter: function formatter(value) {
          return humanizeDuration(value, 0);
        }
    }
  ];

const view1 = new DataSet.View()

view1.source(pick(data, ['pv','time','date']));

const viewData1 = view1.rows;

const view2 = new DataSet.View()

view2.source(pick(dash, ['pv','time','date']));

const viewData2 = view2.rows;

const grid= null;

export default class App extends React.Component {
  render() {
    return (
      <Chart
        container="mountNode"
        forceFit={true}
        height={400}
        padding={padding}
        scale={scale}
      > 
        <Tooltip />
        <View data={viewData1}>
            <Axis dataKey='time' grid={grid}/>
            <Line position="date*pv*count" color="#4FAAEB" />
            <Line position="date*time" color="#9AD681" />
        </View>
        <View data={viewData2}>
            <Tooltip show={false}/>
            <Line position="date*time" color="white" style={{
              lineDash: [4, 4]
            }}/>
        </View>
      </Chart>
    );
  }
}
