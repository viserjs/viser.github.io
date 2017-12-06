import { Chart, Facet, View, Tooltip, Legend, Axis, Bar, FacetView } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data } from './data'

const tmp = [];
const dates = [];
data.male.values.forEach((obj: any) => {
  if (dates.indexOf(obj.date) === -1) {
    dates.push(obj.date);
  }
  obj.age_groups.forEach((subObject: any) => {
    subObject.gender = 'male';
    subObject.date = obj.date;
    tmp.push(subObject);
  });
});
data.female.values.forEach((obj: any) => {
  obj.age_groups.forEach((subObject: any) => {
    subObject.gender = 'female';
    subObject.date = obj.date;
    tmp.push(subObject);
  });
});

const tmpData = tmp;

const scale = [{
  dataKey: 'age',
  sync: true,
  tickCount: 11,
}, {
  dataKey: 'total_percentage',
  sync: true,
  formatter(v) {
    return v + '%';
  }
}, {
  dataKey: 'gender',
  sync: true,
}];

const dataPre = {
  transform: {
    type: 'filter',
    callback(row) {
      return new Date(row.date * 1000).getFullYear() === new Date(dates[0] * 1000).getFullYear();
    }
  }
};

class App extends React.Component {
  render() {
    return (
      <Chart forceFit={true} height={600} data={tmpData} dataPre={dataPre} scale={scale}>
        <Tooltip />
        <Legend />
        <Axis />
        <Facet type="mirror" fields={['gender']} transpose={true}>
          <FacetView>
            <Bar position="age*total_percentage" color={['gender', [ '#1890ff', '#f04864' ]]} />
          </FacetView>
        </Facet>
      </Chart>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);