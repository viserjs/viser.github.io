const Installation = require('./Guide/Installation/Installation.md').default;

const Demo = require('./DemoFolder/Demo/Demo.md').default;
const Demo1 = require('./DemoFolder/Demo1/Demo.md').default;

const components = {
  Guide: {
    Installation,
  },
  DemoFolder: {
    Demo: Demo,
    Demo1: Demo1,
  },
};

export default components;
