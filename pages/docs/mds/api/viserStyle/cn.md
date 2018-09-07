# Style

常见样式, 类似于 css， 不做详细说明

# API

### 文本样式

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

### 线条样式

```
interface ILineStyle {
  stroke?: string;
  strokeOpacity?: number;
  lineWidth?: number;
  lineHeight?: number;
  lineDash?: number[];
  length?: number;
  textAlign?: string;
}
```
