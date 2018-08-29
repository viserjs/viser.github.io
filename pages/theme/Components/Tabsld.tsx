import * as React from 'react';
import './Tabsld.scss';
class TabSld extends React.Component<any, any> {
    public state = {
        visible: typeof this.props.visible !== 'undefined' ? this.props.visible : false
    };
    public handleVisible = () => {
        this.setState({ visible: !this.state.visible })
    }
    render() {
        return <div className="tab-sld">
            <h3 className="tit" onClick={this.handleVisible}>{this.props.title || `title`}</h3>
            <div className={`tab-body${this.state.visible ? ' on' : ''}`}>
                {this.props.children}
            </div>
        </div>
    }
}
export default TabSld;