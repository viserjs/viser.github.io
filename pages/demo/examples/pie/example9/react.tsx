import { Chart, Tooltip, Coord, StackBar } from 'viser-react';
import * as $ from 'jquery';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const data = [{
  type: '硕士',
  value: 0.4
}, {
  type: '本科',
  value: 0.21
}, {
  type: '博士',
  value: 0.17
}, {
  type: '初中',
  value: 0.009
}, {
  type: '专科',
  value: 0.013
}, {
  type: '未知',
  value: 0.08
}]

var ds = new DataSet();
var dv = ds.createView().source(data);
dv.transform({
  type: 'percent',
  field: 'value',
  dimension: 'type',
  as: 'percent'
});

export default class App extends React.Component {
  componentDidMount() {
    this.setStyle();
  }

  setStyle = () => {
    const id = 'legend-html';
    if (document.getElementById(id)) {
        return;
    }
    const styleTxt = `
      .g2-label-item-inner {
          text-align: center;
          font-size: 12px;
          color: #ffffff;
          text-shadow: 0px 0px 2px #595959;
      }

      .g2-label-item-outer {
          width:60px;
          font-size: 12px;
          color: #595959;
      }
    `;
    const style = document.createElement('style');
    style.setAttribute('id', id);
    style.innerHTML = styleTxt;
    document.getElementsByTagName('head')[0].appendChild(style);
  }

  render() {
    return (
      <Chart forceFit data={dv.rows} height={400} padding={14}>
        <Tooltip />
        <Coord type='theta' radius={0.75}/>
        <StackBar 
          position='value'
          color={['type', ['#2593fc', '#38c060', '#27c1c1', '#705dc8', '#3b4771', '#f9cb34']]}opacity={1}
          label={['value', function(val) {
            var offset = val > 0.02 ? -30 : 30;
            var label_class = val > 0.02 ? "g2-label-item-inner" : "g2-label-item-outer";
            return {
              offset: offset,
              useHtml: true,
              htmlTemplate: function htmlTemplate(text, item) {
                var d = item.point;
                var percent = String(Math.round(d.percent * 100)) + "%";
                return '<div class=' + label_class + '>' + d.type + percent + '</div>';
              }
            }
          }]}
        />
      </Chart>
    );
  }
}
