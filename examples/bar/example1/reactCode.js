export const template = `
  <div>
    <Chart forceFit height={this.state.height} data={data} dataPre={dataPre} dataMapping={dataMapping} scale={scale}>
      <Tooltip />
      <Axis />
      <StackBar style={{ stroke: '#fff', lineWidth: this.state.lineWidth }} />
    </Chart>
  </div>
`;
