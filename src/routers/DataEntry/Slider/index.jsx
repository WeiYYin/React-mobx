import React, {Component} from 'react'
import { Slider, Switch,Row,Col,InputNumber,Icon } from 'antd';
import Common from '@/components/common/index'


class slider extends Component {
    constructor(props){
        super(props)
        this.state={
            disabled:false,
            inputValue:0,
            color:0,
        }
    }
    render() {
        const {disabled,inputValue,color} = this.state;
        const marks = {
            0: '0°C',
            26: '26°C',
            37: '37°C',
            100: {
                style: {
                    color: '#f50',
                },
                label: <strong>100°C</strong>,
            },
        };
        const style = {
            float: 'left',
            height: 300,
            marginLeft: 70,
        };
        let rgb = `hsl(${color},80%,60%)`;
        let left = [
            {
                show: <>
                    <Slider defaultValue={30} disabled={disabled} />
                    <Slider range defaultValue={[20, 50]} disabled={disabled} />
                    Disabled: <Switch size="small" checked={disabled} onChange={()=>{
                        this.setState({
                            disabled:!this.state.disabled,
                        })
                    }} />
                </>,
                title:'Base',
                code: <p>
                    基本滑动条。当 <code>range</code> 为 <code>true</code> 时，渲染为双滑块。当 <code>disabled</code> 为 <code>true</code> 时，滑块处于不可用状态。
                </p>,
            },
            {
                show: <Row>
                    <Col span='3' style={{textAlign:'center',lineHeight:'36px'}}>
                        <Icon type='android' style={{fontSize:16,color:rgb}}/>
                    </Col>
                    <Col span='18'>
                        <Slider min={0} max={360} value={color} onChange={(v)=>{
                            this.setState({color:v,})
                        }}/>
                    </Col>
                    <Col span='3'  style={{textAlign:'center',lineHeight:'36px'}}>
                        <Icon type='apple'  style={{fontSize:16,color:rgb}}/>
                    </Col>
                </Row>,
                title:'带 Icon 的滑块',
                code: <p>滑块左右可以设置图标来表达业务含义。</p>
            },
            {
                show: <>
                    <Slider onChange={(v)=>{
                        
                    }}/>
                    <Slider onChange={(v)=>{
                        
                    }}/>
                </>,
                title:'事件',
                code: <p>当 <code>Slider</code> 的值发生改变时，会触发 <code>onChange</code> 事件，并把改变后的值作为参数传入。在 <code>onmouseup</code> 时，会触发 <code>onAfterChange</code> 事件，并把当前值作为参数传入。</p>
            },
            {
                show: <div style={{ height: 300 }}>
                    <div style={style}>
                        <Slider vertical defaultValue={30} />
                    </div>
                    <div style={style}>
                        <Slider vertical range step={10} defaultValue={[20, 50]} />
                    </div>
                    <div style={style}>
                        <Slider vertical range marks={marks} defaultValue={[26, 37]} />
                    </div>
                </div>,
                title: '垂直方向',
                code: <p>垂直方向的 Slider。</p>
            },
        ];
        let right = [
            {
                show:<Row>
                        <Col span={12}>
                            <Slider
                                min={1}
                                max={20}
                                onChange={(v)=>{
                                    this.setState({
                                        inputValue:v,
                                    })
                                }}
                                value={typeof inputValue === 'number' ? inputValue : 0}
                            />
                        </Col>
                        <Col span={4}>
                            <InputNumber
                                min={1}
                                max={20}
                                style={{ marginLeft: 16 }}
                                value={inputValue}
                                onChange={(v)=>{
                                    this.setState({
                                        inputValue:v,
                                    })
                                }}
                            />
                        </Col>
                    </Row>,
                title:'与输入框结合',
                code: <p>和 数字输入框 组件保持同步。</p>
            },
            {
                show: <> <Slider tipFormatter={(v)=>{
                    return `${v}%`
                }}/> <Slider tipFormatter={null}/> </>,
                title:'自定义提示',
                code: <p>使用 <code>tipFormatter</code> 可以格式化 <code>Tooltip</code> 的内容，设置 <code>tipFormatter</code> = {`{null}`}，则隐藏 <code>Tooltip</code> 。</p>
            },
            {
                show: <>
                    <div>
                        <h4>included=true</h4>
                        <Slider marks={marks} defaultValue={37} />
                        <Slider range marks={marks} defaultValue={[26, 37]} />
                        <h4>included=false</h4>
                        <Slider marks={marks} included={false} defaultValue={37} />
                        <h4>marks & step</h4>
                        <Slider marks={marks} step={10} defaultValue={37} />
                        <h4>step=null</h4>
                        <Slider marks={marks} step={null} defaultValue={37} />
                    </div>
                </>,
                title:'带标签的滑块',
                code: <p> 
                    使用 <code>marks</code> 属性标注分段式滑块，使用 <code>value / defaultValue</code> 指定滑块位置。当 <code>included=false</code> 时，表明不同标记间为并列关系。当 <code>step=null</code> 时， <code>Slider</code> 的可选值仅有 <code>marks</code> 标出来的部分。
                </p>
            }
        ];
        return (
            <div>
                <Common right={right} left={left}/>
            </div>
        )
    }
}

export default slider
