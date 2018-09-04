# Coord

坐标系组件。 坐标系是将两种位置标度结合在一起组成的 2 维定位系统，描述了数据是如何映射到图形所在的平面。BizCharts 将坐标系抽象为组件，并且包含两种类型坐标系极坐标系（polar、theta、helix 均属于极坐标）和笛卡尔坐标系，目前所有的坐标系均是 2 维的。

# API

坐标系组件分为两类直角坐标系、极坐标系。两者的 api 是不同的。详细如下：

```
// 直角坐标系
interface IRectCoord {
  type?: 'rect';
  direction?: string;
}

// 极坐标系
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

- 描述：坐标系类型不同类型的坐标系所支持的配置属性也不一样。具体见各类型属性说明。

支持的坐标系有：

| 类型  | 说明                                               |
| ----- | -------------------------------------------------- |
| rect  | 默认类型，直角坐标系，由 x, y 两个垂直的维度构成。 |
| polar | 极坐标系，由角度和半径 2 个维度构成。              |
| theta | 一种半径固定的极坐标系，常用于饼图。               |
| helix | 螺旋坐标系，基于阿基米德螺旋线。                   |

### direction?: string;

- 描述：根据常见坐标系进行分类。

直角坐标系映射关系如下：

| direction | 配置                                                    |
| :-------- | :------------------------------------------------------ |
| BL(默认） | chart.coord('rect');                                    |
| BR        | chart.coord('rect').scale(-1, 1);                       |
| LT        | chart.coord('rect').transpose().scale(1, -1);           |
| LB        | chart.coord('rect').transpose();                        |
| RB        | chart.coord('rect').transpose().reflect();              |
| RT        | chart.coord('rect').transpose().reflect().scale(-1, 1); |
| TL        | chart.coord('rect').reflect();                          |
| TR        | chart.coord('rect').reflect().scale(-1, 1);             |

同理，对于极坐标系我们也提供了 4 种方向，最主要是 `rotate` 和 `reverse` 两种，具体映射关系如下：

| direction | 配置                              |
| :-------- | :-------------------------------- |
| rotate    | chart.coord('rect').transpose();  |
| xReverse  | chart.coord('rect').reflect('x'); |
| yReverse  | chart.coord('rect').reflect('y'); |
| reverse   | chart.coord('rect').reflect();    |

### radius?: number;

- 描述：设置半径，值范围为 0 至 1

### innerRadius?: number;

- 描述：空心圆的半径，值范围为 0 至 1

### startAngle?: number;

- 描述：极坐标的起始角度，单位为弧度

### endAngle?: number;

- 描述：极坐标的结束角度，单位为弧度
