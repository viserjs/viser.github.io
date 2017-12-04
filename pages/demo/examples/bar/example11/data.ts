export const data = [
  { label: 'Mon.', series1: 2800, series2: 2260 },
  { label: 'Tues.', series1: 1800, series2: 1300 },
  { label: 'Wed.', series1: 950, series2: 900 },
  { label: 'Thur.', series1: 500, series2: 390 },
  { label: 'Fri.', series1: 170, series2: 100 },
];

export const dataPre = {
  transform: {
    type: 'fold',
    fields: [ 'series1', 'series2' ],
    key: 'type',
    value: 'value',
  },
};