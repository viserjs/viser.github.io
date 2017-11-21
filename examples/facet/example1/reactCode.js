export const script = `const { Chart, Facet, FacetView, Tooltip, Axis, Point } = ViserReact`;
export const template = `
<div>
  <Chart forceFit={true} height={600} data={config.chartData} dataMapping={config.dataMapping} scale={config.scale}>
    <Facet type="rect" fields={['cut', 'clarity']}>
      <FacetView>
        <Axis />
        <Tooltip />
        <Point opacity={0.3} size={3} />
      </FacetView>
    </Facet>
  </Chart>
</div>
`;
