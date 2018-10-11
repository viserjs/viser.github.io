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
    public componentDidMount(){
        const {currentTheme}=this.props;
        Global.registerTheme(currentTheme.title,{
            ...currentTheme.theme
        });
        this.forceUpdate();
    }
    public componentWillReceiveProps(nextProps){
        const {currentTheme}=nextProps;
        Global.registerTheme(currentTheme.title,{
            ...currentTheme.theme
        });
        this.forceUpdate();
    }
    render() {
        const {props} = this;
        const {currentTheme}=this.props;
        // Global.setTheme('newTheme');
        return <div className="theme-right  theme-pannel">
        {this.state.showChart&&(
            <div className="chart-box">
                <div className="chart-item">
                    <Chart forceFit height={300} data={props.commonData} theme={currentTheme.title}>
                        <Tooltip />
                        <Axis />
                        <Line position="week*value" color="city"/>
                        <Point position="week*value" color="city" shape="circle" />
                    </Chart>
                </div>
                <div className="chart-item">
                    <Chart forceFit height={300} data={props.commonData} theme={currentTheme.title}>
                        <Tooltip />
                        <Axis />
                        <Line position="week*value" color="city"/>
                        <Area position="week*value" color="city" />
                    </Chart>
                </div>
                <div>
                    <Chart forceFit height={300} data={props.commonData} theme={currentTheme.title}>
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