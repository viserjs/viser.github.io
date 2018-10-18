# View

View, generated and managed by Chart, has its own independent data sources, coordinate systems and layers for heterogeneous data visualization and chart composition. A Chart consists of one or more Views. So the API on View is basically the same as Chart.

# API

### data?: any;

- Description: The data source of the view can also be set up using the method: view.source(data).

### viewId?: string;

- Description: View ID, the unique identification of View

### dataView?: any;

- Description: deprecate

### coord?: ICoord;

- Description: Use the coord property the same as Chart.

### scale?: IScale;

- Description: Use the scale property the same as Chart.

### axis?: IAxis;

- Description: Use the axis property the same as Chart.

### guide?: IGuide;

- Description: Use the guide property the same as Chart.

### series?: ISeries;

- Description: Use the series property the same as Chart.

### tooltip?: ITooltip;

- Description: Use the tooltip property the same as Chart.

### start?: any;

- Description: Draw the initial coordinates of the region. The structure is as follows:

```
{
  x: 0, // X has a range of 0-1.
  y: 0 // Y has a range of 0-1.
}
```

For view, our starting point is from the upper left corner.

### end?: any;

- Description: Draw the end coordinates of the area. The structure is as follows:

```
{
  x: 0, // X has a range of (0,1).
  y: 0 // Y has a range of (0,1).
}
```

### animate?: boolean

todo

- Description: Whether animations are executed by view, default to be executed.
  > Be careful: The view created under the chart will default to the column definition, axis configuration, coordinate system coord configuration of the chart. That is, if the view is not self-defined, it defaults to the same configuration as the chart; if the view itself defines the corresponding configuration, then its own.