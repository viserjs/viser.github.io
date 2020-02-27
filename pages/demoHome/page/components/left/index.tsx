import * as React from 'react';
import { Props, State } from './index.typed';
import { compare } from '../../util';
import examples from '../../../../demo/examples';
import './index.scss';

export default class App extends React.Component<Props, State> {
    public static defaultProps = new Props();
    public state = new State();
    public shouldComponentUpdate(nextProps: any, nextState: any) { 
        return !(compare(this.props,nextProps)&&compare(this.state,nextState))
    }

    public handleClick = (e: any,id:string) => { 
        e.preventDefault();
        const { onClick } = this.props;
        onClick && onClick(id);
    }
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
        Object.keys(tgData).forEach((key: any) => {
            result.push({
                title: tgData[key][pageLan + 'Name'],
                id: 'title-id-'+key,
                icon: tgData[key].icon,
            });
        });
        return result;
    }
    public render() {
        const items: any[] = this.handleInitData();
        return <div className="demo-preview-left">
            <ul className="toc-list">
                {items.map((item: any, index: number) => {
                    const flag: boolean = this.props.activeKey ?
                        this.props.activeKey === item.id ? true : false
                        :
                        index === 0 ? true : false;
                    return <li
                        key={item.id}
                        className={`toc-list-item${flag?' active':''}`}
                    >
                        <a href={`#${item.id}`} onClick={(e:any)=>this.handleClick(e,item.id)}>
                            {item.icon && (
                                <i className={`iconfont icon-${item.icon}`}></i>
                            )}
                            {item.title}
                        </a>
                    </li>
                })}
            </ul>
        </div>
    }

}


