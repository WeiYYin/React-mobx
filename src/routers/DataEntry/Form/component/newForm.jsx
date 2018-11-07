import React, {Component} from 'react'
import { Button, Modal, Form, Input, Radio } from 'antd';
const FormItem = Form.Item;
class model extends Component {
    render() {
        const { visible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                title='Create a new collection'
                okText='Create'
                onCancel={onCancel}
                onOk={onCreate} 
            >
                <Form layout='vertical'>
                    <FormItem label='Title'>
                        {
                            getFieldDecorator('title',{
                                rules:[
                                    {
                                        required:true,
                                        message:'Please input the title of collection!'
                                    }
                                ]
                            })(
                                <Input />
                            )
                        }
                    </FormItem>
                    <FormItem  label='Description'>
                        {
                            getFieldDecorator('description')(
                                <Input type='textarea'/>
                            )
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator('modifier',{
                                initialValue:'public',
                            })(
                                <Radio.Group>   
                                    <Radio value="public">Public</Radio>
                                    <Radio value="private">Private</Radio>
                                </Radio.Group>
                            )
                        }
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}
const Model =  Form.create()(model);
class form extends Component{
    constructor(props){
        super(props)
        this.state={
            visible:false,
        }
        this.handleCancel = this.handleCancel.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.saveFormRef = this.saveFormRef.bind(this);
    }
    handleCancel(){
        this.setState({visible:false});
    }
    handleCreate(){
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
        });
    }
    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }
    render(){
        return(
            <div>
                <Button type='primary' onClick={()=>{
                    this.setState({visible:true})
                }}> New Collection </Button>
                <Model 
                    wrappedComponentRef={this.saveFormRef} 
                    visible={this.state.visible} 
                    onCancel={this.handleCancel} 
                    onCreate={this.handleCreate}/>
            </div>
        )
    }
}




export const New = form;
export const NTitle = ()=>'弹出层中新建表单';
export const NCode = ()=> <p> 
    当用户访问一个展示了某个列表的页面，想新建一项但又不想跳转页面时，可以用 Modal 弹出一个表单，用户填写必要信息后创建新的项。
</p>
