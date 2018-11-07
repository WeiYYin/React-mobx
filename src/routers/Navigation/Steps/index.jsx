import React, {Component} from 'react'
import {Steps,Icon,Button,message,Popover} from 'antd'
import {observable} from 'mobx'
import {observer} from "mobx-react"



const Step = Steps.Step;
@observer
class steps extends Component {
    @observable current = 0;
    render() {
        let code = (show,code,title,i)=>{
            return <section className='Button_box' key={i}>
                <section className='Show_button'>
                    {show}
                </section>
                <section className='Code_box'>
                    <div className='Code_title'> <span>{title}</span> </div>
                    {!!code?code:''}
                </section>
            </section>
        }
        let list = [
            {
                title:'步骤条',
                show:<Steps current={1}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>,
                code: <p>简单的步骤条。</p>
            },
            {
                title:'迷你版',
                show: <Steps size="small" current={1}>
                    <Step title="Finished" />
                    <Step title="In Progress" />
                    <Step title="Waiting" />
                </Steps>,
                code: <p>迷你版的步骤条，通过设置 <code> {`<Steps size="small">`} </code> 启用. <code> default</code>  <code>small</code> </p>
            },
            {
                title:"带图标的步骤条",
                show:<Steps>
                    <Step status="finish" title="Login" icon={<Icon type="user" />} />
                    <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
                    <Step status="process" title="Pay" icon={<Icon type="loading" />} />
                    <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
                </Steps>,
                code: <p>通过设置 <code>Steps.Step </code> 的 <code>icon</code> 属性，可以启用自定义图标。</p>
            },
            {
                title:'步骤切换',
                show: <div>
                    <Steps size="small" current={this.current}>
                        <Step title="Finished" />
                        <Step title="In Progress" />
                        <Step title="Waiting" />
                    </Steps>
                    <div style={{height:'100px',lineHeight:'100px','background':'#ebedf0','margin':'20px 0','textAlign':'center'}}>
                        {this.current}
                    </div>
                    <div style={{marginTop:'20px'}}>
                        {
                            this.current<2  && <Button onClick={()=>{
                                this.current++;
                            }}>Next</Button>
                        }
                        {
                            this.current === 2 && <Button onClick={()=>{
                                message.info('not anymore');
                            }}>Done</Button>
                        }
                        {
                            this.current>0  && <Button onClick={()=>{
                                this.current--;
                            }}>Prev</Button>
                        }
                        {
                            this.current === 0 && <Button onClick={()=>{
                                message.info('not anymore');
                            }}>Done</Button>
                        }
                    </div>
                </div>,
                code: <p>通常配合内容及按钮使用，表示一个流程的处理进度。</p>
            },
            {
                title:'竖直方向的步骤条',
                show:<Steps direction="vertical" size="small" current={1}>
                        <Step title="Finished" description="This is a description." />
                        <Step title="In Progress" description="This is a description." />
                        <Step title="Waiting" description="This is a description." />
                    </Steps>,
                code: <p>简单的竖直方向的小型步骤条。 设置方向 <code>direction</code> 取值 <code>horizontal</code> <code>vertical</code> </p>
            },
            {
                title:'步骤条运行错误',
                show: <Steps current={1} status="error">
                    <Step title="Finished" description="This is a description" />
                    <Step title="In Process" description="This is a description" />
                    <Step title="Waiting" description="This is a description" />
                </Steps>,
                code: <p>使用 <code>Steps</code> 的 <code>status</code> 属性来指定当前步骤的状态。 <code>wait process finish error</code> 默认 <code>process</code>  </p>
            },
            {
                title:'点状步骤条',
                show: <Steps progressDot current={1}>
                        <Step title="Finished" description="This is a description." />
                        <Step title="In Progress" description="This is a description." />
                        <Step title="Waiting" description="This is a description." />
                    </Steps>,
                code: <p>包含步骤点的进度条。 <code>progressDot</code> 点状步骤条，可以设置为一个 function,labelPlacement 将强制为vertical </p>
            },
            {
                title:'自定义点状步骤条',
                show: <Steps current={1} progressDot={(dot, { status, index }) => (
                        <Popover content={<span>step {index} status: {status}</span>}>
                            {dot}
                        </Popover>
                    )}>
                    <Step title="Finished" description="You can hover on the dot." />
                    <Step title="In Progress" description="You can hover on the dot." />
                    <Step title="Waiting" description="You can hover on the dot." />
                    <Step title="Waiting" description="You can hover on the dot." />
                </Steps>,
                code: <p>为点状步骤条增加自定义展示。</p>
            }
        ];
        return (
            <section className='Section_box'>
                {
                    list.map((el,i)=>{
                        return code(el.show,el.code,el.title,i)
                    })
                }
            </section>
        )
    }
}

export default steps
