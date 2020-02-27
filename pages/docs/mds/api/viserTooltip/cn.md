# Tooltip

提示信息(tooltip)组件，是指当鼠标悬停在图表上的某点时，以提示框的形式展示该点的数据，比如该点的值，数据单位等。

## API

### x?: number;

- 描述：

### y?: number;

- 描述：

### items?: object[];

- 描述：

### show?: boolean;

- 描述：是否展示提示信息

### triggerOn?: triggerType;

- 描述：tooltip 的触发方式，可配置的值为：'mousemove'、'click'、'none'，默认为 mousemove。

- 'mousemove': 鼠标移动触发；
- 'click': 鼠标点击出发；
- 'none': 不触发 tooltip，用户通过 chart.showTooltip() 和 chart.hideTooltip() 来控制 tooltip 的显示和隐藏。

### showTitle?: boolean;

- 描述：是否展示提示信息的标题，默认为 true，即展示，通过设置为 false 来隐藏标题。

### title?: string;

- 描述：设置 tooltip 的标题展示的数据字段，设置该字段后，该标题即会展示该字段对应的数值。showTitle 为 false 时，该设置不生效。

### crosshairs?: boolean | ICrosshairs;

- 描述：是一个对象类型，用于设置 tooltip 的辅助线或者辅助框。

默认我们为 geom 为 ‘line’, ‘area’, ‘path’, ‘areaStack’ 开启了垂直辅助线；geom 为‘interval’ 默认会展示矩形背景框。

可支持配置如下：

```
interface ICrosshairs {
  type?: string;  // rect 表示矩形框，x 表示水平辅助线，y 表示垂直辅助线，cross 表示十字辅助线
  style?: IStyle.ILineStyle;
}
```

### offset?: number;

- 描述：设置 tooltip 距离鼠标的偏移量。

### inPlot?: boolean;

- 描述：设置是否将 tooltip 限定在绘图区域内，默认为 true，即限定在绘图区域内。

### follow?: boolean;

- 描述：设置 tooltip 是否跟随鼠标移动。默认为 true，即跟随。

### shared?: boolean;

- 描述：是否展示多条 tooltip, 默认值:true; false 表示只展示单条 tooltip。

### enterable?: boolean;

- 描述：用于控制是否允许鼠标进入 tooltip，默认为 false，即不允许进入。

### position?: string;

- 描述：该属性设置之后，就会在固定位置展示 tooltip，可设置的值为：left、right、top、bottom。

### hideMarkers?: boolean;

- 描述：对于 line、area、path 这三种几何图形，在渲染 tooltip 时会自动渲染 tooltipMarker ，通过声明该属性值为 true 来关闭 tooltipMarker。

### containerTpl?: string;

- 描述：tooltip 默认的容器模板，默认值如下：

```
containerTpl= '<div class="g2-tooltip">'
  + '<div class="g2-tooltip-title" style="margin-bottom: 4px;"></div>'
  + '<ul class="g2-tooltip-list"></ul>'
  + '</div>',
```

如默认结构不满足需求，可以自定义该模板，但是自定义模板时必须包含各个 dom 节点的 class，样式可以自定义。

### itemTpl?: string;

- 描述：tooltip 每项记录的默认模板，默认值如下：

```
itemTpl: '<li data-index={index}>'
  + '<span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>'
  + '{name}: {value}'
  + '</li>'
```

如默认结构不满足需求，可以自定义该模板，但是自定义模板时必须包含各个 dom 节点的 class，样式可以自定义。

### g2Tooltip?: any;

- 描述：设置 tooltip 容器的 CSS 样式。

### g2TooltipTitle?: any;

- 描述：设置 tooltip 标题的 CSS 样式。

### g2TooltipList?: any;

- 描述：设置 tooltip 列表容器的 CSS 样式。

### g2TooltipListItem?: any;

- 描述：设置 tooltip 列表容器中每一项的 CSS 样式。

### g2TooltipMarker?: any;

- 设置tooltip 列表容器中每一项 marker 的 CSS 样式。

### onShow?: eventFunc;

- 描述：

### onHide?: eventFunc;

- 描述：

### onChange?: eventFunc;

- 描述：

### defaultPoint?: any;

- 描述：
