# Series

 Series,generally refers to data directly generated graphics.

# API

### quickType?: string;

- Description: Provide common graphics. Support is as follows:

| type          | instruction                                                                |
| ------------- | -------------------------------------------------------------------------- |
| line          | A linear graph ,which is connected to a line according to the X axis to form a line graph.  |
| smoothLine    | Smooth linear graph                                                            |
| dashLine      | Dashed linear graph                                                                   |
| stackLine     | Stacked linear graph                                                              |
| area          | Area graph, fill line graph and coordinate system constitute a regional map, you can also specify the upper and lower range.                                                                                      |
| smoothArea    | Smooth area graph                                                                  |
| stackArea     | Stacked area graph                                                                   |
| bar           | Bar graph                                                                     |
| stackBar      | Stacked bar graph                                                                 |
| dodgeBar      | Grouped bar graph                                                               |
| point         | Point,which is for point map construction                                                 |
| funnel        | Symmetrical funnel graph                                                                 |
| pyramid       | funnel graph                                                                    |
| schema        | K-line chart, box graph                                                           |
| box           | box graph                                                                    |
| candle        | Candle graph                                                                     |
| polygon       | Polygons which can be used to build chart types such as thermodynamic charts and maps, todo        |
| contour       | todo                                                                       |
| heatmap       | Thermodynamic graph                                                                     |
| edge          | Edges which are suitable for tree graph, flowcharts, and relation schema                |
| errorBar      | todo                                                                       |
| jitterPoint   | Perturbation point graph                                                                   |
| path          | path,a line formed by connecting disordered points                                        |
| interval      | Use rectangular or arc, with the area to represent the size of the relationship between the graphics, generally composed of bar charts, pie charts and other charts.                           |
| stackInterval | stack                                                                       |
| dodgeInterval | grouped                                                                       |
| sector        | todo                                                                       |

### position?: string | string[];

- Description: A method of mapping data values to the positions of graphics.

Using \* joins, position attributes map data from multiple fields, such as cutprice, xy, etc., for drawing two-dimensional coordinate charts.

Take chart.point().position('xy') as an example. Point represents the graph, that is, the final point graph needs to be generated. Position represents the position of the data in the graph. The position('xy') represents the position of the data in the graph determined by the variables of the two dimensions X and y. The data processing results of X * y can be understood as:
[(x1, y1), (x2, y2), (x3, y3),..., (xN, yN),] these numerical pairs are converted to the corresponding coordinate points on the canvas.

In addition, it can also be imported in array format:

```
<Series psoition={[ 'fieldA', 'fieldB' ]}/>
```

### gemo?: string;

- Description: It can be combined freely with adjust. Support: point path line area interval polygon schema edge heatmap pointStack pointJitter pointDodge intervalStack intervalDodge intervalSymmetric areaStack schemaDodge

Try to use quickType , free combination need to understand internal implementation rules.

### adjust?: string | string[] | object[];

- Description: The data adjustment method of declaring geometric labeled objects ,which can be used to draw cascade graph, perturbation graph, grouping graph and so on. Supporting a single data adjustment mode also supports the combination of various data adjustment methods. The supporting types of adjustment include: 'stack', 'dodge', 'jitter', 'symmetric'.

```
<Series
  type= "point"
  adjust= {'stack'}
  // or
  adjust= {['dodge', 'stack']}
  // or
  adjust= {[
    {
      type: 'dodge',
      marginRatio: 0, // The numerical range is 0 to 1, which is used to adjust the spacing between columns in the group.
      dodgeBy: 'xx', // Declarations are grouped according to the 'xx' field, and generally do not need to be declared.
    }
  ]}
/>
```

### color?: any;

- Description: A method of mapping data values onto the color of a graph. 

- Constant
  Only one parameter is supported. Value can be:

1. Data source field names mapped to color attributes, it will be resolved by constants and use the color provided by G2 by default if the field name does not exist in the data source.
2. You can also specify a specific color value color, such as '#fff', 'white', etc.

```
<Series color='red'/>
```

- Data field
  'field', Field is the name of the data field, and the default color in the topic is used internally to map the data value to the color value.

```
<Series color='z'/>
```

- Color range
  ['field', colors], maps the data value to the specified color value colors (either a string or an array), which is used to map categorized data in general.

```
<Series color={['z', [ 'red', 'blue' ]]}/>
```

- Continuous color gradient
  ['z', 'l(270) 0:#173162 1:#3663a1'], specifies a gradient path for colors to map continuous data.

```
// Using gradient color
<Series color={['z', 'red-blue']}/>

// Using gradient color, the angle after L is introduced, the 0 represents the start color, and the 1 represents the end color.
<Series color={['z', 'l(270) 0:#173162 1:#3663a1']}/>
```

- callback
  ['field', callback)], callback functions can be used to customize color values; multiple fields can be used to connect notes by \*, be careful: The callback function for the color attribute typically returns a single color, because all the shapes in G2 support only a single color attribute, it can also return an array with multiple colors, but this needs shape to support multi color parsing, and to view custom shape in detail.

```
<Series
  color={['z', (value) => {
    if(value === 1) {
      return 'red'
    }

    return 'blue';
  }]}
/>
```

### shape?: any;

- Description: A method for mapping data values onto shapes of graphs.
  It only supports receiving a parameter specifying the shape drawn by a geometric image object. The following table lists the shapes supported by different geometry objects:

