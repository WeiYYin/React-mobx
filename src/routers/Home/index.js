import React, {Component} from 'react'
import { inject,observer } from 'mobx-react';

@inject('Store')
@observer
class Home extends Component {
    render() {
        return (
            <div className='Home_'>
                home
            </div>
        )
    }
}

export default Home