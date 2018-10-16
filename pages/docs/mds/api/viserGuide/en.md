# Guide

The auxiliary element used to draw a graph, which returns a control class corresponding to a guide instead of a chart object.

# API

Guide provides array structure and provides several types.

##  auxiliary line

```
interface ILineGuide {
  type?: 'line';
  top?: boolean; // Specifies whether the guide is drawn on the top of the canvas, and the default is false, that is, drawn at the bottom level.
  zIndex?: number; // Specify guide rendering level
  start?: object | Array<number | string> | func;  // The starting position of the auxiliary line is the original data value, supporting callback
  end?: object | Array<number | string> | func;  // The ending position of the auxiliary line is the original data value, supporting callback
  lineStyle?: IStyle.ILineStyle;
  text?: ILineText;
}
```

### top: boolean

Specifies whether the guide is drawn on the top of the canvas, and the default is false, that is, drawn at the bottom level.

### zIndex?: number

Rendering level

### start?: object | Array<number | string> | func

Specifies the starting position of the auxiliary line. The type of the value is as follows:

- object: Use chart x, y corresponding initial data, for example: { time: '2010-01-01', value: 200 }

- array: Array to configure the location [x, y], according to the existence of the following values in the array:

> X and Y are initial data. such as : [ '2010-01-01', 200 ];

> X, Y can use the string 'min', 'max', 'median' to alternate initial data ,such as : [ 'median', 200 ]

> X, Y are in the form of percentages, positioned in the drawing area, and there is a '%' in the string, such as [50%', 50%'] to center the auxiliary element

- function: callback, which can dynamically determine the location of auxiliary elements, applied to the scene which data updates dynamicly or the location of auxiliary elements will change according to data changes.

```
chart.guide().text({
  position(xScale, yScale) {
    return []; // location information
  },
  content: 'max'
});
```

### end?: object | Array<number | string> | func

Specify the end of the auxiliary line and use the same as 'start'.

### lineStyle?: IStyle.ILineStyle

Userd to display style for setting auxiliary lines.

### text?: ILineText

The auxiliary line can have text.

## Auxiliary text

```
interface ITextGuide {
  type?: 'text';
  top?: boolean;  // Specifies whether the guide is drawn on the top of the canvas, and the default is false, that is, drawn at the bottom level.
  zIndex?: number; // The starting position of the text is the original data value, supporting callback
  position?: object | Array<number | string> | func;
  content?: string;  // Text content 
  style?: IStyle.ITextStyle;
  offsetX?: number;  // Offset in X direction
  offsetY?: number;  // Offset in Y direction
}
```

### top: boolean

Specifies whether the guide is drawn on the top of the canvas, and the default is false, that is, drawn at the bottom level.

### zIndex?: number

rendering level

### position?: object | Array<number | string> | func

Specifies the display position of the auxiliary text. The type of the value is as follows:

- object: Use chart x, y corresponding initial data, for example: { time: '2010-01-01', value: 200 }

- array: Array to configure the location [x, y], according to the existence of the following values in the array:

> X and Y are initial data. such as : [ '2010-01-01', 200 ];

> X, Y can use the string 'min', 'max', 'median' to alternate initial data ,such as : [ 'median', 200 ]

> X, Y are in the form of percentages, positioned in the drawing area, and there is a '%' in the string, such as [50%', 50%'] to center the auxiliary element

- function: callback, which can dynamically determine the location of auxiliary elements, applied to the scene which data updates dynamicly or the location of auxiliary elements will change according to data changes.

```
chart.guide().text({
  position(xScale, yScale) {
    return []; // location information
  },
  content: 'max'
});
```

### content?: string

The display content of the auxiliary text.

### style?: IStyle.ITextStyle

Display style for setting up auxiliary text

### offsetX?: number

Offset in X direction

### offsetY?: number

Offset in Y direction

## Auxiliary picture

```
interface IImageGuide {
  type?: 'image';
  top?: boolean;  // Specifies whether the guide is drawn on the top of the canvas, and the default is false, that is, drawn at the bottom level.
  zIndex?: number;
  start?: object | Array<number | string> | func;  // The starting position of the picture is the original data value, supporting callback
  end?: object | Array<number | string> | func;  // The starting position of the picture is the original data value, supporting callback
  src?: string;  // Picture path
  width?: number;
  height?: number;
  offsetX?: number;  // Offset in X direction
  offsetY?: number;  // Offset in Y direction
}
```

### top: boolean

Specifies whether the guide is drawn on the top of the canvas, and the default is false, that is, drawn at the bottom level.

### zIndex?: number

Rendering level

### start?: object | Array<number | string> | func

Specifies the starting position of the auxiliary picture, that is, the upper left corner of the picture. The type of the value is as follows:

- object: Use chart x, y corresponding initial data, for example: { time: '2010-01-01', value: 200 }

- array:  Array to configure the location [x, y], according to the existence of the following values in the array:

> X and Y are initial data. such as : [ '2010-01-01', 200 ];

