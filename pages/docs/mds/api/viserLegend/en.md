# Legend

Legend is the auxiliary element of graph. It uses color, size and shape to distinguish different data types for data filtering in graph. Different legend is generated automatically based on the set of graph attribute mapping and data type.

shape, color and size, these three graphics attributes automatically generate different legends if they determine that the received parameters are fields of the data source.

shape,the legend is generated according to different shape types.
color,It will give different illustrations and different colors to distinguish graphics.
size,Displays the size of the graph in legend.

# API

### dataKey?: string;

- Description: the key of data.

### show?: boolean;

- Description: show or not.

### position?: string;

- Description: Set the display position of the legend. There are 12 values that can be set: left-top,left-center,left-bottom,right-top,right-bottom, right-center,top-left,top-center,top-bottom,bottom-left,bottom-center,bottom-right.You can also use bottom, top, left, right to set the location, then the corresponding values are bottom-center,top-center,left-bottom,right-bottom.

### title?: null | object;

- Description: Legend title display style settings, if the value is null, that does not display legend title, the default is not displayed.

### custom?: boolean;

- Description: The default is false, and when custom is true, it means that the default generated legend is not used, allowing users to customize the legend, including specific legend items and click, hover interaction.Customizing a legend requires the user to declare specific legend items (this property is an array of objects, each of which is an object type, structured as: {value:'', marker: {fill: 'red'}}), and the hover and click events for the legend items.

### offset?: number;

- Description: Legend offset value

### offsetX?: number;

- Description: The offset value of the legend x, numeric type, numeric unit 'px', and the default value is 0.

### offsetY?: number;

- Description: The offset value of the legend y, numeric type, numeric unit 'px', and the default value is 0.

### items?: object[];

- Description: Customizing a legend requires the user to declare specific legend items (this property is an array of objects, each of which is an object type, structured as: {value:'', marker: {fill: 'red'}}), and the hover and click events for the legend items.

### itemGap?: number;

- Description: For legends of classification types, indicating the spacing between each item of the legend. If the legend is horizontally arranged, it is left and right spacing. If it is vertically arranged, it is upper and lower spacing.

### titleGap?: number;

- Description: Discarded

### itemMarginBottom?: number;

- Description: The legend of the classification type takes effect, indicating the distance between the vertical directions of each legend.

### itemsGroup?: object[];

- Description: Discarded

### layout?: string;

- Description: Effective for legends of classification type, used to set the arrangement of each legend item, can be set values include: vertical, horizontal, indicating vertical and horizontal arrangement.

### allowAllCanceled?: boolean;

- Description: Effective for legends of classification types, indicates whether all legend items are allowed to be unchecked, defaulting to false, that is, one selected legend item must be retained.

### backPadding?: number[];

- Description: Discarded

### itemWidth?: number;

- Description: The legend of the classification type takes effect. Set the width of the legend item, when the legend has many legend items, and the user wants these legend items to be vertical alignment, this property can help users achieve this effect.

### unCheckColor?: string;

- Description: The legend of the classification type takes effect. Used to cancel the color of legend text.

### background?: object;

- Description: The legend of the classification type takes effect.Used to set the background style used of the legend.

```
{
  fill: '#000',
  fillOpacity: 0.3
}
```

### itemFormatter?: formatterFunc;

- Description: Callback function which is used to format each text of legend.

```
itemFormatter(val) {
  return val; // Val is the text value for each legend item.
}
```

### marker?: string | func;

- Description: Effective for legends of classification types, used to set the marker style of legends, displayed by default according to the type of geom.

When string type is used, it means that the type supplied by default is supported. The type of support is as follows:

todo

marker also supports custom shape, which is used as follows.

```
/**
 * custom the shape of marker 
 * @param  {number} x   The maker's x axis coordinate
 * @param  {number} y   The maker's y axis coordinate
 * @param  {number} r   The maker's radius
 * @return {null}
 */
marker(x, y, r) {}
```

The following code draws marker as shown in the picture:

```
marker(x, y, r) {
  return [
    [ 'M', x - r, y ],
    [ 'L', x + r, y ]
  ];
}
```

### textStyle?: IStyle.ITextStyle;

- Description: Text style for setting legend items.

```
textStyle: {
  textAlign: 'center', // The alignment direction of the text , it can be set as follows: start middle end
  fill: '#404040', // The color of text
  fontSize: '12', // The fontSize of text
  fontWeight: 'bold', // The fontWeight of text
  rotate: 30, // The rotation angle of the text is taken as an angle, only when autoRotate is false.
  textBaseline: 'top' // The text baseline which can be set as top middle bottom, and the default is middle.
}
```

### checkable?: boolean;

- Description: Discarded

### clickable?: boolean;

- Description: For the legend of the classification type, set whether the legend item is allowed to click, the default is true, that is, allow to click.

### hoverable?: boolean;

- Description: For legends of classification type, set whether to turn on the mouse hover to the interactive effect of the legend, the default is true, that is, to turn on animation.

### useHtml?: boolean;

- Description: For classified type legends, it is used to open whether to use HTML to render legends, default to false, true means to use HTML to render legends.

### autoWrap?: boolean;

- Description: Discarded

### autoPosition?: boolean;

- Description: Discarded

### container?: any;

- Description: When useHtml is true and is used to specify the DOM container that generates the legend, the incoming index value is supported if the value must be the ID value of the DOM container for the classification type.

### containerTpl?: string;

- Description: When useHtml is true, it will be used to specify templates for the legend container. The default values are as follows:

```
containerTpl: '<div class="g2-legend" style="position:absolute;top:20px;right:60px;width:auto;">'
  + '<h4 class="g2-legend-title"></h4>'
  + '<ul class="g2-legend-list" style="list-style-type:none;margin:0;padding:0;"></ul>'
  + '</div>';
```

### itemTpl?: string | func;

- Description: Effective when useHtml is true, used to specific the legend item HTML template which is to generate the legend. The default value is as follows:

```
itemTpl: '<li class="g2-legend-list-item item-{index} {checked}" data-color="{originColor}" data-value="{originValue}" style="cursor: pointer;font-size: 14px;">'
  + '<i class="g2-legend-marker" style="width:10px;height:10px;border-radius:50%;display:inline-block;margin-right:10px;background-color: {color};"></i>'
  + '<span class="g2-legend-text">{value}</span>'
  + '</li>';
```

### selectedMode?: string;

- For classified type legends, this configuration entry takes effect when the clickable is true to set the selected interaction mode of the legend, configurable properties:

> selectedMode: 'single': means opening the mode of individual election

> selectedMode: 'multiple': means opening multi select mode, defaults to multiple

### reversed?: boolean;

- Description: Discarded

### slidable?: boolean;

- Description: For consecutive legends, it is used to set whether the consecutive legends allow sliding , default to true, that is, to open sliding operation.

### width?: number;

- Description: For consecutive legend, it is used to set the width of the legend.

### height?: number;

- Description: For consecutive legend, it is used to set the height of the legend.

### legendMarker?: any;

- Description: Discarded

### legendListItem?: any;

- Description: Discarded

### attachLast?: boolean;

- Description: Whether tail-legend is enabled or not, the tail-legend automatically follows the last data point of the geom, and the applicable chart types are line, stackLine, area, stackArea. The default is false, which is not enabled.
