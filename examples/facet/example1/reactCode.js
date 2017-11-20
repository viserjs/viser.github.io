export const template = `
<div>
  <Chart forceFit={true} height={600} data={chartData} dataMapping={dataMapping} scale={scale}>
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
