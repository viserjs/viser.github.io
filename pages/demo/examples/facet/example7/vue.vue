<template>
  <div>
    <v-chart :force-fit="true" :height="600" :data="data" padding="padding">
      <v-tooltip :show-title="false" />
      <v-legend :data-key="'cut'" :position="'top'" />
      <v-coord :type="'theta'" />
      <v-facet :type="'tree'" :fields="fields" :line="{ stroke: '#00a3d7' }" :line-smooth="true" :view="views"></v-facet>
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');
  const { DataView } = DataSet;

  const data = [
    {gender:'男',count:40,'class': '一班',grade: '一年级'},
    {gender:'女',count:30,'class': '一班',grade: '一年级'},
    {gender:'男',count:35,'class': '二班',grade: '一年级'},
    {gender:'女',count:45,'class': '二班',grade: '一年级'},
    {gender:'男',count:20,'class': '三班',grade: '一年级'},
    {gender:'女',count:35,'class': '三班',grade: '一年级'},
    {gender:'男',count:30,'class': '一班',grade: '二年级'},
    {gender:'女',count:40,'class': '一班',grade: '二年级'},
    {gender:'男',count:25,'class': '二班',grade: '二年级'},
    {gender:'女',count:32,'class': '二班',grade: '二年级'},
    {gender:'男',count:28,'class': '三班',grade: '二年级'},
    {gender:'女',count:36,'class': '三班',grade: '二年级'},
  ];

  const views = (view, facet) => {
    const data = facet.data;
    const dv = new DataView();
    dv.source(data).transform({
      type: 'percent',
      field: 'count',
      dimension: 'gender',
      as: 'percent',
    });

    return {
      data: dv,
      scale: {
        dataKey: 'percent',
        formatter: '.2%',
      },
      series: {
        quickType: 'stackBar',
        position: 'percent',
        color: 'gender',
      }
    }
  }

  export default {
    data() {
      return {
        data,
        padding: [60, 90, 80, 80],
        views,
        fields: ['grade', 'class'],
      };
    },
  };
</script>
