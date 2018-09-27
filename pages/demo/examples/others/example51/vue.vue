<template>
    <div>
        <v-chart :forceFit="true" height="400" :data="data" >
            <v-tooltip :showTitle="false"></v-tooltip>
            <v-coord type="theta" radius="0.8"></v-coord>
            <v-pie position="sold" label="sex" :style="style"></v-pie>
        </v-chart>
    </div>
</template>

<script>
const getJSON = src =>
  new Promise(resolve => $.getJSON(src, data => resolve(data)));

export default {
  data() {
    return {
      dv:{},
      airports:[]
    };
  }
};
</script>

