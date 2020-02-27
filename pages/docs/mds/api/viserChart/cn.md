# Chart

图表组件，内部生成了一个 chart 实例，包含众多子组件的加载和更新。

# API

### height?: number;

- 描述：指定图表的高度，单位为 'px'。

### width?: number;

- 描述：指定图表的宽度，默认单位为 'px'，当 forceFit: true 时宽度不生效。

### animate?: boolean | object;

- 描述：图表动画开关，默认为 true，即开启动画。

### forceFit?: boolean;

- 描述：图表的宽度自适应开关，默认为 false，设置为 true 时表示自动取 dom（实例容器）的宽度。

### background?: IBackground;

- 描述：设置图表整体的边框和背景样式，是一个对象，

Object 类型 IBackground

```
interface IBackground {
  stroke?: string;
  strokeOpacity?: number;
  lineWidth?: number;
  fill?: string;
  fillOpactiy?: number;
  radius?: number;
}
```

### plotBackground?: IBackground;

- 描述：图表绘图区域的边框和背景样式，是一个对象，

类型 IBackground

```
interface IBackground {
  stroke?: string;
  strokeOpacity?: number;
  lineWidth?: number;
  fill?: string;
  fillOpactiy?: number;
  radius?: number;
}
```

### padding?: number | object | number[] | string;

- 描述：图表内边距。有如下配置格式。

padding 为数字以及数组类型时使用方法同 CSS 盒模型。

padding 中存在 'auto'时会自动计算边框，目前仅考虑 axis 和 legend 占用的边框。

示例：

```
padding: [ 20, 30, 20, 30]
padding: 20
padding: { top: 20, right: 30, bottom: 20, left: 30 }
padding: 'auto'
padding: [20, 'auto', 30, 'auto'] // 暂未支持
```

暂时不支持设置百分比，如 padding: [ '20%', '30%' ]，该百分比相对于整个图表的宽高。

### theme?: string;

- 描述：主题，目前支持 'default'、'dark' , 可采用注册的方式注册新主题

### renderer?: string;

- 描述：指定图表的渲染方式，自 viser 3.2 版本开始，支持 chart 级别使用 svg 渲染。
  默认值: canvas,可选值 svg.

示例：

```
<Chart height={400} data={data} renderer='svg' />
```

### data

- 类型：Array/DataSet
- 描述：设置图表的数据源，data 是一个包含 JSON 对象的数组或者 DataSet.View 对象。

### scale

- 类型：Object
- 描述：配置数据比例尺，该配置会影响数据在图表中的展示方式。

# 事件

统一传参 (ev: any, chart: any) => void

#### onMouseDown

#### onMouseMove

#### onMouseLeave

#### onMouseUp

#### onClick

#### onDbClick

#### onTouchStart

#### onTouchMove

#### onTouchEnd

#### onPlotEnter

#### onPlotMove

#### onPlotLeave

#### onPlotClick

#### onPlotDbClick
