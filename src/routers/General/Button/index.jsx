import React, {Component} from 'react'
import { Button,Row,Col,Radio,Icon,Dropdown,Menu } from 'antd'
import {observable} from 'mobx'
import {observer} from 'mobx-react'
const ButtonGroup = Button.Group;
@observer class button extends Component {
    @observable size = 'default';
    @observable loading = false;
    render() {
        let btnList = {
            'typeList':['default','primary','danger','dashed'],
            'shape':['circle',''],
            'size':['small','default','large'],
            'disabled':[false,true],
        };
        let typeDom = ()=>{
            return  <section className='Button_box'>
                        <section className='Show_button'>
                            {
                                btnList.typeList.map((el,i)=>
                                    <Button type={el} key={i} style={{margin:'5px'}}>{el}</Button>
                                )
                            }
                        </section>
                        <section className='Code_box'>
                            <div className='Code_title'> <span>按钮类型</span> </div>
                            <code>
                                {
                                    btnList.typeList.map((el,i)=>{
                                        let d = `<Button type='${el}' style="margin:'5px'">${el}</Button>`;
                                        return <div key={i}>{d}</div>
                                    })
                                }
                            </code>
                        </section>
                    </section>
        }
        let shapeDom = ()=>{
            return  <section className='Button_box'>
                        <section className='Show_button'>
                            {
                                btnList.shape.map((el,i)=>{
                                        if(!!el){
                                            return <Button key={i}  shape={el} icon="search" style={{margin:'5px'}}></Button>
                                        }else{
                                            return <Button key={i} icon="search" style={{margin:'5px'}}>Default</Button>
                                        }
                                    }
                                )
                            }
                        </section>
                        <section className='Code_box'>
                            <div className='Code_title'> <span>按钮类型</span> </div>
                            <code>
                                {
                                    btnList.shape.map((el,i)=>{
                                        let d = `<Button shape='${el}' icon="search" style="margin:'5px'">${el}</Button>`;
                                        return <div key={i}>{d}</div>
                                    })
                                }
                            </code>
                        </section>
                    </section>
        }
        let sizeDom =  ()=>{
            return  <section className='Button_box'>
                        <section className='Show_button'>
                            <Radio.Group value={this.size} onChange={(el)=>{
                                this.size = el.target.value;
                            }}>
                                <Radio.Button value="large">Large</Radio.Button>
                                <Radio.Button value="default">Default</Radio.Button>
                                <Radio.Button value="small">Small</Radio.Button>
                            </Radio.Group> 
                            <br /><br />
                            <Button type="primary" size={this.size}>Primary</Button>
                            <Button size={this.size}>Normal</Button>
                            <Button type="dashed" size={this.size}>Dashed</Button>
                            <Button type="danger" size={this.size}>Danger</Button>
                            <br />
                            <Button type="primary" shape="circle" icon="download" size={this.size} />
                            <Button type="primary" icon="download" size={this.size}>Download</Button>
                            <br />
                            <Button.Group size={this.size}>
                            <Button type="primary">
                                <Icon type="left" />Backward
                            </Button>
                            <Button type="primary">
                                Forward<Icon type="right" />
                            </Button>
                            </Button.Group>
                        </section>
                        <section className='Code_box'>
                            <div className='Code_title'> <span>按钮大小</span> </div>
                        </section>
                    </section>
        }
        let disDom = ()=>{
            return  <section className='Button_box'>
                        <section className='Show_button'>
                            {
                                btnList.typeList.map((el,i)=>{
                                    let list = btnList.disabled.map((d,j)=>{
                                        let dom = <Button type={el} disabled={d} key={i+''+j} style={{margin:'5px'}}>{el}</Button>;
                                        return dom;
                                    })
                                    let c = <div key={i}>{list}<br/></div>;
                                    return c;
                                }
                                )
                            }
                        </section>
                        <section className='Code_box'>
                            <div className='Code_title'> <span>不可选状态</span> </div>
                            <code>
                                {
                                    btnList.typeList.map((el,i)=>{
                                        let list = btnList.disabled.map((d,j)=>{
                                            let dom = `<Button type=${el} disabled=${d} key=${i+''+j} style={{margin:'5px'}}>${el}</Button>`;
                                            let c = <div key={i+''+j}>{dom}<br/></div>;
                                            return c;
                                        })
                                        return list;
                                    })
                                }
                            </code>
                        </section>
                    </section>
        }
        let loaDom = ()=>{
            return  <section className='Button_box'>
                        <section className='Show_button'>
                            <Button loading={false}>Loading</Button>
                            <Button loading={true}>Loading</Button>
                            <Button loading={this.loading}>Loading</Button>
                            <Button onClick={()=>{
                                this.loading = !this.loading;
                            }}> Click me </Button>
                        </section>
                        <section className='Code_box'>
                            <div className='Code_title'> <span>加载中状态</span> </div>
                            <code>
                                {
                                    `<Button loading={false}>Loading</Button>
                                    <Button loading={true}>Loading</Button>
                                    <Button loading={this.loading}>Loading</Button>
                                    <Button onClick={()=>{
                                        this.loading = !this.loading;
                                    }}> Click me </Button>`
                                }
                            </code>
                        </section>
                    </section>
        }
        let droDom = ()=>{
            let menu =  <Menu>
                            <Menu.Item key="1">1st item</Menu.Item>
                            <Menu.Item key="2">2nd item</Menu.Item>
                            <Menu.Item key="3">3rd item</Menu.Item>
                        </Menu>;
            return  <section className='Button_box'>
                        <section className='Show_button'>
                            <Button type="primary">primary</Button>
                            <Button>secondary</Button>
                            <Dropdown overlay={menu}>
                                <Button>
                                    Actions <Icon type="down" />
                                </Button>
                            </Dropdown>
                        </section>
                        <section className='Code_box'>
                            <div className='Code_title'> <span>多个按键组合</span> </div>
                            <code>
                                {
                                    `<Button type="primary">primary</Button>
                                    <Button>secondary</Button>
                                    <Dropdown overlay={menu}>
                                        <Button>
                                            Actions <Icon type="down" />
                                        </Button>
                                    </Dropdown>`
                                }
                            </code>
                        </section>
                    </section>
        }

        let GroupDom = ()=>{
            return  <section className='Button_box'>
                        <section className='Show_button'>
                            <ButtonGroup>
                                <Button>Cancel</Button>
                                <Button>OK</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button type="primary" icon="cloud" />
                                <Button type="primary" icon="cloud-download" />
                            </ButtonGroup>
                        </section>
                        <section className='Code_box'>
                            <div className='Code_title'> <span>按钮组合</span> </div>
                            <code>
                                {
                                    `<ButtonGroup>
                                        <Button>Cancel</Button>
                                        <Button>OK</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button type="primary" icon="cloud" />
                                        <Button type="primary" icon="cloud-download" />
                                    </ButtonGroup>`
                                }
                            </code>
                        </section>
                    </section>
        }

        let GhostDom = ()=>{
            return  <section className='Button_box'>
                        <section className='Show_button'>
                            <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
                                <Button type="primary" ghost>Primary</Button>
                                <Button ghost>Default</Button>
                                <Button type="dashed" ghost>Dashed</Button>
                                <Button type="danger" ghost>danger</Button>
                            </div>
                        </section>
                        <section className='Code_box'>
                            <div className='Code_title'> <span>按钮类型</span> </div>
                            <code>
                                "幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。<br/>"
                                {
                                    `<div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
                                    <Button type="primary" ghost>Primary</Button>
                                    <Button ghost>Default</Button>
                                    <Button type="dashed" ghost>Dashed</Button>
                                    <Button type="danger" ghost>danger</Button>
                                </div>`
                                }
                            </code>
                        </section>
                    </section> 
        }
        return (
            <section className='Section_box'>
                <Row type="flex"  justify="start"  align="top" gutter={10}>
                    <Col span={12}>
                        {typeDom()}
                        {shapeDom()}
                        {loaDom()}
                        {droDom()}
                        {GhostDom()}
                    </Col>
                    <Col span={12}>
                        {sizeDom()}
                        {disDom()}
                        {GroupDom()}
                    </Col>
                </Row> 
            </section>
        )
    }
}

export default button
