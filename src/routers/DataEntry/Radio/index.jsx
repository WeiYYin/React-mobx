import React, {Component} from 'react'
import Common from '@/components/common/index'
import {Radio,Button,Input} from 'antd'

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
class radio extends Component {
    constructor(props){
        super(props)
        this.state={
            disabled:false,
            value:'',
            value1:'',
            value2:'',
            value3:'',
            value4:'',
        }
    }
    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        let plainOptions = ['Apple', 'Pear', 'Orange'];
        let options = [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' },
        ];
        let optionsWithDisabled = [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange', disabled: true },
        ];
        let left = [
            {
                show: <Radio>Radio</Radio>,
                title:'基本使用',
                code: <p>最简单的用法。</p>
            },
            {
                show: <RadioGroup onChange={(v)=>{
                    this.setState({
                        value: v.target.value
                    })
                }} value={this.state.value}>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                </RadioGroup>,
                title:'单选组',
                code: <p>一组互斥的 Radio 配合使用。</p>
            },
            {
                show: <div>
                    <RadioGroup options={plainOptions} onChange={(e)=>this.setState({value1:e.target.value})} value={this.state.value1} /> <br/>
                    <RadioGroup options={options} onChange={(e)=>this.setState({value2:e.target.value})} value={this.state.value2} /><br/>
                    <RadioGroup options={optionsWithDisabled} onChange={(e)=>this.setState({value3:e.target.value})} value={this.state.value3} />
                </div>,
                title:'RadioGroup 组合配置方式',
                code: <p>
                    通过配置 <code>options</code> 参数来渲染单选框。 <br/>
                    <code> options</code> <br/>
                    <code>{`string[] | Array<{ label: string value: string disabled?: boolean }>`}</code>
                    
                </p>
            },
            {
                show: <div>
                        <div>
                        <Radio.Group defaultValue="a" buttonStyle="solid">
                            <Radio.Button value="a">Hangzhou</Radio.Button>
                            <Radio.Button value="b">Shanghai</Radio.Button>
                            <Radio.Button value="c">Beijing</Radio.Button>
                            <Radio.Button value="d">Chengdu</Radio.Button>
                        </Radio.Group>
                        </div>
                        <div style={{ marginTop: 16 }}>
                        <Radio.Group defaultValue="c" buttonStyle="solid">
                            <Radio.Button value="a">Hangzhou</Radio.Button>
                            <Radio.Button value="b" disabled>Shanghai</Radio.Button>
                            <Radio.Button value="c">Beijing</Radio.Button>
                            <Radio.Button value="d">Chengdu</Radio.Button>
                        </Radio.Group>
                        </div>
                    </div>,
                title:'填底的按钮样式',
                code: <p>实色填底的单选按钮样式。 <br/>
                    <code>buttonStyle</code> <br/>
                    <code>RadioButton</code> 的风格样式，目前有描边和填色两种风格 <code>outline | solid</code> <br/>
                    <code>size</code>  	大小，只对按钮样式生效 <br/>
                    <code> large | default | small </code>
                </p>

            }
        ];
        let right = [
            {
                show: <div>
                        <Radio defaultChecked={false} disabled={this.state.disabled}>Disabled</Radio>
                        <br />
                        <Radio defaultChecked disabled={this.state.disabled}>Disabled</Radio>
                        <div style={{ marginTop: 20 }}>
                        <Button type="primary" onClick={()=>{
                            this.setState({
                                disabled: !this.state.disabled,
                            })
                        }}>
                            Toggle disabled
                        </Button>
                        </div>
                    </div>,
                title:'不可用',
                code: <p>不可用</p>
            },
            {
                show:<RadioGroup onChange={(e)=>{
                    this.setState({
                        value4:e.target.value4
                    })
                }} value={this.state.value4}>
                        <Radio style={radioStyle} value={1}>Option A</Radio>
                        <Radio style={radioStyle} value={2}>Option B</Radio>
                        <Radio style={radioStyle} value={3}>Option C</Radio>
                        <Radio style={radioStyle} value={4}>
                        More...
                        {this.state.value4 === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                        </Radio>
                    </RadioGroup>,
                title:'RadioGroup 垂直',
                code: <p>垂直的 <code>RadioGroup</code> ，配合更多输入框选项。</p>
            },
            {
                show: <div>
                        <div>
                        <RadioGroup defaultValue="a">
                            <RadioButton value="a">Hangzhou</RadioButton>
                            <RadioButton value="b">Shanghai</RadioButton>
                            <RadioButton value="c">Beijing</RadioButton>
                            <RadioButton value="d">Chengdu</RadioButton>
                        </RadioGroup>
                        </div>
                        <div style={{ marginTop: 16 }}>
                        <RadioGroup defaultValue="a">
                            <RadioButton value="a">Hangzhou</RadioButton>
                            <RadioButton value="b" disabled>Shanghai</RadioButton>
                            <RadioButton value="c">Beijing</RadioButton>
                            <RadioButton value="d">Chengdu</RadioButton>
                        </RadioGroup>
                        </div>
                        <div style={{ marginTop: 16 }}>
                        <RadioGroup disabled defaultValue="a">
                            <RadioButton value="a">Hangzhou</RadioButton>
                            <RadioButton value="b">Shanghai</RadioButton>
                            <RadioButton value="c">Beijing</RadioButton>
                            <RadioButton value="d">Chengdu</RadioButton>
                        </RadioGroup>
                        </div>
                    </div>,
                title:'按钮样式',
                code: <p>按钮样式的单选组合。</p>
            }
        ];
        return (
            <Common left={left} right={right}/>
        )
    }
}

export default radio
