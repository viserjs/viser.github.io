<template>
    <div>
        <v-chart :forceFit="true" height="400" :data="data" >
            <v-tooltip :showTitle="false"></v-tooltip>
            <v-legend dataKey="type"></v-legend>
            <v-coord type="theta" innerRadius="0.75"></v-coord>
            <v-pie position="value" color="type" shape="sliceShape"></v-pie>
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

// 可以通过调整这个数值控制分割空白处的间距，0-1 之间的数值
const sliceNumber = 0.01;

// 自定义 other 的图形，增加两条线
ViserVue.registerShape('interval', 'sliceShape', {
    draw: function draw(cfg, container) {
        const points = cfg.points;
        let path = [];
        path.push(['M', points[0].x, points[0].y]);
        path.push(['L', points[1].x, points[1].y - sliceNumber]);
        path.push(['L', points[2].x, points[2].y - sliceNumber]);
        path.push(['L', points[3].x, points[3].y]);
        path.push('Z');
        path = this.parsePath(path);
        return container.addShape('path', {
            attrs: {
                fill: cfg.color,
                path: path
            }
        });
    }
});

export default {
  data() {
    return {
      data: data
    };
  }
};
</script>

