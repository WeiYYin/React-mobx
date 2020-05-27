import React, {Component} from 'react'
import {Form, Icon, Input, Button, Checkbox} from 'antd';

const FormItem = Form.Item;
class NormalLoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" style={{width:'300px'}}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your username!'
                            }
                        ]
                    })(
                        <Input
                            prefix={< Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                            placeholder="Username"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your Password!'
                            }
                        ]
                    })(
                        <Input
                            prefix={< Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                            type="password"
                            placeholder="Password"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <span className="login-form-forgot" style={{float:'right'}}>Forgot password</span>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'100%'}}>
                        Log in
                    </Button>
                    Or   &nbsp;&nbsp;&nbsp;&nbsp;
                    <span>register now!</span>
                </FormItem>
                
            </Form>
        )
    }
}

export const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export const Lcode = ()=><p>普通的登录框，可以容纳更多的元素。</p>;
export const Ltitle = ()=>'登录框';
