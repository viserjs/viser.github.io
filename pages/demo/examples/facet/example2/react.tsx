import { Chart, Facet, View, Tooltip, Legend, Axis, Bar, FacetView } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data } from './data'

const scale = [{
  dataKey: 'mean',
  sync: true
}, {
  dataKey: 'cut',
  sync: true,
}];

const viewDataPre = {
  transform: {
    type: 'aggregate',
    fields: ['price'],
    operations: ['mean'],
    as: ['mean'],
    groupBy: ['cut'],
  },
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Chart forceFit={true} height={600} data={data} scale={scale}>
          <Tooltip />
          <Legend />
          <Facet type="circle" fields={['clarity']}>
            <FacetView dataPre={viewDataPre}>
              <Tooltip />
              <Bar position="cut*mean" color="cut" />
            </FacetView>
          </Facet>
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);