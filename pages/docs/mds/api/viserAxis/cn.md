# Axis

坐标轴配置，BizCharts 中将 Axis 抽离为一个单独的组件，不使用 Axis 组件则默认不显示所有坐标轴及相关的信息。

# API

### dataKey?: string;

- 描述：数据的 key。

### show?: boolean;

- 描述：当前坐标轴对应数据源中的字段名，当前坐标轴是否需要可见，默认值 true。

### position?: string;

- 描述：设置当前坐标轴的摆放位置，可设置的值为 top、bottom、left、right。

### title?: ITitle;

- 描述：当前坐标轴标题是否需要显示,及其样式配置。
  是否显示 轴的 title 是默认不显示的, 即 title=null，如果需要显示需要将此属性配置为 true。

类型：

```
interface ITitle {
  autoRotate?: boolean;  // 文本是否需要自动旋转，默认为 true
  offset?: number;  // 数值，设置坐标轴文本 label 距离坐标轴线的距离
  position?: string; // 'start' | 'center' | 'end' // 标题的显示位置（相对于坐标轴线），可取值为 start center end
  textStyle?: IStyle.ITextStyle;
  text?: string;
}
```

```
interface ITextStyle {
  fontSize?: number | string;  // 文本大小
  fontFamily?: string; // 文本family
  fontWeight?: number | string; // 文本粗细
  textAlign?: string;  // 文本对齐方向，可取值为： start middle end
  fill?: string; // 文本的颜色
  lineHeight?: number;
  textBaseline?: string; // 文本基准线，可取 top middle bottom，默认为middle
  rotate?: number; // 文本旋转角度，以角度为单位，仅当 autoRotate 为 false 时生效
  shadowBlur?: number;
  shadowColor?: string;
}
```

### tick?: IAxisTick;

- 描述：设置坐标轴上刻度点。如果该属性值为 null 则表示不展示。

类型定义：

```
interface IAxisTick {
  ticks?: number[];   // 用于指定坐标轴上刻度点的文本信息，当用户设置了 ticks 就会按照 ticks 的个数和文本来显示
  tickCount?: number; // 设置坐标轴上刻度点的个数
  tickInterval?: number;  // 刻度间隔
}
```

### subTick?: IAxisTick;

- 描述：设置坐标轴上刻度点子项。如果该属性值为 null 则表示不展示。

### grid?: IAxisGrid;

- 描述：设置坐标轴网格线的样式，网格线与坐标轴线垂直。如果该属性值为 null 则表示不展示。

### zIndex?: number;

- 描述：绘制顺序，用于控制图层的顺序，避免遮盖。

### label?: boolean | IAxisLabel;

- 描述：设置坐标轴文本的样式。如果该属性值为 null 则表示不展示坐标轴文本。

### line?: IStyle.ILineStyle;

- 描述：坐标轴样式。

类型定义：

```
interface ILineStyle {
  stroke?: string;  // 坐标轴线的颜色
  strokeOpacity?: number; // 坐标轴线的透明度，数值范围为 0 - 1
  lineWidth?: number;  // 设置坐标轴线的粗细
  lineHeight?: number;
  lineDash?: number[]; // 设置虚线的样式，如 [2, 3]第一个用来表示实线的像素，第二个用来表示空白的像素。如果提供了奇数个值，则这个值的数列重复一次，从而变成偶数个值
  length?: number; // 仅用于刻度线，表示刻度线长度，可以为负值（表示反方向渲染）
  textAlign?: string;
}
```

### tickLine?: IStyle.ILineStyle;

- 描述：坐标轴刻度样式。

### subTickCount?: number;

- 描述：坐标轴子刻度个数。

### subTickLine?: IStyle.ILineStyle;

- 描述：坐标轴子刻度样式。
