# Axis

Coordinate axis configuration, Axis is extracted as a separate component, without Axis components, all coordinate axes and related information are not displayed by default.

# API

### dataKey?: string;

- Description: the key of data.

### show?: boolean;

- Description: The current coordinate axis corresponds to the field name in the data source. Whether the current coordinate axis needs to be visible or not, the default value is true.

### position?: string;

- Description: The position of the current axis is set, and the values can be set at top, bottom, left and right.

### title?: ITitle;

- Description: Whether the current axis title needs to be displayed and its style configuration,the default value is null.If you need to display, you need to configure this property to be true.

Type:

```
interface ITitle {
  autoRotate?: boolean;  // Whether the text needs automatic rotation, defaults to true
  offset?: number;  // Set the distance from coordinate axis label to the axis of the coordinate.
  position?: string; // 'start' | 'center' | 'end' // The display position of the title (relative to the axis of coordinates) can be taken as start center end.
  textStyle?: IStyle.ITextStyle;
  text?: string;
}
```

```
interface ITextStyle {
  fontSize?: number | string;  // Text size
  fontFamily?: string; // Text family
  fontWeight?: number | string; // Text bold
  textAlign?: string;  // The alignment of the text can be taken as: start middle end
  fill?: string; // Text color
  lineHeight?: number;
  textBaseline?: string; // The text baseline can be taken as: top middle bottom, and the default is middle
  rotate?: number; // The rotation angle of the text is taken as an angle, only when autoRotate is false.
  shadowBlur?: number;
  shadowColor?: string;
}
```

### tick?: IAxisTick;

- Description: Set the tick points on the coordinate axis. If the attribute value is null, it means that it is not displayed.

类型定义：

```
interface IAxisTick {
  ticks?: number[];   // Text information used to specify the tick points on the coordinate axis, and when the user sets the ticks, it will be displayed as the number and text of the ticks.
  tickCount?: number; // Set the number of tick points on the coordinate axis.
  tickInterval?: number;  // Tick interval
}
```

### subTick?: IAxisTick;

- Description: Set the sub tick points on the coordinate axis. If the attribute value is null, it means that it is not displayed.

### grid?: IAxisGrid;

- Description: Set the grid pattern of the coordinate axis, and the grid line is perpendicular to the axis of the coordinate. If the attribute value is null, it means that it is not displayed.

### zIndex?: number;

- Description: The order of drawing which is used to control the order of layers and avoid covering.

### label?: boolean | IAxisLabel;

- Description: Set the style of the axis text. If the attribute value is null, it means that the text of the coordinate axis is not displayed.

### line?: IStyle.ILineStyle;

- Description: Axis style.

Type：

```
interface ILineStyle {
  stroke?: string;  // Axis color
  strokeOpacity?: number; // Axis opciaty,the number range is 0-1.
  lineWidth?: number;  // Thickness of coordinate axis
  lineHeight?: number;
  lineDash?: number[]; // The style of dashed, such as [2,3], which the first parameter is to represent the pixel of solid line and the second is to represent the pixelof blank line. If odd numbers are provided, the numbers will be repeated once, thus becoming even numbers.
  length?: number; // Used only in tick lines, indicating the length of the tick line, which can be negative(representing reverse direction rendering).
  textAlign?: string;
}
```

### tickLine?: IStyle.ILineStyle;

- Description: Axis tick style.

### subTickCount?: number;

- Description: The count of axis sub tick.

### subTickLine?: IStyle.ILineStyle;

- Description: Axis sub tick style.
