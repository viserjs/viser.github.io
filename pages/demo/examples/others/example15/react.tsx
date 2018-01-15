import { Chart, Axis, Legend, Tooltip, Coord, Bar, Point, Guide } from 'viser-react';
import * as ReactDOM from 'react-dom';
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

const guide_data = [];
for (let i = 0, l = data.length; i < l; i++) {
  const obj = data[i];
  guide_data.push({
    position: [ obj.term, 0 ],
    content: obj.term + ' ',
    style: {
      textAlign: 'right'
    }
  });
}

const scale = [{
  dataKey: 'count',
  max: 2,
}];

class App extends React.Component {
  render() {
    return (
      <div>
        <Chart forceFit height={600} padding={[ 20, 80 ]} data={data} scale={scale}>
          <Tooltip />
          <Coord type="theta" innerRadius={0.2} />
          <Bar position="term*count" color="#8543e0" shape="line" select={false} style={{ lineAppendWidth: 10 }} />
          <Point position="term*count" color="#8543e0" />
          <Guide type="text" {...guide_data[0]} />
          <Guide type="text" {...guide_data[1]} />
          <Guide type="text" {...guide_data[2]} />
          <Guide type="text" {...guide_data[3]} />
          <Guide type="text" {...guide_data[4]} />
          <Guide type="text" {...guide_data[5]} />
          <Guide type="text" {...guide_data[6]} />
          <Guide type="text" {...guide_data[7]} />
          <Guide type="text" {...guide_data[8]} />
          <Guide type="text" {...guide_data[9]} />
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

ReactDOM.render(<App />, document.getElementById('mount'));
