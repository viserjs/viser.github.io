# View

视图，由 Chart 生成和管理，拥有自己独立的数据源、坐标系和图层，用于异构数据的可视化以及图表组合，一个 Chart 由一个或者多个视图 View 组成。因此 view 上的 api 同 chart 基本相同。

# API

### data?: any;

- 描述：视图的数据源，同时也可以使用 view.source(data) 方法设置数据源。

### viewId?: string;

- 描述：视图 id，唯一标识视图

### dataView?: any;

- 描述：deprecate

### coord?: ICoord;

- 描述：使用同 Chart 的 coord 属性。

### scale?: IScale;

- 描述：使用同 Chart 的 scale 属性。

### axis?: IAxis;

- 描述：使用同 Chart 的 axis 属性。

### guide?: IGuide;

- 描述：使用同 Chart 的 guide 属性。

### series?: ISeries;

- 描述：使用同 Chart 的 series 属性。

### tooltip?: ITooltip;

- 描述：使用同 Chart 的 tooltip 属性。

### start?: any;

- 描述：绘制区域的起始坐标，结构如下：

```
{
  x: 0, // x 取值范围为 0 - 1
  y: 0 // y 取值范围为 0 - 1
}
```

对于 view，我们的起始点是从左上角开始的。

### end?: any;

- 描述：绘制区域的终点坐标，结构如下：

```
{
  x: 0, // x 取值范围为 0 -1
  y: 0 // y 取值范围为 0 -1
}
```

### animate?: boolean

todo

- 描述：视图是否执行动画，默认执行。
  > 注意：chart 下创建的 view 将默认使用 chart 的 列定义、坐标轴 axis 配置、坐标系 coord 配置，即如果 view 不自己定义则默认同 chart 的配置相同；如果 view 自己定义了相应的配置，则以自己的为准。
