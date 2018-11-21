import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
const FormItem = Form.Item


class FromBox extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        let { form } = this.props
        this.props.submit(form)
    }
    render(){
        const { getFieldDecorator } = this.props.form
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '输入admin' }],
                    })(
                        <Input prefix={<span className='font icon-user' style={{ color: 'rgba(0,0,0,.25)' }}></span>} placeholder="admin" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '密码是123456' }],
                    })(
                        <Input prefix={<span className='font icon-mima' style={{ color: 'rgba(0,0,0,.25)' }}></span>} type="password" placeholder="123456" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="l_button">
                        登录
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

export default Form.create()(FromBox);