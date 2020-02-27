# Facet

分面，将一份数据按照某个维度分隔成若干子集，然后创建一个图表的矩阵，将每一个数据子集绘制到图形矩阵的窗格中。

总结起来，分面其实提供了两个功能：

按照指定的维度划分数据集；
对图表进行排版。
对于探索型数据分析来说，分面是一个强大有力的工具，能帮你迅速地分析出数据各个子集模式的异同。

# API

### type: string;

- 描述：分面类型，'rect' | 'list' | 'circle' | 'tree' | 'mirror'。

支持的分面类型如下表所示：

| 分面类型 | 说明                                               |
| -------- | -------------------------------------------------- |
| rect     | 默认类型，指定 2 个维度作为行列，形成图表的矩阵。  |
| list     | 指定一个维度，可以指定一行有几列，超出自动换行。   |
| circle   | 指定一个维度，沿着圆分布。                         |
| tree     | 指定多个维度，每个维度作为树的一级，展开多层图表。 |
| mirror   | 指定一个维度，形成镜像图表。                       |
| matrix   | 指定一个维度，形成矩阵分面。                       |

### fields?: string[];

- 描述：设定数据划分的维度，是数据的字段名，包含多个维度时使用数组传入。不同 type 的分面可传入字段个数不同，

### cols?: number;

- 描述：指定每行可显示分面的个数，超出时会自动换行。

### rows?: number;

- 描述：指定每列可显示分面的个数，超出时会自动换行。

### colField?: string | string[];

- 描述：

### rowField?: string | string[];

- 描述：

### colValue?: number;

- 描述：

### rowValue?: number;

- 描述：

### colIndex?: number;

- 描述：第几行

### rowIndex?: number;

- 描述：第几列

### showTitle?: boolean;

- 描述：显示标题

### colTitle?: IColTitleProps;

- 描述：列标题

```
interface IColTitleProps {
  offsetY?: number;
  style?: IStyle.ITextStyle;
}
```

### rowTitle?: IRowTitleProps;

- 描述：行标题

```
interface IRowTitleProps {
  offsetX?: number;
  style?: IStyle.ITextStyle;
}
```

### autoSetAxis?: boolean;

- 描述：自动设置坐标轴的文本，避免重复和遮挡

### padding?: number | number[];

- 描述：每个 view 之间的间距

### transpose?: boolean;

- 描述：transpose 属性为 true，可以将镜像分面翻转。

### line?: IStyle.ILineStyle;

- 描述：用于配置线的显示属性。

### lineSmooth?: boolean;

- 描述：各个树节点的连接线是否是平滑的曲线，默认为 false。

### views?: any;

- 描述：

### eachView?: (views: any, facet: any) => void;

- 描述：

## 通用依赖接口

### 文字样式

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
