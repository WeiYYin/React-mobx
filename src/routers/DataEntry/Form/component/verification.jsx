import React, {Component} from 'react'
import { Form, Input, DatePicker, Col, TimePicker, Select, Cascader, InputNumber } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 3 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
};
class verification extends Component {
    render() {
        return (
            <Form>
                <FormItem {...formItemLayout}
                    label="Fail" validateStatus="error" help="Should be combination of numbers & alphabets"
                >
                    <Input placeholder="unavailable choice" id="error" />
                </FormItem>
                <FormItem  {...formItemLayout}
                    label='warning' validateStatus='warning' >
                    <Input placeholder="Warning" id="warning" />
                </FormItem>
                <FormItem   {...formItemLayout}
                    label="Validating" hasFeedback validateStatus="validating" help="The information is being validated...">
                    <Input placeholder="I'm the content is being validated" id="validating" />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Success"
                    hasFeedback
                    validateStatus="success"
                >
                    <Input placeholder="I'm the content" id="success" />
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Warning"
                    hasFeedback
                    validateStatus="warning"
                >
                    <Input placeholder="Warning" id="warning" />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Fail"
                    hasFeedback
                    validateStatus="error"
                    help="Should be combination of numbers & alphabets"
                >
                    <Input placeholder="unavailable choice" id="error" />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Success"
                    hasFeedback
                    validateStatus="success"
                >
                    <DatePicker style={{ width: '100%' }} />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Warning"
                    hasFeedback
                    validateStatus="warning"
                >
                    <TimePicker style={{ width: '100%' }} />
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Error"
                    hasFeedback
                    validateStatus="error"
                >
                    <Select defaultValue="1">
                        <Option value="1">Option 1</Option>
                        <Option value="2">Option 2</Option>
                        <Option value="3">Option 3</Option>
                    </Select>
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Validating"
                    hasFeedback
                    validateStatus="validating"
                    help="The information is being validated..."
                >
                    <Cascader defaultValue={['1']} options={[]} />
                </FormItem>
                <FormItem
                    label="inline"
                    {...formItemLayout}
                >
                    <Col span={11}>
                        <FormItem validateStatus="error" help="Please select the correct date">
                        <DatePicker />
                        </FormItem>
                    </Col>
                    <Col span={2}>
                        <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                        -
                        </span>
                    </Col>
                    <Col span={11}>
                        <FormItem>
                        <DatePicker />
                        </FormItem>
                    </Col>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Success"
                    hasFeedback
                    validateStatus="success"
                >
                    <InputNumber style={{ width: '100%' }} />
                </FormItem>
            </Form>
        )
    }
}

export const Verification = Form.create()(verification);
export const VTitle = ()=>'自定义校验';
export const VCode = ()=> <p> 
    我们提供了 <code>validateStatus help hasFeedback</code> 等属性，你可以不需要使用 <code>Form.create</code> 和 <code>getFieldDecorator</code> ，自己定义校验的时机和内容。 <br/>
    1. <code>validateStatus</code>: 校验状态，可选 <code>'success', 'warning', 'error', 'validating'</code> 。 <br/>
    2. <code>hasFeedback</code>  配合 <code>validateStatus</code> 属性使用，展示校验状态图标，建议只配合 <code>Input</code> 组件使用 <br/>
    3. <code>help</code> 提示信息，如不设置，则会根据校验规则自动生成
</p>
