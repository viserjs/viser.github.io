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
    public chart:any;
    static defaultProps = new Props();
    public setTheme = async (themeName: string) => {
        Global.setTheme(this.state.theme);
    }
    public componentDidMount() {
        const self=this;
        
    }
    render() {
        const {props} = this;
        const {props:{currentTheme}}=this;
        console.log(currentTheme);
        return <div className="theme-right  theme-pannel">
        {this.state.showChart&&(
            <div className="chart-box">
                <div className="chart-item">
                    <Chart ref={node=>this.chart=node} forceFit height={300} data={props.commonData}>
                        <Tooltip />
                        <Axis />
                        <Line position="week*value" color="city"/>
                        <Point position="week*value" color="city" shape="circle" />
                    </Chart>
                </div>
                <div className="chart-item">
                    <Chart ref={node=>this.chart=node} forceFit height={300} data={props.commonData}>
                        <Tooltip />
                        <Axis />
                        <Line position="week*value" color="city"/>
                        <Area position="week*value" color="city" />
                    </Chart>
                </div>
                <div>
                    <Chart ref={node=>this.chart=node} forceFit height={300} data={props.commonData}>
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