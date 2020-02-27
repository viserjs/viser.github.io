import * as React from 'react';
import { render } from 'react-dom';
import { SketchPicker } from 'react-color';
import { colorRGB2Hex } from '../../../common/utils';
import './index.scss';

const gloStore = {};
let tempId;
let count = 0;
const document = (window as any).document;
if (!document.getElementById('sketchPicker-box')) {
  const div = document.createElement('div');
  div.id = 'sketchPicker-box';
  document.getElementsByTagName('body')[0].appendChild(div);
}
class SketchProps {
  public cfg?: any;
}
class SketchState {}
class Sketch extends React.Component<SketchProps, SketchState> {
  public state = new SketchState();
  static defaultProps = new SketchState();
  public onChangeComplete = color => {
    gloStore[tempId].color = color.hex;
    gloStore[tempId].clicked = false;
  };
  render() {
    const { cfg } = this.props;
    if (!cfg) {
      return null;
    }
    return (
      <div className="sketch-Box" style={{ left: cfg.x, top: cfg.y }}>
        <SketchPicker
          color={cfg.color}
          onChangeComplete={this.onChangeComplete}
        />
      </div>
    );
  }
}
const createSketcher = (cfg = null) => {
  render(<Sketch cfg={cfg} />, document.getElementById('sketchPicker-box'));
};

class Props {
  public value?: any;
  public name?: any;
  public type?: string;
  public onChange?: any;
  public onBlur?: any;
  public onFocus?: any;
  public label?: any;
  public style?: any;
  public showColor?: boolean = false;
  public completeSelect?: any;
  public placeholder?: string;
}
class State {
  componentId: number;
}

(window as any).addEventListener('click', function(e) {
  const box = document.getElementById('sketchPicker-box');
  if (!gloStore || !box.innerHTML) {
    return;
  }
  if (e.target !== gloStore[tempId].target && !box.contains(e.target)) {
    createSketcher();
    gloStore[tempId].target = null;
  }
});

export default class Input extends React.Component<Props, State> {
  public state = new State();
  static defaultProps = new Props();
  public handleClick = e => {
    const { componentId } = this.state;
    // console.log(componentId);
    tempId = componentId;
    let y = e.clientY + 20;
    const color = colorRGB2Hex(e.target.style.backgroundColor);
    if (y > window.innerHeight - 305) {
      y = e.clientY - 325;
    }
    gloStore[componentId].target = e.target;
    gloStore[componentId].color = color;
    createSketcher({
      x: e.clientX - 110,
      y,
      color,
    });
  };
  public componentDidMount() {
    const self = this;
    const timeId = count++;
    gloStore[timeId] = {
      target: null,
      color: '',
      clicked: true,
    };
    self.setState({
      componentId: timeId,
    });
    if (self.props.completeSelect) {
      setInterval(() => {
        if (
          !gloStore[timeId].clicked &&
          self.props.value !== gloStore[timeId].color
        ) {
          self.props.completeSelect(gloStore[timeId].color);
          gloStore[timeId].clicked = true;
        }
      }, 100);
    }
  }
  render() {
    const { props } = this;
    const inputProp: any = {};
    typeof props.name !== 'undefined' && (inputProp.name = props.name);
    typeof props.placeholder !== 'undefined' &&
      (inputProp.placeholder = props.placeholder);
    typeof props.value !== 'undefined' && (inputProp.value = props.value);
    typeof props.type !== 'undefined' && (inputProp.type = props.type);
    typeof props.onChange !== 'undefined' &&
      (inputProp.onChange = e => {
        props.onChange(e);
      });
    typeof props.onBlur !== 'undefined' &&
      (inputProp.onBlur = e => {
        props.onBlur(e);
      });
    typeof props.onFocus !== 'undefined' &&
      (inputProp.onFocus = e => {
        props.onFocus(props.onFocus);
      });
    return (
      <div className="custom-input-wrap" style={props.style || {}}>
        {typeof props.label !== 'undefined' && (
          <div className="input-label">{props.label}</div>
        )}
        <div
          className={`input-item ${
            typeof props.label !== 'undefined' ? 'right' : ''
          }`}
        >
          <input
            className={`${props.showColor ? 'color-ipt' : ''}`}
            {...inputProp}
          />
          {props.showColor && (
            <span className="color-block">
              <i
                style={{ backgroundColor: props.value || '#ffffff' }}
                onClick={this.handleClick}
              />
            </span>
          )}
        </div>
      </div>
    );
  }
}
