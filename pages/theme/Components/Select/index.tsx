import * as React from 'react';
import './index.scss';

class Props {
  public value?: any;
  public name?: any;
  public type?: string;
  public onChange?: any;
  public onBlur?: any;
  public onFocus?: any;
  public label?: any;
  public style?: any;
  public children?: any;
}
class State {}

export default class Select extends React.Component<Props, State> {
  public state = new State();
  static defaultProps = new Props();
  render() {
    const { props } = this;
    const inputProp: any = {};
    typeof props.name !== 'undefined' && (inputProp.name = props.name);
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
      <div className="custom-select-wrap" style={props.style || {}}>
        {typeof props.label !== 'undefined' && (
          <div className="select-label">{props.label}</div>
        )}
        <div
          className={`select-item ${
            typeof props.label !== 'undefined' ? 'right' : ''
          }`}
        >
          <select {...inputProp}>{props.children}</select>
        </div>
      </div>
    );
  }
}

/* <Select
  label={getTransText('legend/layout',pageLan)}
  value="2"
  onChange={e=>console.log(e.target.value)}
>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</Select> */
