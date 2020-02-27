# Guide

用于绘制图表的辅助元素，该方法的返回值不为 chart 对象，而是一个 guide 对应的控制类。

# API

guide 提供数组结构, 提供几种类型

## 辅助线

```
interface ILineGuide {
  type?: 'line';
  top?: boolean; // 指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
  zIndex?: number; // 指定 guide 绘制顺序
  start?: object | Array<number | string> | func;  // 辅助线起始位置，值为原始数据值，支持 callback
  end?: object | Array<number | string> | func;  // 辅助线结束位置，值为原始数据值，支持 callback
  lineStyle?: IStyle.ILineStyle;
  text?: ILineText;
}
```

### top: boolean

指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。

### zIndex?: number

渲染层级

### start?: object | Array<number | string> | func

指定辅助线的起始位置，该值的类型如下：

- object: 使用图表 x,y 对应的原始数据例如： { time: '2010-01-01', value: 200 }

- array: 数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：

> x，y 都是原始数据 [ '2010-01-01', 200 ];

> x，y 可以使用原始数据的替代字符串 'min', 'max', 'median' , 例如：[ 'median', 200 ]

> x, y 都是用百分比的形式，在绘图区域定位，字符串中存在 '%', 例如 [ '50%', '50%' ] 使得辅助元素居中

- function: 回调函数，可以动态的确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景

```
chart.guide().text({
  position(xScale, yScale) {
    return []; // 位置信息
  },
  content: '最大值'
});
```

### end?: object | Array<number | string> | func

指定辅助线的结束位置，使用同 start。

### lineStyle?: IStyle.ILineStyle

用于设置辅助线的显示样式。

### text?: ILineText

辅助线可以带文本

## 辅助文本

```
interface ITextGuide {
  type?: 'text';
  top?: boolean;  // 指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
  zIndex?: number; // 文本的起始位置，值为原始数据值，支持 callback
  position?: object | Array<number | string> | func;
  content?: string;  // 显示的文本内容
  style?: IStyle.ITextStyle;
  offsetX?: number;  // x 方向的偏移量
  offsetY?: number;  // y 方向偏移量
}
```

### top: boolean

指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。

### zIndex?: number

### position?: object | Array<number | string> | func

指定辅助文本的显示位置，该值的类型如下：

- object: 使用图表 x,y 对应的原始数据例如： { time: '2010-01-01', value: 200 }

- array: 数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：

> x，y 都是原始数据 [ '2010-01-01', 200 ];

> x，y 可以使用原始数据的替代字符串 'min', 'max', 'median' , 例如：[ 'median', 200 ]

> x, y 都是用百分比的形式，在绘图区域定位，字符串中存在 '%', 例如 [ '50%', '50%'] 使得辅助元素居中

- function: 回调函数，可以动态的确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景

```
chart.guide().text({
  position(xScale, yScale) {
    return []; // 位置信息
  },
  content: '最大值'
});
```

### content?: string

辅助文本的显示内容。

### style?: IStyle.ITextStyle

用于设置辅助文本的显示样式。 style 的更详细的配置项

### offsetX?: number

设置辅助文本 x 方向的偏移量。

### offsetY?: number

设置辅助文本 y 方向的偏移量。

## 辅助图片

```
interface IImageGuide {
  type?: 'image';
  top?: boolean;  // 指定 giude 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
  zIndex?: number;
  start?: object | Array<number | string> | func;  // 图片起始位置， 值为原始数据值，支持 callback
  end?: object | Array<number | string> | func;  // 图片结束位置， 值为原始数据值，支持 callback
  src?: string;  // 图片路径
  width?: number;
  height?: number;
  offsetX?: number;  // x 方向的偏移量
  offsetY?: number;  // y 方向偏移量
}
```

### top: boolean

指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。

### zIndex?: number

渲染层级

### start?: object | Array<number | string> | func

指定辅助图片的起始位置，即图片的左上角，该值的类型如下：

- object: 使用图表 x,y 对应的原始数据例如： { time: '2010-01-01', value: 200 }

- array: 数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：

> x，y 都是原始数据 [ '2010-01-01', 200 ];

> x，y 可以使用原始数据的替代字符串 'min', 'max', 'median' , 例如：[ 'median', 200 ]

> x, y 都是用百分比的形式，在绘图区域定位，字符串中存在 '%', 例如 [ '50%', '50%' ] 使得辅助元素居中

- function: 回调函数，可以动态的确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景

```
chart.guide().text({
  position(xScale, yScale) {
    return []; // 位置信息
  },
  content: '最大值'
});
```

### end?: object | Array<number | string> | func

