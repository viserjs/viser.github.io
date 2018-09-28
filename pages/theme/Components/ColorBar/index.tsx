import * as React from 'react';
import './index.scss';

interface IProps {
    onClick?: any;
    colors?: any;
    bgColor?: string;
    blockWidth?: number;
}
const ColorBar = (props: IProps) => {
    return <div className="theme-color-bar" style={props.bgColor ? { backgroundColor: props.bgColor } : {}} onClick={(e: any) => { props.onClick(props.colors, props.bgColor, e) }}>
        {props.colors && props.colors.length !== 0 && props.colors.map((color: string, key: number) => (
            <span key={key} className="color-block" style={{ backgroundColor: color, width: props.blockWidth || 20 }} ></span>
        ))}
    </div>
};
export default ColorBar;
