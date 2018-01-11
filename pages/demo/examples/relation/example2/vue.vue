<template>
  <div>
    <v-chart :force-fit="true" :height="500" :data="data">
      <v-tooltip :show-title="false" />
      <v-view :view-id="1" :data-view="'edges'">
        <v-coord :type="'polar'" :direction="'yReverse'" />
        <v-edge :position="'x*y'" :shape="'arc'" :color="'source'" opacity="0.5" tooltip="'source*target'" />
      </v-view>
      <v-view :view-id="2" :data-view="'nodes'">
        <v-coord :type="'polar'" :direction="'yReverse'" />
        <v-point :position="'x*y'" :size="'value'" :color="'id'" :opacity="0.5" :style="style" :label="label" />
      </v-view>
    </v-chart>
  </div>
</template>

<script>
  import * as $ from 'jquery';
  const DataSet = require('@antv/data-set');

  const label = ['name', {
    labelEmit: true,
  }];

  const style = {
    stroke: 'grey'
  };

  export default {
    mounted() {
      $.getJSON('/data/relationship-with-weight.json', (sourceData) => {
        const dv = new DataSet.View().source(sourceData, {
          type: 'graph',
          edges: d => d.links,
        });
        dv.transform({
          type: 'diagram.arc',
          marginRatio: 0.5,
        });
        this.$data.data = dv.rows;
      });
    },
    data() {
      return {
        data: {},
        style,
        label,
      };
    },
  };
</script>