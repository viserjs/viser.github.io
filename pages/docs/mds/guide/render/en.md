## Rendering

At present, all charts support two rendering engines, and the same page can also be mixed with two rendering engines, you can rest assured that use.

### Usage mode

```
<Chart height={400} data={data} renderer='svg' />

<Chart height={400} data={data} renderer='canvas' />
```

### svg VS canvas

HTML5 provides both Canvas and SVG, as well as rendering techniques used by most Web chart libraries. Canvas is based on script and dynamically drafting through JavaScript instructions. SVG uses XML to describe Vectorgraph. They have different application scenarios.

### Application scenary

Canvas provides a lower level of graphics capabilities, suitable for pixel-level graphics processing, dynamic rendering and rendering of large amounts of data graphics. SVG has a higher level of abstraction, a richer declarative and descriptive interface, a large number of graphics, filters and animations built-in to facilitate the maintenance of document elements, but also can be exported out of the browser environment for use.

The following diagram describes the appropriate scenarios for different rendering techniques from the general level.
<img src="https://gw.alipayobjects.com/zos/rmsportal/pqfukMDPRpEvIYNvddxN.jpg" />

### Performance difference

Previous articles on the Internet comparing the performance of Canvas and SVG concluded that "Canvas has better performance and is suitable for rendering larger amounts of data". In fact, this is biased. Performance contrast depends on the scene. At the bottom, the performance of Canvas is more affected by canvas size, while the performance of SVG is more affected by the number of graphic elements. The following is a comparison map given on Microsoft MSDN.

<img src="https://gw.alipayobjects.com/zos/rmsportal/nNSsPFkNcAoxQTfHfZes.png"/>

And in the case of small data volume, SVG schemes usually occupy less memory, do zooming, translation and other operations tend to frame rate is higher.

### Summary

If you only look at the view of the chart library, Canvas and SVG have their own advantages. Small canvas and large data scenes are suitable for Canvas, such as thermodynamic charts and scatter plots of large data. If the canvas is very large, high-frequency interaction such as scaling, translation, or the mobile terminal which is very sensitive to memory usage, you can use the SVG.