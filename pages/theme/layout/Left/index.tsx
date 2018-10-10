import * as React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import Modal from '@alife/oui-modal';
import Tabs from '@alife/oui-tabs';
import TabSld from '../../Components/Tabsld';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import ColorBar from '../../Components/ColorBar';
import Col from '../../Components/Col';
import { getTransText } from '../../translation';
import { downloadFile ,repeatArray} from '../../../common/utils';
import './index.scss';

// load a json contain colors
const colors = require('../../colors.json');
colors.sort((a: any, b: any) => {
  return b.colors.length - a.colors.length;
});
const getString=(data:any,type:string='js'):string=>{
  const obj=_.cloneDeep(data);
  let result;
  obj.colors=repeatArray(obj.colors,8);
  try{
    if(type==='js'){
      result=`var theme = ${JSON.stringify(obj,null,2)};\nmodule.exports =theme;`;
    }else if(type==='json'){
      result=JSON.stringify(obj,null,2);
    }else{
      result='';
    }
  }catch(e){
    result='';
  }
  return result;
}

class App extends React.Component<any, any> {
  state={
    showModal:false
  }
  public handleColorClick = (colors: string, bgColor: string,title:string,e:any) => {
    this.props.changeCurrentField({key:'title',value:title});
    this.props.setColorSeries({
      colors,
      background:bgColor
    });
  };
  public handleShowModal = () => {
    this.setState({
      showModal:true
    });
  };
  public handleDownload=(data,filename,mime)=>{
    //当数据里colors和colors_pie的数据没有达到8个的时候，为了不引起底层报错，用repeatArray方法来补充数组
    downloadFile([data],filename,mime)
  }
  public handleChangeField=(e)=>{
    const key=e.target.name;
    const value=e.target.value;
    this.props.changeCurrentField({key,value});
  }
  public handleGetColor=(path,color)=>{
    // console.log(path);
    this.props.setCurrentTheme({path,value:color});
  }
  public handleChangeTheme=(path,e)=>{
    this.props.setCurrentTheme({path,value:e.target.value});
  }
  public handleSetDefault=()=>{
    this.props.setDefaultTheme();
  }
  public handleCancel=()=>{
    this.setState({
      showModal:false
    });
  }
  render() {
    const { pageLan, setData,currentTheme ,changeColors} = this.props;
    const TabPane=Tabs.TabPane;
    // console.log(currentTheme);
    return (
      <div className="theme-left theme-pannel">
        <Modal
          visible={this.state.showModal}
          title="主题下载"
          width={900}
          footer={
            <Button type="default" onClick={this.handleCancel}>关闭</Button>
          }
          onCancel={this.handleCancel}
        >
          <p>下载主题并引入后，可以在Viser中使用该主题</p>
          <Tabs
            defaultActiveKey="1"
          >
            <TabPane tab="JS 版本" key="1">
              <ol>
                <li>下载或复制以下的主题保存至 *.js 文件;</li>
                <li>将该文件在在组件中引用</li>
              </ol>
              <div>
                <Button type="dark" size="small" className="no-right-radius no-right-border" onClick={()=>this.handleDownload(getString(currentTheme.theme,'js') , currentTheme.title, 'text/javascript' )}>下载</Button>
                <Button type="default" size="small" className="no-left-radius no-left-border">复制</Button>
              </div>
              <pre className="code-display-pen">
                {getString(currentTheme.theme,'js')}
              </pre>
            </TabPane>
            <TabPane tab="JSON 版本" key="2">
              <ol>
                <li>下载或复制以下的主题保存至 *.json 文件;</li>
                <li>读取该 JSON 文件，并使用 obj = JSON.parse(data) 将其转换成对象；</li>
              </ol>
              <div>
                <Button type="dark" size="small" className="no-right-radius no-right-border" onClick={()=>this.handleDownload(getString(currentTheme.theme,'json') , currentTheme.title, 'application/json' )}>下载</Button>
                <Button type="default" size="small" className="no-left-radius no-left-border">复制</Button>
              </div>
              <pre className="code-display-pen">
                {getString(currentTheme.theme,'json')}
              </pre>
            </TabPane>
          </Tabs>
        </Modal>
        <TabSld title={getTransText('function', pageLan)} visible={true}>
          <div className="btn-group">
            <Button
              type="dark"
              icon="download"
              className="mr-12"
              onClick={this.handleShowModal}
            >
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
            <Button
              type="default"
              icon="reset"
              className="no-left-radius"
              onClick={this.handleSetDefault}
            >
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
            completeSelect={color=>this.handleGetColor('background',color)}
            value={currentTheme.theme.background||'#fff'}
            onChange={e=>this.handleChangeTheme('background',e)}
          />
          <Input
            label={getTransText('basic/title',pageLan)}
            showColor={true}
          />
          <Input
            label={getTransText('basic/subtitle',pageLan)}
            showColor={true}
          />
          {/*==========*/}
          {currentTheme.theme.colors.map((color,index)=>{
            let label:any={};
            if(index===0){
              label={
                label:getTransText('basic/theme',pageLan)
              }
            }else{
              label={
                label:' '
              }
            }
            return <Input
              key={index}
              value={color}
              {...label}
              showColor={true}
              completeSelect={color=>this.handleGetColor('colors/'+index,color)}
              onChange={e=>this.handleChangeTheme('colors/'+index,e)}
            />
          })}
          <div className="ctrl-btn">
            <span className="item" onClick={()=>changeColors('increase')}>增加</span>
            {currentTheme.theme.colors.length>1&&(
            <span className="item" onClick={()=>changeColors('decrease')}>减少</span>
            )}
          </div>
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
const mapDispatch = ({ theme: { setData ,changeCurrentField,setCurrentTheme,setDefaultTheme,changeColors,setColorSeries} }) => {
  return {
    setData,
    changeCurrentField,
    setCurrentTheme,
    setDefaultTheme,
    changeColors,
    setColorSeries
  };
};
const Left = connect(
  mapState,
  mapDispatch,
)(App);
export default Left;
