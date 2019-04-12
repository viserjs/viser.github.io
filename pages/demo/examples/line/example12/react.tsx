import { Chart, Tooltip, Axis, Line, Guide, Legend, Point, registerShape } from 'viser-react';
import * as $ from 'jquery';
import * as React from 'react';

function splitData(data) {
  var marker = data.length - Math.floor(data.length * 0.4);
  var data1 = [];
  var data2 = [];
  for (var i = 0; i < data.length; i++) {
    var d = data[i];
    if (i <= marker) {
      data1.push(d);
    } else {
      data2.push(d);
    }
  }
  data1.push(data2[0]);

  return [data1, data2];
}

registerShape('line', 'splitLine', {
  draw(cfg, container) {
    var type = cfg.origin[0]._origin.date;
    if (type === 'today') {
      var pointArrs = splitData(cfg.points);
      var path1 = [];
      for (var i = 0; i < pointArrs[0].length; i++) {
        var pre = 'L';
        if (i === 0) pre = 'M';
        path1.push([pre, pointArrs[0][i].x, pointArrs[0][i].y]);
      }
      var line1 = container.addShape('path', {
        attrs: {
          path: path1,
          stroke: '#1890ff',
          lineWidth: 2
        }
      });
      var path2 = [];
      for (var _i = 0; _i < pointArrs[1].length; _i++) {
        var _pre = 'L';
        if (_i === 0) _pre = 'M';
        path2.push([_pre, pointArrs[1][_i].x, pointArrs[1][_i].y]);
      }
      container.addShape('path', {
        attrs: {
          path: path2,
          stroke: '#1890ff',
          lineWidth: 2,
          lineDash: [5, 2],
          opacity: 0.7
        }
      });

      return line1;
    } else {
      var path = [];
      for (var _i2 = 0; _i2 < cfg.points.length; _i2++) {
        var _pre2 = 'L';
        if (_i2 === 0) _pre2 = 'M';
        path.push([_pre2, cfg.points[_i2].x, cfg.points[_i2].y]);
      }
      var line = container.addShape('path', {
        attrs: {
          path: path,
          stroke: '#ced4d9',
          lineWidth: 2
        }
      });
      return line;
    } //end of if
  }
})

registerShape('point', 'breathPoint', {
  draw(cfg, container) {
    var data = cfg.origin._origin;
    var point = {
      x: cfg.x,
      y: cfg.y
    };
    if (data.time === '14.20' && data.date === 'today') {
      var decorator1 = container.addShape('circle', {
        attrs: {
          x: point.x,
          y: point.y,
          r: 10,
          fill: '#1890ff',
          opacity: 0.5
        }
      });
      var decorator2 = container.addShape('circle', {
        attrs: {
          x: point.x,
          y: point.y,
          r: 10,
          fill: '#1890ff',
          opacity: 0.5
        }
      });
      var decorator3 = container.addShape('circle', {
        attrs: {
          x: point.x,
          y: point.y,
          r: 10,
          fill: '#1890ff',
          opacity: 0.5
        }
      });
      decorator1.animate({
        r: 20,
        opacity: 0,
        repeat: true
      }, 1800, 'easeLinear');
      decorator2.animate({
        r: 20,
        opacity: 0,
        repeat: true
      }, 1800, 'easeLinear', function() {}, 600);
      decorator3.animate({
        r: 20,
        opacity: 0,
        repeat: true
      }, 1800, 'easeLinear', function() {}, 1200);
      container.addShape('circle', {
        attrs: {
          x: point.x,
          y: point.y,
          r: 6,
          fill: '#1890ff',
          opacity: 0.7
        }
      });
      container.addShape('circle', {
        attrs: {
          x: point.x,
          y: point.y,
          r: 1.5,
          fill: '#1890ff'
        }
      });
    }
  }
})

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

export default class App extends React.Component {
  state = {
    data:[]
  };
  componentDidMount() {
    $.getJSON('/assets/data/cpu-data.json', data => {
      this.setState({ data:data });
    });
  }
  render() {
    const {data} = this.state;
    if (!data.length) {
      return null;
    }
    const Vguide:any=Guide;
    return (
      <Chart forceFit data={data} height={400} padding={[20, 100, 50, 50]} scale={[{
        dataKey:'time',
        min: 13.00,
        max: 15.00
      },{
        dataKey:'cpu',
        max: 100,
        min: 0
      }]}>
        <Tooltip crosshairs={false}/>
        <Legend attachLast={true}/>
        <Axis dataKey="time" label={label}/>
        <Axis dataKey="cpu" label={label}/>
        <Line position="time*cpu" color={['date', ['#1890ff', '#ced4d9']]} shape='splitLine'/>
        <Point position="time*cpu" shape='breathPoint'/>
        <Vguide 
          type="regionFilter" 
          top={true}
          start={['min', 105]} 
          end={['max', 85]}
          color='#ff4d4f'
        />
        <Vguide 
          type="line"
          start={['min', 85]}
          end={['max', 85]} 
          lineStyle={{
            stroke: '#595959',
            lineWidth: 1,
            lineDash: [3, 3]
          }}
          text={{
            position: 'start',
            style: {
              fill: '#8c8c8c',
              fontSize: 15,
              fontWeight: 'normal'
            },
            content: '预警线 85%',
            offsetY: -5
          }}
        />
      </Chart>
    );
  }
}
