import React, {Component} from 'react'
import {Row,Col,Checkbox,Button} from 'antd'


const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];
const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
];
class checkbox extends Component {
    constructor(props){
        super(props)
        this.state={
            check:true,
            disabled:false,
            indeterminate:true,
            checkedList:defaultCheckedList,
            checkAll:false,
        }
    }
    render() {
        let onChange = (e)=>{
            console.log(`checked = ${e.target.checked}`);
        }
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
        const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`;
        let left = [
            {
                title:'基本',
                show: <Checkbox onChange={onChange}>Checkbox</Checkbox>,
                code: <p>简单的 checkbox。</p>
            },
            {
                title:'受控的Checkbox',
                show: <div>
                    <Checkbox style={{margin:'20px'}} checked={this.state.checked} disabled={this.state.disabled}>{label}</Checkbox>
                    <br/>
                    <Button
                        type="primary"
                        size="small"
                        onClick={()=>{
                            this.setState({
                                checked:!this.state.checked,
                            })
                        }}
                    >
                        {!this.state.checked ? 'Check' : 'Uncheck'}
                    </Button>
                    <Button
                        style={{ marginLeft: '10px' }}
                        type="primary"
                        size="small"
                        onClick={()=>{
                            this.setState({
                                disabled:!this.state.disabled,
                            })
                        }}
                    >
                        {!this.state.disabled ? 'Disable' : 'Enable'}
                    </Button>
                </div>,
                code: <p>联动 checkbox。 通过 <code>checked</code> 和 <code>disabled</code> 修改 </p>
            },
            {
                title:'全选',
                show: <div>
                    <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                        <Checkbox
                            indeterminate={this.state.indeterminate}
                            onChange={(e) => {
                                this.setState({
                                    checkedList: e.target.checked ? plainOptions : [],
                                    indeterminate: false,
                                    checkAll: e.target.checked,
                                });
                            }}
                            checked={this.state.checkAll}
                        >
                            Check all
                        </Checkbox>
                    </div>
                    <br />
                    <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={(checkedList) => {
                    this.setState({
                        checkedList,
                        indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
                        checkAll: checkedList.length === plainOptions.length,
                        });
                    }} />
                </div>,
                code: <p>在实现全选效果时，你可能会用到 <code>indeterminate</code> 属性。  <code>indeterminate</code> 设置 indeterminate 状态，只负责样式控制</p>
            }
        ];
        let right = [
            {
                title:'不可用',
                show: <div>
                    <Checkbox defaultChecked={false} disabled />
                    <br />
                    <Checkbox defaultChecked disabled />
                </div>,
                code: <p>checkbox 不可用。 <code>disabled</code></p>
            },
            {
                title:'Checkbox 组',
                show: <div>
                    <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
                    <br /><br />
                    <CheckboxGroup options={options} defaultValue={['Pear']} onChange={onChange} />
                    <br /><br />
                    <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={onChange} />
                </div>,
                code: <p>方便的从数组生成 Checkbox 组。<code>{`const CheckboxGroup = Checkbox.Group;`}</code> </p>
            },
            {
                title:'布局',
                show: <Checkbox.Group style={{ width: '100%' }} onChange={(checkedValues)=>{
                        console.log('checked = ', checkedValues);
                    }}>
                    <Row>
                        <Col span={8}><Checkbox value="A">A</Checkbox></Col>
                        <Col span={8}><Checkbox value="B">B</Checkbox></Col>
                        <Col span={8}><Checkbox value="C">C</Checkbox></Col>
                        <Col span={8}><Checkbox value="D">D</Checkbox></Col>
                        <Col span={8}><Checkbox value="E">E</Checkbox></Col>
                    </Row>
                </Checkbox.Group>,
                code: <p>Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。</p>
            }
        ];
        return (
            <section className='Section_box'>
                <Row gutter={10}>
                    <Col span={12}>
                        {
                            left.map((el,i)=>{
                                return code(el.show,el.code,el.title,i);
                            })
                        }
                    </Col>
                    <Col span={12}>
                        {
                            right.map((el,i)=>{
                                return code(el.show,el.code,el.title,i);
                            })
                        }
                    </Col>
                </Row>
            </section>
        )
    }
}

export default checkbox
