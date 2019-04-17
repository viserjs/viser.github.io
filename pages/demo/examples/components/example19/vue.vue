<template>
    <v-chart :data="data" :forceFit="true" :height="500" :scale="scale">
        <v-tooltip :useHtml="false" :crosshairs="{type:'line'}"></v-tooltip>
        <v-axis></v-axis>
        <v-legend></v-legend>
        <v-stack-area
            position="year*value"
            color="country"
        ></v-stack-area>
        <v-stack-line
            position="year*value"
            color="country"
            :size="2"
        ></v-stack-line>
    </v-chart>
</template>

<script>
// 使用G渲染tooltip。性能更佳！

var data = [{
    country: 'Asia',
    year: '1750',
    value: 502
}, {
    country: 'Asia',
    year: '1800',
    value: 635
}, {
    country: 'Asia',
    year: '1850',
    value: 809
}, {
    country: 'Asia',
    year: '1900',
    value: 5268
}, {
    country: 'Asia',
    year: '1950',
    value: 4400
}, {
    country: 'Asia',
    year: '1999',
    value: 3634
}, {
    country: 'Asia',
    year: '2050',
    value: 947
}, {
    country: 'Africa',
    year: '1750',
    value: 106
}, {
    country: 'Africa',
    year: '1800',
    value: 107
}, {
    country: 'Africa',
    year: '1850',
    value: 111
}, {
    country: 'Africa',
    year: '1900',
    value: 1766
}, {
    country: 'Africa',
    year: '1950',
    value: 221
}, {
    country: 'Africa',
    year: '1999',
    value: 767
}, {
    country: 'Africa',
    year: '2050',
    value: 133
}, {
    country: 'Europe',
    year: '1750',
    value: 163
}, {
    country: 'Europe',
    year: '1800',
    value: 203
}, {
    country: 'Europe',
    year: '1850',
    value: 276
}, {
    country: 'Europe',
    year: '1900',
    value: 628
}, {
    country: 'Europe',
    year: '1950',
    value: 547
}, {
    country: 'Europe',
    year: '1999',
    value: 729
}, {
    country: 'Europe',
    year: '2050',
    value: 408
}, {
    country: 'Oceania',
    year: '1750',
    value: 200
}, {
    country: 'Oceania',
    year: '1800',
    value: 200
}, {
    country: 'Oceania',
    year: '1850',
    value: 200
}, {
    country: 'Oceania',
    year: '1900',
    value: 460
}, {
    country: 'Oceania',
    year: '1950',
    value: 230
}, {
    country: 'Oceania',
    year: '1999',
    value: 300
}, {
    country: 'Oceania',
    year: '2050',
    value: 300
}];


export default {
    data() {
        return {
            data,
            scale:[
                {
                    dataKey: 'year',
                    type: 'linear',
                    tickInterval: 50
                }
            ],
        };
    }
};

</script>
