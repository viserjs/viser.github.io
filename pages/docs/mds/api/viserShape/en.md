# Shape

When you specify a geometry in <Series shape={shapeType}/>, you can use built-in shapes or customize shapes through Shape.

# Usage method

```
import { Shape } from 'viser';
// Register Shape with the name shapeName on the interval geometric markup object (which determines the type of chart, i.e. bar chart, pie chart, etc.)
const shapeObj = Shape.registerShape(geomName, 'shapeName', {
  getPoints: function(pointInfo) {
    // Get the key points of shape drawing
  },
  draw: function(cfg, container) {
    // Custom final draw logic
  }
});

ReactDOM.render(<Chart><Series type='interval' shape='shapeName' /></Chart> , container);
```

# Internal method

### draw

- Description: It is used to define how to connect these key points.

cfg parameter contains all data through the original data and the mapping of the data corresponding to the structure as shown below:

<img src="https://zos.alipayobjects.com/skylark/505c6cb1-fde7-4714-98b6-43cb77099f19/attach/3378/332f7e3e64bc48f5/image.png"/>

The original data is stored in cfg.origin.\_origin, and the key points calculated by getPoints are stored in points. The color, size, shape in the cfg object are all the graphics attribute data after mapping, which can be used directly.

### getPoints

- Description: The key points used to calculate and draw each shape, each geometry in G2 is composed of a specific number of key points connected by lines. The incoming parameter pointInfo data structure is as follows, and all values are normalized (i.e., data in the range 0 to 1):

| geom type | explain                                                                                                                                                                                                                                                                                                                                           |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| point     | Point drawing is simple, just get its coordinates and size, where the size attribute represents the radius of the point. <img src="https://zos.alipayobjects.com/skylark/940c75cf-8400-415a-9e2d-040ce46e6a03/attach/3378/269e0e2c77a555a5/image.png"/>                                                                                                                                |
| line      | Lines are actually made up of innumerable points. In G2, we convert the data we draw into points on coordinates and then join them one by one to form a line graph. The size attribute represents the thickness of the line. <img src="https://zos.alipayobjects.com/skylark/f9b84b83-1cc8-4b81-9319-f643ef0e280a/attach/3378/d49e02be2f48a136/image.png"/>                                                                  |
| area      | Areas are actually formed on the basis of lines, which fill the area between the line breaks and the independent coordinate axis with color or texture. <img src="https://zos.alipayobjects.com/skylark/dbcd60f3-7662-4ebd-8e0e-85d7d754d0c7/attach/3378/f67277978d5d8e3e/image.png"/>                                                                                                         |
| interval  | The default shape of the interval is a rectangle, and the rectangle is actually made up of four points, which we calculate from the values x, y, size, and y0 in pointInfo, and then join clockwise. <img src="https://zos.alipayobjects.com/skylark/f36a2e27-13e8-4d55-8c93-b698e15bcc1f/attach/3378/94a6515e2eb60265/image.png"/>                                                            |
| polygon   | Polygons are actually connected by multiple points, and x and y are array structures in pointInfo. <img src="https://zos.alipayobjects.com/skylark/b4f6981c-ccd3-4237-97bd-dd88950758ea/attach/3378/ed2b5c05a1ff3581/image.png"/>                                                                                                                                   |
| schema    | As a custom geometry, schema provides two kinds of shapes: box and candle by default in G2 for drawing boxes and stock graphs respectively. Note that the order of connection of the four points in the rectangular part of the two shapes is clockwise, and the starting point is the lower left corner, so that it can be seamlessly converted to polar coordinates.<img src="https://zos.alipayobjects.com/skylark/8afa13da-95d1-4282-a08b-f1c421b0d972/attach/3378/d82c45d3a526bd80/image.png"/> |
| edge      | The edge is the same as the line. The difference is that edge is a line segment, and the two endpoints can be connected.                                                                                                                                                                                                                                                                     |

### parsePath

- Description: The path formed by joining the key points of the shape, if it is still normalized data, can be invoked to convert it to the coordinate values on the canvas

path: String

Connect all the critical paths, such as'M0 0C0,0,0.0315... 5785,0,0.675,0,0.675z'.

isCircle: Boolean

Whether it is polar coordinates. If it is polar coordinates, the method will automatically rotate.

# API

### x?: number;

- Description: The normalized x coordinates of the point.

### y?: number & number[];

- Description: The normalized y coordinates of the point.

### y0?: number;

- Description: The minimum value of the data set corresponding to the Y axis ,which is also the normalized data. Note that if the source data corresponding to y is an array, y will also be an array.

### size?: number;

- Description: The size of the shape, the different shape has different meaning, range of data is 0 to 1.

# 案例

You can view other charts in the demo Center - > fillet stacked bar graph. There are many cases.
