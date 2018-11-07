import React, {Component} from 'react'
import {Form, Input, Button} from 'antd';

const FormItem = Form.Item;

class form1 extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 7 },
        };
        return(
            <Form layout='horizontal'  onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout} label="Name">
                    {
                        getFieldDecorator('username',{
                            rules:[
                                {
                                    required:true,
                                    message:'Please input your name!'
                                }
                            ],
                        })(
                            <Input placeholder="Please input your name" />
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout} label="PassWord">
                    {
                        getFieldDecorator('password',{
                            rules:[
                                {
                                    required:true,
                                    message:'Please input your password!'
                                }
                            ],
                        })(
                            <Input placeholder="Please input your name" type='password' />
                        )
                    }
                </FormItem>
                <FormItem
                    wrapperCol={{ span: 12, offset: 3 }}
                >
                    <Button type="primary" htmlType="submit">Login in</Button>
                </FormItem>
            </Form>
        )
    }
}
const FormOne = Form.create()(form1);

class Simple extends Component {
    render() {
        
        let code = ({show,code,title},i)=>{
            return <section className='Button_box' key={i}>
                <section className='Show_button'>
                    {show}
                </section>
                <section className='Code_box'>
                    <div className='Code_title'> <span>{title}</span> </div>
                    {!!code?code:''}
                </section>
            </section>
        }
        let list = [
            {
                title:'Simple one',
                show: <FormOne></FormOne>,
                code: <p>
                    表单属性: <br/> 
                    <code>hideRequiredMark</code> 隐藏所有表单项的必选标记, 默认 false <br/>
                    <code>layout</code> 表单布局 <code>'horizontal'|'vertical'|'inline'</code> 默认 <code>'horizontal'</code> <br/>
                    <code>onSubmit</code> 数据验证成功后回调事件  <code>Function(e:Event)</code>  <br/> <br/>

                    <code>
                        表单创建 <br/>
                        {
                            `class CustomizedForm extends React.Component {}` 
                        }
                        <br/>
                        {
                            `CustomizedForm = Form.create({})(CustomizedForm);`
                        }
                        <br/> 
                        表单创建 具体属性  <a href="https://ant.design/components/form-cn/#Form.create(options)" target="_blank" rel="noopener noreferrer"> <code  style={{color:'#1890ff'}}>Form.create(options)</code> </a>
                    </code>  <br/><br/><br/>

                    Form.Item <br/>
                    注意：一个 <code>Form.Item</code> 建议只放一个被 <code>getFieldDecorator</code> 装饰过的 child，当有多个被装饰过的 child 时，help <code>required</code> <code>validateStatus</code> 无法自动生成。 <br/> 
                    <code>Form.Item </code> 具体属性见 <a href="https://ant.design/components/form-cn/#Form.Item" target="_blank" rel="noopener noreferrer"> <code  style={{color:'#1890ff'}}>Form.Item</code> </a>  <br/> <br/>

                    使用 <code>getFieldDecorator</code> <code>this.props.form.getFieldDecorator(id, options)</code> 对表单数据进行双向绑定 <br/>
                    经过 <code>getFieldDecorator</code> 包装的控件，表单控件会自动添加  <code>value</code> （或 <code>valuePropName</code> 指定的其他属性）  <code>onChange</code> （或 <code>trigger</code> 指定的其他属性），数据同步将被 <code>Form</code> 接管  , 这会导致以下结果：<br/>
                    
                    1. 你不再需要也不应该用 <code>onChange</code> 来做同步，但还是可以继续监听 <code>onChange</code> 等事件。
                    2.你不能用控件的 <code>value defaultValue</code> 等属性来设置表单域的值，默认值可以用 <code>getFieldDecorator</code> 里的 <code>initialValue</code>.
                    3. 你不应该用 <code>setState</code> ，可以使用 <code>this.props.form.setFieldsValue</code> 来动态改变表单值。 <br/> <br/>
                    <code>getFieldDecorator(id, options) </code> 具体属性见 <a href="https://ant.design/components/form-cn/#this.props.form.getFieldDecorator(id,-options)" target="_blank" rel="noopener noreferrer"> <code  style={{color:'#1890ff'}}>getFieldDecorator(id, options)</code> </a> 

                    <br/> <br/>
                    表单提交 <br/>
                    1 调用 <code>submit</code> 方法提交 <br/>
                    2 使用 <code>Button</code>  设置 htmlType 属性 <code>htmlType = 'submit'</code> <br/><br/>
                    表单验证
                    <code>validateFields</code> 通过 <code>this.props.form.validateFields</code> 调用 <br/>
                    校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件 
                    <br/>
                    <code>
                        (<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;    [fieldNames: string[]],<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;    [options: object],<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;    callback(errors, values) <br/>
                        ) => void <br/>
                    </code>
                    <br/><br/>
                    <code>validateFields options </code> 
                    具体属性见 
                    <a href="https://ant.design/components/form-cn/#validateFields/validateFieldsAndScroll" target="_blank" rel="noopener noreferrer"> <code  style={{color:'#1890ff'}}>validateFields  options</code> </a> 
                </p>
            },
        ];
        return (
            <div>
                {
                    list.map((el,i)=>{
                        return code(el,i)
                    })
                }
            </div>
        )
    }
}

export default Simple
