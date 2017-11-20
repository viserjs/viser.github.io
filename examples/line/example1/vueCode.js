export const template = `
  <v-chart :width="500" :height="400" :data="config.data" :data-pre="config.dataPre" :data-def="config.dataDef">
    <v-smooth-line :size="2" />
    <v-point :size="4" :v-style="{stroke: '#fff', lineWidth: 1}" />
    <v-tooltip :crosshairs="{type: 'line'}" />
    <v-legend />
    <v-axis data-key="temperature" />
  </v-chart>
`;
