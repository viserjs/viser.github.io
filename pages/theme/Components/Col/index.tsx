import * as React from 'react';
import './index.scss';

interface IProps {
  children?: any;
  span?: number; // 范围为1-24
}
const Col = (props: IProps) => {
  const span =
    typeof props.span !== 'undefined' && props.span > 0 && props.span < 25
      ? props.span
      : 12;
  return (
    <div className={`custome-col`} style={{ width: (span / 24) * 100 + '%' }}>
      {props.children}
    </div>
  );
};
export default Col;
