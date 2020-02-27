# Scale

Scale is a bridge between data space and graphical space, responsible for the conversion of initial data to [0,1] interval values. Different types of metrics correspond to different data types.

# Type

The type of measurement is determined by the value type of the initial data, so before introduce the type of measurement, we need to know how BizCharts classifies the data.

Depending on the type of data, the following types of metrics are supported.

- identity, the constant type value, that is to say, a certain field of the data is an invariant constant;
- linear, continuous numbers [1, 2, 3, 4, 5];
- cat, classification, ['man', 'woman'];
- time, continuous time type;
- timeCat, discontinuous time, such as stock time, excluding weekends or open dates;
- log, continuous nonlinear Log data. convert [1, 10, 100, 1000] to [0, 1, 2, 3]（suppose the base number is 10）;
- pow, continuous nonlinear Pow data. convert [2, 4, 8, 16, 32] to [1, 2, 3, 4, 5].

# API

 Support multiple types ILinearScale | ICatScale | ILogScale | IPowScale | ITimeScale | ITimeCatScale

### ILinearScale

Continuous figures

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

Classification

```
interface ISCatScale {
  values?: string;
}

type ICatScale = ILinearCommonScale & ISCatScale;
```

### ILogScale

Continuous nonlinear Log data

```
interface ISLogScale {
  base?: number;
}

type ILogScale = ICommonScale & ILinearCommonScale &  ISLogScale;
```

### IPowScale

Continuous nonlinear Pow data

```
ISPowScale {
  exponent?: number;
}

type IPowScale = ICommonScale & ILinearCommonScale &  ISPowScale;
```

### ITimeScale

Continuous time type

```
interface ISTimeScale {
  mask?: string;
}

type ITimeScale = ICommonScale & ILinearCommonScale &  ISTimeScale;
```

### ITimeCatScale

Discontinuous time type

```
type ITimeCatScale = ILinearCommonScale &  ISTimeCatScale;
```

## Universal dependency interface

### type?: string;

- Description: Different types of metrics are specified, and the supported type is listed above.

### formatter?: string | formatterFunc;

- Description: callback, userd to display the text for formatting coordinate axis scale points which will affect the display of data on axis, legend, tooltip.

### range?: number[];

- Description: The range of output data, default [0, 1], is in the form of [min, max], min and Max are data in the range of 0 to 1.

### alias?: string;

- Description: The display alias of the data field is commonly which is used to convert the English name of the field to Chinese name.

### tickCount?: number;

- Description: The number of points on the coordinate axis , and different measurement types correspond to different default values.

### ticks?: number[];

- Description: Used to specify the text information of scale points on the coordinate axis which is displayed according to the number and text of ticks when the user sets the ticks.

### nice?: boolean;

- Description: Whether ticks optimized to change the minimum and maximum values of the data so that each tick is easily understood by the user

### min?: number;

- Description: minimum

### max?: number;

- Description: maximum

### tickInterval?: number;

- Description: The interval between the scales on the specified axis is the difference between the original data. The time type needs to be converted to a timestamp. The tickCount and tickInterval cannot be declared simultaneously.

### values?: string;

- Description: The values of specific classifications are generally used to specify the corresponding relationship between specific orders and enumerations.

### base?: number;

- Description: The base of Log and default to 2.

### exponent?: number;

- Description: The exponent and default to 2.

### mask?: string;

- Description: The format of data is default:'yyyy-mm-dd'.

### sync?: boolean

- Description: When chart has view of different data sources, the range of values used to unify the same data attributes. todo
