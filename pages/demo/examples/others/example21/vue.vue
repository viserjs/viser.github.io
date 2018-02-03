<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip />
      <v-legend
        :custom="legendCustom"
        :allow-all-canceled="legendAllowAllCanceled"
        :items="legendItems"
        :on-click="legendOnClick"
      />
      <v-axis
        data-key="people"
        :grid="axisGrid"
        :label="axisLabel"
      />
      <v-bar position="time*waiting" color="#3182bd" />
      <v-smooth-line position="time*people" color="#fdae6b" :size="gemoSize" />
      <v-point shape="circle" position="time*people" color="#fdae6b" :size="gemoSize" />
    </v-chart>
  </div>
</template>

<script>
  const data = [
    { time: '10:10', call: 4, waiting: 2, people: 2 },
    { time: '10:15', call: 2, waiting: 6, people: 3 },
    { time: '10:20', call: 13, waiting: 2, people: 5 },
    { time: '10:25', call: 9, waiting: 9, people: 1 },
    { time: '10:30', call: 5, waiting: 2, people: 3 },
    { time: '10:35', call: 8, waiting: 2, people: 1 },
    { time: '10:40', call: 13, waiting: 1, people: 2 }
  ];

  const scale = [{
    dataKey: 'call',
    min: 0
  }, {
    dataKey: 'people',
    min: 0
  }, {
    dataKey: 'waiting',
    min: 0
  }];

  export default {
    data() {
      return {
        data,
        scale,
        height: 400,

        axisLabel: {
          textStyle: {
            fill: '#fdae6b'
          }
        },
        axisGrid: null,

        gemoSize: 3,

        legendCustom: true,
        legendAllowAllCanceled: true,
        legendItems: [
          {value: 'waiting', marker: {symbol: 'square', fill: '#3182bd', radius: 5} },
          {value: 'people', marker: {symbol: 'hyphen', stroke: '#fdae6b', radius: 5, lineWidth: 3} }
        ],
        legendOnClick: (ev, chart) => {
          const item = ev.item;
          const value = item.value;
          const checked = ev.checked;
          const geoms = chart.getAllGeoms();
          for (let i = 0; i < geoms.length; i++) {
            const geom = geoms[i];
            if (geom.getYScale().field === value) {
              if (checked) {
                geom.show();
              } else {
                geom.hide();
              }
            }
          }
        },
      };
    }
  };
</script>