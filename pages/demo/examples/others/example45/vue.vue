<template>
  <div>
    <v-chart :forceFit="true" height="400" :data="data" >
      <v-tooltip :showTitle="false"></v-tooltip>
      <v-coord type="theta" radius="0.8"></v-coord>
      <v-pie position="sold" label="sex" :v-style="style"></v-pie>
    </v-chart>
  </div>
</template>

<script>
const data = [
  {
    sex: "男",
    sold: 0.45
  },
  {
    sex: "女",
    sold: 0.55
  }
];

export default {
  data() {
    return {
      data: data,
      style:[
        'sex', {
          fill: sex => sex === '男' ?
            'p(a)https://gw.alipayobjects.com/zos/rmsportal/nASTPWDPJDMgkDRlAUmw.jpeg' :
            'p(a)https://gw.alipayobjects.com/zos/rmsportal/ziMWHpHSTlTzURSzCarw.jpeg'
        }
      ]
    };
  }
};
</script>

