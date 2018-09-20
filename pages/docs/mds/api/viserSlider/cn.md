# Slider

用于数据范围的选择插件，尤其适用于大数据量的图表绘制，帮助用户更好地关注某一范围的数据可视化结果。

## API

### xAxis: string;

- 描述：必须声明，我们的 Slider 是带有背景图表的滑动条组件，该字段用于声明该背景图表的横轴映射字段，同时该字段也是数据过滤字段。

### yAxis: string;

- 描述：必须声明，我们的 Slider 是带有背景图表的滑动条组件，该字段用于声明该背景图表的纵轴轴映射字段。

### data: any[];

- 描述：必须声明，数据源。

### container?: any;

- 描述：对应 slider 的 DOM 容器，可以传入该 DOM 的 id 或者直接传入容器的 html 节点对象。

### width?: number | string;

- 描述：设置 slider 组件的宽度，默认为 auto，表示自适应容器的宽度。

### height?: number | string;

- 描述：设置 slider 组件的高度，默认为 26，单位为 'px'。

### padding?: number | number[];

- 描述：设置 slider 组件所在画布 canvas 的内边距，用于与图表对齐（默认图表的 canvas 容器也是带了内边距），默认值同 G2 默认主题的 padding 相同，[ 20, 20, 95, 80 ]。

### start?: string;

- 描述：声明滑动条起始滑块的位置对应的数据值，默认为最小值。

### end?: string;

- 描述：声明滑动条结束滑块的位置对应的数据值，默认为最大值。

### minSpan?: number;

- 描述：

### maxSpan?: number;

- 描述：

### scales?: any;

- 描述：用于对 xAxis 和 yAxis 字段进行列定义，用于同操作的图表中对应的列定义相同。

示例代码：

```
{
  [`${xAxis}`]: {
    type: 'time',
    mask: 'MM-DD'
  }
}
```

### backgroundChart?: any;

- 描述：slider 滑块的背景图表配置，可配置其图表类型以及颜色：

```
{
  type: [ 'area' ], // 图表的类型，可以是字符串也可是是数组
  color: '#CCD6EC'
}
```

### onChange?: (opts: any) => {};

- 描述：当滑动条滑块发生变化时，触发该回调函数，主要用于更新 ds 的状态量。该回调函数会提供一个参数，该参数是一个对象，包含如下属性：

```
onChange: (obj) => {
  const { startValue, endValue, startText, endText } = obj;
}
```

- startValue 起点滑块当前对应的原始数据值，如果是 time 或者 timeCat 类型是，该值为时间戳，请注意。
- endValue 终点滑块当前对应的原始数据值，如果是 time 或者 timeCat 类型是，该值为时间戳，请注意。
- startText 起点滑块当前的显示文本值
- endText 终点滑块当前的显示文本值

> 说明：之所以区分 text 和 value，是因为大部分情况下用户会对数值进行格式化，所以在设置状态量和更新状态量时，需要保证前后数值类型的一致。

### handleStyle?: any

todo

- 描述：slider 滑块的样式配置，可配置的属性如下：

```
{
  img: 'https://gw.alipayobjects.com/zos/rmsportal/QXtfhORGlDuRvLXFzpsQ.png', // 可以使图片地址也可以是 data urls
  width: 5,
  height: 26
}
```

### textStyle?: any

todo

- 描述：slider 辅助文本字体样式配置。

### backgroundStyle?: any

todo

- 描述：slider 整体背景样式。

### fillerStyle?: any

todo

- 描述：选中区域的样式配置，默认配置如下：

```
{
  fill: '#BDCCED',
  fillOpacity: 0.3
}
```
