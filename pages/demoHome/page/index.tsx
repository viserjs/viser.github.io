import * as React from 'react';
import { Props, State } from './index.typed';
import Left from './components/left';
import Right from './components/Right';
import './index.scss';

export default class App extends React.Component<Props, State> {
    public static defaultProps = new Props();
    public state = new State();
    public componentDidMount() {
        window.addEventListener('resize', this.handleWrapperHeight);
    }
    public componentWillUnmount() {
        window.removeEventListener('resize', this.handleWrapperHeight);
    }

    public handleSetActiveKey = (activeKey:string) => { 
        this.setState({
            activeKey
        });
    }
    // 修复高度
    public handleWrapperHeight = () => {
        this.setState({
            height: window.innerHeight - 60,
        });
    }
    public render() {
        const { height } = this.state;
        return <div className="demo-preview" style={{ height: height }}>
            <Left
                pageLan={this.props.pageLan}
                typeKey={this.props.typeKey}
                activeKey={this.state.activeKey}
                onClick={this.handleSetActiveKey}
            />
            <Right
                pageLan={this.props.pageLan}
                typeKey={this.props.typeKey}
                activeKey={this.state.activeKey}
                onScroll={this.handleSetActiveKey}
            />
        </div>
    }

}
