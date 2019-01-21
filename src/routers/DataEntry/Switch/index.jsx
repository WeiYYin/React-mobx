import React, {Component} from 'react'
import {Switch,Icon,Button } from 'antd';
import Common from '@/components/common/index'

class index extends Component {
    constructor(props){
        super(props)
        this.state={
            checked:true,
            disabled:true,
        }
    }
    render() {
        let {checked,disabled} = this.state;
        let left = [
            {
                show: <Switch defaultChecked onChange={(checked)=>{ console.log(checked);}} />,
                title:'基本使用',
                code: <p> 基本用法 </p>
            },
            {
                show:  <div>
                    <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
                    <br /><br />
                    <Switch checkedChildren="1" unCheckedChildren="0" />
                    <br /><br />
                    <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} defaultChecked />
                </div>,
                title:'文字和图标',
                code: <p>带有文字和图标。<code>checkedChildren</code> 选中是文字， <code>unCheckedChildren</code> 未选中时文字  </p>
            },
            {
                show: <>
                    <Switch defaultChecked loading/> 
                    <Switch loading size='small' />
                </>,
                title:'加载中',
                code: <p> 标识开关操作仍在执行中。 </p>
            }
        ];
        let right = [
            {
                show:<>
                    <Switch disabled={disabled} checked={checked} onChange={(checked)=>{ this.setState({checked}) }} />
                    <Button onClick={()=>{this.setState({disabled:!disabled})}}> Toggle disabled </Button>
                </>,
                title:'不可用',
                code: <p>Switch 失效状态。</p>
            },
            {
                show: <>
                    <Switch />
                    <Switch size='small' />
                </>,
                title:'大小',
                code: <p> <code>size="small"</code> 表示小号开关。</p>
            },
        ];
        return (
            <div>
                <Common right={right} left={left}/>
            </div>
        )
    }
}

export default index
