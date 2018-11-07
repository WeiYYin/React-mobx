import React, {Component} from 'react'
import { Layout } from 'antd';
import './index.less'

const { Header, Footer, Sider, Content } = Layout;

class layout extends Component {
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
        let list = [
            {
                title:'基本结构',
                show:<div>
                    <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                    </Layout>

                    <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Sider>Sider</Sider>
                        <Content>Content</Content>
                    </Layout>
                    <Footer>Footer</Footer>
                    </Layout>

                    <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Content>Content</Content>
                        <Sider>Sider</Sider>
                    </Layout>
                    <Footer>Footer</Footer>
                    </Layout>

                    <Layout>
                    <Sider>Sider</Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                    </Layout>
                </div>,
                code: <p>典型的页面布局。</p>
            },
        ]
        return (
            <section className='Section_box'>
                {
                    list.map((el,i)=>{
                        return code(el.show,el.code,el.title,i);
                    })
                }
                
            </section>
        )
    }
}

export default layout