| geom type | shape type                |  explain                            |
| --------- | ------------------------- | ----------------------------------- |
| point     | 'circle', 'square', 'bowtie', 'diamond', 'hexagon', 'triangle', 'triangle-down', 'hollowCircle', 'hollowSquare', 'hollowBowtie', 'hollowDiamond','hollowHexagon''hollowTriangle', 'hollowTriangle-down','cross', 'tick', 'plus', 'hyphen', 'line' | The shapes at the beginning of hollow are all hollow     |
| line      | 'line','smooth','dot','dash','spline'                       | --                                  |
| area      | 'area','smooth','line','smoothLine'                         | --                                  |
| interval  | 'rect','hollowRect','line','tick' hollowRect     | It's a hollow rectangle, line and tick are line segments |
| polygon   | 'polygon','hollow'                                          | Polygon: polygons, hollow: hollow polygons |
| schema    | 'box','candle'                             | At present, only box and K-line diagrams are supported       |

- Data field
  Dim is the name of the data source field that maps to the color attribute, mapping the specified field to the built-in shapes array.

```
<Series shape='z'/>
```

- Custom shape
  ['field', shapes], users provide shapes data to map data.

```
<Series shape={['z', ['circle', 'rect']}/>
```

- Constant
  Map all data values to fixed shape.

```
<Series shape='point'/>
```

The following default shapes are provided:

```
const shapes = {
  point: [ 'hollowCircle', 'hollowSquare', 'hollowDiamond', 'hollowBowtie', 'hollowTriangle', 'hollowHexagon', 'cross', 'tick', 'plus', 'hyphen', 'line' ],
  line: [ 'line', 'dash', 'dot' ],
  area: [ 'area' ]
};
```

### size?: any;

- Description: A method of mapping data values to the size of graphics.

> The meanings of different geometric markers are not identical:
>
> 1. For point, size corresponds to the radius of points;
> 2. For line, size corresponds to the thickness of the line;
> 3. For interval bar graph, size corresponds to the width of the column.

- Constant
  Specify pixel size.

```
<Series size={3}/>
```

- Data field
  Specifies the fields that are mapped to size, using the default size range of [1, 10];

```
<Series size={'z'}/>
```

- Set range
  Specifies that the maximum and minimum ranges of size are also provided by mapping to the size field.

```
<Series size={['z', [1, 10]]}/>
```

### opacity?: any;

- Description: A method of mapping data values to the opacity of graphics.

```
<Series opacity='field'/> // Use field mapping to opacity

<Series opacity={0.2}/> // Constant, but the numerical range is 0 to 1

<Series opacity={['z', (z)=>{ // callback
  if(z > 1000)
    return 0.6;
  return 0.1;
}]}/>
```

### label?: any;

- Description: A method for mapping data values onto the label of a graph.
- Data field

```
<Series label='field'/>  // Mapping fields to label
```

- Field configuration
  Sets configuration information for displaying label. Field represents the data field name in the data source.

```
<Series label={['x', {
  offset: 10
  textStyle: {
    fill: 'red'
  }
}]}/>
```

- Callback
  Use callback function to control label display.

```
<Series label={['x*y*z', (x, y, z) => {
  return; // something
}]}/>
```

### tooltip?: any;

- Description: Mapping data values onto Tooltip.

```
<Series tooltip={false} />

<Series
  tooltip={['dim1*dim2', (dim1, dim2)=>{
    return {
      name:'xxx',
      value:dim1 + ':' + dim2
    }
  }]}
/>

<Series tooltip={'dim1*dim2...*dimN'} />
```

### style?: any;

- Description: Configuring the style of geometric. When the value of style is Object, only a fixed style can be set in the Object. When the value of style is Array, you can dynamically configure the style based on the specific data through the callback function.

```
<Series
  style={{
    lineWidth:1
  }}
  //或者
  style={['x*y', {
    lineWidth:1,
    stroke:(sales, city)=>{
      if(city === 'hangzhou' && sales > 1000)
        return "#ff0000";
      return "#00ff00";
    }
   }]}
/>
```

### select?: any;

- Description: Turn on, off, and set the shape response to the mouse click event. By default, only the pie chart is selected.

```
<Series select={false} />
```

### active?: boolean;

- Description: Opening and closing the shape response to the mouse hover, by default for each Shape built-in active effect.

```
<Series active={false} />
```

### animate?: object;

- Description: Animation configuration.

```
const animate = {
  appear: {
    // Initial entry animation configuration
  }
  enter: {
    // Animation configuration when updating
  },
  leave: {
    // Destroy animation configuration when updating
  },
  update: {
    // Change the animation configuration when updating
  }
};
<Series animate={animate} />
```

### onMouseDown?: eventFunc;

- Description: See event

### onMouseMove?: eventFunc;

- Description: See event

### onMouseLeave?: eventFunc;

- Description: See event

### onMouseUp?: eventFunc;

- Description: See event

### onClick?: eventFunc;

- Description: See event

### onDbClick?: eventFunc;

- Description: See event

### onTouchStart?: eventFunc;

- Description: See event

### onTouchMove?: eventFunc;

- Description: See event

### onTouchEnd?: eventFunc;

- Description: See event

### onLabelMouseDown?: eventFunc;

- Description: See event

### onLabelMouseMove?: eventFunc;

- Description: See event

### onLabelMouseLeave?: eventFunc;

- Description: See event

### onLabelMouseUp?: eventFunc;

- Description: See event

### onLabelClick?: eventFunc;

- Description: See event

### onLabelDbClick?: eventFunc;

- Description: See event

### onLableTouchStart?: eventFunc;

- Description: See event

### onLabelTouchMove?: eventFunc;

- Description: See event

### onLabelTouchEnd?: eventFunc;

- Description: See event
