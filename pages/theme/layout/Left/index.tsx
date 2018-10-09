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
  public handleColorClick = (colors: string, bgColor: string,title:string,e:any) => {
    this.props.changeCurrentField({key:'title',value:title});
  };
  public handleDownload = () => {
    downloadFile(['{cc:1}'], 'test.json', 'application/json');
  };
  public handleChangeField=(e)=>{
    const key=e.target.name;
    const value=e.target.value;
    this.props.changeCurrentField({key,value});
  }
  public handleGetColor=(color)=>{
    console.log(color);
  }
  render() {
    const { pageLan, setData,currentTheme } = this.props;
    console.log(currentTheme);
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
              name="title"
              label={getTransText('function/themname', pageLan)}
              value={currentTheme.title}
              onChange={this.handleChangeField}
            />
            <Input
              type="number"
              name="seriesNum"
              label={getTransText('function/seriesNum', pageLan)}
              value={currentTheme.seriesNum}
              onChange={this.handleChangeField}
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
                    title={color.name}
                  />
                </Col>
              ))}
          </div>
        </TabSld>
        <TabSld title={getTransText('basic', pageLan)}>
          <Input
            showColor={true}
            label={getTransText('basic/bgColor',pageLan)}
            completeSelect={this.handleGetColor}
          />
          <Input
            label={getTransText('basic/title',pageLan)}
            showColor={true}
          />
          <Input
            label={getTransText('basic/subtitle',pageLan)}
            showColor={true}
          />
          {/*这里等吧颜色数组循环出来再做*/}
          <Input
            label={getTransText('basic/theme',pageLan)}
            showColor={true}
          />
          {/*=========*/}
          <Input 
            label={getTransText('basic/tag',pageLan)}
            showColor={true}
          />
          <Input 
            label={getTransText('basic/strokethick',pageLan)}
            showColor={true}
          />
          <Input 
            label={getTransText('basic/stroke',pageLan)}
            showColor={true}
          />
        </TabSld>
        <TabSld title={getTransText('axis',pageLan)}></TabSld>
        <TabSld title={getTransText('legend',pageLan)}></TabSld>
        <TabSld title={getTransText('tooltip',pageLan)}></TabSld>
      </div>
    );
  }
}

const mapState = ({ theme: {  currentTheme } }) => {
  return {
    currentTheme
  };
};
const mapDispatch = ({ theme: { setData ,changeCurrentField} }) => {
  return {
    setData,
    changeCurrentField
  };
};
const Left = connect(
  mapState,
  mapDispatch,
)(App);
export default Left;
