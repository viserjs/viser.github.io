<template>
  <div>
    <v-chart :force-fit="true" :height="600" :data="data" :scale="scale">
      <v-tooltip />
      <v-legend />
      <v-axis />
      <v-facet :type="'mirror'" :fields="['gender']" :transpose="true">
        <v-facet-view>
          <v-bar :position="'age*total_percentage'" :color="['gender', [ '#1890ff', '#f04864' ]]" />
        </v-facet-view>
      </v-facet>
    </v-chart>
  </div>
</template>

<script>
  import * as $ from 'jquery';
  const DataSet = require('@antv/data-set');

  const scale = [{
    dataKey: 'age',
    sync: true,
    tickCount: 11,
  }, {
    dataKey: 'total_percentage',
    sync: true,
    formatter(v) {
      return v + '%';
    }
  }, {
    dataKey: 'gender',
    sync: true,
  }];

  export default {
    mounted() {
      $.getJSON('/data/population.json', (sourceData) => {
        const tmp = [];
        const dates = [];
        sourceData.male.values.forEach((obj) => {
          if (dates.indexOf(obj.date) === -1) {
            dates.push(obj.date);
          }
          obj.age_groups.forEach((subObject) => {
            subObject.gender = 'male';
            subObject.date = obj.date;
            tmp.push(subObject);
          });
        });
        sourceData.female.values.forEach((obj) => {
          obj.age_groups.forEach((subObject) => {
            subObject.gender = 'female';
            subObject.date = obj.date;
            tmp.push(subObject);
          });
        });

        const dv = new DataSet.View().source(tmp);
        dv.transform({
          type: 'filter',
          callback(row) {
            return new Date(row.date * 1000).getFullYear() === new Date(dates[0] * 1000).getFullYear();
          }
        });

        this.$data.data = dv.rows;
      });
    },
    data() {
      return {
        data: tmpData,
        scale,
      };
    },
  };
</script>