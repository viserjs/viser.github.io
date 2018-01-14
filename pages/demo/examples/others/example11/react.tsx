// import { Chart, Legend, Tooltip, Facet, FacetView } from 'viser-react';
// import * as ReactDOM from 'react-dom';
// import * as React from 'react';
// import * as _ from 'lodash';

// const data = [
//   {year:2007, area:'亚太地区', profit: 7860*0.189},
//   {year:2007, area:'非洲及中东', profit: 7860*0.042},
//   {year:2007, area:'拉丁美洲', profit: 7860*0.025},
//   {year:2007, area:'中欧和东欧', profit: 7860*0.018},
//   {year:2007, area:'西欧', profit: 7860*0.462},
//   {year:2007, area:'北美', profit: 7860*0.265},
//   {year:2011, area:'亚太地区', profit: 7620*0.539},
//   {year:2011, area:'非洲及中东', profit: 7620*0.065},
//   {year:2011, area:'拉丁美洲', profit: 7620*0.065},
//   {year:2011, area:'中欧和东欧', profit: 7620*0.034},
//   {year:2011, area:'西欧', profit: 7620*0.063},
//   {year:2011, area:'北美', profit: 7620*0.234}
// ];

// const dataPre = {
//   transform: {
//     type: 'percent',
//     field: 'profit',
//     dimension: 'area',
//     as: 'percent'
//   }
// };

// const scale = [{
//   dataKey: 'percent',
//   formatter: val => {
//     return (val * 100).toFixed(2) + '%';
//   }
// }];

// const facetOpts = {
//   type: 'rect',
//   fields: ['year'],
//   padding: 20,
//   rowTitle: null,
//   colTitle: {
//     offsetY: -30,
//     style: {
//       fontSize: 18,
//       textAlign: 'center',
//       fill: '#999'
//     }
//   },
//   dataPre,
//   scale,
//   eachView(view, facet) {
//     // const data = facet.data;
//     // const dv = new DataView();
//     // dv.source(data)
//     //   .transform({
//     //     type: 'percent',
//     //     field: 'profit',
//     //     dimension: 'area',
//     //     as: 'percent'
//     //   });
//     // view.source(dv, {
//     //   percent: {
//     //     formatter: val => {
//     //       return (val * 100).toFixed(2) + '%';
//     //     }
//     //   }
//     // });
//     // view.coord('theta', {
//     //   innerRadius: 0.35
//     // });

//     // view.intervalStack()
//     //   .position('percent')
//     //   .color('area')
//     //   .label('percent', {
//     //     offset: -8
//     //   })
//     //   .style({
//     //     lineWidth: 1,
//     //     stroke: '#fff'
//     //   });
//     return {
//       scale: scale,
//       series: [{
//         quickType: 'stackInterval',
//         position: 'percent',
//         color: 'area',
//         label: ['percent', {
//           offset: -8
//         }],
//         style: {
//           lineWidth: 1,
//           stroke: '#fff'
//         },
//       }]
//     };
//   }
// };

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Chart forceFit height={600} padding={80} data={data} >
//           <Tooltip showTitle={false}/>
//           <Legend dataKey="area" offset={0}/>
//           <Facet {...facetOpts}>
//           </Facet>
//         </Chart>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('mount'));
