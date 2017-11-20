export const template = `
  <div>
    <Chart width={400} height={300} data={data} dataPre={dataPre} dataMapping={dataMapping} scale={scale}>
      <Coord type="polar"/>
      <Series geom={'line'} position={['item', 'score']} size={2}></Series>
      <Series geom={'line'} position={['item', 'score']} size={2}></Series>
      <Series geom={'point'} position={['item', 'score']} style={{lineWidth: 1, fillOpacity: 1}} shape={'circle'}></Series>
      <Tooltip />
      <Legend dataKey={'user'} marker={'circle'}/>
      <Axis dataKey={'item'} show={true} grid={axisGridStyle1}/>
      <Axis dataKey={'score'} show={true} grid={axisGridStyle2}/>
    </Chart>
  </div>
`;
