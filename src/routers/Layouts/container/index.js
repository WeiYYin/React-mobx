import React, { Component } from 'react'
import Left from '../components/Left'
import Right from '../components/Right'
import './index.less'

class Layouts extends Component {
    logout = () =>{
        this.props.history.replace('/login')
    }
    render() {
        return (
            <div className='Layouts_wrap clearFix'>
                <Left />
                <Right logout={this.logout}/>
            </div>
        )
    }
}
export default Layouts
