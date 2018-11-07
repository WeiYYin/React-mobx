import React, {Component} from 'react'
import {Row,Col,Menu,Icon,Dropdown, Button,message,} from 'antd'

class dropdown extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible:false,
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
        let menu = <Menu onClick={({key})=>{
            message.info('Key is ' + key);
        }}>
            <Menu.Item key="1">1st menu item  aaaaaaaa </Menu.Item>
            <Menu.Item key="2">2st menu item  aaaaaaaa </Menu.Item>
            <Menu.Item key="3">3st menu item  aaaaaaaa </Menu.Item>
        </Menu>
        let menu1 = <Menu>
            <Menu.Item key="1">
                1st menu item  aaaaaaaa
            </Menu.Item>
            <Menu.Item key="2">
                2st menu item  aaaaaaaa
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3" disabled>3rd menu item（disabled）</Menu.Item>
        </Menu>
        let menu2 = <Menu>
            <Menu.Item>1st menu item</Menu.Item>
            <Menu.Item>2nd menu item</Menu.Item>
            <Menu.SubMenu title="sub menu">
                <Menu.Item>3rd menu item</Menu.Item>
                <Menu.Item>4th menu item</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="disabled sub menu" disabled>
                <Menu.Item>5d menu item</Menu.Item>
                <Menu.Item>6th menu item</Menu.Item>
            </Menu.SubMenu>
        </Menu>
        let menu3 = <Menu onClick={({key})=>{
            if(key === '3'){
                this.setState({
                    visible:false
                })
            }
        }}>
            <Menu.Item key="1">Clicking me will not close the menu. </Menu.Item>
            <Menu.Item key="2">Clicking me will not close the menu. </Menu.Item>
            <Menu.Item key="3">Clicking me will close the menu. </Menu.Item>
        </Menu>
        let placement = ['bottomLeft','bottomCenter','bottomRight','topLeft','topCenter','topRight'];
        let left = [
            {
                title:'基本用法',
                show:<Dropdown overlay={menu}>
                    <Button>Hover me <Icon type="down" /></Button>
                </Dropdown>,
                code: <p>最简单的下拉菜单。</p>
            },
            {
                title:'其他元素',
                show:<Dropdown overlay={menu1}>
                    <Button>Hover me <Icon type="down" /></Button>
                </Dropdown>,
                code: <p>分割线和不可用菜单项。</p>
            },
            {
                title:'触发事件',
                show: <Dropdown overlay={menu}>
                    <Button> Hover me  </Button>
                </Dropdown>,
                code: <p>点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。</p>
            },
            {
                tittle:'多级菜单',
                show: <Dropdown overlay={menu2}>
                            <Button>Cascading menu <Icon type="down" /></Button>
                    </Dropdown>,
                code: <p>传入的菜单里有多个层级。</p>
            },
            {
                title:'右键菜单',
                show: <Dropdown overlay={menu} trigger={['contextMenu']}>
                        <Button> Right Click on Me </Button>
                    </Dropdown>,
                code: <p>默认是移入触发菜单，可以点击鼠标右键触发。</p>
            }
        ]
        let right = [
            {
                title:'弹出位置',
                show: <div>
                    {
                        placement.map((e,j)=>{
                            return <Dropdown overlay={menu} placement={e} key={j}>
                                        <Button>{e} <Icon type="down" /></Button>
                                    </Dropdown>
                        })
                    }
                </div>,
                code: <p>支持 6 个弹出位置。</p>
            },
            {
                title:'触发方式',
                show: <div>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <Button> Click me </Button>
                    </Dropdown>
                    <Dropdown overlay={menu} trigger={['hover']}>
                        <Button> Hover me </Button>
                    </Dropdown>
                </div>,
                code: <p>默认是移入触发菜单，可以点击触发。</p>
            },
            {
                title:'带下拉框的按钮',
                show: <div>
                    <Dropdown.Button onClick={()=>{
                        message.success('click');
                    }} overlay={menu}>
                        Dropdown
                    </Dropdown.Button>
                    <Dropdown.Button
                        onClick={()=>{
                            message.success('click');
                        }}
                        overlay={menu}
                        disabled
                        style={{ marginLeft: 8 }}
                    >
                    Dropdown
                    </Dropdown.Button>
                    <Dropdown overlay={menu}>
                        <Button style={{ marginLeft: 8 }}>
                            Button <Icon type="down" />
                        </Button>
                    </Dropdown>
                </div>,
                code: <p>左边是按钮，右边是额外的相关功能菜单。</p>
            },
            {
                title:'菜单隐藏方式',
                show: <Dropdown overlay={menu3}
                        onVisibleChange={(flag)=>{
                            this.setState({
                                visible:flag,
                            })
                        }}
                        visible={this.state.visible}
                    >
                        <Button> Hover me</Button>
                    </Dropdown>,
                code: <p>默认是点击关闭菜单，可以关闭此功能。</p>
            }
        ]
        return (
            <section className='Section_box'>
                <Row type="flex"  justify="start"  align="top" gutter={10}>
                    <Col span={12}>
                        {
                            left.map((el,i)=>{
                                return code(el.show,el.code,el.title,i)
                            })
                        }
                    </Col>
                    <Col span={12}>
                        {
                            right.map((el,i)=>{
                                return code(el.show,el.code,el.title,i)
                            })
                        }
                    </Col>
                </Row> 
            </section>
        )
    }
}

export default dropdown
