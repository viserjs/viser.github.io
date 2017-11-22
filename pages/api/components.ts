const Installation = require('./Guide/Installation/Installation.md').default;
const Introduction = require('./Guide/Introduction/Introduction.md').default;

const Demo = require('./DemoFolder/Demo/Demo.md').default;
const Demo1 = require('./DemoFolder/Demo1/Demo.md').default;

const components = {
  Guide: {
    Introduction,
    Installation,
  },
};

export default components;
