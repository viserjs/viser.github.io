import * as React from 'react';
import * as $ from 'jquery';
import {Chart,Brush,Legend,Facet,Tooltip} from 'viser-react';

const style=window.document.createElement('style');
style.innerHTML=`
#toolbar button{
  margin:0 5px;
  padding:5px;
  cursor:pointer;
}
`;
window.document.getElementsByTagName('head')[0].appendChild(style);

export default class App extends React.Component{
  state={
    data:[],
    showTooltip:true
  }
  componentDidMount(){
    $.getJSON('/assets/data/iris.json', data=>{
      this.setState({data});
    });
  }
  eachView=(view,facet)=>{
    view.axis(facet.colField, {
      label: null,
      line: {
        lineWidth: 1,
        stroke: '#000'
      },
      tickLine: {
        lineWidth: 1,
        stroke: '#000',
        length: 4
      }
    });
    view.axis(facet.rowField, {
      label: null,
      line: {
        lineWidth: 1,
        stroke: '#000'
      },
      tickLine: {
        lineWidth: 1,
        stroke: '#000',
        length: 4
      }
    });
    if (facet.rowIndex === facet.colIndex) {
      view.point().position(facet.colField + '*' + facet.colField).color('Species', ['#880000', '#008800', '#000088']).opacity(0.5).shape('circle').size(3).active(false);
    } else {
      view.point().position([facet.colField, facet.rowField]).color('Species', ['#880000', '#008800', '#000088']).opacity(0.5).shape('circle').size(3).active(false);
    }
    if ([0, 1, 2, 3].indexOf(facet.rowIndex) > -1 && facet.colIndex === 0) {
      view.guide().text({
        position: [3.7, 'median'],
        content: facet.rowValue,
        style: {
          rotate: -90,
          fontSize: 12,
          fill: '#999',
          textAlign: 'center'
        }
      });
    }
    if ([0, 1, 2, 3].indexOf(facet.colIndex) > -1 && facet.rowIndex === 3) {
      view.guide().text({
        position: ['median', 'min'],
        content: facet.colValue,
        style: {
          fontSize: 12,
          fill: '#999',
          textAlign: 'center'
        },
        offsetY: 20
      });
    }
  }
  setBrushType=(e) =>{
    const type=e.target.id;
    if (!brush) {
      brush = new Brush({
        canvas: chart.get('canvas'),
        dragable: true,
        type: type,
        onBrushstart: function onBrushstart(ev) {
          chart.hideTooltip();
          var x = ev.x,
            y = ev.y;

          var views = chart.getViewsByPoint({
            x: x,
            y: y
          });
          if (views.length > 1) {
            this.chart = views[1];
            var coord = views[1].get('coord');
            this.plot = {
              start: coord.start,
              end: coord.end
            };
            this.xScale = views[1].getXScale();
            this.yScale = views[1].getYScales()[0];
          }
        },
        onBrushmove: function onBrushmove(ev) {
          chart.hideTooltip();

          var data = ev.data;

          chart.eachShape(function(record, shape) {
            if (!shape.get('_originAttrs')) {
              shape.set('_originAttrs', Util.cloneDeep(shape.__attrs)); // 缓存原来的属性
            }
            if (data.indexOf(record) === -1) {
              shape.attr('fill', '#ccc');
            } else {
              var originAttrs = shape.get('_originAttrs');
              shape.__attrs = Util.cloneDeep(originAttrs);
            }
          });
        },
        onDragmove: function onDragmove(ev) {
          chart.hideTooltip();

          var data = ev.data;

          chart.eachShape(function(record, shape) {
            if (!shape.get('_originAttrs')) {
              shape.set('_originAttrs', Util.cloneDeep(shape.__attrs)); // 缓存原来的属性
            }
            if (data.indexOf(record) === -1) {
              shape.attr('fill', '#ccc');
            } else {
              var originAttrs = shape.get('_originAttrs');
              shape.__attrs = Util.cloneDeep(originAttrs);
            }
          });
        }
      });
    } else {
      if (type === 'clear') {
        brush.container.clear();
        // brush.canvas.draw();
      } else {
        brush.setType(type);
      }
    }
  }
  render(){
    const {data,showTooltip}=this.state;
    const scale=[
      {
        dataKey:'Species',
        sync:true
      }
    ];
    return(
      <div>
        <div id="toolbar" style={{textAlign: 'center'}}>
          <button id="XY" onClick={this.setBrushType}>矩形选择</button>
          <button id="X" onClick={this.setBrushType}>横向选择</button>
          <button id="Y" onClick={this.setBrushType}>纵向选择</button>
          <button id="POLYGON" onClick={this.setBrushType}>圈选</button>
          <button id="clear" onClick={this.setBrushType}>清除选择</button>
        </div>
        <Chart
          forceFit={true}
          height={600}
          data={data}
          scale={scale}
        >
          <Legend hoverable={false}/>
          {showTooltip&&(
            <Tooltip />
          )}
          <Facet
            type="matrix"
            fields={['SepalLength', 'SepalWidth', 'PetalLength', 'PetalWidth']}
            eachView={this.eachView}
          />
          <Brush

          />
        </Chart>
      </div>
    );
  }
}