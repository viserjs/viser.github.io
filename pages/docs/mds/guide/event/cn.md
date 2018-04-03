## 简介
图表交互是打通人与冰冷数据的桥梁，viser 提供一系列的交互事件，帮助实现图表数据的二次呈现，比如下钻上卷。我们一共支持共14种事件。
- 鼠标移动事件： onMouseDown,onMouseMove,onMouseLeave,onMouseUp,
- 鼠标点击事件： onClick,onDbClick,
- 移动端事件： onTouchStart,onTouchMove,onTouchEnd,
- 图表区域事件： onPlotEnter,onPlotMove,onPlotLeave,onPlotClick,onPlotDbClick

除此之外，axis,legend 标签有部分特殊事件。

事件的回调函数提供 事件 event 和 图表实例 chart 两个参数，方便用户获取事件源及数据 ，并对图表实例做相应的处理。

下面我们来了解下每个标签具体支持哪些事件把。

## 标签及支持的事件
### 图表 Chart
图表标签 chart 支持
- 鼠标移动事件： onMouseDown,onMouseMove,onMouseLeave,onMouseUp,
- 鼠标点击事件： onClick,onDbClick,
- 移动端事件： onTouchStart,onTouchMove,onTouchEnd,
- 图表区域事件： onPlotEnter,onPlotMove,onPlotLeave,onPlotClick,onPlotDbClick

代码示例：
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

### 图形元素
图形元素标签包括：pie,line,smoothLine,dashLine,stackLine,area,stackArea,smoothArea,interval,
stackInterval,dodgeInterval,bar,stackBar,dodgeBar,point,funnel,pyramid,schema,box,candle,polygon,contour,heatmap,
edge,sankey,errorBar,jitterPoint,path,series

支持事件
- 鼠标移动事件： onMouseDown,onMouseMove,onMouseLeave,onMouseUp,
- 鼠标点击事件： onClick,onDbClick,
- 移动端事件： onTouchStart,onTouchMove,onTouchEnd,

<img src="/assets/image/series_label_component.png" width="450" height="250"/>

#### label 组件 （修复中）
- 鼠标移动事件： onLabelMouseDown,onLabelMouseMove,onLabelMouseLeave,onLabelMouseUp,
- 鼠标点击事件： onLabelClick,onLabelDbClick,
- 移动端事件： onLableTouchStart,onLabelTouchMove,onLabelTouchEnd

代码示例：
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

### 提示 Tooltip
提示 tooltip 标签，支持 onShow,onHide,onChange 这个事件常用于动态更改显示信息。

代码示例：

```javascript
<Chart forceFit height={400} data={data} scale={scale}>
  <Tooltip showTitle={false} onChange={(ev, chart) => {
    const item = ev.items[0]; // 获取tooltip要显示的内容
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

### 坐标轴 Axis
坐标轴 axis 标签，支持非常多的事件。

<img src="/assets/image/axis_component.png" width="600" height="350">

#### title 组件
- 鼠标移动事件： onTitleMouseDown,onTitleMouseMove,onTitleMouseLeave,onTitleMouseUp,
- 鼠标点击事件： onTitleClick,onTitleDbClick,
- 移动端事件： onTitleTouchStart,onTitleTouchMove,onTitleTouchEnd,

### label 组件
- 鼠标移动事件： onLabelMouseDown,onLabelMouseMove,onLabelMouseLeave,onLabelMouseUp,
- 鼠标点击事件： onLabelClick,onLabelDbClick,
- 移动端事件： onLabelTouchStart,onLabelTouchMove,onLabelTouchEnd,

### ticks 组件
- 鼠标移动事件： onTicksMouseDown,onTicksMouseMove,onTicksMouseLeave,onTicksMouseUp,
- 鼠标点击事件： onTicksClick,onTicksDbClick,
- 移动端事件： onTicksTouchStart,onTicksTouchMove,onTicksTouchEnd,

### 线组件
- 鼠标移动事件： onLineMouseDown,onLineMouseMove,onLineMouseLeave,onLineMouseUp,
- 鼠标点击事件： onLineClick,onLineDbClick,
- 移动端事件： onLineTouchStart,onLineTouchMove,onLineTouchEnd,

### 网格组件
- 鼠标移动事件： onGridMouseDown,onGridMouseMove,onGridMouseLeave,onGridMouseUp,
- 鼠标点击事件： onGridClick,onGridDbClick,
- 移动端事件： onGridTouchStart,onGridTouchMove,onGridTouchEnd,

代码示例：
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

### 图例 Legend

- 本身支持的事件： onHover,onClick

<img src="/assets/image/legend_component.png" width="350" height="200"/>

### 标题组件
title 组件在使用时要注意，只有 position 为 left  right (示例： <Legend position="left or right" title={{}}> )才会显示出来，展示的内容是字段名称, <Legend position="left or right" title={null}> 可以隐藏title 。
- 鼠标移动事件： onTitleMouseDown,onTitleMouseMove,onTitleMouseLeave,onTitleMouseUp,
- 鼠标点击事件： onTitleClick,onTitleDbClick,
- 移动端事件： onTitleTouchStart,onTitleTouchMove,onTitleTouchEnd,

### item 组件
- 鼠标移动事件： onItemMouseDown,onItemMouseMove,onItemMouseLeave,onItemMouseUp,
- 鼠标点击事件： onItemClick,onItemDbClick,
- 移动端事件： onItemTouchStart,onItemTouchMove,onItemTouchEnd,

### marker 组件
- 鼠标移动事件： onMarkerMouseDown,onMarkerMouseMove,onMarkerMouseLeave,onMarkerMouseUp,
- 鼠标点击事件： onMarkerClick,onMarkerDbClick,
- 移动端事件： onMarkerTouchStart,onMarkerTouchMove,onMarkerTouchEnd,

### text 组件
- 鼠标移动事件： onTextMouseDown,onTextMouseMove,onTextMouseLeave,onTextMouseUp,
- 鼠标点击事件： onTextClick,onTextDbClick,
- 移动端事件： onTextTouchStart,onTextTouchMove,onTextTouchEnd,

代码示例：
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

### 引导 Guide ( to be done)
支持事件
- 鼠标移动事件： onMouseDown,onMouseMove,onMouseLeave,onMouseUp,
- 鼠标点击事件： onClick,onDbClick,
- 移动端事件： onTouchStart,onTouchMove,onTouchEnd,


