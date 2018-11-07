import React, {Component} from 'react'
import { Form, Row, Col, Input, Button, Icon } from 'antd';

const FormItem = Form.Item;
class search extends Component {
    constructor(props){
        super(props)
        this.state={
            expand:false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err,values)=>{
            console.log('Received values of form: ', values);
        })
    }
    render() {
        let formLayout = {
            labelCol:{ span:5 },
            wrapperCol:{ span:19 },
        }
        const { getFieldDecorator,resetFields } = this.props.form;
        let list = ()=>{
            let list = [];
            let count = this.state.expand ? 10:6;
            for (let i = 0; i < 10; i++) {
                let item = <Col span={8} key={i} style={{display:i<count?'block':'none'}}>
                    <FormItem {...formLayout} label={`Field ${i}`}>
                        {
                            getFieldDecorator(`Field${i}`,{
                                rules:[
                                    {
                                        required:true,
                                        message:'Input ,something',
                                    }
                                ]
                            })(
                                <Input placeholder={`Field${i}`}/>
                            )
                        }
                    </FormItem>
                </Col>
                list.push(item);
            }
            return list;
        }
        return (
            
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    {
                        list()
                    }
                </Row>
                <section style={{textAlign:'right'}} >
                    <Button type="primary" htmlType="submit">Search</Button>
                    <Button style={{ marginLeft: 8 }} onClick={()=>{
                        resetFields();
                    }}>
                        Clear
                    </Button>
                    <span style={{ marginLeft: 8, fontSize: 12, color:'#1890ff',cursor:'pointer'}} onClick={()=>{
                        this.setState({
                            expand:!this.state.expand,
                        })
                    }}>
                        Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
                    </span>
                </section>
            </Form>
        )
    }
}

export const Search = Form.create()(search);
export const STitle = ()=>'高级搜索';
export const SCode = ()=> <p> 三列栅格式的表单排列方式，常用于数据表格的高级搜索。 <br/>
有部分定制的样式代码，由于输入标签长度不确定，需要根据具体情况自行调整。 <br/>
    <code>resetFields</code> 重置一组输入控件的值（为 initialValue）与状态，如不传入参数，则重置所有组件
</p>