可选，指定辅助图片的结束位置，即图片的右下角，该属性用法同 start。当 start 和 end 属性同时声明时，即指定了图片的宽度和高度。

### src?: string

指定图片的地址，可以是路径，也可以是 base64 编码。

### width?: number

当仅指定了 start 属性时，用于设置图片的宽度。

### height?: number

当仅指定了 start 属性时，用于设置图片的高度。

### offsetX?: number

设置图片 x 方向的偏移量。

### offsetY?: number

设置图片 y 方向的偏移量。

## 辅助背景框

```
interface IRegionGuide {
  type?: 'region';
  top?: boolean;  // 指定 giude 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
  start?: object | Array<number | string> | func;  // 辅助框起始位置，值为原始数据值，支持 callback
  end?: object | Array<number | string> | func;  // 辅助框结束位置，值为原始数据值，支持 callback
  style?: IRegionStyle;
}
```

### top: boolean

指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。

### start: object | array | function

指定辅助背景框的起始位置，即背景框的左上角，该值的类型如下：

- object: 使用图表 x,y 对应的原始数据例如： { time: '2010-01-01', value: 200 }

- array: 数组来配置位置 [ x, y]，根据数组中的值的存在以下几种形式：

> x，y 都是原始数据 [ '2010-01-01', 200 ];

> x，y 可以使用原始数据的替代字符串 'min', 'max', 'median' , 例如：[ 'median', 200 ]

> x, y 都是用百分比的形式，在绘图区域定位，字符串中存在 '%', 例如 [ '50%', '50%' ] 使得辅助元素居中

- function: 回调函数，可以动态的确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景

```
chart.guide().text({
  position(xScale, yScale){
    return []; // 位置信息
  },
  content: '最大值'
});
```

### end: object | Array<number | string> | func

指定辅助背景框的结束位置，即背景框的右下角，该属性用法同 start。

### style: IRegionStyle

用于设置辅助背景框的样式。

## 辅助html

```
interface IHtmlGuide {
  type?: 'html';
  position?: object | Array<number | string> | func;  // html 的中心位置， 值为原始数据值，支持 callback
  alignX?: string;
  alignY?: string;
  offsetX?: number;
  offsetY?: number;
  html?: string;  // html 代码
  zIndex?: number;
}
```

### position: object | Array<number | string> | func

设置 html 的显示位置，该值的类型如下：

- object: 使用图表 x,y 对应的原始数据例如： { time: '2010-01-01', value: 200 }
- array: 数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：
  > x，y 都是原始数据 [ '2010-01-01', 200 ];

> x，y 可以使用原始数据的替代字符串 'min', 'max', 'median' , 例如：[ 'median', 200 ]

> x, y 都是用百分比的形式，在绘图区域定位，字符串中存在 '%', 例如 [ '50%', '50%' ] 使得辅助元素居中

- function: 回调函数，可以动态的确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景

```
chart.guide().text({
  position(xScale, yScale) {
    return []; // 位置信息
  },
  content: '最大值'
});
```

### alignX: string

html 的水平对齐方式，可取值为： left、middle、right，默认值为 middle。

### alignY?: string

html 的垂直对齐方式，可取值为： top、middle、bottom，默认值为 middle。

### offsetX?: number

设置 html 在 x 方向的偏移量。

### offsetY?: number

设置 html 在 y 方向的偏移量。

### html?: string

需要显示的 html 内容。

### zIndex?: number

html 层级。

## 辅助圆弧

```
interface IArcGuide {
  type?: 'arc';
  top?: boolean;  // 指定 giude 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
  start?: object | Array<number | string> | func;  // 辅助圆弧起始位置，值为原始数据值，支持 callback
  end?: object | Array<number | string> | func;  // 辅助圆弧结束位置，值为原始数据值，支持 callback
  style?: object;
}
```

### top?: boolean

指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。

### start?: object | Array<number | string> | func

指定辅助圆弧的起始位置，该值的类型如下：

- object: 使用图表 x,y 对应的原始数据例如： { time: '2010-01-01', value: 200 }

- array: 数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：

> x，y 都是原始数据 [ '2010-01-01', 200 ];

> x，y 可以使用原始数据的替代字符串 'min', 'max', 'median' , 例如：[ 'median', 200 ]

> x, y 都是用百分比的形式，在绘图区域定位，字符串中存在 '%', 例如 [ '50%', '50%' ] 使得辅助元素居中

- function: 回调函数，可以动态的确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景

```
chart.guide().text({
  position(xScale, yScale) {
    return []; // 位置信息
  },
  content: '最大值'
});
```

### end?: object | Array<number | string> | func

