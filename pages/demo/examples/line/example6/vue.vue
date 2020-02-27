<template>
  <div>
    <v-chart
      :forceFit="true"
      height="400"
      :padding="padding"
    >
      <v-tooltip crosshairs="false" ></v-tooltip>
      <v-view :data="dv1">
        <v-axis
          dataKey="Year"
          :subTickCount="3"
          :subTickLine="subTickLine"
          :tickLine="tickLine" 
          :label="label"
        >
        </v-axis>
        <v-axis
          dataKey="Deaths"
          :label="label2"
        >
        </v-axis>
        <v-line
          position="Year*Deaths"
        >
        </v-line>
        <v-guide
          type="text" 
          content="趋势线" 
          position="['1970', 12000]" 
          :style="style"
        >
        </v-guide>
      </v-view>
      <v-view :data="dv2">
        <v-line position="year*death" tooltip="false" :style="style2"></v-line>
      </v-view>  
    </v-chart>
  </div>
</template>

<script>
export default {
  mounted(){
    $.getJSON('/assets/data/terrorism.json',data=>{
      const ds = new DataSet();
      const dv1 = ds.createView().source(data);
      dv1.transform({
        type: 'map',
        callback: function callback(row) {
          if (typeof row.Deaths === 'string') {
            row.Deaths = row.Deaths.replace(',', '');
          }
          row.Deaths = parseInt(row.Deaths);
          row.death = row.Deaths;
          row.year = row.Year;
          return row;
        }
      });
      const dv2 = ds.createView().source(dv1.rows);
      dv2.transform({
        type: 'regression',
        method: 'polynomial',
        fields: ['year', 'death'],
        bandwidth: .1,
        as: ['year', 'death']
      });
      this.$data.dv1=dv1.rows;
      this.$data.dv2=dv2.rows;
    });
  },
  methods:{ },
  data() {
    return {
      dv1:[],
      dv2:[],
      subTickLine: {
        length: 3,
        stroke: '#bfbfbf',
        lineWidth: 1
      },
      tickLine: {
        length: 6,
        lineWidth: 1,
        stroke: '#bfbfbf'
      },
      label: {
        textStyle: {
          fill: '#aaaaaa'
        }
      },
      label2: {
        textStyle: {
          fill: '#aaaaaa'
        },
        formatter: function formatter(text) {
          return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
        }
      },
      padding:[20, 20, 50, 50],
      style:{
        fill: '#8c8c8c',
        fontSize: 14,
        fontWeight: 300
      },
      style2:{
        stroke: '#969696',
        lineDash: [3, 3]
      }
    }
  },
};
</script>

