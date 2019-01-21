import React, {Component} from 'react'
import {TimePicker ,Button} from 'antd';
import Common from '@/components/common/index'
import moment from 'moment'; // 时间处理 函数

class index extends Component {
    constructor(props){
        super(props)
        this.state={
            value:null,
            open:false,
        }
    }
    render() {
        const format = 'HH:mm';
        let left = [
            {
                show: <>
                    <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                </>,
                title:'基本设置',
                code: <p> <code>defaultOpenValue</code> 当 defaultValue/value 不存在时，可以设置面板打开时默认选中的值 </p>,
            },
            {
                show: <>
                    <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} size={'large'}/> &nbsp;
                    <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />&nbsp;
                    <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} size={'small'}/>&nbsp;
                </>,
                title:'Size',
                code: <p> <code>Size</code> 三种大小的输入框，大的用在表单中，中的为默认。 </p>
            },
            {
                show: <>
                    <TimePicker defaultValue={moment('12:08', format)} format={format} />
                </>,
                title:'选择时分',
                code: <p> <code>TimePicker</code> 浮层中的列会随着 <code>format</code> 变化，当略去 <code>format</code> 中的某部分时，浮层中对应的列也会消失。  默认 <code>"HH:mm:ss"</code> </p>,
            },
            {
                show: <TimePicker
                    open={this.state.open}
                    onOpenChange={(open)=>{this.setState({open})}}
                    addon={() => (
                        <Button size="small" type="primary" onClick={()=>{this.setState({open:false})}}>
                            Ok
                        </Button>
                    )}
                />,
                title:'附加内容',
                code: <p> 在 <code>TimePicker</code> 选择框底部显示自定义的内容。 <code>addon</code> 选择框底部显示自定义的内容 </p>
            },
        ];
        let right = [
            {
                show: <TimePicker value={this.state.value} onChange={(value)=>{this.setState({value});console.log(value);
                }} />,
                title:'受控组件',
                code: <p> <code>value</code> 和 <code>onChange</code> 需要配合使用。 </p>
            },
            {
                show: <>
                    <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} disabled/>
                </>,
                title:'禁用',
                code: <p> <code>disabled</code> 禁用 </p>,
            },
            {
                show: <TimePicker minuteStep={15} secondStep={10} />,
                title:'步长选项',
                code: <p>可以使用 <code>hourStep</code> <code>minuteStep</code> <code>secondStep</code> 按步长展示可选的时分秒。</p>
            },
            {
                show:<>
                    <TimePicker use12Hours />
                    <TimePicker use12Hours format="h:mm:ss A" />
                    <TimePicker use12Hours format="h:mm a" />
                </>,
                title:'12小时制',
                code: <p> <code>use12Hours</code> 12 小时制的时间选择器，默认的 <code>format</code> 为 <code>h:mm:ss a</code> 。 </p>
            }
        ];
        return (
            <div>
                <Common right={right} left={left}/>
            </div>
        )
    }
}

export default index
