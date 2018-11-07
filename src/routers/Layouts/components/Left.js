import React, { Component } from 'react'
import SideMenu from '@/components/SideMenu'
import logo from '@/logo.svg'
import { inject,observer } from 'mobx-react';

@inject('Store')
@observer
class Left extends Component{
    render() {
        return (
            <div className='left' style={{width:this.props.Store.slider?'80px':'240px'}}>
                <div className='logo'>
                    <img src={logo} alt=''/>
                </div>
                <SideMenu></SideMenu>
            </div>
        )
    }
}

export default Left