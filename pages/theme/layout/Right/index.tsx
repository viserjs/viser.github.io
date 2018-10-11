import * as React from 'react';
import { Chart, Tooltip,Coord, Axis,Area,Bar, Line, Point, Global,Pie } from 'viser-react';
import { connect } from 'react-redux';
import './index.scss';


class Props {
    public commonData:any=[];
}
class State {
    public theme: string = 'dark';
    public showChart:boolean=true;
}
class App extends React.Component<Props & any, State> {
    public state = new State();
    static defaultProps = new Props();
    render() {
        const {props} = this;
        const {currentTheme}=this.props;
        Global.registerTheme('newTheme',{
            ...currentTheme.theme
        });
        Global.setTheme('newTheme');
        // 这里设置后，global已经能看到改变了，只有设置dark的时候才有效果
        console.log(Global);
        return <div className="theme-right  theme-pannel">
        {this.state.showChart&&(
            <div className="chart-box">
                <div className="chart-item">
                    <Chart viewId="1" forceFit height={300} data={props.commonData} >
                        <Tooltip />
                        <Axis />
                        <Line position="week*value" color="city"/>
                        <Point position="week*value" color="city" shape="circle" />
                    </Chart>
                </div>
                <div className="chart-item">
                    <Chart viewId="2" forceFit height={300} data={props.commonData} >
                        <Tooltip />
                        <Axis />
                        <Line position="week*value" color="city"/>
                        <Area position="week*value" color="city" />
                    </Chart>
                </div>
                <div>
                    <Chart viewId="3" forceFit height={300} data={props.commonData} >
                        <Tooltip />
                        <Axis />
                        <Bar position="week*value" color="city" adjust={[{ type: 'dodge', marginRatio: 1 / 32 }]}/>
                    </Chart>
                </div>
            </div>
        )}
        </div>
    }
}

const mapState = ({ theme: { currentTheme, commonData } }) => {
    return {
        currentTheme,
        commonData
    }
}
const Right = connect(mapState)(App);
export default Right;