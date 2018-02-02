import { Chart, Tooltip, Pie, Coord, View } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const sourceData = [
  { value: 251, type: '大事例一', name: '子事例一' },
  { value: 1048, type: '大事例一', name: '子事例二' },
  { value: 610, type: '大事例二', name: '子事例三' },
  { value: 434, type: '大事例二', name: '子事例四' },
  { value: 335, type: '大事例三', name: '子事例五' },
  { value: 250, type: '大事例三', name: '子事例六' },
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'percent',
  field: 'value',
  dimension: 'type',
  as: 'percent',
});
const data = dv.rows;

const viewDv = new DataSet.View().source(sourceData);
viewDv.transform({
  type: 'percent',
  field: 'value',
  dimension: 'name',
  as: 'percent'
});
const viewData = viewDv.rows;

const scale = {
  dataKey: 'percent',
  formatter: '.2%',
};

export default class App extends React.Component {
  render() {
    const itemTpl = '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>';

    const style = {
      lineWidth: 1,
      stroke: '#fff'
    };

    const tooltip = [
      'name*percent', (item, percent) => {
      percent = (percent * 100).toFixed(2) + '%';
        return {
            name: item,
            value: percent
        };
      },
    ];

    const color = ['#BAE7FF', '#7FC9FE', '#71E3E3', '#ABF5F5', '#8EE0A1', '#BAF5C4'];

    return (
      <Chart forceFit height={400} data={data} scale={scale}>
        <Tooltip showTitle={false} itemTpl={itemTpl} />
        <Coord type="theta" radius={0.5} />
        <Pie position="percent" color="type" label={['type', { offset: -10, }]} tooltip={tooltip} select={false} style={style} />
        <View data={viewData} scale={scale}>
          <Coord type="theta" radius={0.75} innerRadius={0.5 / 0.75} />
          <Pie position="percent" color={["name", color]} label="name" tooltip={tooltip} select={false} style={style} />
        </View>
      </Chart>
    );
  }
}





