import * as React from 'react';
import {
  Chart,
  Tooltip,
  Axis,
  Line,
  Point,
  Area,
  Bar,
  Global,
} from 'viser-react';
import { connect } from 'react-redux';
import './index.scss';

class Props {
  public commonData: any = [];
}
class State {
  public theme: string = 'dark';
  public showChart: boolean = true;
}
class App extends React.Component<Props & any, State> {
  public state = new State();
  static defaultProps = new Props();
  render() {
    const { commonData, currentTheme } = this.props;
    Global.registerTheme('newTheme', {
      ...currentTheme.theme,
    });
    Global.setTheme(currentTheme.theme);
    return (
      <div className="theme-right  theme-pannel">
        {/* <ViserDemoChart data={commonData} /> */}
        <div className="chart-box" key={new Date().getTime()}>
          <div className="chart-item">
            <Chart viewId="1" forceFit height={300} data={commonData}>
              <Tooltip />
              <Axis />
              <Line position="week*value" color="city" />
              <Point position="week*value" color="city" shape="circle" />
            </Chart>
          </div>
          <div className="chart-item">
            <Chart viewId="2" forceFit height={300} data={commonData}>
              <Tooltip />
              <Axis />
              <Line position="week*value" color="city" />
              <Area position="week*value" color="city" />
            </Chart>
          </div>
          <div>
            <Chart viewId="3" forceFit height={300} data={commonData}>
              <Tooltip />
              <Axis />
              <Bar
                position="week*value"
                color="city"
                adjust={[{ type: 'dodge', marginRatio: 1 / 32 }]}
              />
            </Chart>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = ({ theme: { currentTheme, commonData } }) => {
  return {
    currentTheme,
    commonData,
  };
};
const Right = connect(mapState)(App);
export default Right;
