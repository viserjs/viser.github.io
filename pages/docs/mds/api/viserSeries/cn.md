# Series

图形，一般指数据直接生成的图形。

# API

### quickType?: string;

- 描述：提供常见的图形。支持如下：

| type          | 说明                                                                       |
| ------------- | -------------------------------------------------------------------------- |
| line          | 线型图，点按照 x 轴连接成一条线，构成线图                                  |
| smoothLine    | 平滑线型图                                                                 |
| dashLine      | 虚线型图                                                                   |
| stackLine     | 堆积线型图                                                                 |
| area          | 面积图, 填充线图跟坐标系之间构成区域图，也可以指定上下范围。               |
| smoothArea    | 平滑面积                                                                   |
| stackArea     | 堆积面积                                                                   |
| bar           | 柱状图                                                                     |
| stackBar      | 堆叠柱状图                                                                 |
| dodgeBar      | 分组柱状图                                                                 |
| point         | 点，用于点图的构建                                                         |
| funnel        | 对称漏斗图                                                                 |
| pyramid       | 漏斗图                                                                     |
| schema        | k 线图，箱型图。                                                           |
| box           | 箱型图                                                                     |
| candle        | 烛形图                                                                     |
| polygon       | 多边形，可以用于构建热力图、地图等图表类型。，todo                         |
| contour       | todo                                                                       |
| heatmap       | 热力图                                                                     |
| edge          | 边，适用于树图、流程图、关系图。                                           |
| errorBar      | todo                                                                       |
| jitterPoint   | 扰动点图                                                                   |
| path          | 路径，无序的点连接而成的一条线。                                           |
| interval      | 使用矩形或者弧形，用面积来表示大小关系的图形，一般构成柱状图、饼图等图表。 |
| stackInterval | 堆叠                                                                       |
| dodgeInterval | 分组                                                                       |
| sector        | todo                                                                       |

### position?: string | string[];

- 描述：将数据值映射到图形的位置上的方法。

使用 \* 连接，position 属性会对多个字段进行数据的映射，如：cutprice，xy 等，用于二维坐标系图表的绘制。

以 chart.point().position('xy') 为例，point 代表图形，即最后需要生成点图，而 position 代表位置，position('xy') 代表数据在图形中的位置由 x 和 y 这两个维度的变量决定，x \* y 的数据处理结果可以理解为：
[(x1, y1),(x2, y2),(x3, y3),...,(xN, yN),]这样的数值对，最后就会被转换为画布上对应的坐标点。

另外，也可以以数组格式传入：

```
<Series psoition={[ 'fieldA', 'fieldB' ]}/>
```

### gemo?: string;

- 描述：可与 adjust 自由组合。 支持 point path line area interval polygon schema edge heatmap pointStack pointJitter pointDodge intervalStack intervalDodge intervalSymmetric areaStack schemaDodge

尽量使用 quickType 自由组合需要理解内部的实现规则

### adjust?: string | string[] | object[];

- 描述：声明几何标记对象的数据调整方式，可用于绘制层叠图、扰动图、分组图等。支持单一的数据调整方式也支持各种数据调整方式的组合。 支持的调整类型包括： 'stack', 'dodge', 'jitter', 'symmetric'。

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
      marginRatio: 0, // 数值范围为 0 至 1，用于调整分组中各个柱子的间距
      dodgeBy: 'xx', // 声明按照 xx 字段进行分组，一般不需要声明
    }
  ]}
/>
```

### color?: any;

- 描述：将数据值映射到图形的颜色上的方法。示例

- 常量
  只支持接收一个参数，value 可以是：

1. 映射至颜色属性的数据源字段名，如果数据源中不存在这个字段名的话，则按照常量进行解析，这个时候会使用 G2 默认提供的颜色。
2. 也可以直接指定某一个具体的颜色值 color，如 '#fff', 'white' 等。

```
<Series color='red'/>
```

- 字段
  'field'，field 为数据字段名，内部会使用主题中的默认颜色进行数据值到颜色值的映射；

```
<Series color='z'/>
```

- 颜色范围
  ['field', colors]，将数据值映射至指定的颜色值 colors（可以是字符串也可以是数组），此时用于通常映射分类数据；

```
<Series color={['z', [ 'red', 'blue' ]]}/>
```

- 连续颜色渐变
  ['z', 'l(270) 0:#173162 1:#3663a1']，指定颜色的渐变路径，用于映射连续的数据；

```
// 使用渐变色
<Series color={['z', 'red-blue']}/>

