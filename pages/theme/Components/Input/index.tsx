import * as React from 'react';
import './index.scss';

interface IProps {
    value?: any;
    name?: any;
    type?: string;
    onChange?: any;
    onBlur?: any;
    onFocus?: any;
    label?: any;
    style?: any;
}
const Input = (props: IProps) => {
    const inputProp: any = {};
    (typeof props.name !== 'undefined') && (inputProp.name = props.name);
    (typeof props.value !== 'undefined') && (inputProp.value = props.value);
    (typeof props.type !== 'undefined') && (inputProp.type = props.type);
    (typeof props.onChange !== 'undefined') && (inputProp.onChange = props.onChange);
    (typeof props.onBlur !== 'undefined') && (inputProp.onBlur = props.onBlur);
    (typeof props.onFocus !== 'undefined') && (inputProp.onFocus = props.onFocus);
    return <div className="custom-input-wrap" style={props.style || {}}>
        {typeof props.label !== 'undefined' && (
            <div className="input-label">{props.label}</div>
        )}
        <div className={`input-item ${typeof props.label !== 'undefined' ? 'right' : ''}`}>
            <input
                {...inputProp}
            />
        </div>
    </div>
};
export default Input;
