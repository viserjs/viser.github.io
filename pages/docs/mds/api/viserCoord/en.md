# Coord

The Coord components. Coordinate systems is a 2-D positioning system which combines two position scales and describes how the data is mapped to the plane where the graph is located. Coordinate systems is abstracted as a component and contains two types of polar coordinate systems (polar, theta, helix belong to polar coordinates) and Cartesian coordinate systems. At present, all coordinate systems are 2-dimensional.

# API

The Coord components are divided into two types: rectangular coordinate system and polar coordinate system. The API of the two is different. The details are as follows:

```
// Rectangular coordinate system
interface IRectCoord {
  type?: 'rect';
  direction?: string;
}

// Polar coordinate system
interface IPolarCoord {
  type?: 'polar' | 'theta' | 'helix';
  direction?: string;
  radius?: number;
  innerRadius?: number;
  startAngle?: number;
  endAngle?: number;
}
```

### type?: 'polar' | 'theta' | 'helix' | 'rect';

- Description: The coordinate systems supported by different types of coordinate systems have different configuration properties. See specific types of property descriptions.

The supporting coordinate systems are:

| Type  | Illustration                                       |
| ----- | -------------------------------------------------- |
| rect  | default,rectangular coordinate system,which consists of two vertical dimensions, X and Y. |
| polar | polar coordinate system,which consists of 2 dimensions: angle and radius.                 |
| theta | a polar coordinate system with fixed radius, commonly used in pie charts.                 |
| helix | the spiral coordinate system which is based on Archimedes helix.                          |

### direction?: string;

- Description: Classified according to common coordinate system.

The mapping relations in rectangular coordinates are as follows:

| direction    | config                                                  |
| :--------    | :------------------------------------------------------ |
| BL(default)  | chart.coord('rect');                                    |
| BR           | chart.coord('rect').scale(-1, 1);                       |
| LT           | chart.coord('rect').transpose().scale(1, -1);           |
| LB           | chart.coord('rect').transpose();                        |
| RB           | chart.coord('rect').transpose().reflect();              |
| RT           | chart.coord('rect').transpose().reflect().scale(-1, 1); |
| TL           | chart.coord('rect').reflect();                          |
| TR           | chart.coord('rect').reflect().scale(-1, 1);             |

Similarly, we also provide four directions for polar coordinate systems, the most important of which are `rotate` and `reverse`. The mapping relations are as follows:

| direction | config                            |
| :-------- | :-------------------------------- |
| rotate    | chart.coord('rect').transpose();  |
| xReverse  | chart.coord('rect').reflect('x'); |
| yReverse  | chart.coord('rect').reflect('y'); |
| reverse   | chart.coord('rect').reflect();    |

### radius?: number;

- Description: Set the radius range from 0 to 1.

### innerRadius?: number;

- Description: The radius of a hollow circle ranges from 0 to 1.

### startAngle?: number;

- Description: The starting angle of polar coordinates is radian.

### endAngle?: number;

- Description: The ending angle of polar coordinates is radian.
