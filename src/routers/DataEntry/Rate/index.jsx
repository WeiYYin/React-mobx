import React, {Component} from 'react'
import {Row,Col,Rate,Icon } from 'antd'

class index extends Component {
    constructor(props){
        super(props)
        this.state={
            value:3,
        }
    }
    render() {
        let code = (show, code, title, i) => {
            return <section className='Button_box' key={i}>
                <section className='Show_button'>
                    {show}
                </section>
                <section className='Code_box'>
                    <div className='Code_title'>
                        <span>{title}</span>
                    </div>
                    {!!code
                        ? code
                        : ''}
                </section>
            </section>
        }
        let left = [
            {
                show: <Rate/>,
                title: '基本演示',
                code: <p>最简单的用法。  <br/>  <code>disabled</code>  只读  <br/> <code>allowClear</code> 	是否允许再次点击后清除 <br/>
                    <code>allowHalf</code> 是否支持半选 <br/> <code>count</code> start 总数 <br/> <code>character</code> 自定义字符

                </p>
            },
            {
                show: <span>
                    <Rate onChange={(v)=>{ this.setState({value:v}) }} value={this.state.value} />
                    {this.state.value && <span className="ant-rate-text">{this.state.value} stars</span>}
                </span>,
                title:'文案展示',
                code: <p>给评分组件加上文案展示。</p>
            }
        ];
        let right = [
            {
                show: <Rate allowHalf defaultValue={2.5} />,
                title:'半星',
                code: <p>支持半星选中  <code>allowHalf</code> 是否支持半选 </p>
            },
            {
                show: <div>
                    <Rate character={<Icon type="heart" />} allowHalf />
                    <br />
                    <Rate character="A" allowHalf style={{ fontSize: 36 }} />
                    <br />
                    <Rate character="好" allowHalf />
                </div>,
                title:'自定义字符',
                code: <p>可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。</p>
            }
        ];
        return (
            <section className='Section_box'>
                <Row gutter={10}>
                    <Col span={12}>
                        {
                            left.map((el, i) => {
                                return code(el.show, el.code, el.title, i);
                            })
                        }
                    </Col>
                    <Col span={12}>
                        {
                            right.map((el, i) => {
                                return code(el.show, el.code, el.title, i);
                            })
                        }
                    </Col>
                </Row>
            </section>
        )
    }
}

export default index


// 隐约雷鸣 阴霾天空 但盼风雨来 能留你在此
// 隐约雷鸣 阴霾天空 即使天无雨 我亦留此地