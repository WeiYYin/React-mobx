import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { Tooltip,Switch  } from 'antd'
import routerConfig from '@/js/router.js'
import { inject,observer } from 'mobx-react';
import Loading from "@/components/Loading"
import {Title} from "@/js/unit.js"
import EventBus from '../../EventBus'

@inject('Store')
@observer
class Right extends Component {
    logout = () =>{
        this.props.logout()
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            Title();
        } 
    }
    render() {
        const name = 'test';
        return (
            <div className='right' style={{float:'initial'}}>
                <div className='header clear clearFix'>
                    <Switch checked={this.props.Store.slider} onChange={()=>{
                        this.props.Store.toggleSlider();
                        EventBus.emit('Slider','123');
                    }} className='T_switch'/>
                    <div className='user'>
                        <span className='font icon-touxiang'></span>
                        <Tooltip title={<span style={{fontSize:'14px',cursor:'pointer'}} onClick={this.logout}>退出</span>}>
                            <span className='name'>{name}</span>
                        </Tooltip>
                    </div>
                </div>
                <div className='routeWrap'>
                    <Loading>
                        {routerConfig.map((item,i)=>
                            <Route key={i} path={item.path} component={item.component} exact/>
                        )}
                    </Loading>  
                </div>、
            </div>
        )
    }
}

export default withRouter(Right)