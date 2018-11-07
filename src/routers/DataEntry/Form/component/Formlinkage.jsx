import React, {Component} from 'react'
import { Form, Select, Input, Button } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
class formLinkage extends Component {
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    handleSelectChange = (v)=>{
        this.props.form.setFieldsValue({
            note: `Hi, ${v === 'male' ? 'man' : 'lady'}!`,
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem label="Note"
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 12 }}>
                    {
                        getFieldDecorator('note',{
                            rules: [{ required: true, message: 'Please input your note!' }],
                        })(
                            <Input />
                        )
                    }
                </FormItem>
                <FormItem
                    label="Gender"
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 12 }}
                >
                    {
                        getFieldDecorator('gender',{
                            rules: [{ required: true, message: 'Please select your gender!' }],
                        })(
                            <Select
                                placeholder="Select a option and change input text above"
                                onChange={this.handleSelectChange}
                            >
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem
                    wrapperCol={{ span: 12, offset: 5 }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

export const FormLinkage = Form.create()(formLinkage);
export const FTitle = ()=>'表单联动';
export const FCode = ()=> <p> 
    使用 <code>setFieldsValue</code> 来动态设置其他控件的值。
</p>