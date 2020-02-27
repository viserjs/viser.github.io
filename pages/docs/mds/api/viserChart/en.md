# Chart

The Chart component generates a chart instance inside, which contains loading and updating of many sub components.

# API

### height?: number;

- Description: Specifies the height of the chart, in the form of 'px'.

### width?: number;

- Description: Specifies the width of the chart, in the form of 'px',the width is not effective when forceFit is true.

### animate?: boolean | object;

- Description: The graphic animation switch is true by default, that is to open animation.

### forceFit?: boolean;

- Description: The width self-adapting switch of the chart, which defaults to false, is set to true to indicate the width of the automatic DOM (instance container).

### background?: IBackground;

- Description: Set the overall frame and background style of the chart,the type of that is a object,

Object type IBackground

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

- Description: The border and background styles of the chart drawing area,the type of that is a object,

Object type IBackground

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

- Description: Chart paddings,which has the following configuration format.

The usage methods is similar as CSS box models when padding is numbers or array type.

Borders are automatically computed when 'auto'is present in padding, and only the borders occupied by axis and legend are currently considered.

Examples:

```
padding: [ 20, 30, 20, 30]
padding: 20
padding: { top: 20, right: 30, bottom: 20, left: 30 }
padding: 'auto'
padding: [20, 'auto', 30, 'auto'] // not support temporary

```

Setting percentages, such as padding: [20%', 30%], are not supported for the time being, which is relative to the width of the entire chart.

### theme?: string;

- Description: theme, At present,'default' and 'dark' are supported, and new theme can be registered by registration.

### renderer?: string;

- Description: Specifies the rendering mode of the chart, starting with viser 3.2, and supporting chart level using SVG rendering.
  Default value: canvas, optional value svg.

Examples:

```
<Chart height={400} data={data} renderer='svg' />
```

### data

- Type: Array/DataSet
- Description: Set the data source for the chart. Data is an array or DataSet.View object that contains JSON objects.

### scale

- Type: Object
- Description: Configure the data scale, which will affect the way the data is displayed in the chart.

### event

Transfer parameter (ev: any, chart: any) => void

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
