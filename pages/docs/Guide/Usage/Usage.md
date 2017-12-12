## Usage

Viser usage is all comes out of G2. But viser added some syntactic sugar. You should study to using viser from demo.

We only talk about some different from G2 and viser.

### DataPre

*dataPre* param is *data-set.js* in G2, and it inclued `connector` and `transform` key from *data-set*, so you should read data-set just enough.

### Series

*Series* param is *gemo* in G2, and we used specific name to express the component, like bar, line etc.

### Coord

*Coord* param is *coord* in G2, but we provide *direction* param which using `transpose`, `reflect` and `scale` of G2.

### Formatter

We add *d3-format* to enhance the `label` function.