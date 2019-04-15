import * as React from 'react';
import { Props, State } from './index.typed';
import examples from '../../../../demo/examples';
import LazyLoad from 'react-lazyload';
import {Row,Col} from 'antd';
import './index.scss';
import { t } from '@angular/core/src/render3';

export default class App extends React.Component<Props, State> {
    public static defaultProps = new Props();
    public state = new State();
    public wrapper: any;
    public timeout: any;// 用来延时可滚动
    public titlesTop: any = [];
    public componentDidMount() { 
        this.handleDealDomTop();
        this.wrapper.addEventListener('scroll', this.handleDomScroll);
    }
    public componentWillUnmount() { 
        this.wrapper.removeEventListener('scroll', this.handleDomScroll);
    }
    public shouldComponentUpdate(nextProps: any, nextState: any) { 
        if (this.props.activeKey !== nextProps.activeKey&&this.state.canScroll) { 
            this.handleScrollTo(nextProps);
        }
        if (this.props.pageLan !== nextProps.pageLan || this.props.typeKey !== nextProps.typeKey) { 
            return true;
        }
        return false;// 展示组件不用更新虚拟dom
    }

    
    public handleDealDomTop = () => { 
        const titles:any = window.document.querySelectorAll('.chart-title');
        if (!titles.length) { 
            return;
        }
        const tempArr: any[] = [];
        titles.forEach((item:any) => { 
            const offsetTop: number = item.offsetTop;
            tempArr.push({
                top: offsetTop,
                id:item.getAttribute('id'),
            })
        });
        this.titlesTop = tempArr;
    }
    public handleDomScroll = (e: any) => { 
        const { canScroll} = this.state;
        const { onScroll } = this.props;
        if(!onScroll||!canScroll) {
            return;
        }
        const titles: any[] = this.titlesTop;
        if (!titles.length) { 
            return;
        }
        const scrollTop = e.target.scrollTop;
        const tempArr: any[] = [];
        titles.forEach((item:any) => { 
            const offsetTop: number = item.top;
            if (offsetTop <= scrollTop) { 
                tempArr.push(  item.id );
            }
        });
        const id: string = tempArr[tempArr.length - 1];
        if (id&&id!==this.props.activeKey) { 
            clearTimeout(this.timeout);
            this.setState({
                canScroll: false
            }, () => {
                    onScroll(id);
                    this.timeout = setTimeout(() => { 
                        this.setState({
                            canScroll:true
                        })
                    },200);   
                });
        }
    }
    public handleScrollTo = (props: any) => { 
        const { activeKey } = props;
        const dom = document.getElementById(activeKey);
        if (!activeKey||!dom) { 
            return;
        }
        const offsetTop = dom.offsetTop;
        this.wrapper.scrollTo(0,offsetTop);
    }

    // 数据处理，如果没有pic字段将用默认图片覆盖
    public handleInitData = () => {
        const { pageLan, typeKey } = this.props;
        if (!pageLan || !typeKey) {
            return [];
        }
        const tgData: any = examples[typeKey];
        if (!tgData) {
            return [];
        }
        const result: any[] = [];
        Object.keys(tgData).forEach((key: any,index:number) => {
            result.push({
                title: tgData[key][pageLan + 'Name'],
                key,
                id: 'title-id-'+key,
                icon: tgData[key].icon,
                examples: [],
            });
            tgData[key].examples.forEach((item: any) => { 
                result[index].examples.push({
                    ...item,
                    pic: item.pic || 'https://antv.alipay.com/assets/image/home/g2-usecase1.png'
                });
            });
        });
        return result;
    }
    public render() {
        const items: any = [] = this.handleInitData();
        return <div className="demo-preview-right" ref={node=>this.wrapper=node}>
            {items.map((item: any) => { 
                return <div key={item.id} className="scroll-wrapper">
                    <h5 id={item.id} className="chart-title">{item.title}</h5>
                    <Row gutter={32}>
                    {item.examples.map((example: any,index:number) => { 
                        return <Col className="col-item" span={6} key={`col-${index}`}>
                            <div className="chart-item">
                                <div className="wrapper">
                                    <a href={`/demo.html#/${this.props.typeKey}/${item.key}/${example.enName.replace(/\s/g,'-').toLowerCase()}`} className="cover">
                                        <LazyLoad scrollContainer=".demo-preview-right" offset={100} once={true}>
                                            <span className="spic" style={{backgroundImage:`url(${example.pic})`}}>
                                            </span>
                                        </LazyLoad>
                                    </a>
                                    <div className="title">
                                        {example[this.props.pageLan+'Name']}
                                    </div>
                                </div>
                                </div>
                        </Col>
                    })}
                    </Row>
                </div>
            })}
    </div>
    }

}
