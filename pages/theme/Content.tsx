import * as React from 'react';
import Left from './Left';
import Right from './Right';
class Content extends React.Component<any, any> {
    render() {
        return <div className="theme-content">
            <Left pageLan={this.props.pageLan} />
            <Right pageLan={this.props.pageLan} />
        </div>
    }
}
export default Content;