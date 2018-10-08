<template>
  <div v-if="data.length">
    <v-chart
      :forceFit="true"
      height="400"
      :data="dv"
      :scale="scale"
      :padding="padding"
    >
      <v-legend position="top"></v-legend>
      <v-tooltip></v-tooltip>
      <v-line 
        position="date*value"
        color="city"
        shape="spline"
      >
      </v-line>
      <v-axis
        dataKey="date"
        :line="axisxLine"
        :tickLine="axisxLine"
        :label="axisxLabel"
      >
      </v-axis>
      <v-axis
        dataKey="value"
        :line="axisxLine"
        :tickLine="axisxLine"
        :label="axisyLabel"
      >
      </v-axis>
      <v-brush
        type=""  
        :style="brushStyle"
      >
      </v-brush>
    </v-chart>
  </div>
</template>

<script>
export default {
  mounted(){
    $.getJSON('/assets/data/avg-temp.json',data=>{
      const ds = new DataSet();
      const scale=[
        {
          dataKey: 'date',
          type: 'time'
        },
        {
          dataKey: 'value',
          alias: 'Temperature, ºF'
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
        type: 'fold',
        key: 'city',
        value: 'value',
        fields: ['New York', 'San Francisco', 'Austin']
      });
      this.dv=dv;
    },
  },
  data() {
    return {
      data:[],
      ds:{},
      scale:[],
      dv:{}, 
      padding:[60, 30, 30],
      axisxLine:{
        stroke: '#000'
      },
      axisxLabel:{
        textStyle: {
          textAlign: 'start'
        }
      },
      axisyLabel:{
        textStyle: {
          fill: '#000'
        }
      },
      brushStyle:{
        fill: '#ccc',
        fillOpacity: 0.4
      }
    };
  }
};
</script>

