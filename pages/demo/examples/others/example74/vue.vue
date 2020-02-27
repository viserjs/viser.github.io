<template>
  <div>
    <v-chart :forceFit="true" :height="400" :data="data" :scale="scale" padding="auto">
      <v-tooltip></v-tooltip>
      <v-axis></v-axis>
      <v-interval
        position="name*value"
        color="name"
        :opacity="0.7"
      ></v-interval>
      <v-interval
        position="name*range"
          color="name"
          :size="40"
          shape="tick"
      ></v-interval>
    </v-chart>
  </div>
</template>

<script>
const data = [{
  name: '类别一',
  value: 150,
  error: 6
}, {
  name: '类别二',
  value: 120,
  error: 10
}, {
  name: '类别三',
  value: 170,
  error: 5
}, {
  name: '类别四',
  value: 170,
  error: 5
  }];
data.forEach(function(obj) {
  obj.range = [obj.value - obj.error, obj.value + obj.error];
});
  export default {
    data() {
      return {
        data:data,
        scale:[
          {
            dataKey: 'value',
            min: 0,
            max:200
          },
          {
            dataKey: 'range',
            min: 0,
            mx:200
          }
        ],
      };
    }
  };
</script>