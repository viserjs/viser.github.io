import * as React from 'react';
import * as jQuery from 'jquery';
import { getInitNav, setInitNav } from '../common/utils';
import './index.scss';

export default class Nav extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            visible: false,
            selected: getInitNav() || 'viser',// 选中的item
            dropitem: [
                {
                    name: 'viser',// item名
                    url: 'javascript:;',// item链接
                    image: 'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/icon/g2-c94ef.svg',// 图片
                    completed: true// 是否在建设中
                },
                {
                    name: 'viser-graph',
                    url: '',
                    image: 'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/icon/g6-b4554.svg',
                    completed: true
                },
                {
                    name: 'viser-cell',
                    url: '',
                    image: 'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/icon/f2-d360c.svg',
                    completed: false
                },
            ],
        };
    }
    public handleVisible = () => {
        this.setState({
            visible: !this.state.visible
        })
    }
    public handleClick = (e, value, url, completed) => {
        e.preventDefault();
        if (value !== this.state.selected && completed) {
            setInitNav(value);
            this.setState({
                selected: getInitNav() || 'viser',
                visible: !this.state.visible
            });
            window.location.href = url;
        };
    }
    public componentDidMount() {
        const $ = jQuery;
        const that = this;
        $(document).on('click', function (e) {
            if ($(e.target).parents('#viser-nav').length === 0 && that.state.visible) {
                that.setState({
                    visible: false
                });
            }
        });
    }
    render() {
        return <div className={`viser-dropdown`}>
            <a className="visble-tit" onClick={this.handleVisible}>{this.state.selected}</a>
            <div className="viser-dropmenu" style={{ display: this.state.visible ? 'block' : 'none' }}>
                {this.state.dropitem.map((item: any, index: number) => (
                    <a href={item.url} key={index} onClick={(e) => this.handleClick(e, item.name, item.url, item.completed)}>
                        {item.image && (
                            <i className="pic" style={{ backgroundImage: `url(${item.image})` }} />
                        )}
                        {item.name}
                        {!item.completed && (
                            <span>{this.props.pageLan === 'cn' ? '建设中' : 'constructing'}</span>
                        )}
                    </a>
                ))}
            </div>
        </div>
    }
}
