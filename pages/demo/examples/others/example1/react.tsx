import { Chart, Axis, Tooltip, Point, Guide } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as $ from 'jquery';
import * as _ from 'lodash';

const dataPre = {
  transform: {
    type: 'map',
    callback: obj => {
      obj.exp_amo = obj.exp_amo * 1;
      return obj;
    }
  }
};

const scale = [{
  dataKey: 'exp_dat',
  type: 'time',
  mask: 'M/YY',
  tickCount: 14
}, {
  dataKey: 'exp_amo',
  type: 'log',
  ticks: [225, 1000000 ,2000000 , 4000000, 6000000]
}];

const height = 600;

const axis1Opts = {
  dataKey: 'exp_dat',
  tickLine: null,
  label: {
    textStyle: {
      fontSize: 14
    }
  }
};

const axis2Opts = {
  dataKey: 'exp_amo',
  tickLine: null,
  line: null,
  grid: {
    lineStyle: {
      lineDash: null,
      stroke: '#999'
    }
  },
  label: {
    formatter: function(val) {
      let formatted;
      if (+val === 225) {
        formatted = 0;
      } else {
        formatted = val / 1000000;
      }
      return '$' + formatted + 'M';
    }
  }
};

class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/data/others-1.json', (data) => {
      this.setState({data: data});
    })
  }

  render() {
    const  { data } = this.state;
    return (
      <div>
        <Chart forceFit height={height} data={data} dataPre={dataPre} scale={scale}>
          <Tooltip showTitle={false}/>
          <Axis {...axis1Opts}/>
          <Axis {...axis2Opts}/>
          <Point position='exp_dat*exp_amo' size={['exp_amo', [ 1, 10 ]]} opacity='exp_amo' shape='circle' tooltip='exp_dat*can_nam*spe_nam*exp_amo'/>
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
