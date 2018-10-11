import * as React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import Modal from '@alife/oui-modal';
import Tabs from '@alife/oui-tabs';
import TabSld from '../../Components/Tabsld';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Select from '../../Components/Select';
import ColorBar from '../../Components/ColorBar';
import Col from '../../Components/Col';
import { getTransText } from '../../translation';
import { downloadFile ,repeatArray,colorRGB2Hex} from '../../../common/utils';
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
  public handleChangeTheme=(path,e,afterFix=null)=>{
    this.props.setCurrentTheme({path,value:afterFix?e.target.value+afterFix:e.target.value});
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
    console.log(currentTheme);
    return (
      <div className="theme-left theme-pannel">
        <Modal
          visible={this.state.showModal}
          title={getTransText('download',pageLan)}
          width={900}
          footer={
            <Button type="default" onClick={this.handleCancel}>{getTransText('download/close',pageLan)}</Button>
          }
          onCancel={this.handleCancel}
        >
          <p>{getTransText('download/titText',pageLan)}</p>
          <Tabs
            defaultActiveKey="1"
          >
            <TabPane tab={getTransText('download/js',pageLan)} key="1">
              <ol>
                <li>{getTransText('download/js/text1',pageLan)}</li>
                <li>{getTransText('download/js/text2',pageLan)}</li>
              </ol>
              <div>
                <Button type="dark" size="small" className="no-right-radius no-right-border" onClick={()=>this.handleDownload(getString(currentTheme.theme,'js') , currentTheme.title, 'text/javascript' )}>{getTransText('download/download',pageLan)}</Button>
                <Button type="default" size="small" className="no-left-radius no-left-border">{getTransText('download/copy',pageLan)}</Button>
              </div>
              <pre className="code-display-pen">
                {getString(currentTheme.theme,'js')}
              </pre>
            </TabPane>
            <TabPane tab={getTransText('download/json',pageLan)} key="2">
              <ol>
                <li>{getTransText('download/json/text1',pageLan)}</li>
                <li>{getTransText('download/json/text2',pageLan)}</li>
              </ol>
              <div>
                <Button type="dark" size="small" className="no-right-radius no-right-border" onClick={()=>this.handleDownload(getString(currentTheme.theme,'json') , currentTheme.title, 'application/json' )}>{getTransText('download/download',pageLan)}</Button>
                <Button type="default" size="small" className="no-left-radius no-left-border">{getTransText('download/copy',pageLan)}</Button>
              </div>
              <pre className="code-display-pen">
                {getString(currentTheme.theme,'json')}
              </pre>
            </TabPane>
          </Tabs>
        </Modal>
        <TabSld title={getTransText('function', pageLan)} visible={true}>{/*功能*/}
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
        <TabSld title={getTransText('basic', pageLan)}>{/*基本配置*/}
          <Input
            showColor={true}
            label={getTransText('basic/defaultColor',pageLan)}
            completeSelect={color=>this.handleGetColor('defaultColor',color)}
            value={currentTheme.theme.defaultColor||'#fff'}
            onChange={e=>this.handleChangeTheme('defaultColor',e)}
          />
          <Input
            showColor={true}
            label={getTransText('basic/bgColor',pageLan)}
            completeSelect={color=>this.handleGetColor('background',color)}
            value={currentTheme.theme.background||'#fff'}
            onChange={e=>this.handleChangeTheme('background',e)}
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
            <span className="item" onClick={()=>changeColors('increase')}>{getTransText('increase',pageLan)}</span>
            {currentTheme.theme.colors.length>1&&(
            <span className="item" onClick={()=>changeColors('decrease')}>{getTransText('decrease',pageLan)}</span>
            )}
          </div>
          {/*=========*/}
        </TabSld>
        <TabSld title={getTransText('label',pageLan)}>{/*文本样式*/}
          <h5 style={{paddingTop:0,border:'none'}}>{getTransText('label/defaultLabel',pageLan)}</h5>
          <Input
            showColor={true}
            value={currentTheme.theme.label.textStyle.fill}
            label={getTransText('label/fontColor',pageLan)}
            onChange={e=>this.handleChangeTheme('label/textStyle/fill',e)}
            completeSelect={color=>this.handleGetColor('label/textStyle/fill',color)}
          />
          <Input
            type="number"
            value={currentTheme.theme.label.textStyle.fontSize}
            label={getTransText('label/fontSize',pageLan)}
            onChange={e=>this.handleChangeTheme('label/textStyle/fontSize',e)}
          />
          <Input
            type="number"
            value={currentTheme.theme.label.offset}
            label={getTransText('label/offset',pageLan)}
            onChange={e=>this.handleChangeTheme('label/offset',e)}
          />
          <h5>{getTransText('label/innerLabel',pageLan)}</h5>
          <Input
            type="number"
            value={currentTheme.theme.innerLabels.textStyle.fontSize}
            label={getTransText('label/innerFontSize',pageLan)}
            onChange={e=>this.handleChangeTheme('innerLabels/textStyle/fontSize',e)}
          />
          <Input
            showColor={true}
            value={currentTheme.theme.innerLabels.textStyle.fill}
            label={getTransText('label/innerFill',pageLan)}
            onChange={e=>this.handleChangeTheme('innerLabels/textStyle/fill',e)}
            completeSelect={color=>this.handleGetColor('innerLabels/textStyle/fill',color)}
          />
        </TabSld>
        <TabSld title={getTransText('axis',pageLan)}>{/*坐标轴*/}
          <Input
            showColor={true}
            value={currentTheme.theme.axis.bottom.label.textStyle.fill}
            label={getTransText('axis/fontColor',pageLan)}
            onChange={e=>this.handleChangeTheme('axis/~/label/textStyle/fill',e)}
            completeSelect={color=>this.handleGetColor('axis/~/label/textStyle/fill',color)}
          />
          <Input
            type="number"
            value={currentTheme.theme.axis.bottom.label.textStyle.fontSize}
            label={getTransText('axis/fontSize',pageLan)}
            onChange={e=>this.handleChangeTheme('axis/~/label/textStyle/fontSize',e)}
          />
          <Input
            type="number"
            value={currentTheme.theme.axis.bottom.label.textStyle.lineHeight}
            label={getTransText('axis/lineHeight',pageLan)}
            onChange={e=>this.handleChangeTheme('axis/~/label/textStyle/lineHeight',e)}
          />
          <Input
            showColor={true}
            value={currentTheme.theme.axis.bottom.line.stroke}
            label={getTransText('axis/lineStroke',pageLan)}
            onChange={e=>this.handleChangeTheme('axis/~/line/stroke',e)}
            completeSelect={color=>this.handleGetColor('axis/~/line/stroke',color)}
          />
          <Input
            type="number"
            value={currentTheme.theme.axis.bottom.tickLine.lineWidth}
            label={getTransText('axis/tickLineWidth',pageLan)}
            onChange={e=>this.handleChangeTheme('axis/~/tickLine/lineWidth',e)}
          />
          <Input
            type="number"
            value={currentTheme.theme.axis.bottom.tickLine.length}
            label={getTransText('axis/tickLineLength',pageLan)}
            onChange={e=>this.handleChangeTheme('axis/~/tickLine/length',e)}
          />
          <Input
            showColor={true}
            value={currentTheme.theme.axis.bottom.tickLine.stroke}
            label={getTransText('axis/tickLineColor',pageLan)}
            onChange={e=>this.handleChangeTheme('axis/~/tickLine/stroke',e)}
            completeSelect={color=>this.handleGetColor('axis/~/tickLine/stroke',color)}
          />
          <Input
            showColor={true}
            value={currentTheme.theme.axis.circle.grid.lineStyle.stroke}
            label={getTransText('axis/gridColor',pageLan)}
            onChange={e=>this.handleChangeTheme('axis/~/grid/lineStyle/stroke',e)}
            completeSelect={color=>this.handleGetColor('axis/~/grid/lineStyle/stroke',color)}
          />
          <Input
            type="number"
            value={currentTheme.theme.axis.circle.grid.lineStyle.lineWidth}
            label={getTransText('axis/girdWidth',pageLan)}
            onChange={e=>this.handleChangeTheme('axis/~/grid/lineStyle/lineWidth',e)}
          />
        </TabSld>
        <TabSld title={getTransText('legend',pageLan)}>{/*图例*/}
          <Input
            type="number"
            value={currentTheme.theme.legend.bottom.height}
            label={getTransText('legend/height',pageLan)}
            onChange={e=>this.handleChangeTheme('legend/~/height',e)}
          />
          <Input
            type="number"
            value={currentTheme.theme.legend.bottom.itemGap}
            label={getTransText('legend/itemGap',pageLan)}
            onChange={e=>this.handleChangeTheme('legend/~/itemGap',e)}
          />
          <Input
            type="number"
            value={currentTheme.theme.legend.bottom.offset}
            label={getTransText('legend/offset',pageLan)}
            onChange={e=>this.handleChangeTheme('legend/~/offset',e)}
          />
          <Input
            type="number"
            value={currentTheme.theme.legend.bottom.textStyle.fontSize}
            label={getTransText('legend/fontSize',pageLan)}
            onChange={e=>this.handleChangeTheme('legend/~/textStyle/fontSize',e)}
          />
          <Input
            type="number"
            value={currentTheme.theme.legend.bottom.textStyle.lineHeight}
            label={getTransText('legend/lineHeight',pageLan)}
            onChange={e=>this.handleChangeTheme('legend/~/textStyle/lineHeight',e)}
          />
          <Input
            showColor={true}
            value={currentTheme.theme.legend.bottom.textStyle.fill}
            label={getTransText('legend/fill',pageLan)}
            onChange={e=>this.handleChangeTheme('legend/~/textStyle/fill',e)}
            completeSelect={color=>this.handleGetColor('legend/~/textStyle/fill',color)}
          />
          <Input
            showColor={true}
            value={currentTheme.theme.legend.bottom.unCheckColor}
            label={getTransText('legend/unCheckColor',pageLan)}
            onChange={e=>this.handleChangeTheme('legend/~/unCheckColor',e)}
            completeSelect={color=>this.handleGetColor('legend/~/unCheckColor',color)}
          />
        </TabSld>
        <TabSld title={getTransText('tooltip',pageLan)}>{/*提示框*/}
          <Select
            label={getTransText('tooltip/crosshairs',pageLan)}
            value={currentTheme.theme.tooltip.crosshairs.toString()}
            onChange={e=>this.handleChangeTheme('tooltip/crosshairs',e)}
          >
              <option value="true">true</option>
              <option value="false">false</option>
          </Select>
          <Input
            type="number"
            label={getTransText('tooltip/offset',pageLan)}
            value={currentTheme.theme.tooltip.offset}
            onChange={e=>this.handleChangeTheme('tooltip/offset',e)}
          />
          <Input
            type="number"
            label={getTransText('tooltip/fontSize',pageLan)}
            value={parseFloat(currentTheme.theme.tooltip['g2-tooltip'].fontSize)}
            onChange={e=>this.handleChangeTheme('tooltip/g2-tooltip/fontSize',e,'px')}
          />
          <Input
            type="number"
            label={getTransText('tooltip/borderRadius',pageLan)}
            value={parseFloat(currentTheme.theme.tooltip['g2-tooltip'].borderRadius)}
            onChange={e=>this.handleChangeTheme('tooltip/g2-tooltip/borderRadius',e,'px')}
          />
          <Input
            type="number"
            label={getTransText('tooltip/lineHeight',pageLan)}
            value={parseFloat(currentTheme.theme.tooltip['g2-tooltip'].lineHeight)}
            onChange={e=>this.handleChangeTheme('tooltip/g2-tooltip/lineHeight',e,'px')}
          />
          <Input
            showColor={true}
            label={getTransText('tooltip/color',pageLan)}
            value={colorRGB2Hex(currentTheme.theme.tooltip['g2-tooltip'].color)}
            onChange={e=>this.handleChangeTheme('tooltip/g2-tooltip/color',e)}
            completeSelect={color=>this.handleGetColor('tooltip/g2-tooltip/color',color)}
          />
        </TabSld>
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
