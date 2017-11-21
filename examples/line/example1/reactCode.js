export const script = `const { Chart, Tooltip, Axis, Line } = ViserReact`;
export const template = `
<div>
  <Chart forceFit height={400} data={config.data} dataPre={config.dataPre} dataMapping={config.dataMapping} scale={config.scale}>
    <Tooltip />
    <Axis />
    <Line style={{ stroke: 'red', lineWidth: 1 }} />
  </Chart>
</div>
`;
