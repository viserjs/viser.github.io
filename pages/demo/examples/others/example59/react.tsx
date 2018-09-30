import { Chart, Venn } from 'viser-react';
import * as React from 'react';

var data = [{"sets":["A"],"size":12,"label":"A"},{"sets":["B"],"size":12,"label":"B"},{"sets":["C"],"size":12,"label":"C"},{"sets":["A","B"],"size":2,"label":"A&B"},{"sets":["A","C"],"size":2,"label":"A&C"},{"sets":["B","C"],"size":2,"label":"B&C"},{"sets":["A","B","C"],"size":1}];

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Chart forceFit height={600} data={data}>
          <Venn
            label="sets"
            size="size"
            color="id"
            active={false}
            shape="hollow"
            style={{
              lineWidth: 10,
              padding: 10,
              textStyle: {
                textAlign: 'center',
                fontSize: 32,
              },
            }}
          />
        </Chart>
      </div>
    );
  }
}
