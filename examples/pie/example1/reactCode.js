export const template = `
<div>
  <Chart width={400} height={300} data={data} dataMapping={dataMapping}>
    <Coord radius={1} innerRadius={0.6} />
    <Pie label={true} />
    <Tooltip />
    <Legend />
    <Axis />
  </Chart>
</div>
`;
