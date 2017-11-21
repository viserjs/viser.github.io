export const script = `const { Chart, Axis, Tooltip, StackBar } = ViserReact`;
export const template = `
  <div>
    <Chart forceFit height={400} data={config.data} dataPre={config.dataPre} dataMapping={config.dataMapping} scale={config.scale}>
      <Tooltip />
      <Axis />
      <StackBar style={{ stroke: '#fff', lineWidth: 2 }} />
    </Chart>
  </div>
`;
