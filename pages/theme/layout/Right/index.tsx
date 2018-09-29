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
    static defaultProps = new Props();
    public setTheme = async (themeName: string) => {
        await this.setState({ theme: themeName });
        Global.setTheme(this.state.theme);
    }
    public componentDidMount() {
        const props = this.props;
        Global.registerTheme('newTheme', {
            colors: ['red', 'red', 'red']
        });
        const self = this;
        setTimeout(self.setTheme, 3000, 'dark');
        setTimeout(() => {
            self.setState({ theme: 'dark' })
        }, 3000)
    }
    render() {
        // Global.setTheme('dark');
        const props = this.props;
        return <div className="theme-right  theme-pannel">
            <Chart forceFit height={400} data={props.commonData} theme='dark'>
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