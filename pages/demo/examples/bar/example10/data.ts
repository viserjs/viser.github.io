export const data = [
  { country: '中国', population: 131744 },
  { country: '印度', population: 104970 },
  { country: '美国', population: 29034 },
  { country: '印尼', population: 23489 },
  { country: '巴西', population: 18203 }
];

export const dataPre = {
  transform: {
    type: 'sort',
    callback(a, b) {
      return a.population - b.population > 0;
    },
  },
};