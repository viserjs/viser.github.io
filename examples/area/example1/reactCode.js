export const script = `const { Chart, Tooltip, Axis, Legend, Area } = ViserReact`;
export const template = `
<div>
  <Chart forceFit height={400} data={config.data} dataPre={config.dataPre} dataMapping={config.dataMapping} scale={config.scale}>
    <Tooltip />
    <Axis />
    <Legend />
    <Area style={{}} />
  </Chart>
</div>
`;
