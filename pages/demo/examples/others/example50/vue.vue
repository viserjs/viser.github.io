<template>
    <div v-if="data.length">
        <v-chart :forceFit="true" height="400" :data="dv" padding="0">
            <v-tooltip></v-tooltip>
            <v-facet
                type="list"
                :fields="['state']"
                col="9"
                :showTitle="false"
                padding="0"
                :eachView="eachView"
            >
            </v-facet>
        </v-chart>
    </div>
</template>

<script>
const getJSON = src =>
  new Promise(resolve => $.getJSON(src, data => resolve(data)));

export default {
  async mounted() {
    const data = await getJSON("/assets/data/population-by-age.json");
    const dv = new DataSet.View().source(data);
    dv
      .transform({
        type: "fold",
        fields: ["小于5岁", "5至13岁", "14至17岁"], // 展开字段集
        key: "age",
        value: "count"
      })
      .transform({
        type: "percent",
        field: "count",
        dimension: "age",
        groupBy: ["state"],
        as: ["percent"]
      });
    this.$data.data = data;
    this.$data.dv = dv;
  },
  data() {
    return {
      data: [],
      dv: {},
      eachView: (view, facet) => {
        view.coord("theta", {
          radius: 0.8,
          innerRadius: 0.6
        });
        view
          .intervalStack()
          .position("percent")
          .color("age");
        view.guide().html({
          position: ["50%", "50%"],
          html:
            '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">' +
            facet.data[0].state +
            "</div>",
          alignX: "middle",
          alignY: "middle"
        });
      }
    };
  }
};
</script>

