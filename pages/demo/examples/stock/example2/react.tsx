import { Chart, Tooltip, Axis, Area, Candle, Line } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as $ from 'jquery';

const scale = [{
  dataKey: 'date',
  type: 'time',
  nice: false,
  mask: 'MM-DD',
  tickCount: 10
}, {
  dataKey: 'range',
  min: 20,
  max: 35,
  nice: false,
  tickInterval: 2
}, {
  dataKey: 'mean',
  min: 20,
  max: 35,
  nice: false
}, {
  dataKey: 'stockRange',
  min: 20,
  max: 35,
  nice: false
}];

const dataPre = {
  transform: [{
    type: 'map',
    callback: (obj: any) => {
      obj.stockRange = [ obj.start, obj.end, obj.highest, obj.lowest ];
      return obj;
    }
  }]
};

const tooltipOpts = {
  crosshairs: {
    type: 'line'
  }
};

class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/data/stock-2.json', (data) => {
      this.setState({ data });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Chart forceFit height={600} data={data} dataPre={dataPre} scale={scale}>
          <Tooltip {...tooltipOpts}/>
          <Axis dataKey="mean" show={false}/>
          <Axis dataKey="stockRange" show={false}/>
          <Area position="date*range" />
          <Candle position="date*stockRange" color={['trend', val => {
            if (val === 'up') {
              return '#f04864';
            }

            if (val === 'down') {
              return '#2fc25b';
            }
          }]} tooltip='start*end*highest*lowest'/>
          <Line position="date*mean" color="#FACC14"/>
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
