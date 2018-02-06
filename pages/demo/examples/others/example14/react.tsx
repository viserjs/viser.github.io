import { Chart, Axis, Legend, Tooltip, Coord, Interval, Guide } from 'viser-react';
import * as React from 'react';
import * as _ from 'lodash';

const data = [
  {"question":"问题 1","percent":0.21},
  {"question":"问题 2","percent":0.40},
  {"question":"问题 3","percent":0.49},
  {"question":"问题 4","percent":0.52},
  {"question":"问题 5","percent":0.53},
  {"question":"问题 6","percent":0.84},
  {"question":"问题 7","percent":1.0},
  {"question":"问题 8","percent":1.2}
];

const scale = [{
  dataKey: 'percent',
  min: 0,
  max: 2,
}];

const interval1Opts = {
  position: 'question*percent',
  color: ['percent', '#BAE7FF-#1890FF-#0050B3'],
  tooltip: ['percent', val => {
    return {
      name: '占比',
      value: val * 100 + '%',
    };
  }],
  label: ['percent', {
    offset: -5,
  }],
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Chart forceFit height={500} padding={[ 40, 40, 130, 40 ]} data={data} scale={scale}>
          <Tooltip title="question" />
          <Coord type="polar" innerRadius={0.1} direction="rotate" />
          <Interval {...interval1Opts} />
          {
            data.map((obj: any, i: number) => {
              const position = [ obj.question, 0 ];
              const content = obj.question + ' ';

              return (
                <Guide type="text" key={`guide-text-${i}`} position={position} content={content} style={{textAlign: 'right'}} />
              );
            })
          }
        </Chart>
      </div>
    );
  }
}


