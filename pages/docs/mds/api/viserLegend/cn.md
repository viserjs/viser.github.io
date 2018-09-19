# Legend

图例（legend）是图表的辅助元素，使用颜色、大小、形状区分不同的数据类型，用于图表中数据的筛选。根据设置图形属性映射以及数据的类型自动生成不同的图例。

shape, color, size 这三个图形属性如果判断接收的参数是数据源的字段时，会自动生成不同的图例；
shape 属性，会根据不同的 shape 类型生成图例；
color 属性, 会赋予不同的图例项不同的颜色来区分图形；
size 属性, 在图例上显示图形的大小。

# API

### dataKey?: string;

- 描述：数据的 key。

### show?: boolean;

- 描述：是否显示。

### position?: string;

- 描述：设置图例的显示位置，可设置的值有 12 个：left-top,left-center,left-bottom,right-top,right-bottom, right-center,top-left,top-center,top-bottom,bottom-left,bottom-center,bottom-right。也可使用 bottom,top,left,right 设置位置，此时对应的值分别为 bottom-center,top-center,left-bottom,right-bottom。

### title?: null | object;

- 描述：图例标题的显示样式设置，如果值为 null，表示不展示图例标题，默认不展示。

### custom?: boolean;

- 描述：默认为 false，当 custom 为 true，表示不使用默认生成的图例，允许用户自定义图例，包括具体的图例项以及 click、hover 交互。
  自定义图例时需要用户自己声明具体的图例项 items(该属性是一个对象数组，数组中每一项为一个对象类型，结构为： { value: '', marker:{fill: 'red'}})以及图例项的 hover 和 click 事件。

### offset?: number;

- 描述：数值，设置坐标轴文本 label 距离坐标轴线的距离

### offsetX?: number;

- 描述：图例 x 方向的偏移值，数值类型，数值单位为 'px'，默认值为 0。

### offsetY?: number;

- 描述：图例 Y 方向的偏移值，数值类型，数值单位为 'px'，默认值为 0。

### items?: object[];

- 描述：自定义图例的配置。需要用户自己声明具体的图例项（每个图例项结构为 { value: '', fill: '', marker: '' }）以及图例项的 hover 和 click 事件。

### itemGap?: number;

- 描述：对分类类型的图例生效，表示图例每项之间的间距，如果是水平排布则为左右间距，如果是竖直排布则为上下间距。

### titleGap?: number;

- 描述：废弃

### itemMarginBottom?: number;

- 描述：对分类类型的图例生效，表示各个图例项垂直方向的间距。

### itemsGroup?: object[];

- 描述：废弃

### layout?: string;

- 描述：对分类类型的图例生效，用于设置各个图例项的排列方式，可设置值包括：vertical、horizontal，分别表示垂直和水平排布。

### allowAllCanceled?: boolean;

- 描述：对分类类型的图例生效，表示是否允许所有图例项被取消选中，默认为 false，即必须保留一个被选中的图例项。

### backPadding?: number[];

- 描述：废弃

### itemWidth?: number;

- 描述：对分类类型的图例生效，设置图例项的宽度，当图例有很多图例项，并且用户想要这些图例项能垂直对齐时，此时这个属性可帮用户实现此效果。

### unCheckColor?: string;

- 描述：对分类类型的图例生效，用于取消选中的图例文本颜色。

### background?: object;

- 描述：对分类类型的图例生效，用于设置图例的背景样式。

```
{
  fill: '#000',
  fillOpacity: 0.3
}
```

### itemFormatter?: formatterFunc;

- 描述：回调函数，用于格式化图例每项的文本显示。

```
itemFormatter(val) {
  return val; // val 为每个图例项的文本值
}
```

### marker?: string | func;

- 描述：对分类类型的图例生效，用于设置图例的 marker 样式，默认按照 geom 的类型显示。

当为 string 类型时，即表示使用默认提供的类型，支持的类型如下：

