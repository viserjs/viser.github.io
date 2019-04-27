import { Chart, Tooltip, Axis, Line, Legend, Point } from 'viser-react';
import * as $ from 'jquery';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

export default class App extends React.Component {
  state = {
    data: [],
    KEY_DOWN: false,
    shared: true
  };
  componentDidMount() {
    $.getJSON('/assets/data/fertility.json', data => {
      const ds = new DataSet();
      const dv = ds.createView().source(data);
      dv.transform({
        type: 'sort',
        callback: function callback(a, b) {
          return a.year - b.year;
        }
      });
      this.setState({ data:dv.rows });
    });
    this.setStyle();

    const that = this;

    $(document).keydown(function() {
      that.setState({
        KEY_DOWN: true,
        shared: false
      })
    });

    $(document).keyup(function() {
      that.setState({
        KEY_DOWN: false,
        shared: true
      })
    });
  }

  setStyle = () => {
    const id = 'legend-html';
    if (document.getElementById(id)) {
        return;
    }
    const styleTxt = `
        .g2-tooltip {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.9);
          border-radius: 3px;
          color: rgb(87, 87, 87);
          font-size: 12px;
          line-height: 20px;
          padding: 10px 10px 6px 10px;
          box-shadow: 0px 0px 10px #aeaeae;
          pointer-events: none;
        }

        .g2-tooltip-list {
          margin: 0;
          padding: 0;
          list-style-type: none;
        }
        .g2-tooltip-value {
          margin-left: 30px;
          display: inline;
          float: right;
        }
        .g2-tooltip-tail {
          background-color: #f9f9f9;
          color: #909090;
          font-size: 14px;
          padding-bottom: 10px;
          margin-top: 10px;
          list-style-type: none;
          text-align: center;
          padding-top: 10px;
        }
        .g2-tooltip-story {
          color: #9b9b9b;
          font-size: 12px;
          padding-bottom: 10px;
          margin-top: 10px;
          list-style-type: none;
          padding-top: 10px;
        }
    `;
    const style = document.createElement('style');
    style.setAttribute('id', id);
    style.innerHTML = styleTxt;
    document.getElementsByTagName('head')[0].appendChild(style);
  }

  htmlContent = (title, items) => {
    var html = '<div class="g2-tooltip">';
    var titleDom = '<div class="g2-tooltip-title" style="margin-bottom: 4px;">' + title + '</div>';
    var listDom = '<ul class="g2-tooltip-list">';
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var itemDom = '<li data-index={index}>' + '<span style="background-color:' + item.color + ';width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>' + item.name + '<span class="g2-tooltip-value">' + item.value + '</span>' + '</li>';
      listDom += itemDom;
    }
    listDom += '</ul>';

    if (this.state.KEY_DOWN) {
      if (title === '1955' && items[0].name === 'China') {
        var storyDom = '<li class="g2-tooltip-story">中国折线，受三年自然灾害影响，<br/>1959-1961年间出生率锐减。</li>';
        return html + titleDom + listDom + storyDom + '</div>';
      }
      return html + titleDom + listDom + '</div>';
    } else {
      var tailDom = '<li class="g2-tooltip-tail">按住ALT键查看单独数据点</li>';
      return html + titleDom + listDom + tailDom + '</div>';
    }
  }

  render() {
    const {data} = this.state;
    if (!data.length) {
      return null;
    }
    return (
      <Chart forceFit data={data} height={400} padding={[10, 30, 80, 30]} scale={[{
        dataKey:'year',
        range: [0, 1]
      }]}>
        <Tooltip 
          crosshairs='y'
          shared={this.state.shared}
          htmlContent={this.htmlContent}
        />
        <Legend/>
        <Axis dataKey="year" label={label}/>
        <Axis dataKey="value" label={label}/>
        <Line 
          position="year*value" 
          color='country' 
          size={['country', function(val) {
            if (val === 'China') {
              return 4;
            }
            return 2;
          }]}
          opacity={['country', function(val) {
            if (val === 'China') {
              return 1;
            }
            return 0.7;
          }]}
        />
        <Point position="year*value" color='country'
          size={['country', function(val) {
            if (val === 'China') {
              return 4;
            }
            return 0;
          }]}
          style={{
            lineWidth: 2
          }}
        />
      </Chart>
    );
  }
}
