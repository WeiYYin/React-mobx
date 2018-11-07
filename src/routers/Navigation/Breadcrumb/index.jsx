import React, {Component} from 'react'
import {Row,Col,Breadcrumb,Icon } from 'antd'

class breadcrumb extends Component {
    render() {
        let code = (show,code,title)=>{
            return <section className='Button_box'>
                    <section className='Show_button'>
                        {show}
                    </section>
                    <section className='Code_box'>
                        <div className='Code_title'> <span>{title}</span> </div>
                        {!!code?code:''}
                    </section>
                </section>
        }
        let one = {
            title:'基本',
            show:<Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Application Center</Breadcrumb.Item>
                <Breadcrumb.Item>Application List</Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>,
            code: <p>
                最简单的用法。
            </p>
        }
        let two = {
            title:'带图标的',
            show:<Breadcrumb>
                    <Breadcrumb.Item>
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Icon type="user" />
                        <span>Application List</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Application
                    </Breadcrumb.Item>
                </Breadcrumb>,
            code: <p>
                图标放在文字前面。
            </p>
        }
        let three = {
            title:'分隔符',
            show:<Breadcrumb separator=">">
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Application Center</Breadcrumb.Item>
                    <Breadcrumb.Item>Application List</Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>,
            code: <p>使用 <code>separator=">" </code> 可以自定义分隔符。</p>
        }
        return (
            <section className='Section_box'>
                <Row type="flex"  justify="start"  align="top" gutter={10}>
                    <Col span={12}>
                        {code(one.show,one.code,one.title)}
                        {code(three.show,three.code,three.title)}
                    </Col>
                    <Col span={12}>
                        {code(two.show,two.code,two.title)}
                    </Col>
                </Row> 
            </section>
        )
    }
}

export default breadcrumb
