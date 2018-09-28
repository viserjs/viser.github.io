<template>
  <div>
    <v-chart :forceFit="true" height="400" >
      <v-tooltip :crosshairs="true"></v-tooltip>
      <v-legend dataKey="type"></v-legend>
      <v-view :data="dv" :scale="scale">
        <v-axis dataKey="Median" :title="{text:'Median'}"></v-axis>
        <v-axis dataKey="date" :title="null" :line="{stroke:'#000'}" :grid="{line:{stroke:'#d9d9d9'}}"></v-axis>
        <v-axis dataKey="times" :title="timeTitle" :line="{stroke:'#000'}" :grid="{line:{stroke:'#d9d9d9',lineDash:[0,0]}}"></v-axis>
        <v-area position="date*times" :color="['grade',['#d8d8ff', '#6060ff']]" opacity="0.8" shape="smooth"></v-area>
        <v-area position="date*Median" size="2" color="#000" shape="smooth"></v-area>
      </v-view>
      <v-view :data="markData" :scale="markScale">
        <v-legend dataKey="type" :show="false"></v-legend>
        <v-interval position="date*value" :color="['type',['#ff7f00','#093']]" size="3"></v-interval>
        <v-point
          position="date*value"
          :color="['type',['#ff7f00','#093']]"
          size="30"
          shape="circle"
          :label="['version',{custom:true,renderer:formatter,offset:-5}]"
        ></v-point>
      </v-view>
    </v-chart>
  </div>
</template>

<script>
const markData = [{ "date": "2014-08-06", "type": "Client", "version": "2.0", "value": 11 }, { "date": "2014-08-20", "type": "Client", "version": "2.1", "value": 11 }, { "date": "2014-08-27", "type": "Server", "version": "3.5", "value": 9 }, { "date": "2014-09-03", "type": "Client", "version": "2.2", "value": 11 }];

// 格式化文本
function formatter(text, item) {
  const point = item.point;
  const type = point['type'];
  return '<div style="width: 60px;text-align: center;font-size: 12px;line-height: 1.2;color: #fff;margin-left: -8px;"><span>' + type + '</span><br><span>' + text + '</span></div>';
}

export default {
  mounted() {
    $.getJSON('/assets/data/regionAreaLineData.json', (sourceData) => {
      // 处理数据
      const dv = new DataSet.View()
        .source(sourceData)
        .transform({
          type: 'map',
          callback: function callback(row) {
            row['5% - 95%'] = [row.pct05 / 1000, row.pct95 / 1000];
            row['25% - 75%'] = [row.pct25 / 1000, row.pct75 / 1000];
            row['Median'] = row.pct50 / 1000;
            return row;
          },
        })
        .transform({
          type: 'fold',
          fields: ['5% - 95%', '25% - 75%'],
          key: 'grade',
          value: 'times',
        });
      this.$data.dv = dv;
    });
  },
  data() {
    return {
      dv: [],
      markData,
      formatter,
      scale:[
        {
          dataKey: 'date',
          type: 'time',
          ticks: ['2014-08-01', '2014-08-08', '2014-08-15', '2014-08-22', '2014-08-29', '2014-09-05']
        },
        {
          dataKey: 'times',
          min: 0,
          max: 18,
          nice: false,
          alias: 'Time(s)',
          tickInterval: 2
        },
        {
          dataKey: 'Median',
          min: 0,
          max: 18,
          nice: false
        }
      ],
      markScale:[
        {
          dataKey:'value',
          min: 0,
          max: 18
        },
        {
          dataKey:'date',
          type: 'time',
          ticks: ['2014-08-01', '2014-08-08', '2014-08-15', '2014-08-22', '2014-08-29', '2014-09-05']
        }
      ],
      timeTitle:{textStyle:{fill:'#000'}},
    };
  }
};
</script>

