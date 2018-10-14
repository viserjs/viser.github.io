import * as React from 'react';
import './index.scss';

class Props {
  public onClick?: any;
  public colors?: any;
  public bgColor?: string;
  public blockWidth?: number;
  public title?: string;
  public colorId: any;
  public selectedId: any;
}
class State {
  public colors: any = [];
  public bgColor: string = '';
  public title: string = '';
}
export default class ColorBar extends React.Component<Props, State> {
  public state = new State();
  static defaultProps = new Props();
  public componentDidMount() {
    this.setState({
      colors: [...this.props.colors],
      bgColor: this.props.bgColor,
      title: this.props.title,
    });
  }
  render() {
    const { state, props } = this;
    return (
      <div
        className={`theme-color-bar${props.colorId === props.selectedId ? ' selected' : ''}`}
        style={state.bgColor ? { backgroundColor: state.bgColor } : {}}
        onClick={(e: any) => {
          props.onClick(state.colors, state.bgColor, state.title, props.colorId, e);
        }}
      >
        {state.colors &&
          state.colors.length !== 0 &&
          state.colors.map((color: string, key: number) => (
            <span
              key={key}
              className="color-block"
              style={{ backgroundColor: color, width: props.blockWidth || 20 }}
            />
          ))}
      </div>
    );
  }
}
