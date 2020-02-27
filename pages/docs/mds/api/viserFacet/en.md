# Facet

Facet, which separate data into several subsets according to a certain dimension, and then a graph matrix is created to draw each subset of data into the pane of the graph matrix.

To sum up, facet actually provides two functions:

Partitioning data sets according to the specified dimensions;
Typesetting charts.

For exploratory data analysis, faceting is a powerful tool that can help you quickly analyze the similarities and differences of data subset patterns.

# API

### type: string;

- Description: Facet type : 'rect' | 'list' | 'circle' | 'tree' | 'mirror'.

The supporting facet type is shown in the following table:

| Facet type | Instruction                                         |
| --------   | --------------------------------------------------  |
| rect       | default, 2 dimensions are specified to form the matrix of the chart               |
| list       | Specifies a dimension that specifies that a row has several columns, which are beyond the line wrap |
| circle     | Specify a dimension that is distributed along the circle                          |
| tree       | Multiple dimensions are specified, and each dimension is expanded as a tree level |
| mirror     | Specify a dimension to form a mirror chart          |
| matrix     | Specify a dimension to form the matrix facet        |

### fields?: string[];

- Description: Setting the dimension of data partitioning is the field name of the data, which is imported by array when containing multiple dimensions. The number of incoming fields of different type is different.

### cols?: number;

- Description: Specifies that each row can display the number of facets and automatically wrap when it exceeds.

### rows?: number;

- Description: Specifies that each col can display the number of facets and automatically wrap when it exceeds.

### colField?: string | string[];

- Description: 

### rowField?: string | string[];

- Description: 

### colValue?: number;

- Description: 

### rowValue?: number;

- Description: 

### colIndex?: number;

- Description: The index of cols

### rowIndex?: number;

- Description: The index of rows

### showTitle?: boolean;

- Description: Whether show title or not

### colTitle?: IColTitleProps;

- Description: The title of the col

```
interface IColTitleProps {
  offsetY?: number;
  style?: IStyle.ITextStyle;
}
```

### rowTitle?: IRowTitleProps;

- Description: The title of the row

```
interface IRowTitleProps {
  offsetX?: number;
  style?: IStyle.ITextStyle;
}
```

### autoSetAxis?: boolean;

- Description: Automatically set the text of the axis to avoid repetition and occlusion.

### padding?: number | number[];

- Description: Spacing between each view

### transpose?: boolean;

- Description: The transpose property is true, which can flip the mirror facet.

### line?: IStyle.ILineStyle;

- Description: Used to configure display properties of lines.

### lineSmooth?: boolean;

- Description: Whether the connection line of each tree node is smooth or not , The default is false.

### views?: any;

- Description: 

### eachView?: (views: any, facet: any) => void;

- Description: 

## Universal dependency interface

### Text style

```
interface ITextStyle {
  fontSize?: number | string;
  fontFamily?: string;
  fontWeight?: number | string;
  textAlign?: string;
  fill?: string;
  lineHeight?: number;
  textBaseline?: string;
  rotate?: number;
  shadowBlur?: number;
  shadowColor?: string;
}
```
