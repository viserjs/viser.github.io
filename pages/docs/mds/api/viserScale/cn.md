# Scale

度量 Scale，是数据空间到图形空间的转换桥梁，负责原始数据到 [0, 1] 区间数值的相互转换工作。针对不同的数据类型对应不同类型的度量。

# 类型

度量的类型是由原始数据的值类型所决定的，所以在介绍度量的类型之前，需要了解下 BizCharts 对数据的分类方式。

根据数据的类型，支持以下几种度量类型：

- identity，常量类型的数值，也就是说数据的某个字段是不变的常量；
- linear，连续的数字 [1, 2, 3, 4, 5]；
- cat，分类, ['男', '女']；
- time，连续的时间类型；
- timeCat，非连续的时间，比如股票的时间不包括周末或者未开盘的日期；
- log，连续非线性的 Log 数据，将 [1, 10, 100, 1000] 转换成 [0, 1, 2, 3]（假设底数是 10）；
- pow，连续非线性的 pow 数据，将 [2, 4, 8, 16, 32] 转换成 [1, 2, 3, 4, 5]。

# API

 支持多种类型 ILinearScale | ICatScale | ILogScale | IPowScale | ITimeScale | ITimeCatScale

### ILinearScale

连续的数字

```
interface ICommonScale {
  dataKey: string;
  type?: string;
  formatter?: string | formatterFunc;
  range?: number[];
  alias?: string;
  tickCount?: number;
  ticks?: number[];
}

interface ILinearCommonScale {
  nice?: boolean;
  min?: number;
  max?: number;
  tickInterval?: number;
}

type ILinearScale = ICommonScale & ILinearCommonScale;
```

### ICatScale

分类

```
interface ISCatScale {
  values?: string;
}

type ICatScale = ILinearCommonScale & ISCatScale;
```

### ILogScale

连续非线性的 Log

```
interface ISLogScale {
  base?: number;
}

type ILogScale = ICommonScale & ILinearCommonScale &  ISLogScale;
```

### IPowScale

连续非线性的 pow 数据

```
ISPowScale {
  exponent?: number;
}

type IPowScale = ICommonScale & ILinearCommonScale &  ISPowScale;
```

### ITimeScale

连续的时间类型

```
interface ISTimeScale {
  mask?: string;
}

type ITimeScale = ICommonScale & ILinearCommonScale &  ISTimeScale;
```

### ITimeCatScale

非连续的时间

```
type ITimeCatScale = ILinearCommonScale &  ISTimeCatScale;
```

## 通用依赖接口

### type?: string;

- 描述：指定不同的度量类型，支持的 type 在上面已经列出。

### formatter?: string | formatterFunc;

- 描述：回调函数，用于格式化坐标轴刻度点的文本显示，会影响数据在坐标轴 axis、图例 legend、tooltip 上的显示。

### range?: number[];

- 描述：输出数据的范围，默认[0, 1]，格式为 [min, max]，min 和 max 均为 0 至 1 范围的数据。

### alias?: string;

- 描述：该数据字段的显示别名，一般用于将字段的英文名称转换成中文名。

### tickCount?: number;

- 描述：坐标轴上刻度点的个数，不同的度量类型对应不同的默认值。

### ticks?: number[];

- 描述：用于指定坐标轴上刻度点的文本信息，当用户设置了 ticks 就会按照 ticks 的个数和文本来显示。

### nice?: boolean;

- 描述：是否将 ticks 进行优化，变更数据的最小值、最大值，使得每个 tick 都是用户易于理解的数据

### min?: number;

- 描述：最小值

### max?: number;

- 描述：最大值

### tickInterval?: number;

- 描述：用于指定坐标轴各个标度点的间距，是原始数据之间的间距差值，time 类型需要转换成时间戳，tickCount 和 tickInterval 不可以同时声明。

### values?: string;

- 描述：具体的分类的值，一般用于指定具体的顺序和枚举的对应关系

### base?: number;

- 描述：Log 的基数，默认是 2

### exponent?: number;

- 描述：指数，默认 2

### mask?: string;

- 描述：数据的格式化格式 默认：'yyyy-mm-dd',

### sync?: boolean

- 描述：当 chart 存在不同数据源的 view 时，用于统一相同数据属性的值域范围。 todo
