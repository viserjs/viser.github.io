## summary
The interaction of diagrams is the bridge between people and cold data. Viser provides a series of interaction events to help achieve the second presentation of the chart data, such as drilling or rollup. We have supported about 14 kinds of events.
- Mouse movement event： onMouseDown,onMouseMove,onMouseLeave,onMouseUp,
- Mouse click event： onClick,onDbClick,
- Mobile event： onTouchStart,onTouchMove,onTouchEnd,
- Chart area events： onPlotEnter,onPlotMove,onPlotLeave,onPlotClick,onPlotDbClick

In addition,  axis and legend tag has some special events.

The event callback function provides two parameters, the event  and the chart instance , to facilitate the user to obtain the event source and data, and to handle the chart instance according to the actual scene.

Let's come to see each tag support what kind of events and how can we code to implement requirements.

## Labels and Supported Events
### Chart
Chart tag support
- Mouse movement event： onMouseDown,onMouseMove,onMouseLeave,onMouseUp,
- Mouse click event： onClick,onDbClick,
- Mobile event： onTouchStart,onTouchMove,onTouchEnd,
- Chart area events： onPlotEnter,onPlotMove,onPlotLeave,onPlotClick,onPlotDbClick

Code example：
```javascript
<Chart forceFit height={400} data={data} scale={scale} onClick={(ev, chart) => {
  // todo sth
}}>
  <Tooltip />
  <Axis />
  <Line position="year*value" />
  <Point position="year*value" shape="circle" />
</Chart>
```

### Graphic element
Graphic element tags include：pie,line,smoothLine,dashLine,stackLine,area,stackArea,smoothArea,interval,
stackInterval,dodgeInterval,bar,stackBar,dodgeBar,point,funnel,pyramid,schema,box,candle,polygon,contour,heatmap,
edge,sankey,errorBar,jitterPoint,path,series

Support event
- Mouse movement event： onMouseDown,onMouseMove,onMouseLeave,onMouseUp,
- Mouse click event： onClick,onDbClick,
- Mobile event： onTouchStart,onTouchMove,onTouchEnd,

<img src="/assets/image/series_label_component.png" width="450" height="250"/>

#### label
- Mouse movement event： onLabelMouseDown,onLabelMouseMove,onLabelMouseLeave,onLabelMouseUp,
- Mouse click event： onLabelClick,onLabelDbClick,
- Mobile event： onLableTouchStart,onLabelTouchMove,onLabelTouchEnd

Code example：
```javascript
<Chart forceFit height={400} data={data} scale={scale} >
  <Tooltip />
  <Axis />
  <Line position="year*value" />
  <Point position="year*value" shape="circle" onClick={(ev, chart) => {
    // todo sth
  }}/>
</Chart>
```

### Tooltip
Tooltip tag, support onShow,onHide,onChange(This event is often used to dynamically change the displayed information).

Code example：

```javascript
<Chart forceFit height={400} data={data} scale={scale}>
  <Tooltip showTitle={false} onChange={(ev, chart) => {
    const item = ev.items[0]; // get tooltip content
    item.value = '格式化-' + (item.value * 100).toFixed(2) + '%';
  }}/>
  <Coord type="theta" />
  <Axis />
  <Legend dataKey="item" />
  <Pie
    position="percent"
    color="item"
    style={{ stroke: '#fff', lineWidth: 1 }}
    label={['percent', {
      formatter: (val, item) => {
        return item.point.item + ': ' + val;
      }
    }]}
  />
</Chart>
```

###  Axis
Axis label, support for many events。

<img src="/assets/image/axis_component.png" width="600" height="350">

#### title
- Mouse movement event： onTitleMouseDown,onTitleMouseMove,onTitleMouseLeave,onTitleMouseUp,
- Mouse click event： onTitleClick,onTitleDbClick,
- Mobile event： onTitleTouchStart,onTitleTouchMove,onTitleTouchEnd,

### label
- Mouse movement event： onLabelMouseDown,onLabelMouseMove,onLabelMouseLeave,onLabelMouseUp,
- Mouse click event： onLabelClick,onLabelDbClick,
- Mobile event： onLabelTouchStart,onLabelTouchMove,onLabelTouchEnd,

### ticks
- Mouse movement event： onTicksMouseDown,onTicksMouseMove,onTicksMouseLeave,onTicksMouseUp,
- Mouse click event： onTicksClick,onTicksDbClick,
- Mobile event： onTicksTouchStart,onTicksTouchMove,onTicksTouchEnd,

### line
- Mouse movement event： onLineMouseDown,onLineMouseMove,onLineMouseLeave,onLineMouseUp,
- Mouse click event： onLineClick,onLineDbClick,
- Mobile event： onLineTouchStart,onLineTouchMove,onLineTouchEnd,

### grid
- Mouse movement event： onGridMouseDown,onGridMouseMove,onGridMouseLeave,onGridMouseUp,
- Mouse click event： onGridClick,onGridDbClick,
- Mobile event： onGridTouchStart,onGridTouchMove,onGridTouchEnd,

Code example：
```javascript
<Chart forceFit height={400} data={data} scale={scale} >
  <Tooltip />
  <Axis onTitleMouseDown={(ev, chart) => {
    // todo sth
  }}/>
  <Line position="year*value" />
  <Point position="year*value" shape="circle" />
</Chart>
```

### Legend

- Self-supported events： onHover,onClick

<img src="/assets/image/legend_component.png" width="350" height="200"/>

### title
Here is some tips, if you are using The title component , only set position equals left  or right (such as: ```<Legend position="left or right" title={{}}> ```), the title component will show，title content is field name. code like this can hide title component ```<Legend position="left or right" title={null}> ``` 。
- Mouse movement event： onTitleMouseDown,onTitleMouseMove,onTitleMouseLeave,onTitleMouseUp,
- Mouse click event： onTitleClick,onTitleDbClick,
- Mobile event： onTitleTouchStart,onTitleTouchMove,onTitleTouchEnd,

### item
- Mouse movement event： onItemMouseDown,onItemMouseMove,onItemMouseLeave,onItemMouseUp,
- Mouse click event： onItemClick,onItemDbClick,
- Mobile event： onItemTouchStart,onItemTouchMove,onItemTouchEnd,

### marker
- Mouse movement event： onMarkerMouseDown,onMarkerMouseMove,onMarkerMouseLeave,onMarkerMouseUp,
- Mouse click event： onMarkerClick,onMarkerDbClick,
- Mobile event： onMarkerTouchStart,onMarkerTouchMove,onMarkerTouchEnd,

### text
- Mouse movement event： onTextMouseDown,onTextMouseMove,onTextMouseLeave,onTextMouseUp,
- Mouse click event： onTextClick,onTextDbClick,
- Mobile event： onTextTouchStart,onTextTouchMove,onTextTouchEnd,

Code example：
```javascript
<Chart forceFit height={400} data={data} scale={scale} >
  <Tooltip />
  <Axis />
  <Legend position="left" title="field" onTextMouseDown={(ev, chart) => {
    // todo sth
  }}/>
  <Line position="year*value" />
  <Point position="year*value" shape="circle" />
</Chart>
```

### Guide  ( to be done)
Support event
- Mouse movement event： onMouseDown,onMouseMove,onMouseLeave,onMouseUp,
- Mouse click event： onClick,onDbClick,
- Mobile event： onTouchStart,onTouchMove,onTouchEnd,
