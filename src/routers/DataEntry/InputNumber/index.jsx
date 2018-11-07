import React, {Component} from 'react'
import { InputNumber,Row,Col,Button  } from 'antd';

class index extends Component {
    constructor(props){
        super(props)
        this.state={
            disabled:false,
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
                show: <div>
                    <InputNumber size='large'  disabled={this.state.disabled}  defaultValue={3}/>
                    <InputNumber  disabled={this.state.disabled} defaultValue={3}/>
                    <InputNumber  disabled={this.state.disabled} size='small'  defaultValue={3}/><br/>
                    <Button onClick={()=>{
                        this.setState({
                            disabled: !this.state.disabled,
                        })
                    }} type="primary">Toggle disabled</Button>
                </div>,
                title:'InputNumber 大小',
                code: <p>三种大小的数字输入框，当 <code>size</code> 分别为 <code>large</code> 和 <code>small</code> 时，输入框高度为 <code>40px</code> 和 <code>24px</code> ，默认高度为 <code>32px</code> 。</p>
            },
            {
                show: <InputNumber min={0} max={10} step={0.01} defaultValue={0.01}/>,
                title:'小数',
                code: <p>和原生的数字输入框一样， <code>value</code> 的精度由 <code>step</code> 的小数位数决定。</p>
            }
        ];
        let right = [
            {
                show: <div>
                    <InputNumber
                        defaultValue={1000}
                        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    />
                    <InputNumber
                        defaultValue={100}
                        min={0}
                        max={100}
                        formatter={value => `${value}%`}
                        parser={value => value.replace('%', '')}
                    />
                </div>,
                title:'格式化 展示',
                code: <p>通过 <code>formatter</code> 格式化数字，以展示具有具体含义的数据，往往需要配合 <code>parser</code> 一起使用。  <br/>
                    <code>parser </code>  指定从 <code>formatter</code> 里转换回数字的方式，和 <code>formatter</code> 搭配使用
                </p>
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
