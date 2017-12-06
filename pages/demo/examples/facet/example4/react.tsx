import { Chart, Facet, View, Tooltip, Legend, Axis, Point, FacetView } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data } from './data'

const scale = [{
  dataKey: 'carat',
  sync: true
}, {
  dataKey: 'price',
  sync: true,
  tickCount: 3
}, {
  dataKey: 'clarity',
  sync: true,
}];

class App extends React.Component {
  render() {
    return (
      <div>
        <Chart forceFit={true} height={600} data={data} scale={scale}>
          <Tooltip />
          <Legend />
          <Axis />
          <Facet type="rect" fields={['cut']}>
            <FacetView>
              <Point position="carat*price" color="clarity" opacity={0.3} size={3} />
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