> X, Y can use the string 'min', 'max', 'median' to alternate initial data ,such as : [ 'median', 200 ]

> X, Y are in the form of percentages, positioned in the drawing area, and there is a '%' in the string, such as [50%', 50%'] to center the auxiliary element

- function: callback, which can dynamically determine the location of auxiliary elements, applied to the scene which data updates dynamicly or the location of auxiliary elements will change according to data changes.

```
chart.guide().text({
  position(xScale, yScale) {
    return []; // location information
  },
  content: 'max'
});
```

### end?: object | Array<number | string> | func

Optionally, specify the end position of the auxiliary picture, that is, the lower right corner of the image, which is used in the same way as start. When the start and end attributes are declared at the same time, the width and height of the picture are specified.

### src?: string

The address of the specified picture can be either a path or a Base64 encoding.

### width?: number

When the start attribute is specified, it is used to set the width of the picture.

### height?: number

When the start attribute is specified, it is used to set the height of the picture.

### offsetX?: number

Offset in X direction

### offsetY?: number

Offset in Y direction

## Auxiliary background box

```
interface IRegionGuide {
  type?: 'region';
  top?: boolean;  // Specifies whether the guide is drawn on the top of the canvas, and the default is false, that is, drawn at the bottom level.
  start?: object | Array<number | string> | func;  // The starting position of the box is the original data value, supporting callback
  end?: object | Array<number | string> | func;  // The ending position of the box is the original data value, supporting callback
  style?: IRegionStyle;
}
```

### top: boolean

Specifies whether the guide is drawn on the top of the canvas, and the default is false, that is, drawn at the bottom level.

### start: object | array | function

Specifies the starting position of the auxiliary background box, that is, the upper left corner of the background box. The type of the value is as follows:

- object: Use chart x, y corresponding initial data, for example: { time: '2010-01-01', value: 200 }

- array: Array to configure the location [x, y], according to the existence of the following values in the array:

> X and Y are initial data. such as : [ '2010-01-01', 200 ];

> X, Y can use the string 'min', 'max', 'median' to alternate initial data ,such as : [ 'median', 200 ]

> X, Y are in the form of percentages, positioned in the drawing area, and there is a '%' in the string, such as [50%', 50%'] to center the auxiliary element

- function: callback, which can dynamically determine the location of auxiliary elements, applied to the scene which data updates dynamicly or the location of auxiliary elements will change according to data changes.

```
chart.guide().text({
  position(xScale, yScale){
    return []; // location information
  },
  content: 'max'
});
```

### end: object | Array<number | string> | func

Specifies the end position of the auxiliary background box, that is, the lower right-hand corner of the background box, which is used in the same way as start.

### style: IRegionStyle

Used to set up the style of the auxiliary background box.

## Auxiliary html

```
interface IHtmlGuide {
  type?: 'html';
  position?: object | Array<number | string> | func;  // The central location of HTML is the original data value, supporting callback
  alignX?: string;
  alignY?: string;
  offsetX?: number;
  offsetY?: number;
  html?: string;  // html code
  zIndex?: number;
}
```

### position: object | Array<number | string> | func

Set the display location of HTML. The type of the value is as follows:

- object:  Use chart x, y corresponding initial data, for example: { time: '2010-01-01', value: 200 }
- array: Array to configure the location [x, y], according to the existence of the following values in the array:
> X and Y are initial data. such as : [ '2010-01-01', 200 ];

> X, Y can use the string 'min', 'max', 'median' to alternate initial data ,such as : [ 'median', 200 ]

> X, Y are in the form of percentages, positioned in the drawing area, and there is a '%' in the string, such as [50%', 50%'] to center the auxiliary element

- function: callback, which can dynamically determine the location of auxiliary elements, applied to the scene which data updates dynamicly or the location of auxiliary elements will change according to data changes.

```
chart.guide().text({
  position(xScale, yScale) {
    return []; // position information
  },
  content: 'max'
});
```

### alignX: string

The horizontal alignment of HTML can be set as follows: left, middle, right, the default value is middle.

### alignY?: string

The vertical alignment of HTML can be set as follows:  top, middle, bottom the default value is middle。

### offsetX?: number

Set the offset of the HTML in the X direction.

### offsetY?: number

Set the offset of the HTML in the Y direction.

### html?: string

The HTML content that needs to be displayed.

### zIndex?: number

HTML level.

## Auxiliary arc

```
interface IArcGuide {
  type?: 'arc';
  top?: boolean;  // Specifies whether the guide is drawn on the top of the canvas, and the default is false, that is, drawn at the bottom level.
  start?: object | Array<number | string> | func;  // The starting position of the arc is the original data value, supporting callback
  end?: object | Array<number | string> | func;  // The ending position of the arc is the original data value, supporting callback
  style?: object;
}
```

### top?: boolean

Specifies whether the guide is drawn on the top of the canvas, and the default is false, that is, drawn at the bottom level.

### start?: object | Array<number | string> | func

Specifies the display position of the auxiliary text. The type of the value is as follows:

