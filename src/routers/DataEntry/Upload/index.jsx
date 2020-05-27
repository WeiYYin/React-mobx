import React, {Component} from 'react'
import Common from '@/components/common/index'
import {
    Upload, message, Button, Icon,
} from 'antd';


class index extends Component {
    render() {
        let left = [];
        let right = [];
        return (
            <div>
                <Common right={right} left={left}/>
            </div>
        )
    }
}

export default index
