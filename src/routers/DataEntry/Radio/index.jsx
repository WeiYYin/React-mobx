import React, {Component} from 'react'
import {Radio,Row,Col,Button} from 'antd'

const RadioGroup = Radio.Group;
class radio extends Component {
    constructor(props){
        super(props)
        this.state={
            disabled:false,
            value:'',
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
                show: <Radio>Radio</Radio>,
                title:'基本使用',
                code: <p>最简单的用法。</p>
            },
            {
                show: <RadioGroup onChange={(v)=>{
                    this.setState({
                        value: v.target.value
                    })
                }} value={this.state.value}>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                </RadioGroup>,
                title:'单选组',
                code: <p>一组互斥的 Radio 配合使用。</p>
            }
        ];
        let right = [
            {
                show: <div>
                        <Radio defaultChecked={false} disabled={this.state.disabled}>Disabled</Radio>
                        <br />
                        <Radio defaultChecked disabled={this.state.disabled}>Disabled</Radio>
                        <div style={{ marginTop: 20 }}>
                        <Button type="primary" onClick={()=>{
                            this.setState({
                                disabled: !this.state.disabled,
                            })
                        }}>
                            Toggle disabled
                        </Button>
                        </div>
                    </div>,
                title:'不可用',
                code: <p>不可用</p>
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

export default radio
