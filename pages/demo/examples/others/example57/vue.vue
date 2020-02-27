<template>
  <div>
    <h2>CLIMATE CONTROL HISTORY</h2>
    <table>
      <tbody>
        <tr v-for="(values,index) in c0Data" :key="index">
          <td class="c0-container">
            <div :id="'c0'+index">
              <v-chart
                :forceFit="true"
                :height="plotHeight"
                padding="0"
                :data="dealData(values)"
              >
                <v-tooltip :showTitle="false"></v-tooltip>
                <v-line v-if="map1[index].type==='line'" position="x*y"></v-line>
                <v-interval v-if="map1[index].type==='interval'" position="x*y"></v-interval>
                <v-area v-if="map1[index].type==='area'" position="x*y"></v-area>
              </v-chart>
            </div>
          </td>
          <td class="label">
            {{map1[index].text}}
          </td>
        </tr>
      </tbody>
    </table>
    <h2>CONDITIONER WORKING TIME</h2>
    <table>
      <tbody>
        <tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
        </tr>
        <tr>
          <td class="c1-container" v-for="(values,index) in c1Data" :key="index">
            <div :id="'c1'+index">
              <v-chart
                :forceFit="true"
                :height="plotHeight"
                padding="0"
                :data="dataSet(dealData(values))"
              >
                <v-coord type="theta"></v-coord>
                <v-tooltip :showTitle="false"></v-tooltip>
                <v-stack-interval position="percent" color="x"></v-stack-interval>
              </v-chart>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const styleCss=`
    table {
        width: 100%;
    }
    .c0-container {
        width: 85%;
    }
    .c1-container {
        width: 14.28%;
    }
    .label {
        font-weight: 600;
        padding: 0 1em;
        text-align: right;
    }
`;
const styleEle=window.document.createElement('style');
styleEle.innerHTML=styleCss;
window.document.getElementsByTagName('head')[0].appendChild(styleEle);

const plotHeight = 100;
const c0Data = [[936, 968, 1025, 999, 998, 1014, 1017, 1010, 1010, 1007, 1004, 988, 990, 988, 987, 995, 946, 954, 991, 984, 974, 956, 986, 936, 955, 1021, 1013, 1005, 958, 953, 952, 940, 937, 980, 966, 965, 928, 916, 910, 980], [16, 17, 18, 19, 20, 21, 21, 22, 23, 22, 20, 18, 17, 17, 16, 16, 17, 18, 19, 20, 21, 22, 23, 25, 24, 24, 22, 22, 23, 22, 22, 21, 16, 15, 15, 16, 19, 20, 20, 21], [71, 70, 69, 68, 65, 60, 55, 55, 50, 52, 73, 72, 72, 71, 68, 63, 57, 58, 53, 55, 63, 59, 61, 64, 58, 53, 48, 48, 45, 45, 63, 64, 63, 67, 58, 56, 53, 59, 51, 54]];
const c1Data = [[14, 10], [8, 16], [8, 16], [12, 12], [6, 18], [1, 23], [5, 19]];
const map1={
  0:{
    text:'980mb',
    type:'line'
  },
  1:{
    text:'21°C',
    type:'interval'
  },
  2:{
    text:'32%',
    type:'area'
  }
};

export default {
  methods:{
    dealData(values){
      const data=values.map((value,i)=>{
        return {
          x:i,
          y:value
        }
      });
      return data;
    },
    dataSet(data){
      const dv = new DataSet.View().source(data);
      dv.transform({
        type: 'percent',
        field: 'y',
        dimension: 'x',
        as: 'percent'
      });
    return dv
    }
  },
  data() {
    return {
      plotHeight,
      c0Data,
      c1Data,
      map1
    };
  }
};
</script>

