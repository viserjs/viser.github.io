import * as React from 'react';
import { connect } from 'react-redux';
import TabSld from '../../Components/Tabsld';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import ColorBar from '../../Components/ColorBar';
import Col from '../../Components/Col';
import { getTransText } from '../../translation';
import { downloadFile } from '../../../common/utils';
import './index.scss';

// load a json contain colors
const colors = require('../../colors.json');
colors.sort((a: any, b: any) => {
  return b.colors.length - a.colors.length;
});

class App extends React.Component<any, any> {
  public handleColorClick = (colors: string, bgColor: string) => {
    // window.console.log(colors, bgColor);
  };
  public handleDownload = () => {
    downloadFile(['{cc:1}'], 'test.json', 'application/json');
  };

  render() {
    const { pageLan, setData } = this.props;
    return (
      <div className="theme-left theme-pannel">
        <TabSld title={getTransText('function', pageLan)} visible={true}>
          <div className="btn-group">
            <Button type="dark" icon="download" className="mr-12">
              {getTransText('function/download', pageLan)}
            </Button>
            <Button
              type="default"
              icon="import"
              className="no-right-radius no-right-border"
            >
              {getTransText('function/import', pageLan)}
            </Button>
            <Button
              type="default"
              icon="export"
              className="no-left-radius"
              onClick={this.handleDownload}
            >
              {getTransText('function/export', pageLan)}
            </Button>
          </div>
          <div className="btn-group">
            <Button
              type="default"
              icon="refresh"
              className="no-right-radius no-right-border"
              onClick={setData}
            >
              {getTransText('function/refresh', pageLan)}
            </Button>
            <Button type="default" icon="reset" className="no-left-radius">
              {getTransText('function/reset', pageLan)}
            </Button>
          </div>
          <div>
            <Input
              type="text"
              label={getTransText('function/themname', pageLan)}
            />
            <Input
              type="number"
              label={getTransText('function/seriesNum', pageLan)}
            />
          </div>
          <hr />
          <h5>默认方案</h5>
          <div className="clearfix">
            {colors &&
              colors.length !== 0 &&
              colors.map((color: any, key: number) => (
                <Col span={color.colors.length > 8 ? 24 : 12} key={key}>
                  <ColorBar
                    colors={color.colors}
                    bgColor={color.background}
                    blockWidth={color.colors.length > 16 ? 15 : 20}
                    onClick={this.handleColorClick}
                  />
                </Col>
              ))}
          </div>
        </TabSld>
        <TabSld title={getTransText('basic', pageLan)}>
          <div>cc</div>
        </TabSld>
        <TabSld title="cxfassdf" />
        <TabSld title="cxfassdf" />
        <TabSld title="cxfassdf" />
        <TabSld title="cxfassdf" />
      </div>
    );
  }
}

const mapState = ({ theme: { defaultTheme, theme } }) => {
  return {
    theme,
    defaultTheme,
  };
};
const mapDispatch = ({ theme: { setData } }) => {
  return {
    setData,
  };
};
const Left = connect(
  mapState,
  mapDispatch,
)(App);
export default Left;
