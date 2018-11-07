import React, {Component} from 'react'
import { Form, Input, Select, Button } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
class PriceInput extends Component {
    constructor(props){
        super(props)
        const value = props.value || {};
        this.state={
            number: value.number || 0,
            currency: value.currency || 'rmb',
        }
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    }
    handleCurrencyChange(currency){
        if (!('value' in this.props)) {
            this.setState({ currency });
        }
        this.triggerChange({ currency });
    }
    handleNumberChange(e){
        const number = parseInt(e.target.value || 0, 10);
        if (isNaN(number)) {
            return;
        }
        if (!('value' in this.props)) {
            this.setState({ number });
        }
        this.triggerChange({ number });
    }
    triggerChange = (changedValue) => {
        // Should provide an event to pass value to Form.
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(Object.assign({}, this.state, changedValue));
        }
    }
    render() {
        const state = this.state;
        return (
            <div>
                <Input type='text' value={state.number} onChange={this.handleNumberChange}
                    style={{ width: '65%', marginRight: '3%' }}/>
                <Select
                    value={state.currency}
                    style={{ width: '32%' }}
                    onChange={this.handleCurrencyChange}
                >
                    <Option value="rmb">RMB</Option>
                    <Option value="dollar">Dollar</Option>
                </Select>
            </div>
        )
    }
}

class demo extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
            console.log('Received values of form: ', values);
            }
        });
    }
    checkPrice = (rule, value, callback) => {
        if (value.number > 0) {
            callback();
            return;
        }
        callback('Price must greater than zero!');
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem label="Price">
                    {getFieldDecorator('price', {
                        initialValue: { number: 0, currency: 'rmb' },
                        rules: [{ validator: this.checkPrice }],
                    })(<PriceInput />)}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </FormItem>
            </Form>
        )
    }
}


export const Custom = Form.create()(demo);
export const CTitle = ()=>'自定义表单控件';
export const CCode = ()=> <p> 
    自定义或第三方的表单控件，也可以与 Form 组件一起使用。只要该组件遵循以下的约定： <br/><br/>
    提供受控属性 <code>value</code> 或其它与 <code>valuePropName</code> 的值同名的属性。 <br/>
    提供 <code>onChange</code> 事件或 <code>trigger</code> 的值同名的事件。 <br/>
</p>