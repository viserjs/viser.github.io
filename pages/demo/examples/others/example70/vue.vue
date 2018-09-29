<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" >
      <v-venn label="sets" size="size" color="id"
        :v-style="{
          lineWidth: 10,
          padding: 10,
          textStyle: {
            fill: 'white',
            textAlign: 'center',
            fontSize: 32
          }
        }">
      </v-venn>
    </v-chart>
  </div>
</template>

<script>
var data = [{"sets":["A"],"size":12,"label":"A"},{"sets":["B"],"size":12,"label":"B"},{"sets":["C"],"size":12,"label":"C"},{"sets":["A","B"],"size":2,"label":"A&B"},{"sets":["A","C"],"size":2,"label":"A&C"},{"sets":["B","C"],"size":2,"label":"B&C"},{"sets":["A","B","C"],"size":1}];

export default {
  data() {
    return {
      data,
      height: 400,
    };
  },
};
</script>
