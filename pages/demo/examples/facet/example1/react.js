export const template =
`import { Chart, Facet, View, Tooltip, Legend, Axis, Point, FacetView } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { chartData } from './data'

const scale = [{
  dataKey: 'carat',
  sync: true
}, {
  dataKey: 'price',
  sync: true,
  tickCount: 3
}, {
  dataKey: 'cut',
  sync: true,
}];

class App extends React.Component {
  render() {
    return (
      <div>
        <Chart forceFit={true} height={600} data={chartData} scale={scale}>
          <Tooltip />
          <Legend />
          <Facet type="rect" fields={['cut', 'clarity']}>
            <FacetView>
              <Tooltip />
              <Axis />
              <Point position="carat*price" color="cut" opacity={0.3} size={3} />
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
`;

