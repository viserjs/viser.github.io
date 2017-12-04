export const template = `
<template>
  <div>
    <v-chart :force-fit="true" :height="600" :data="data" :data-pre:"dataPre" :scale="scale">
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
  import { data } from "./data";

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
  
  const dataPre = {
    transform: {
      type: 'filter',
      callback(row) {
        return new Date(row.date * 1000).getFullYear() === new Date(dates[0] * 1000).getFullYear();
      }
    }
  };

  export default {
    data() {
      return {
        data,
        dataPre,
        scale,
      };
    },
  };
</script>
`;