// 使用渐变色，l 后面传入角度，0 代表起始颜色，1 代表结束颜色
<Series color={['z', 'l(270) 0:#173162 1:#3663a1']}/>
```

- 回调函数
  ['field', callback)]，使用回调函数进行颜色值的自定义；可以使用多个字段使用\*号连接 注意： color 属性的回调函数一般返回的单个颜色，因为 G2 中所有的 shape 仅支持单个颜色 color 属性的回调函数也可以返回数组，数组中有多个颜色，但是这时候需要 shape 支持多颜色的解析，详细情况查看自定义 shape。

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

- 描述：将数据值映射到图形的形状上的方法。
  只支持接收一个参数，指定几何图像对象绘制的形状。下表列出了不同的 geom 几何图形对象支持的 shape 形状：

| geom 类型 | shape 类型                                                                                                                                                                                                                                        | 解释                                |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| point     | 'circle', 'square', 'bowtie', 'diamond', 'hexagon', 'triangle', 'triangle-down', 'hollowCircle', 'hollowSquare', 'hollowBowtie', 'hollowDiamond','hollowHexagon''hollowTriangle', 'hollowTriangle-down','cross', 'tick', 'plus', 'hyphen', 'line' | hollow 开头的图形都是空心的。       |
| line      | 'line','smooth','dot','dash','spline'                                                                                                                                                                                                             | --                                  |
| area      | 'area','smooth','line','smoothLine'                                                                                                                                                                                                               | --                                  |
| interval  | 'rect','hollowRect','line','tick' hollowRect                                                                                                                                                                                                      | 是空心的矩形，line 和 tick 都是线段 |
| polygon   | 'polygon','hollow'                                                                                                                                                                                                                                | polygon 多边形、hollow 空心多边形。 |
| schema    | 'box','candle'                                                                                                                                                                                                                                    | 目前仅支持箱型图、K 线图            |

- 字段
  dim 为映射至颜色属性的数据源字段名, 将指定的字段映射到内置的 shapes 数组中；。

```
<Series shape='z'/>
```

- 自定义 shape
  ['field', shapes]，用户自己提供 shapes 数据，来进行数据映射；

```
<Series shape={['z', ['circle', 'rect']}/>
```

- 常量
  将所有数据值映射到固定的 shape。

```
<Series shape='point'/>
```

提供以下默认形状：

```
const shapes = {
  point: [ 'hollowCircle', 'hollowSquare', 'hollowDiamond', 'hollowBowtie', 'hollowTriangle', 'hollowHexagon', 'cross', 'tick', 'plus', 'hyphen', 'line' ],
  line: [ 'line', 'dash', 'dot' ],
  area: [ 'area' ]
};
```

### size?: any;

- 描述：将数据值映射到图形的大小上的方法。

> 对于不同的几何标记含义不完全一致：
>
> 1. 对于 point 点来说，size 对应着点的半径；
> 2. 对于 line 线来说，size 对应着线的粗细；
> 3. 对于 interval 柱状图来说，size 对应着柱子的宽度。

- 常量
  指定像素大小。

```
<Series size={3}/>
```

- 字段
  指定映射到 size 的字段，使用内置的默认大小范围为 [1, 10]；

```
<Series size={'z'}/>
```

- 设置范围
  指定映射到 size 字段外，还提供了 size 的最大值和最小值范围；

```
<Series size={['z', [1, 10]]}/>
```

### opacity?: any;

- 描述：将数据值映射到图形的透明度上的方法。

```
<Series opacity='field'/> // 使用字段映射到透明度

<Series opacity={0.2}/> // 常量，但是数值范围为 0 - 1

<Series opacity={['z', (z)=>{ // 回调函数
  if(z > 1000)
    return 0.6;
  return 0.1;
}]}/>
```

### label?: any;

- 描述：将数据值映射到图形的文本上的方法。

- 字段

```
<Series label='field'/>  // 使用字段映射到透明度
```

- 字段配置
  设置显示文本的配置信息。field 代表数据源中的数据字段名。

```
<Series label={['x', {
  offset: 10
  textStyle: {
    fill: 'red'
  }
}]}/>
```

- 回调函数
  使用回调函数控制文本显示。

```
<Series label={'x*y*z', (x, y, z) => {
  return; // something
}}/>
```

### tooltip?: any;

- 描述：将数据值映射到 Tooltip 上。

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

- 描述：配置几何图形的样式。 当 style 的值是 Object 时，该 Object 中只能设置固定样式。 当 style 的值是 Array 时，可以通过回调函数根据具体的数据去动态配置样式。

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

- 描述：开启、关闭以及设置 shape 对于鼠标 click 事件的响应效果， 默认仅为饼图开启了选中效果。

```
<Series select={false} />
```

### active?: boolean;

- 描述：开启以及关闭 shape 对于鼠标 hover 时的响应效果， 默认为各个 shaoe 内置了 active 效果 。

```
<Series active={false} />
```

### animate?: object;

- 描述：动画配置。

```
<Series animate={{
  appear: {
    // 初始入场动画配置
  }
  enter: {
    // 更新时出现动画配置
  },
  leave: {
    // 更新时销毁动画配置
  },
  update: {
    // 更新时改变动画配置
  }
}} />
```

### onMouseDown?: eventFunc;

- 描述：见 event

### onMouseMove?: eventFunc;

- 描述：见 event

### onMouseLeave?: eventFunc;

- 描述：见 event

### onMouseUp?: eventFunc;

- 描述：见 event

### onClick?: eventFunc;

- 描述：见 event

### onDbClick?: eventFunc;

- 描述：见 event

### onTouchStart?: eventFunc;

- 描述：见 event

### onTouchMove?: eventFunc;

- 描述：见 event

### onTouchEnd?: eventFunc;

- 描述：见 event

### onLabelMouseDown?: eventFunc;

- 描述：见 event

### onLabelMouseMove?: eventFunc;

- 描述：见 event

### onLabelMouseLeave?: eventFunc;

- 描述：见 event

### onLabelMouseUp?: eventFunc;

- 描述：见 event

### onLabelClick?: eventFunc;

- 描述：见 event

### onLabelDbClick?: eventFunc;

- 描述：见 event

### onLableTouchStart?: eventFunc;

- 描述：见 event

### onLabelTouchMove?: eventFunc;

- 描述：见 event

### onLabelTouchEnd?: eventFunc;

- 描述：见 event
