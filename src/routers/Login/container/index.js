import React, { Component } from 'react'
import { message } from 'antd'
import FormBox from '../components/FormBox'
import './index.less'

class Login extends Component {
    submit = (form) => {
        form.validateFields((err, values) => {
            if (!err) {
                this.timer = setTimeout(() => {
                    let { userName, password } = values
                    if (userName === 'admin' && password === '123456') {
                        this.props.history.push('/home')
                    } else {
                        message.error('账号：admin ； 密码：123456')
                    }
                }, 1500)
            }
        });
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    render() {
        return (

            <div className='Login_wrap clearFix'>
                <div className='form P_auto'>
                    <span className='font icon-react'></span>
                    <FormBox submit={this.submit}/>
                </div>
            </div>
        )
    }
}

export default Login
