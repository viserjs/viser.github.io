# Tooltip

The tooltip component is a tooltip box that displays the data of a point when the mouse hovers over it, such as the value of the point, the unit of data, etc.

## API

### x?: number;

- Description:

### y?: number;

- Description:

### items?: object[];

- Description:

### show?: boolean;

- Description: whether show the tooltip or not.

### triggerOn?: triggerType;

- Description: Tooltip can be triggered with these configurable values: 'mousemove','click','none', defaulting to mousemove.

- 'mousemove': trigger with mouse move.
- 'click': trigger with mouse click.
- 'none': Don't trigger tooltip, The user controls tooltip's display and hiding through 'chart.showTooltip()' and 'chart.hideTooltip()'.

### showTitle?: boolean;

- Description: Whether to display the title of the tooltip, default to true, that is, display, by setting it to false to hide the title.

### title?: string;

- Description: Set the data field displayed by the title of the tooltip, and when this field is set, the title displays the corresponding value of the field. When showTitle is false, the settings do not work.

### crosshairs?: boolean | ICrosshairs;

- Description: It is an object type that is used to set up the auxiliary line or auxiliary box of tooltip.

By default, we open vertical auxiliary lines for geom as 'line','area','path','areaStack'; and geom displays a rectangular background box for 'interval' by default.

The supporting configuration is as follows:

```
interface ICrosshairs {
  type?: string;  // 'rect' represents a rectangle, 'X' represents a horizontal auxiliary line, 'Y 'represents a vertical auxiliary line, and 'cross' represents a cross auxiliary line.
  style?: IStyle.ILineStyle;
}
```

### offset?: number;

- Description: Set the tooltip offset from the mouse.

### inPlot?: boolean;

- Description: Set whether to restrict tooltip to the drawing area, defaults to true, that is, it is restricted to the drawing area.

### follow?: boolean;

- Description: Set whether tooltip to follow the mouse movement. The default is true, that is, follow.

### shared?: boolean;

- Description: Whether to display multiple tooltip, default value is true, false indicates only one tooltip.

### enterable?: boolean;

- Description: To control whether the mouse is allowed to enter tooltip, the default is false, which is not allowed to enter.

### position?: string;

- Description: After this property is set, tooltip is displayed in a fixed location with the settable values: left, right, top, bottom.

### hideMarkers?: boolean;

- Description: For line, area, and path geometries, tooltipMarker is automatically rendered when tooltip is rendered, and the tooltipMarker is closed by declaring the property value true.

### containerTpl?: string;

- Description: Tooltip default container template with default values as follows:

```
containerTpl= '<div class="g2-tooltip">'
  + '<div class="g2-tooltip-title" style="margin-bottom: 4px;"></div>'
  + '<ul class="g2-tooltip-list"></ul>'
  + '</div>',
```

If the default structure does not meet the requirements, you can customize the template, but when you customize the template, you must include the class of each DOM node, and the style can be customized.

### itemTpl?: string;

- Description: The default template for each item is tooltip. The default values are as follows:

```
itemTpl: '<li data-index={index}>'
  + '<span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>'
  + '{name}: {value}'
  + '</li>'
```

If the default structure does not meet the requirements, you can customize the template, but when you customize the template, you must include the class of each DOM node, and the style can be customized.

### g2Tooltip?: any;

- Description: Set the CSS style of the tooltip container.

### g2TooltipTitle?: any;

- Description: Sets the CSS style of the tooltip title.

### g2TooltipList?: any;

- Description: Set the CSS style of the tooltip list container.

### g2TooltipListItem?: any;

- Description: Set the CSS style of each item in the tooltip list container.

### g2TooltipMarker?: any;

- Description: Set the CSS style of each marker in the tooltip list container.

### onShow?: eventFunc;

- Description:

### onHide?: eventFunc;

- Description:

### onChange?: eventFunc;

- Description:

### defaultPoint?: any;

- Description:
