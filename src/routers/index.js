import React, { Component } from 'react'
import { Route, Switch, withRouter ,Redirect} from 'react-router-dom'
import Layouts from './Layouts'
import Login from './Login'
import { Provider } from 'mobx-react'
import store from './store'
import EventBus from './EventBus'


class Routers extends Component {
    constructor(props){
        super(props)
        this.pathname = this.props.location.pathname;
    }
    render(){
        return (
            <Provider Store={store}>
                <Switch>
                    <Route path='/' exact render={()=><Redirect to="/login"/>}></Route>
                    <Route path="/login" component={Login}/>
                    <Route path='/' component={Layouts}/>
                    <Redirect to="/login" />
                </Switch>
            </Provider>
        )
    }
}

export default withRouter(Routers)