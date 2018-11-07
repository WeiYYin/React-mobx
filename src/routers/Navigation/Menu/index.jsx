import React, {Component} from 'react'
import {Menu,Icon,Button,Switch} from 'antd'
import {observable} from 'mobx'
import {observer} from 'mobx-react'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

@observer
class menu extends Component {
    @observable collapsed = false;
    constructor(props){
        super(props);
        this.state = {
            openKeys:[],
            mode:'inline',
            theme:'light',
        }
    }

    render() {
        let code = (show,code,title,i)=>{
            return <section className='Button_box' key={i}>
                <section className='Show_button'>
                    {show}
                </section>
                <section className='Code_box'>
                    <div className='Code_title'> <span>{title}</span> </div>
                    {!!code?code:''}
                </section>
            </section>
        }
        let item1 = <Menu.Item key="mail">
            <Icon type="mail" />
            <span>Navigation One</span>
        </Menu.Item>
        let item2 = <Menu.Item key="app" disabled>
            <Icon type="appstore" />
            <span>Navigation Two</span>
        </Menu.Item>
        let item3 = <Menu.Item key="alipay">
            <Icon type='copy'></Icon>
            <span>Navigation Four </span>
        </Menu.Item>
        let item4 = <Menu.Item key="Five">
        <Icon type='copy'></Icon>
                <span>Navigation Five </span>
            </Menu.Item>
        let item5 = <Menu.Item key="Six">
        <Icon type='copy'></Icon>
            <span>Navigation Six </span>
        </Menu.Item>
        let group1 = <MenuItemGroup title='group1'>
            <Menu.Item key="option1">
                <span>option 1</span>
            </Menu.Item>
            <Menu.Item key="option2">
                <span>option 2</span>
            </Menu.Item>
        </MenuItemGroup>
        let group2 = <MenuItemGroup title='group2'>
            <Menu.Item key="option3">
                <span>option 3</span>
            </Menu.Item>
            <Menu.Item key="option4">
                <span> option 4</span>
            </Menu.Item>
        </MenuItemGroup>
        let group3 = <MenuItemGroup title='group3'>
            <Menu.Item key="option5">
                <span>option 5</span>
            </Menu.Item>
            <Menu.Item key="option6">
                <span>option 6</span>
            </Menu.Item>
        </MenuItemGroup>
        let group4 = <MenuItemGroup title='group3'>
            <Menu.Item key="option7">
                <span>option 7</span>
            </Menu.Item>
            <Menu.Item key="option8">
                <span>option 8</span>
            </Menu.Item>
        </MenuItemGroup>
        let menu = ()=><Menu
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={(key)=>{
                        let d = key[key.length-1];
                        if(!!d){
                            if(!!this.state.openKeys[0]&&this.state.openKeys[0]===d){
                                this.setState({
                                    openKeys:[],
                                })
                            }else{
                                this.setState({
                                    openKeys:[d],
                                })
                            }
                        }else{
                            this.setState({
                                openKeys:[],
                            })
                        }
                    }}
                    style={{ width: 256 }}
                >
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
        let list = [
            {
                title:'顶部导航',
                show: <Menu
                mode="horizontal">
                    {item1}{item2}
                    <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
                        {group1}{group2}
                    </SubMenu>
                    {item3}
                    {item5}
                </Menu>,
                code: <p>水平的顶部导航菜单。</p>
            },
            {
                title:'内嵌菜单',
                show: <Menu style={{ width: 256 }} mode="inline">
                    <SubMenu title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        {group1}
                        {group2}
                    </SubMenu>
                    {item1}
                    {item2}
                    <SubMenu title={<span><Icon type="mail" /><span>Navigation Two</span></span>}>
                        {group3}
                        {group4}
                        <SubMenu title={<span>SubMenu</span>}>
                            {item3}{item4}
                        </SubMenu>
                    </SubMenu>
                </Menu>,
                code: <p>垂直菜单，子菜单内嵌在菜单区域。</p>
            },
            {
                title:'缩起菜单',
                show: <div style={{width:'256px'}}>
                        <Button type='primary' onClick={()=>{
                            this.collapsed = !this.collapsed;
                        }}> <Icon type={this.collapsed ? 'menu-unfold' : 'menu-fold'}></Icon> </Button>
                        <Menu
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={this.collapsed}
                        >
                            {item1}{item2}
                            <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" /><span>Navigation Three - Submenu</span></span>}>
                                {group1}{group2}
                            </SubMenu>
                            {item3}
                        </Menu>
                    </div>,
                code: <p>内嵌菜单可以被缩起/展开。 <br/>
                你可以在 Layout 里查看侧边布局结合的完整示例。</p>
            },
            {
                title:'只展开当前父级菜单',
                show:menu(),
                code: <p>点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。</p>
            },
            {
                title:'垂直菜单',
                show: <Menu style={{ width: 256 }} mode="vertical">
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Iteom 2">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </MenuItemGroup>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>,
                code: <p>子菜单是弹出的形式。</p>
            },
            {
                title:'主题',
                show:<div>
                    <Switch onChange={(value)=>{
                        this.setState({
                            mode: value ? 'vertical' : 'inline',
                        })
                    }} /> Change Mode
                    <span className="ant-divider" style={{ margin: '0 1em' }} />
                    <Switch onChange={(value)=>{
                        this.setState({
                            theme: value ? 'dark' : 'light',
                        })
                    }} /> Change Theme
                    <br />
                    <br />
                    <Menu
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode={this.state.mode}
                    theme={this.state.theme}
                    >
                        <Menu.Item key="1">
                            <Icon type="mail" />
                            Navigation One
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="calendar" />
                            Navigation Two
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>Navigation Three</span></span>}>
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                            <SubMenu key="sub1-2" title="Submenu">
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="setting" /><span>Navigation Four</span></span>}>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>,
                code: <p>展示动态切换模式。<br/> 切换模式 <code>vertical horizontal inline </code> 默认 <code>vertical</code> <br/>  内建了两套主题 light|dark，默认 light。</p>
            }
        ];
        return (
            <section className='Section_box'>
                {
                    list.map((el,i)=>{
                        return code(el.show,el.code,el.title,i)
                    })
                }
            </section>
        )
    }
}

export default menu
