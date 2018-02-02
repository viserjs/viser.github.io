import { Chart, Facet, View, Tooltip, Legend, Axis, Point, FacetView } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';

const scale = [{
  dataKey: 'carat',
  sync: true
}, {
  dataKey: 'price',
  sync: true,
}, {
  dataKey: 'cut',
  sync: true,
}];

export default class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/diamond.json', (data) => {
      this.setState({ data });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Chart forceFit={true} height={400} data={data} scale={scale}>
          <Tooltip />
          <Legend />
          <Axis />
          <Facet type="list" fields={['cut']} cols={3} padding={30}>
            <FacetView>
              <Point position="carat*price" color="cut" opacity={0.3} size={3} shape="circle"/>
            </FacetView>
          </Facet>
        </Chart>
      </div>
    );
  }
}




