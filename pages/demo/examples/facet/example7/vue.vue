<template>
  <div>
    <v-chart :force-fit="true" :height="600" :data="data">
      <v-tooltip :show-title="false" />
      <v-legend :data-key="'cut'" :position="'top'" />
      <v-coord :type="'theat'" />
      <v-facet :type="'tree'" :fields="fields" :line="{ stroke: '#00a3d7' }" :line-smooth="true">
        <v-facet-view :data-pre="facetDataPre" :scale="facetScale">
          <v-stack-bar :position="'percent'" :color="'gender'" />
        </v-facet-view>
      </v-facet>
    </v-chart>
  </div>
</template>

<script>
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
  
  const facetDataPre = {
    transform: {
      type: 'percent',
      field: 'count',
      dimension: 'gender',
      as: 'percent',
    },
  };

  const facetScale = {
    dataKey: 'percent',
    formatter: '.2%',
  };

  export default {
    data() {
      return {
        data,
        facetDataPre,
        facetScale,
        fields: ['grade', 'class'],
      };
    },
  };
</script>
