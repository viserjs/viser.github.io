<template>
  <div v-if="data.length">
    <v-chart
      :forceFit="true"
      height="400"
      :data="dv"
      :scale="scale"
    >
      <v-interval 
        position="release*count"
        color="#e50000"
      >
      </v-interval>
      <v-tooltip></v-tooltip>
      <v-axis></v-axis>
      <v-brush type="x"></v-brush>
    </v-chart>
  </div>
</template>

<script>

export default {
  mounted(){
    $.getJSON('/assets/data/top2000.json',data=>{
      const ds = new DataSet();
      const scale=[
        {
          dataKey: 'count',
          alias: 'top2000 唱片总量'
        },
        {
          dataKey: 'release',
          tickInterval: 5,
          alias: '唱片发行年份'
        }
      ];
      this.$data.data=data;
      this.$data.ds=ds;
      this.$data.scale=scale;
      this.getDv();
    });
  },
  methods:{
    getDv(){
      const {ds,data}=this;
      const dv = ds.createView();
      dv.source(data).transform({
        as: ['count'],
        groupBy: ['release'],
        operations: ['count'],
        type: 'aggregate'
      });
      this.dv=dv;
    },
  },
  data() {
    return {
      data:[],
      ds:{},
      scale:[],
      dv:{} 
    };
  }
};
</script>

