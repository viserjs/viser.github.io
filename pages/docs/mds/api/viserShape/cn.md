# Shape

在 <Series shape={shapeType} /> 中指定几何图形时，可以使用内置的 shape，也可以通过 Shape 来自定义 shape。

# 使用方法

```
import { Shape } from 'viser';
//往 interval 几何标记对象（决定了图表类型，即柱状图、饼图等）上注册名字为 shapeName 的 Shape
const shapeObj = Shape.registerShape(geomName, 'shapeName', {
  getPoints: function(pointInfo) {
    // 获取 shape 绘制的关键点
  },
  draw: function(cfg, container) {
    // 自定义最终绘制的逻辑
  }
});

ReactDOM.render(<Chart><Series type='interval' shape='shapeName' /></Chart> , container);
```

# 内部方法

### draw

- 描述：用来定义如何连接这些关键点的。

cfg 参数包含经过图形映射后的所有数据以及该数据对应的原始数据，结构如下图所示：

<img src="https://zos.alipayobjects.com/skylark/505c6cb1-fde7-4714-98b6-43cb77099f19/attach/3378/332f7e3e64bc48f5/image.png"/>

原始数据存储于 cfg.origin.\_origin 中，通过 getPoints 计算出的图形关键点都储存于 points 中。而 cfg 对象中的 color、size、shape 都是通过映射之后的图形属性数据，可以直接使用。

### getPoints

- 描述：用于计算绘制每种 shape 的关键点，在 G2 中每种几何形状都是由特定的几个关键点通过线连接而成。传入的参数 pointInfo 数据结构如下，所有的数值都是归一化后的结果（即 0 至 1 范围内的数据）：

| geom 类型 | 解释                                                                                                                                                                                                                                                                                                                                           |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| point     | 点的绘制很简单，只要获取它的坐标以及大小即可，其中的 size 属性代表的是点的半径。 <img src="https://zos.alipayobjects.com/skylark/940c75cf-8400-415a-9e2d-040ce46e6a03/attach/3378/269e0e2c77a555a5/image.png"/>                                                                                                                                |
| line      | 线其实是由无数个点组成，在 G2 中我们将参与绘制的各个数据转换成坐标上的点然后通过线将逐个点连接而成形成线图，其中的 size 属性代表的是线的粗细。 <img src="https://zos.alipayobjects.com/skylark/f9b84b83-1cc8-4b81-9319-f643ef0e280a/attach/3378/d49e02be2f48a136/image.png"/>                                                                  |
| area      | area 面其实是在 line 线的基础之上形成的, 它将折线图中折线与自变量坐标轴之间的区域使用颜色或者纹理填充。 <img src="https://zos.alipayobjects.com/skylark/dbcd60f3-7662-4ebd-8e0e-85d7d754d0c7/attach/3378/f67277978d5d8e3e/image.png"/>                                                                                                         |
| interval  | interval 默认的图形形状是矩形，而矩形实际是由四个点组成的，我们根据 pointInfo 中的 x、y、size 以及 y0 这四个值来计算出这四个点，然后顺时针连接而成。 <img src="https://zos.alipayobjects.com/skylark/f36a2e27-13e8-4d55-8c93-b698e15bcc1f/attach/3378/94a6515e2eb60265/image.png"/>                                                            |
| polygon   | polygon 多边形其实也是由多个点连接而成，在 pointInfo 中 x 和 y 都是数组结构。 <img src="https://zos.alipayobjects.com/skylark/b4f6981c-ccd3-4237-97bd-dd88950758ea/attach/3378/ed2b5c05a1ff3581/image.png"/>                                                                                                                                   |
| schema    | schema 作为一种自定义的几何图形，在 G2 中默认提供了 box 和 candle 两种 shape，分别用于绘制箱型图和股票图，注意这两种形状的矩形部分四个点的连接顺序都是顺时针，并且起始点均为左下角，这样就可以无缝转换至极坐标。<img src="https://zos.alipayobjects.com/skylark/8afa13da-95d1-4282-a08b-f1c421b0d972/attach/3378/d82c45d3a526bd80/image.png"/> |
| edge      | edge 边同 line 线一致，区别就是 edge 是一个线段，连接边的两个端点即可。/>                                                                                                                                                                                                                                                                      |

### parsePath

- 描述：将形状的关键点连接之后形成的 path，如果依然是归一化后的数据的话，就可以调用该方法将其转化了画布上的坐标值

path: String

连接各个关键的路径，例如：'M0 0C0,0,0.0315...5785,0,0.675,0,0.675z'。

isCircle: Boolean

是否是极坐标。如果是极坐标，该方法会自动进行转曲。

# API

### x?: number;

- 描述：该点归一化后的 x 坐标

### y?: number & number[];

- 描述：该点归一化后的 y 坐标

### y0?: number;

- 描述：整个数据集 y 轴对应数据的最小值，也是归一化后的数据，注意如果 y 对应的源数据是数组则 y 也将是个数组

### size?: number;

- 描述： 形状的尺寸，不同的 shape 该含义不同，0 - 1 范围的数据

# 案例

可查看 demo 中心的 其他图表->圆角堆叠柱状图 。 案例很多。
