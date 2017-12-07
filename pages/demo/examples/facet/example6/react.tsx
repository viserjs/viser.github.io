import { Chart, Facet, View, Tooltip, Legend, Axis, Bar, FacetView } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data } from './data'

const scale = [{
  dataKey: 'mean',
  tickCount: 5,
  sync: true,
}, {
  dataKey: 'cut',
  sync: true,
}];

const facetDataPre = {
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
      <Chart forceFit={true} height={600} data={data} scale={scale}>
        <Tooltip crosshairs={false} />
        <Legend dataKey="cut" position="top" />
        <Axis dataKey="cut" label={null} tickLine={null} />
        <Facet type="tree" fields={['clarity']} line={{ stroke: '#c0d0e0' }} lineSmooth={true}>
          <FacetView dataPre={facetDataPre}>
            <Bar position="cut*mean" color="cut" />
          </FacetView>
        </Facet>
      </Chart>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);