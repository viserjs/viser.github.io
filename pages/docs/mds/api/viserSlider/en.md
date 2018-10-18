# Slider

Selection plug-ins for data ranges, especially for large data volume charting, help users better focus on a range of data visualization results.

## API

### xAxis: string;

- Description: required , Our Slider is a slider component with a background graph that declares the horizontal-axis mapping field of the background graph, which is also a data filtering field.

### yAxis: string;

- Description: required , Our Slider is a slider component with a background graph that declares the vertical-axis mapping field of the background graph.

### data: any[];

- Description: required , Data source.

### container?: any;

- Description: For the DOM container of the slider, either the ID of the DOM or the HTML node object of the container can be passed directly in.

### width?: number | string;

- Description: Set the width of the slider component, defaults to auto, which indicates self-adaption the width of the container.

### height?: number | string;

- Description: The height of the slider component is set to 26 by default,the unit is'px'.

### padding?: number | number[];

- Description: Set the inner margin of the canvas on which the slider component resides for alignment with the chart (the default canvas container for the chart also has an inner margin), and the default value is the same as the padding for the G2 default theme, [20, 20, 95, 80].

### start?: string;

- Description: Declare the data value corresponding to the position of the slider at the beginning of the slider.The default is the minimum value.

### end?: string;

- Description: Declare the data value corresponding to the position of the slider at the end of the slider.The default is the maximum value.

### minSpan?: number;

- Description: 

### maxSpan?: number;

- Description: 

### scales?: any;

- Description: Used to define columns for xAxis and yAxis fields. The corresponding columns in the chart for the same operation are defined identically.

Example code:

```
{
  [`${xAxis}`]: {
    type: 'time',
    mask: 'MM-DD'
  }
}
```

### backgroundChart?: any;

- Description: The background chart configuration of the slider which can be configured with its chart type and color:

```
{
  type: [ 'area' ], // The type of a chart,which can be a string or an array.
  color: '#CCD6EC'
}
```

### onChange?: (opts: any) => {};

- Description: When the slider changes, the callback function is triggered, which is mainly used to update the state of DS. The callback function will provide a parameter that is an object with the following attributes:

```
onChange: (obj) => {
  const { startValue, endValue, startText, endText } = obj;
}
```

- startValue: The starting slider currently corresponds to the original data value, which is a timestamp if  type is the time or timeCat.
- endValue: The ending slider currently corresponds to the original data value, which is a timestamp if  type is the time or timeCat.
- startText: The current display text of the start slider
- endText: The current display text  of the end slider

> Instruction: Text and value are distinguished because in most cases the user formats the value, so when setting and updating the state variables, it is necessary to ensure the consistency of the value types before and after.

### handleStyle?: any

todo

- Description: The configuration of the slider ,which can be configured as follows:

```
{
  img: 'https://gw.alipayobjects.com/zos/rmsportal/QXtfhORGlDuRvLXFzpsQ.png', // It can be picture address or data URLs.
  width: 5,
  height: 26
}
```

### textStyle?: any

todo

- Description: The font style configuration for Slider assists text.

### backgroundStyle?: any

todo

- Description: The overall background style for slider.

### fillerStyle?: any

todo

- Description: The configuration of the selected area ,which is configured by default as follows:

```
{
  fill: '#BDCCED',
  fillOpacity: 0.3
}
```
