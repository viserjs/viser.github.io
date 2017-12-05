<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" :data-pre="dataPre">
      <v-tooltip />
      <v-axis />
      <v-legend />
      <v-bar :position="'月份*月均降雨量'" :color="'name'" :adjust="adjust" />
    </v-chart>
  </div>
</template>

<script>
  const data = [
    { name:'London', 'Jan.': 18.9, 'Feb.': 28.8, 'Mar.' :39.3, 'Apr.': 81.4, 'May': 47, 'Jun.': 20.3, 'Jul.': 24, 'Aug.': 35.6 },
    { name:'Berlin', 'Jan.': 12.4, 'Feb.': 23.2, 'Mar.' :34.5, 'Apr.': 99.7, 'May': 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4}
  ];

  const dataPre = {
    transform: {
      type: 'fold',
      fields: [ 'Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.' ],
      key: '月份',
      value: '月均降雨量',
    },
  };

  export default {
    data() {
      return {
        data,
        dataPre,
        height: 400,
        adjust: [{ 
          type: 'dodge', 
          marginRatio: 1 / 32,
        }],
      };
    }
  };
</script>