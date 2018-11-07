import React, {Component} from 'react'
import { Mention,Row,Col,Avatar,Form,Button,Popover  } from 'antd';

const { toString, toContentState,getMentions } = Mention;
const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];
const tags = ['1.0', '2.0', '3.0'];
const Nav = Mention.Nav;
const FormItem = Form.Item;
const webFrameworks = [
    { name: 'React', type: 'JavaScript' },
    { name: 'Angular', type: 'JavaScript' },
    { name: 'Laravel', type: 'PHP', disabled: true },
    { name: 'Flask', type: 'Python' },
    { name: 'Django', type: 'Python' },
];
const webFrameworksOne = [
    { name: 'React', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg' },
    { name: 'Angular', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png' },
    { name: 'Dva', type: 'Javascript', icon: 'https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png' },
    { name: 'Flask', type: 'Python', icon: 'https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png' },
];
class form extends Component{
    constructor(props){
        super(props)
        this.state={
            initValue: toContentState('@afc163'),
        }
    }
    handleReset = (e) => {
        e.preventDefault();
        this.props.form.resetFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((errors, values) => {
            if (errors) {
            console.log('Errors in the form!!!');
            return;
            }
            console.log('Submit!!!');
            console.log(values);
        });
    }

    checkMention = (rule, value, callback) => {
        const { getFieldValue } = this.props.form;
        const mentions = getMentions(getFieldValue('mention'));
        if (mentions.length < 2) {
            callback(new Error('More than one must be selected!'));
        } else {
            callback();
        }
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            
            <Form layout="horizontal">
                <FormItem
                    id="control-mention"
                    label="Top coders"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    >
                        {getFieldDecorator('mention', {
                            rules: [
                            { validator: this.checkMention },
                            ],
                            initialValue: this.state.initValue,
                        })(
                            <Mention
                            suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
                            />
                        )}
                    </FormItem>
                    <FormItem wrapperCol={{ span: 14, offset: 6 }}>
                    <Button type="primary" onClick={this.handleSubmit}>Submit</Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button onClick={this.handleReset}>Reset</Button>
                </FormItem>
            </Form>
        )
    }
}
const Gform = Form.create()(form);
class index extends Component {
    constructor(props){
        super(props)
        this.state={
            suggestions:[],
            loading:false,
            suggestionsOne:[],
            suggestionsTwo:[],
            suggestionsThree:[],
        }
    }
    fetchSuggestions = (value, callback) => {
        setTimeout(() => {
            callback(users.filter(item => item.indexOf(value) !== -1));
        }, 500);
    }
    
    render() {
        
        const { suggestions, loading,suggestionsOne,suggestionsTwo } = this.state;
        let code = (show, code, title, i) => {
            return <section className='Button_box' key={i}>
                <section className='Show_button'>
                    {show}
                </section>
                <section className='Code_box'>
                    <div className='Code_title'>
                        <span>{title}</span>
                    </div>
                    {!!code
                        ? code
                        : ''}
                </section>
            </section>
        }
        const mention = (
            <Mention
                ref={ele => this.mention = ele}
                style={{ width: '100%' }}
                onChange={(v)=>{console.log(toString(v));}}
                defaultValue={toContentState('@afc163')}
                suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
                onSelect={(v)=>{console.log(v);}}
                getSuggestionContainer={()=>{return this.popover.getPopupDomNode();}}
            />
        )
        let left = [
            {
                show: <Mention
                    style={{ width: '100%' }}
                    defaultValue={toContentState('@afc163')}
                    suggestions={users}
                />,
                title:'基本使用',
                code: <p>基本使用 <br/> <code>toString</code> 把 <code>ContentState</code> 转成字符串 <br/>
                    <code>toContentState</code> 把字符串转成 <code>ContentState</code>
                </p>,
            },
            {
                show: <Mention
                    style={{ width: '100%' }}
                    suggestions={users}
                    placement="top"
                />,
                title:'展开方位',
                code: <p> <code>placement</code> 建议框位置，可选 <code>top</code> <code > 默认 bottom</code>   </p>
            },
            {
                show: <Mention
                    style={{ width: '100%' }}
                    suggestions={suggestionsTwo}
                    onSearchChange={(value)=>{
                        const searchValue = value.toLowerCase();
                        const filtered = webFrameworksOne.filter(item => item.name.toLowerCase().indexOf(searchValue) !== -1
                        );
                        const suggestionsTwo = filtered.map(suggestion => (
                        <Nav
                            value={suggestion.name}
                            data={suggestion}
                            disabled={suggestion.disabled}
                        >
                            <Avatar
                                src={suggestion.icon}
                                size="small"
                                style={{ width: 14, height: 14, marginRight: 8, top: -1, position: 'relative' }}
                            />
                            {suggestion.name} - {suggestion.type}
                        </Nav>
                        ));
                        this.setState({ suggestionsTwo });
                    }}
                />,
                title:'头像',
                code: <p>自定义建议（含头像） <br/>
                注意，自定义建议时， <code>onSearchChange</code> 必须不能为空。</p>
            },
            {
                show: <Mention
                    style={{ width: '100%', height: 100 }}
                    onChange={(v)=>{ console.log(toString(v));}}
                    suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}
                    multiLines
                />,
                title:'多行输入',
                code: <p>多行模式，多行模式必须指定高度。</p>
            },
            {
                show: <Mention
                    style={{ width: '100%' }}
                    onChange={(v)=>{console.log(toString(v))}}
                    placeholder="input @ to mention people, # to mention tag"
                    prefix={['@', '#']}
                    onSearchChange={(value,trigger)=>{
                        console.log('onSearchChange', value, trigger);
                        const dataSource = trigger === '@' ? users : tags;
                        this.setState({
                            suggestionsThree: dataSource.filter(item => item.indexOf(value) !== -1),
                        });
                    }}
                    placement='top'
                    suggestions={this.state.suggestionsThree}
                    onSelect={(v)=>{console.log(v)}}
                />,
                title:'自定义触发字符',
                code: <p>通过 <code>prefix</code> 属性自定义触发字符。默认为 <code>@</code> , 可以定义为数组。</p>
            }
        ];
        let right = [
            {
                show: <Mention
                    style={{ width: '100%' }}
                    loading={loading}
                    suggestions={suggestions}
                    onSearchChange={(value)=>{
                        this.fetchSuggestions(value, (suggestions) => {
                            this.setState({
                                suggestions,
                                loading: false,
                            });
                        });
                        this.setState({
                            loading: true,
                        });
                    }}
                />,
                title:'异步加载',
                code: <p>匹配内容列表为异步返回时。</p>
            },
            {
                show: <Mention
                    placeholder="@someone"
                    style={{ width: '100%' }}
                    suggestions={suggestionsOne}
                    onSearchChange={(value)=>{
                        const searchValue = value.toLowerCase();
                        const filtered = webFrameworks.filter(item => item.name.toLowerCase().indexOf(searchValue) !== -1
                        );
                        const suggestionsOne = filtered.map(suggestion => (
                        <Nav
                            value={suggestion.name}
                            data={suggestion}
                        >
                            <span>{suggestion.name} - {suggestion.type}</span>
                        </Nav>
                        ));
                        this.setState({ suggestionsOne });
                    }}
                />,
                title:'自定义建议',
                code: <p>自定义建议 <br/>
                注意，自定义建议时， <code>onSearchChange</code> 必须不能为空。</p>
            },
            {
                show: <Gform/>,
                title:'配合 Form 使用',
                code: <p>受控模式，例如配合 <code>Form</code> 使用。</p>
            },
            {
                show: <Popover
                    trigger="click"
                    content={mention}
                    title="Title"
                    ref={popover => this.popover = popover}
                    onVisibleChange={(visible)=>{
                        if (visible && this.mention) {
                            this.mention.focus();
                        }
                    }}
                >
                    <Button type="primary">Click Me</Button>
                </Popover>,
                title:'建议渲染父节点',
                code: <p>指定提示渲染的父节点。</p>
            }
        ];
        return (
            <section className='Section_box'>
                <Row gutter={10}>
                    <Col span={12}>
                        {
                            left.map((el, i) => {
                                return code(el.show, el.code, el.title, i);
                            })
                        }
                    </Col>
                    <Col span={12}>
                        {
                            right.map((el, i) => {
                                return code(el.show, el.code, el.title, i);
                            })
                        }
                    </Col>
                </Row>
            </section>
        )
    }
}

export default index