todo

marker 也支持自定义 shape，使用方式如下，

```
/**
 * 自定义 marker 形状
 * @param  {number} x   该 marker 的横轴坐标
 * @param  {number} y   该 marker 的纵轴坐标
 * @param  {number} r   该 marker 的半径大小
 * @return {null}
 */
marker(x, y, r) {}
```

以下代码绘制了如图所示的 marker：

```
marker(x, y, r) {
  return [
    [ 'M', x - r, y ],
    [ 'L', x + r, y ]
  ];
}
```

### textStyle?: IStyle.ITextStyle;

- 描述：用于设置图例项的文本样式。

```
textStyle: {
  textAlign: 'center', // 文本对齐方向，可取值为： start middle end
  fill: '#404040', // 文本的颜色
  fontSize: '12', // 文本大小
  fontWeight: 'bold', // 文本粗细
  rotate: 30, // 文本旋转角度，以角度为单位，仅当 autoRotate 为 false 时生效
  textBaseline: 'top' // 文本基准线，可取 top middle bottom，默认为middle
}
```

### checkable?: boolean;

- 描述：废弃

### clickable?: boolean;

- 描述：对分类类型的图例生效，设置图例项是否允许点击，默认为 true，即允许点击。

### hoverable?: boolean;

- 描述：对分类类型的图例生效，设置是否开启鼠标 hover 至图例的交互效果，默认为 true，即开启动画。

### useHtml?: boolean;

- 描述：针对分类类型图例，用于开启是否使用 html 渲染图例，默认为 false，true 表示使用 html 渲染图例。

### autoWrap?: boolean;

- 描述：废弃。

### autoPosition?: boolean;

- 描述：废弃。

### container?: any;

- 描述：当 useHtml 为 true 时生效，用于指定生成图例的 dom 容器，那么该值必须为 dom 容器的 id 值为分类类型的话，则支持传入索引值。

### containerTpl?: string;

- 描述：当 useHtml 为 true 时生效，用于指定图例容器的模板，默认值如下：

```
containerTpl: '<div class="g2-legend" style="position:absolute;top:20px;right:60px;width:auto;">'
  + '<h4 class="g2-legend-title"></h4>'
  + '<ul class="g2-legend-list" style="list-style-type:none;margin:0;padding:0;"></ul>'
  + '</div>';
```

### itemTpl?: string | func;

- 描述：当 useHtml 为 true 时生效，用于指定生成图例的图例项 html 模板，默认值如下：

```
itemTpl: '<li class="g2-legend-list-item item-{index} {checked}" data-color="{originColor}" data-value="{originValue}" style="cursor: pointer;font-size: 14px;">'
  + '<i class="g2-legend-marker" style="width:10px;height:10px;border-radius:50%;display:inline-block;margin-right:10px;background-color: {color};"></i>'
  + '<span class="g2-legend-text">{value}</span>'
  + '</li>';
```

### selectedMode?: string;

- 针对分类类型图例，当 clickable 为 true 时该配置项生效，用于设置图例的选中交互模式，可配置的属性:

> selectedMode: 'single'：表示开启单选模式；

> selectedMode: 'multiple'：表示开启多选模式，默认为 multiple。

### reversed?: boolean;

- 描述：废弃

### slidable?: boolean;

- 描述：针对连续图例，用于设置连续图例是否允许滑动，默认为 true，即开启滑动操作。

### width?: number;

- 描述：针对连续图例，用于设置图例的宽度。

### height?: number;

- 描述：针对连续图例，用于设置图例的高度。

### legendMarker?: any;

- 描述：废弃。

### legendListItem?: any;

- 描述：废弃。

### attachLast?: boolean;

- 描述：是否启用尾部跟随图例(tail-legend)，尾部跟随图例自动跟随 geom 的最后一个数据点，适用的图表类型为 line、stackLine、area、stackArea。 默认为 false，即不启用。
