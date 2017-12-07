import { Chart, Tooltip, Pie, Coord, View } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

const data = [
  { value: 251, type: '大事例一', name: '子事例一' },
  { value: 1048, type: '大事例一', name: '子事例二' },
  { value: 610, type: '大事例二', name: '子事例三' },
  { value: 434, type: '大事例二', name: '子事例四' },
  { value: 335, type: '大事例三', name: '子事例五' },
  { value: 250, type: '大事例三', name: '子事例六' },
];

const dataPre = {
  transform: {
    type: 'percent',
    field: 'value',
    dimension: 'type',
    as: 'percent'
  },
};

const viewDataPre = {
  transform: {
    type: 'percent',
    field: 'value',
    dimension: 'name',
    as: 'percent'
  },
};

const scale = {
  dataKey: 'percent',
  formatter: '.2%',
};

class App extends React.Component {
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
      <Chart forceFit height={500} data={data} dataPre={dataPre} scale={scale}>
        <Tooltip showTitle={false} itemTpl={itemTpl} />
        <Coord type="theta" radius={0.5} />
        <Pie position="percent" color="type" label={['type', { offset: -10, }]} select={false} style={style} />
        <View dataPre={viewDataPre} scale={scale}>
          <Coord type="theta" radius={0.75} innerRadius={0.5 / 0.75} />
          <Pie position="percent" color={["name", color]} label="name" tooltip={tooltip} select={false} style={style} />
        </View>
      </Chart>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);
