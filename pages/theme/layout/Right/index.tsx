import * as React from 'react';
import { Chart, Tooltip, Axis, Line, Point, Global } from 'viser-react';
import { connect } from 'react-redux';



class Props {

}
class State {
    public theme: string = 'default';
}
class App extends React.Component<Props & any, State> {
    public state = new State();
    public chart:any;
    static defaultProps = new Props();
    public setTheme = async (themeName: string) => {
        await this.setState({ theme: themeName });
        Global.setTheme(this.state.theme);
    }
    public componentDidMount() {
        const self=this;
        setInterval(()=>{
            if(!self.chart||!self.chart.chart){
                return;
            }
            self.setState({
                theme:self.state.theme==='default'?'dark':'default'
            },()=>{
                const chart=self.chart.chart.chartInstance;
                console.log(chart);
                chart.repaint();
            });
        },2000)
    }
    render() {
        const props = this.props;
        return <div className="theme-right  theme-pannel">
            <Chart ref={node=>this.chart=node} forceFit height={400} data={props.commonData} theme={'dark'}>
                <Tooltip />
                <Axis />
                <Line position="year*value" />
                <Point position="year*value" shape="circle" />
            </Chart>
        </div>
    }
}

const mapState = ({ theme: { defaultTheme, commonData } }) => {
    return {
        defaultTheme,
        commonData
    }
}
const Right = connect(mapState)(App);
export default Right;