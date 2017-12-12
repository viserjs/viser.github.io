import { Chart, Axis, Legend, Tooltip, Heatmap, Guide } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as $ from 'jquery';

class App extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    $.getJSON('/data/heatmap-4.json', (data) => {
      this.setState({ data });
    });
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <Chart forceFit height={400} data={data} padding={[ 0, 30, 60, 30 ]}>
          <Legend offset={10}/>
          <Tooltip showTitle={false} />
          <Heatmap color={['tmp', '#F51D27-#FA541C-#FF8C12-#FFC838-#FAFFA8-#80FF73-#12CCCC-#1890FF-#6E32C2']} position="g*l"/>
          <Guide type="image" start={[ 'min', 'max' ]} end={[ 'max', 'min' ]} src="https://gw.alipayobjects.com/zos/rmsportal/NeUTMwKtPcPxIFNTWZOZ.png"/>
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));

