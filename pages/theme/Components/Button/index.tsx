import * as React from 'react';
import './index.scss';

const icons = {
  reset: '&#xe611;',
  import: '&#xe601;',
  export: '&#xe600;',
  download: '&#xe712;',
  refresh: '&#xe602;',
  copy: '&#xe765;',
  arrow: '&#xe65c;',
};
interface IProps {
  type?: string;
  size?: string;
  icon?: string;
  onClick?: any;
  style?: any;
  children?: any;
  className?: string;
}
const Button = (props: IProps) => {
  /**
   * @prop:type,size,onClick,icon,style,children,className
   * type:default,dark,null
   * size:small,medium,large
   * onClick:function,
   * icon:reset,import,export,download,refresh,copy,arrow
   * style:object;
   * children:node;
   * className:string
   */
  return (
    <button
      className={`viser-custom-btn ${props.type || ''} ${props.size ||
        'medium'} ${props.className || ''}`}
      style={props.style || {}}
      onClick={e => {
        if (props.onClick) {
          props.onClick(e);
        }
      }}
    >
      {props.icon &&
        Object.keys(icons).indexOf(props.icon) >= 0 && (
          <i
            className="icon-font"
            dangerouslySetInnerHTML={{ __html: icons[props.icon] }}
          />
        )}
      {props.children}
    </button>
  );
};
export default Button;
