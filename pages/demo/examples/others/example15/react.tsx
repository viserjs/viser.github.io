import { Chart, Axis, Legend, Tooltip, Coord, Bar, Point, Guide } from 'viser-react';
import * as React from 'react';

const data = [
  { "term":"Zombieland","count":9 },
  { "term":"Wieners","count":8 },
  { "term":"Toy Story","count":8 },
  { "term":"trashkannon","count":7 },
  { "term":"the GROWLERS","count":6 },
  { "term":"mudweiser","count":6 },
  { "term":"ThunderCats","count":4 },
  { "term":"The Taqwacores - Motion Picture","count":4 },
  { "term":"The Shawshank Redemption","count":2 },
  { "term":"The Olivia Experiment","count":1 },
];

const scale = [{
  dataKey: 'count',
  max: 2,
}];

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Chart forceFit height={400} padding={[20, 80]} data={data} scale={scale}>
          <Tooltip />
          <Coord type="theta" innerRadius={0.2} startAngle={-90} endAngle={180} />
          <Bar position="term*count" color="#8543e0" shape="line" select={false} style={{ lineAppendWidth: 10 }} />
          <Point position="term*count" color="#8543e0" shape="circle"/>
          {
            data.map((obj: any) => {
              const position = [obj.term, 0];
              const content = obj.term.toString();

              return (<Guide key={content} type="text" position={position} content={content} style={{textAlign: 'right'}}/>)
            })
          }
          <Guide type="text" position={[ '50%', '50%' ]} content="Music" style={{
            textAlign: 'center',
            fontSize: 24,
            fill: '#8543e0',
          }} />
        </Chart>
      </div>
    );
  }
}


