import React, {Component} from 'react'
import {Form, Input} from 'antd'

const FormItem = Form.Item;
const CustomizedForm = Form.create({
    onFieldsChange(props, changedFields) {
        props.onChange(changedFields);
    },
    mapPropsToFields(props) {
        return {
            username: Form.createFormField({
                ...props.username,
                value: props.username.value
            })
        };
    },
    onValuesChange(_, values) {
        console.log(values);
    }
})((props) => {
    const {getFieldDecorator} = props.form;
    return (
        <Form layout="inline">
            <FormItem label="Username">
                {getFieldDecorator('username', {
                    rules: [
                        {
                            required: true,
                            message: 'Username is required!'
                        }
                    ]
                })(<Input/>)}
            </FormItem>
        </Form>
    );
});
class Demo extends Component {
    state = {
        fields: {
            username: {
                value: 'benjycui'
            }
        }
    };

    handleFormChange = (changedFields) => {
        this.setState(({fields}) => ({
            fields: {
                ...fields,
                ...changedFields
            }
        }));
    }

    render() {
        const fields = this.state.fields;
        return (
            <div>
                <CustomizedForm {...fields} onChange={this.handleFormChange}/>
                <pre className="language-bash">
            {JSON.stringify(fields, null, 2)}
        </pre>
            </div>
        );
    }
}

export const UpLayout = Demo;
export const UTitle = ()=>'表单数据存储于上层组件';
export const UCode = ()=> <p> 
    通过使用 <code>onFieldsChange</code> 与 <code>mapPropsToFields，可以把表单的数据存储到上层组件或者</code> Redux、dva 中，更多可参考 rc-form 示例。<br/>
    注意： <code>mapPropsToFields</code> 里面返回的表单域数据必须使用 <code>Form.createFormField</code> 包装。
</p>
