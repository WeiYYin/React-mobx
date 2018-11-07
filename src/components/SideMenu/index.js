import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './index.less'
import MenuList from '@/js/menu'
import { Menu,Icon } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu';
import {inject,observer} from 'mobx-react'


@inject('Store')
@observer
class SideMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            key:[],
        }
        this.menulist = this.menulist.bind(this);
        this.NavClick = this.NavClick.bind(this);
    }
    // 组件渲染完成后调用一次
    componentDidMount(){
        if(!!this.props.location.pathname){
            this.setState({
                key:[this.props.location.pathname],
            })
        }
    }
    NavClick({key}){
        this.setState({
            key:[key],
        })
        this.props.history.push(key);
    }
    menulist(list,key){
        if(!!list&&list.length>0){
            let IKey = key?key:'';
            let menu = list.map((el,i)=>{
                if(el.list&&el.list.length>0){
                    let okay = (key?key:'') + el.key;
                    let childList = this.menulist(el.list,okay) || '';
                    return <SubMenu key={el.key + el.list[0].key}  title={
                            <span>
                                <Icon type={!!el.icon?el.icon:'copy'} theme="outlined" />
                                <span>{el.title}</span>
                            </span>
                        }>
                        {childList}
                    </SubMenu>
                }else{
                    return <Menu.Item key={IKey + el.key}>
                        <Icon type={!!el.icon?el.icon:'copy'} theme="outlined" />
                        <span>{el.title}</span>
                    </Menu.Item>
                }
            })
            return menu;
        }
    }
    render() {
        let list = this.menulist(MenuList);
        return (
            <aside className='SideMenu_wrap'>
                <Menu
                    mode="inline"
                    theme="dark"
                    selectedKeys={this.state.key}
                    onSelect={this.NavClick}
                    inlineCollapsed={this.props.Store.slider}
                >
                    {list}
                </Menu>
            </aside>
        )
    }
}

export default withRouter(SideMenu)