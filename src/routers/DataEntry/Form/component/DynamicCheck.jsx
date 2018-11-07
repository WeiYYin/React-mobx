import React, {Component} from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;
const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};
class dynamicCheck extends Component {
    constructor(props){
        super(props)
        this.state={
            checkNick:false,
        }
    }
    check = ()=>{
        this.props.form.validateFields((err) => {
                if (!err) {
                    console.info('success');
                }
            },
        );
    }
    handleChange = (e) => {
        this.setState({
            checkNick: e.target.checked,
        }, () => {
            this.props.form.validateFields(['nickname'], { force: true });
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form>
                <FormItem {...formItemLayout} label='Name'>
                    {
                        getFieldDecorator('username',{
                            rules: [{
                                required: true,
                                message: 'Please input your name',
                            }],
                        })(
                            <Input placeholder="Please input your name" />
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout} label='Nickname'>
                    {
                        getFieldDecorator('nickname',{
                            rules: [{
                                required: this.state.checkNick,
                                message: 'Please input your nickname',
                            }],
                        })(
                            <Input placeholder="Please input your nickname" />
                        )
                    }
                </FormItem>
                <FormItem {...formTailLayout}>
                    <Checkbox
                        checked={this.state.checkNick}
                        onChange={this.handleChange}
                    >
                        Nickname is required
                    </Checkbox>
                </FormItem>
                <FormItem {...formTailLayout}>
                    <Button type="primary" onClick={this.check}>
                        Check
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

export const DynamicCheck = Form.create()(dynamicCheck);
export const DTitle = ()=>'动态校验规则';
export const DCode = ()=> <p> 
    根据不同情况执行不同的校验规则。
</p>
