<template>
  <div>
    <v-chart :forceFit="true" :height="500" padding="0"
      :scale="[
        { dataKey: 'longitude', max: -66, min: -125, },
        { dataKey: 'latitude', max: 50, min: 24,}
      ]"
    >
      <v-view :data="dv">
        <v-polygon position="longitude*latitude"
          color="#ddd"
          :v-style="{ stroke: '#666', lineWidth: 1 }"
        />
      </v-view>
      <v-view :data="airports.slice(1,100)">
        <v-point position="longitude*latitude"
          :shape="['iata', () => ['path', 'M15 0C6.716 0 0 6.656 0 14.866c0 8.211 15 35.135 15 35.135s15-26.924 15-35.135C30 6.656 23.284 0 15 0zm-.049 19.312c-2.557 0-4.629-2.055-4.629-4.588 0-2.535 2.072-4.589 4.629-4.589 2.559 0 4.631 2.054 4.631 4.589 0 2.533-2.072 4.588-4.631 4.588z']]"
          size="40"
          color="#666"
        />
      </v-view>
    </v-chart>
  </div>
</template>

<script>

export default {
  mounted() {
    $.getJSON('/assets/data/usa.geo.json', (data) => {
      $.getJSON('/assets/data/airport-1.json', (airports) => {
        const dv = new DataSet.View().source(data).source(data, {
          type: "GeoJSON"
        });
        this.$data.dv = dv;
        this.$data.airports = airports;
      });
    });
  },
  data() {
  return {
    dv: {},
    airports: []
  };
  }
};
</script>

