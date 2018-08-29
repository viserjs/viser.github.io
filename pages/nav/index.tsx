import * as React from 'react';
// import * as jQuery from 'jquery';
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
                    image: 'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/icon/g2-c94ef.svg',// 图片
                    completed: true,// 是否在建设中
                    keys: 'viser'//要显示的示例
                },
                {
                    name: 'viser-graph',
                    image: 'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/icon/g6-b4554.svg',
                    completed: true,
                    keys: 'viserGraph'
                },
                {
                    name: 'viser-cell',
                    image: 'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/icon/f2-d360c.svg',
                    completed: false,
                    keys: null
                },
            ],
        };
    }
    public handleVisible = () => {
        this.setState({
            visible: !this.state.visible
        })
    }
    public handleClick = (e, value, completed, key) => {
        e.preventDefault();
        if (value !== this.state.selected && completed) {
            setInitNav(value);
            this.setState({
                selected: getInitNav() || 'viser',
                visible: !this.state.visible
            });
            if (typeof this.props.getTypeKey !== 'undefined') {
                this.props.getTypeKey(key);
            }
        };
    }
    public componentDidMount() {
        const self = this;
        (window as any).document.addEventListener('click', function (e) {
            const target = e.target;
            const nav = (window as any).document.getElementById('viser-nav');
            if (!nav.contains(target)) {
                self.setState({ visble: false });
            }
        });
        if (typeof this.props.getTypeKey !== 'undefined') {
            const { state } = self;
            state.dropitem.forEach((item: any) => {
                if (item.name === state.selected) {
                    self.props.getTypeKey(item.keys);
                }
            });
        }
    }
    render() {
        return <div className={`viser-dropdown`}>
            <a className="visble-tit" onClick={this.handleVisible}>{this.state.selected}</a>
            <div className="viser-dropmenu" style={{ display: this.state.visible ? 'block' : 'none' }}>
                {this.state.dropitem.map((item: any, index: number) => (
                    <a href="javascript:;" key={index} onClick={(e) => this.handleClick(e, item.name, item.completed, item.keys)}>
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
