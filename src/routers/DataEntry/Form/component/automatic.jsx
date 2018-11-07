import React, {Component} from 'react'
import {Form,InputNumber} from 'antd'

const FormItem = Form.Item;
class automatic extends Component {
    constructor(props){
        super(props)
        this.state={
            number:{
                status:'',
                errorMsg:'',
                value:11,
            }
        }
        this.handleNumberChange = this.handleNumberChange.bind(this);
    }
    handleNumberChange(v){
        if(v === 11){
            this.setState({
                number:{
                    status:'success',
                    errorMsg:null,
                    value:v,
                }
            })
        }else{
            this.setState({
                number:{
                    status:'error',
                    errorMsg:'The prime between 8 and 12 is 11!',
                    value:v,
                }
            })
        }
    }
    render() {
        const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 12 },
        };
        const number = this.state.number;
        const tips = 'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.';
        return (
            <Form>
                <FormItem
                    {...formItemLayout}
                    label="Prime between 8 & 12"
                    validateStatus={number.status}
                    help={number.errorMsg || tips}
                >
                    <InputNumber
                        min={8}
                        max={12}
                        value={number.value}
                        onChange={this.handleNumberChange}
                    />
                </FormItem>
            </Form>
        )
    }
}

export  const Automatic = automatic;
export const ATitle = ()=>'自行处理表单数据';
export const ACode = ()=> <p> 
    使用 <code>Form.create</code> 处理后的表单具有自动收集数据并校验的功能，但如果您不需要这个功能，或者默认的行为无法满足业务需求，可以选择不使用 <code>Form.create</code> 并自行处理数据。
</p>

