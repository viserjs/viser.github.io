import { registerShape, Chart, Axis, Tooltip, Coord, Point, Interval, Guide, Series, View } from 'viser-react';
import * as React from 'react';

const scale = [{
  dataKey: 'type',
  range: [0, 1],
}, {
  dataKey: 'value',
  sync: true,
}];

const dataBackground = [];
for (let i = 0; i < 50; i++) {
  dataBackground.push({
    type: i + '',
    value: 10,
  });
}
const dataFront = [];
for (let i = 0; i < 50; i++) {
  const item = {
    type: i + '',
    value: 10,
  };
  if (i === 25) {
    item.value = 14;
  }
  if (i > 25) {
    item.value = 0;
  }
  dataFront.push(item);
}

const insideScale = [{
  dataKey: 'type',
  tickCount: 3
}];
const insideAxisLabel = {
  offset: -15,
  textStyle: {
    textAlign: 'center',
    fill: '#CBCBCB',
    fontSize: 18
  },
  formatter: val => {
    if (val === '49') {
      return 50;
    }

    return val;
  }
};

const frontIntervalColor = ['value', '#3023AE-#53A0FD'];
const frontGuidePosition = ['50%', '65%'];
const frontGuideStyle = {
  fill: '#CBCBCB',
  fontSize: 64,
  textAlign: 'center',
  textBaseline: 'middle' as 'middle',
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Chart forceFit height={400} scale={scale} animate={false}>
          <View data={dataBackground}>
            <Coord
              type="polar"
              startAngle={-202.5}
              endAngle={22.5}
              innerRadius={0.75}
              radius={0.8}
            />
            <Interval
              position="type*value"
              color="#CBCBCB"
              size={6}
            />
          </View>
          <View data={dataBackground} scale={insideScale}>
            <Axis dataKey="value" show={false} />
            <Axis
              dataKey="type"
              grid={null}
              line={null}
              tickLine={null}
              label={insideAxisLabel}
            />
            <Coord
              type="polar"
              startAngle={-202.5}
              endAngle={22.5}
              innerRadius={0.95}
              radius={0.55}
            />
            <Interval
              position="type*value"
              color="#CBCBCB"
              size={6}
            />
          </View>
          <View data={dataFront}>
            <Coord
              type="polar"
              startAngle={-202.5}
              endAngle={22.5}
              innerRadius={0.75}
              radius={0.8}
            />
            <Interval
              position="type*value"
              color={frontIntervalColor}
              opacity={1}
              size={6}
            />
            <Guide
              type="text"
              position={frontGuidePosition}
              content="26°"
              style={frontGuideStyle}
            />
          </View>
        </Chart>
      </div>
    );
  }
}

