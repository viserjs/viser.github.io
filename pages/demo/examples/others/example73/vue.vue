<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="source" :scale="scale" :padding="padding">
      <v-tooltip />
      <v-axis
        dataKey="name"
        :grid="gridy"
        :tickLine="null"
      >
      </v-axis>
      <v-axis
        dataKey="day"
        :grid="gridx"
      >
      </v-axis>
      <v-polygon 
        position="name*day" 
        :color="color"
        :style="style"
      />
      <v-brush
        type=""  
        :style="brushStyle"
      >
      </v-brush>
    </v-chart>
  </div>
</template>

<script>
  const data = [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]];
  let source = [];
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let obj = {};
    obj.name = item[0];
    obj.day = item[1];
    obj.sales = item[2];
    source.push(obj);
  }
  const scale = [
    {
      dataKey: 'name',
      type: 'cat',
      values: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
    },
    {
      dataKey: 'day',
      type: 'cat',
      values: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    }
  ];

  export default {
    data() {
      return {
        source,
        scale,
        height: 400,
        padding: 80,
        gridy: {
          align: 'center',
          lineStyle: {
            lineWidth: 1,
            lineDash: null,
            stroke: '#f0f0f0'
          }
        },
        gridx: {
          align: 'center',
          lineStyle: {
            lineWidth: 1,
            lineDash: null,
            stroke: '#f0f0f0'
          }
        },
        color: ['sales', '#BAE7FF-#1890FF-#0050B3'],
        style: {
          lineWidth: 1,
          stroke: '#fff'
        },
        brushStyle: {
          lineWidth: 1,
          stroke: '#999',
          fill: '#999',
          fillOpacity: 0.3
        }
      };
    }
  };
</script>