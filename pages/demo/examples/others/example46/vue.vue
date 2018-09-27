<template>
  <div>
    <v-chart :forceFit="true" height="400" :data="data" >
      <v-tooltip></v-tooltip>
      <v-legend dataKey="type"></v-legend>
      <v-coord type="theta" radius="0.8"></v-coord>
      <v-pie position="value" label="type" color="type" shape="triangleShape"></v-pie>
    </v-chart>
  </div>
</template>

<script>
const data = [{
    type: '分类一',
    value: 20
}, {
    type: '分类二',
    value: 18
}, {
    type: '分类三',
    value: 32
}, {
    type: '分类四',
    value: 15
}, {
    type: 'Other',
    value: 15
}];

// 根据比例，获取两点之间的点
function getPoint(p0, p1, ratio) {
    return {
        x: (1 - ratio) * p0.x + ratio * p1.x,
        y: (1 - ratio) * p0.y + ratio * p1.y
    };
}
const pointRatio = 0.7; // 设置开始变成三角形的位置 0.7


// 自定义 other 的图形，增加两条线
ViserVue.registerShape('interval', 'triangleShape', {
    draw: function draw(cfg, container) {
        let centerPoint = {
            x: cfg.points[3].x,
            y: (cfg.points[2].y + cfg.points[3].y) / 2
        };
        centerPoint = this.parsePoint(centerPoint);

        const points = this.parsePoints(cfg.points);
        const tmpPoint1 = getPoint(points[0], points[3], pointRatio);
        const tmpPoint2 = getPoint(points[1], points[2], pointRatio);
        const path = [];
        path.push(['M', points[0].x, points[0].y]);
        path.push(['L', points[1].x, points[1].y]);
        path.push(['L', tmpPoint2.x, tmpPoint2.y]);
        path.push(['L', centerPoint.x, centerPoint.y]);
        path.push(['L', tmpPoint1.x, tmpPoint1.y]);
        path.push('Z');
        return container.addShape('path', {
            attrs: {
                fill: cfg.color,
                path: path,
                lineWidth: 1,
                stroke: 'white'
            }
        });
    }
});

export default {
  data() {
    return {
      data: data,
    };
  }
};
</script>