指定辅助圆弧的结束位置，该属性用法同 start。

### style?: object

style 的更详细的配置项

## 数据区间

特殊数据区间标注，适用于折线图和面积图

```
interface IDataRegionGuide {
  type?: 'dataRegion';
  top?: boolean;  // 指定 giude 是否绘制在 canvas 最上层，默认为 true, 即绘制在最上层
  start?: object | Array<number | string> | func;  // 标注点起始位置，值为原始数据值，支持 callback ,
  end?: object | Array<number | string> | func;  // 标注点结束位置，值为原始数据值，支持 callback ,
  content?: string;  // 显示的文本内容
  style?: object;  //可选，文本/point/line样式
  display?: object;  //可选，是否显示文本/point/line，默认为全部显示
  lineLength?: number;  //可选，line长度，default为30
  direction?: 'upward' | 'downward';   //可选，朝向，默认为upwaard
}
```

## 特殊数据标注点

特殊数据标注点，适用于折线图和面积图。

```
interface IDataMarkerGuide {
  type?: 'dataMarker';
  top?: boolean;
  content?: string;
  style?: object;
  display?: object;
  lineLength?: number;
  direction?: 'upward' | 'downward';
}
```

### top?: boolean

指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。

### content?: string

辅助文本的显示内容。

### style?: object

style:{ point:{}, line:{}, text:{} }， point/line/text 样式，更详细的配置项

### display?: object

display:{ point:true | false, line:true | false, text:true | false }， 是否显示 point/line/text。

### lineLength?: number

line 的长度，default 为 30。

### direction?: 'upward' | 'downward'

标注点朝向：'upward' | 'downward', default 为'upward'，即向上

## 辅助区域过滤

辅助区域过滤，将图表中位于矩形选区中的图形元素提取出来，重新着色。

```
interface IRegionFilter {
  type?: 'regionFilter';
  top?: boolean; // 指定 giude 是否绘制在 canvas 最上层，默认为 true, 即绘制在最上层
  start?: object | Array<number | string> | func;  // 辅助框起始位置，值为原始数据值，支持 callback
  end?: object | Array<number | string> | func;  // 辅助框结束位置，值为原始数据值，支持 callback
  color?: string;  //染色色值
  apply?: string[];  //可选，设定regionFilter只对特定geom类型起作用
}
```

### top?: boolean

指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。

### start?: object | Array<number | string> | func

指定辅助过滤区域的起始位置，即过滤区域的左上角，该值的类型如下：

- object: 使用图表 x,y 对应的原始数据例如： { time: '2010-01-01', value: 200 }
- array: 数组来配置位置 [ x, y]，根据数组中的值的存在以下几种形式：

  > x，y 都是原始数据 [ '2010-01-01', 200 ];

  > x，y 可以使用原始数据的替代字符串 'min', 'max', 'median' , 例如：[ 'median', 200 ]

  > x, y 都是用百分比的形式，在绘图区域定位，字符串中存在 '%', 例如 [ '50%', '50%' ] 使得辅助元素居中

- function: 回调函数，可以动态的确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景

### end?: object | Array<number | string> | func

指定辅助过滤区域的结束位置，即过滤区域的右下角，该属性用法同 start。

### color?: string

指定辅助过滤区域内图形元素重新着色的色值。

### apply?: string[]

可选,设定 regionFilter 只对特定 geom 类型起作用，如 apply:['area'],默认 regionFilter 的作用域为整个图表

## 通用依赖接口

### 线条样式

```
interface ILineText {
  position?: string | number; // 'start' | 'center' | 'end' | '39%' | 0.5, // 文本的显示位置
  autoRotate?: boolean; // 是否沿线的角度排布，默认为 true
  style?: IStyle.ILineStyle;
  content?: string; // 文本的内容
  offsetX?: number; // x 方向的偏移量
  offsetY?: number; // y 方向的偏移量
}
```

### 辅助框的图形样式属性

```
interface IRegionStyle {
  lineWidth?: number;  // 辅助框的边框宽度
  fill?: string; // 辅助框填充的颜色
  fillOpacity?: number;  // 辅助框的背景透明度
  stroke?: string; // 辅助框的边框颜色设置
}
```

### 事件

```
interface IGuideEvent {
  onMouseDown?: eventFunc;
  onMouseMove?: eventFunc;
  onMouseLeave?: eventFunc;
  onMouseUp?: eventFunc;
  onClick?: eventFunc;
  onDbClick?: eventFunc;
  onTouchStart?: eventFunc;
  onTouchMove?: eventFunc;
  onTouchEnd?: eventFunc;
}
```
