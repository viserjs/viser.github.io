import { Chart, Facet, View, Tooltip, Legend, Axis, Point, FacetView } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as $ from 'jquery';

const scale = [{
  dataKey: 'carat',
  sync: true,
}, {
  dataKey: 'price',
  sync: true,
  tickCount: 3,
}, {
  dataKey: 'cut',
  sync: true,
}];

class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    // $.getJSON('/assets/data/diamond.json', (data) => {
    //   this.setState({ data });
    // });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Chart forceFit={true} height={600} data={data} scale={scale}>
          <Tooltip />
          <Legend />
          <Axis />
          <Facet type="rect" fields={['cut', 'clarity']}>
            <FacetView>
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
