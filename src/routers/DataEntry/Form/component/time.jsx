import React, {Component} from 'react'
import { Button, Form, DatePicker, TimePicker} from 'antd';


const FormItem = Form.Item;
const { MonthPicker, RangePicker } = DatePicker;
class time extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
            // Should format date value before submit.
            const rangeValue = fieldsValue['range-picker'];
            const rangeTimeValue = fieldsValue['range-time-picker'];
            const values = {
                ...fieldsValue,
                'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
                'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
                'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
                'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
                'range-time-picker': [
                rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
                rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
                ],
                'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
            };
            console.log('Received values of form: ', values);
        });
    }
    
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };
        const rangeConfig = {
            rules: [{ type: 'array', required: true, message: 'Please select time!' }],
        };
        return (
            <Form onSubmit={this.handleSubmit} style={{width:600}}>
                <FormItem {...formItemLayout} label='DatePicker'>
                    {
                        getFieldDecorator('date-picker',config)(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout} label='MonthPicker'>
                    {
                        getFieldDecorator('month-picker',config)(
                            <MonthPicker />
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout} label='RangePicker'>
                    {
                        getFieldDecorator('range-picker',rangeConfig)(
                            <RangePicker/> 
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout} label='RangePicker[showTime]'>
                    {
                        getFieldDecorator('range-time-picker',rangeConfig)(
                            <RangePicker  showTime format="YYYY-MM-DD HH:mm:ss"/>
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout} label='TimePicker'>
                    {
                        getFieldDecorator('time-picker',rangeConfig)(
                            <TimePicker />
                        )
                    }
                </FormItem>
                <FormItem
                    wrapperCol={{
                        xs: { span: 24, offset: 0 },
                        sm: { span: 16, offset: 8 },
                    }}
                >
                    <Button type="primary" htmlType="submit">Submit</Button>
                </FormItem>
            </Form>
        )
    }
}

export const Time = Form.create()(time);
export const TTitle = ()=>'时间类控件';
export const TCode = ()=> <p> 
    时间类组件的 <code>value</code> 类型为 <code>moment</code> 对象，所以在提交服务器前需要预处理。
</p>
