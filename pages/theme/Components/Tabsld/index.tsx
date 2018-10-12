import * as React from 'react';
import './index.scss';
class TabSld extends React.Component<any, any> {
  public state = {
    visible:
      typeof this.props.visible !== 'undefined' ? this.props.visible : false,
    height: 'auto',
  };
  public handleVisible = () => {
    this.setState({ visible: !this.state.visible });
  };
  public componentDidMount() {
    // let marHeight = 0;
    // const style = (window as any).getComputedStyle ?
    //     (window as any).getComputedStyle(this.refs.wrap) :
    //     (this as any).refs.wrap.currentStyle;
    // marHeight = parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    // this.setState({ height: (this as any).refs.wrap.clientHeight + marHeight });
  }
  render() {
    return (
      <div className="tab-sld">
        <h3 className="tit" onClick={this.handleVisible}>
          {this.props.title || `title`}
        </h3>
        <div
          className={`tab-body ${this.props.className || ''}`}
          style={{ height: this.state.visible ? this.state.height : 0 }}
        >
          <div className="tab-wrap" ref="wrap">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
export default TabSld;
