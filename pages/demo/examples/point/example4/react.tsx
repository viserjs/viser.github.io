import { Chart, Tooltip, Axis, Point, Legend, Global } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as $ from 'jquery';

const scale = [{
  dataKey: 'LifeExpectancy',
  alias: '人均寿命（年）',
}, {
  dataKey: 'Population',
  type: 'pow',
  alias: '人口总数',
}, {
  dataKey: 'GDP',
  alias: '人均国内生产总值($)',
}, {
  dataKey: 'Country',
  alias: '国家/地区',
}];

const colorMap = {
  'Asia': Global.colors[0],
  'Americas': Global.colors[1],
  'Europe': Global.colors[2],
  'Oceania': Global.colors[3],
};

class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/data/bubble.json', (data) => {
      this.setState({ data });
    });
  }

  render() {
    const { data } = this.state;
    const laeblFormatter = (value) => {
      return (value / 1000).toFixed(0) + 'k';
    };

    if (!data.length) {
      return (<div></div>);
    }

    return (
      <Chart forceFit height={400} data={data} scale={scale}>
        <Tooltip showTitle={false} />
        <Legend dataKey="Population" show={true} />
        <Axis
          dataKey="GDP"
          label={{ formatter: laeblFormatter }}
        />
        <Point
          position="GDP*LifeExpectancy"
          color={['continent', val => colorMap[val]]}
          size={['Population', [4, 65]]}
          style={['continent', {
            lineWidth: 1,
            strokeOpacity: 1,
            fillOpacity: 0.3,
            opacity: 0.65,
            stroke: val => colorMap[val],
          }]}
          tooltip="Country*Population*GDP*LifeExpectancy"
        />
      </Chart>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);