- object: Use chart x, y corresponding initial data, for example: { time: '2010-01-01', value: 200 }

- array: Array to configure the location [x, y], according to the existence of the following values in the array:

> X and Y are initial data. such as : [ '2010-01-01', 200 ];

> X, Y can use the string 'min', 'max', 'median' to alternate initial data ,such as : [ 'median', 200 ]

> X, Y are in the form of percentages, positioned in the drawing area, and there is a '%' in the string, such as [50%', 50%'] to center the auxiliary element

- function: callback, which can dynamically determine the location of auxiliary elements, applied to the scene which data updates dynamicly or the location of auxiliary elements will change according to data changes.

```
chart.guide().text({
  position(xScale, yScale) {
    return []; // position information
  },
  content: 'max'
});
```

### end?: object | Array<number | string> | func

Specifies the end position of the auxiliary arc, which is used in the same way as start.

### style?: object

More detailed configuration items for style

## Data interval

Special data interval annotation is applicable to line chart and area chart.

```
interface IDataRegionGuide {
  type?: 'dataRegion';
  top?: boolean;  // SSpecifies whether the giude is drawn on the top of the canvas, and the default is true, that is, drawn at the top level.
  start?: object | Array<number | string> | func;  // the starting position of the point, the value is the original data value, support callback.
  end?: object | Array<number | string> | func;  // the ending position of the point, the value is the original data value, support callback.
  content?: string;  // Text content displayed
  style?: object;  // Optional, text /point/line style.
  display?: object;  // Optional, whether text /point/line is displayed, default to all display.
  lineLength?: number;  // Optional, line length, default is 30.
  direction?: 'upward' | 'downward';   // Optional, orientation, default to upwaard
}
```

## Special data annotation points

Special data point annotation is applicable to line chart and area chart.

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

Specifies whether the giude is drawn on the top of the canvas, and the default is true, that is, drawn at the top level.

### content?: string

Text content displayed

### style?: object

style:{ point:{}, line:{}, text:{} }, point/line/text style

### display?: object

display:{ point:true | false, line:true | false, text:true | false }, whether text /point/line is displayed

### lineLength?: number

ine length, default is 30.

### direction?: 'upward' | 'downward'

Marking point orientation: 'upward' | 'downward', default to 'upward'

## Auxiliary regionFilter

Auxiliary regionFilter, extracting the graphics elements in the rectangle selection area and re coloring them.

```
interface IRegionFilter {
  type?: 'regionFilter';
  top?: boolean; // Specifies whether the giude is drawn on the top of the canvas, and the default is true, that is, drawn at the top level.
  start?: object | Array<number | string> | func;  // The starting position of the auxiliary area is the original data value, supporting callback
  end?: object | Array<number | string> | func;  // The ending position of the auxiliary area is the original data value, supporting callback
  color?: string;  // dyeing value
  apply?: string[];  // Optionally, setting regionFilter works only for specific geom types.
```

### top?: boolean

Specifies whether the giude is drawn on the top of the canvas, and the default is true, that is, drawn at the top level.

### start?: object | Array<number | string> | func

Specifies the starting position of the auxiliary regionFilter, that is, the upper left corner of the filtering area. The type of the value is as follows:

- object:  Use chart x, y corresponding initial data, for example:{ time: '2010-01-01', value: 200 }
- array: Array to configure the location [x, y], according to the existence of the following values in the array:

  > X and Y are initial data. such as : [ '2010-01-01', 200 ];

  > X, Y can use the string 'min', 'max', 'median' to alternate initial data ,such as : [ 'median', 200 ]

  > X, Y are in the form of percentages, positioned in the drawing area, and there is a '%' in the string, such as [50%', 50%'] to center the auxiliary element

- function: callback, which can dynamically determine the location of auxiliary elements, applied to the scene which data updates dynamicly or the location of auxiliary elements will change according to data changes.

### end?: object | Array<number | string> | func

Specifies the end of the auxiliary regionFilter, that is, the lower right corner of the filter area, which is used in the same way as start.

### color?: string

Specifies the color value of the image element to be re colored in the auxiliary regionFilter.

### apply?: string[]

Optionally, set regionFilter to work only for specific geom types, such as apply:['area'], and default regionFilter to scope the entire graph

## Universal dependency interface

### line style

```
interface ILineText {
  position?: string | number; // 'start' | 'center' | 'end' | '39%' | 0.5, // Text display location
  autoRotate?: boolean; // Is the angle alignment along the line, the default is true
  style?: IStyle.ILineStyle;
  content?: string; // text content
  offsetX?: number; // Offset in X direction
  offsetY?: number; // Offset in Y direction
}
```

### The graphic style attribute of the auxiliary box

```
interface IRegionStyle {
  lineWidth?: number;  // Border width of auxiliary box
  fill?: string; // The filling color of auxiliary box 
  fillOpacity?: number;  // Background opciaty of auxiliary box
  stroke?: string; // Border color settings for auxiliary box
}
```

### Event

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
