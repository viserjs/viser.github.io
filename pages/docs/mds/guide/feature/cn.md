## 用法

Viser 的使用方法几乎是和 G2 一样的，但是 Viser 增加了更多人性化的语法糖。最快速的了解这些内容的方法，便是学习在我们的“案例”页面中使用 Viser 构建的例子。

接下来，我们将讨论这些 Viser 和 G2 的差异之处，以便于您的理解。

### DataPre



### Series

参数 *Series* 用于表示 G2 中 *gemo* 的相关内容。我们直接使用了具体的名称来表示组件，例如 bar 和 line 等。

### Coord

参数 *Coord* 用于表示 G2 中 *coord* 的相关内容。但是我们提供了 *direction* 这一优化后的参数用来展现 G2 中的 `transpose`, `reflect` 和 `scale` 这几个属性.

### Formatter

我们使用了 *d3-format* 来增强 `label` 的回调函数。