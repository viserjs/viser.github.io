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
  Legend,
  Pie,
  Coord
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
            <div>
              <Chart viewId="1" forceFit height={300} data={commonData}>
                <Axis title={{text:'cc'}}/>
                <Tooltip />
                <Line position="week*value" color="city" />
                <Legend dataKey="city"/>
                <Point position="week*value" color="city" shape="circle" />
              </Chart>
            </div>
            <div>
              <Chart viewId="2" forceFit height={300} data={commonData}>
                <Axis />
                <Tooltip />
                <Legend dataKey="city"/>
                <Line position="week*value" color="city" />
                <Area position="week*value" color="city" />
              </Chart>
            </div>
          </div>
          <div className="chart-item">
            <Chart viewId="3" forceFit height={600} data={commonData}>
              <Coord type="theta"/>
              <Tooltip />
              <Pie
                position="value"
                color="id"
                label={['value', {
                  formatter: val=>val,
                  offset:-40
                }]}
              />
            </Chart>
          </div>
          <div style={{clear:'both'}}></div>
          <div>
          <Chart viewId="4" forceFit height={300} data={commonData}>
              <Axis />
              <Tooltip />
              <Legend dataKey="city"/>
              <Bar
                position="week*value"
                color="city"
                adjust={[{ type: 'dodge', marginRatio: 1 / 32 }]}
                label={['value',{
                  formatter:val=>val
                }]}
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
