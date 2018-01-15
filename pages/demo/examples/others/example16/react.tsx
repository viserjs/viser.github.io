import { Chart, Axis, Legend, Tooltip, Coord, Polygon, Guide } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as $ from 'jquery';

const values = [ 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'];

const axis1Opts = {
  dataKey: 'week',
  grid: null,
  line: null,
  tickLine: null,
  label: null
};

const axis2Opts = {
  dataKey: 'time',
  line: null,
  tickLine: null,
  grid: null,
  label: {
    offset: 3
  }
};

const polygonOpts = {
  position: 'time*week',
  color: ['value', '#BAE7FF-#1890FF-#0050B3'],
  tooltip: 'week*time*value',
  style: {
    stroke: '#fff',
    lineWidth: 1
  }
};

class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/polar-heatmap.json', (data) => {
      this.setState({data});
    })
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Chart forceFit height={400} padding={40} data={data} >
          <Tooltip showTitle={null}/>
          <Coord type="polar" innerRadius={0.2} />
          <Axis {...axis1Opts}/>
          <Axis {...axis2Opts}/>
          <Polygon {...polygonOpts} />
          {
            values.map((val: any, idx: number) => {
              const position = [ 0, idx ];
              return (<Guide key={`guide-${idx}`} type="text"
                top={true}
                position={position}
                content={val}
                style={{
                  fill: '#fff',
                  textAlign: 'center',
                  shadowBlur: 2,
                  shadowColor: 'rgba(0, 0, 0, .45)'
              }}/>)
            })
          }
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
