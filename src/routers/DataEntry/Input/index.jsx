import React, {Component} from 'react'
import {
    Input,
    Col,
    Select,
    InputNumber,
    DatePicker,
    AutoComplete,
    Cascader,
    Icon,
    Row,
    Tooltip
} from 'antd';

const InputGroup = Input.Group;
const Option = Select.Option;
const Search = Input.Search;
const {TextArea} = Input;

const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake'
                    }
                ]
            }
        ]
    }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men'
                    }
                ]
            }
        ]
    }
];
function formatNumber(value) {
    value += '';
    const list = value.split('.');
    const prefix = list[0].charAt(0) === '-'
        ? '-'
        : '';
    let num = prefix
        ? list[0].slice(1)
        : list[0];
    let result = '';
    while (num.length > 3) {
        result = `,${num.slice(-3)}${result}`;
        num = num.slice(0, num.length - 3);
    }
    if (num) {
        result = num + result;
    }
    return `${prefix}${result}${list[1]
        ? `.${list[1]}`
        : ''}`;
}

class NumericInput extends React.Component {
    onChange = (e) => {
        const {value} = e.target;
        const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            this
                .props
                .onChange(value);
        }
    }

    // '.' at the end or only '-' in the input box.
    onBlur = () => {
        const {value, onBlur, onChange} = this.props;
        if (value.charAt(value.length - 1) === '.' || value === '-') {
            onChange({
                value: value.slice(0, -1)
            });
        }
        if (onBlur) {
            onBlur();
        }
    }

    render() {
        const {value} = this.props;
        const title = value
            ? (
                <span className="numeric-input-title">
                    {value !== '-'
                        ? formatNumber(value)
                        : '-'}
                </span>
            )
            : 'Input a number';
        return (
            <Tooltip
                trigger={['focus']}
                title={title}
                placement="topLeft"
                overlayClassName="numeric-input">
                <Input
                    {...this.props}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    placeholder="Input a number"
                    maxLength="25"/>
            </Tooltip>
        );
    }
}

class input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [],
            username: '',
            value: ''
        }
    }
    onChange = (value) => {
        this.setState({value});
    }
    handleChange = (value) => {
        this.setState({
            dataSource: !value || value.indexOf('@') >= 0
                ? []
                : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`]
        });
    }
    emitEmpty = () => {
        this
            .userNameInput
            .focus();
        this.setState({userName: ''});
    }
    onChangeUserName = (e) => {
        this.setState({userName: e.target.value});
    }
    render() {
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
        const selectBefore = (
            <Select
                defaultValue="Http://"
                style={{
                width: 90
            }}>
                <Option value="Http://">Http://</Option>
                <Option value="Https://">Https://</Option>
            </Select>
        );
        const selectAfter = (
            <Select defaultValue=".com" style={{
                width: 80
            }}>
                <Option value=".com">.com</Option>
                <Option value=".jp">.jp</Option>
                <Option value=".cn">.cn</Option>
                <Option value=".org">.org</Option>
            </Select>
        );
        const {userName} = this.state;
        const suffix = userName
            ? <Icon type="close-circle" onClick={this.emitEmpty}/>
            : null;
        let left = [
            {
                show: <Input placeholder="Basic usage"/>,
                title: '基本使用',
                code: <p>
                        基本使用。
                    </p>
            }, {
                show: <div>
                    <div style={{
                        marginBottom: 16
                    }}>
                        <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite"/>
                    </div>
                    <div style={{
                        marginBottom: 16
                    }}>
                        <Input
                            addonBefore={selectBefore}
                            addonAfter={selectAfter}
                            defaultValue="mysite"/>
                    </div>
                    <div style={{
                        marginBottom: 16
                    }}>
                        <Input addonAfter={< Icon type = "setting" />} defaultValue="mysite"/>
                    </div>
                </div>,
                title: '前置/后置标签',
                code: <p>用于配置一些固定组合。</p>
            }, {
                show: <div>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{
                        width: 200
                    }}/>
                    <br/><br/>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        enterButton/>
                    <br/><br/>
                    <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                        onSearch={value => console.log(value)}/>
                </div>,
                title: '搜索框',
                code: <p>带有搜索按钮的输入框</p>
            }, {
                show: <div>
                    <TextArea placeholder="Autosize height based on content lines" autosize/>
                    <div style={{
                        margin: '24px 0'
                    }}/>
                    <TextArea
                        placeholder="Autosize height with minimum and maximum number of lines"
                        autosize={{
                        minRows: 2,
                        maxRows: 6
                    }}/>
                </div>,
                title: '适应文本高度的文本框',
                code: <p>
                        <code>autosize</code>
                        属性适用于
                        <code>textarea</code>
                        节点，并且只有高度会自动变化。另外
                        <code>autosize</code>
                        可以设定为一个对象，指定最小行数和最大行数。
                    </p>
            }, {
                show: <Input
                    placeholder="Enter your username"
                    prefix={< Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                    suffix={suffix}
                    value={userName}
                    onChange={this.onChangeUserName}
                    ref={node => this.userNameInput = node}/>,
                title: '前缀/后缀',
                code: <p>在输入框上添加前缀或后缀图标。</p>
            }
        ];
        let right = [
            {
                show: <div>
                    <Input
                        size="large"
                        placeholder="large size"
                        style={{
                        width: 200,
                        margin: 20
                    }}/>
                    <Input
                        placeholder="default size"
                        style={{
                        width: 200,
                        margin: 20
                    }}/>
                    <Input
                        size="small"
                        placeholder="small size"
                        style={{
                        width: 200,
                        margin: 20
                    }}/>
                </div>,
                title: '三种大小',
                code: <p>
                        我们为
                        <code>{`<Input />`}</code>
                        输入框定义了三种尺寸（大、默认、小），高度分别为
                        <code>40px</code>
                        、
                        <code>32px</code>
                        和
                        <code>24px</code>
                        。
                    </p>
            }, {
                show: <div>
                    <InputGroup size="large">
                        <Col span={5}>
                            <Input defaultValue="0571"/>
                        </Col>
                        <Col span={8}>
                            <Input defaultValue="26888888"/>
                        </Col>
                    </InputGroup>
                    <br/>
                    <InputGroup compact>
                        <Input
                            style={{
                            width: '20%'
                        }}
                            defaultValue="0571"/>
                        <Input
                            style={{
                            width: '30%'
                        }}
                            defaultValue="26888888"/>
                    </InputGroup>
                    <br/>
                    <InputGroup compact>
                        <Select defaultValue="Zhejiang">
                            <Option value="Zhejiang">Zhejiang</Option>
                            <Option value="Jiangsu">Jiangsu</Option>
                        </Select>
                        <Input
                            style={{
                            width: '50%'
                        }}
                            defaultValue="Xihu District, Hangzhou"/>
                    </InputGroup>
                    <br/>
                    <InputGroup compact>
                        <Select defaultValue="Option1">
                            <Option value="Option1">Option1</Option>
                            <Option value="Option2">Option2</Option>
                        </Select>
                        <Input
                            style={{
                            width: '50%'
                        }}
                            defaultValue="input content"/>
                        <InputNumber/>
                    </InputGroup>
                    <br/>
                    <InputGroup compact>
                        <Input
                            style={{
                            width: '50%'
                        }}
                            defaultValue="input content"/>
                        <DatePicker/>
                    </InputGroup>
                    <br/>
                    <InputGroup compact>
                        <Select defaultValue="Option1-1">
                            <Option value="Option1-1">Option1-1</Option>
                            <Option value="Option1-2">Option1-2</Option>
                        </Select>
                        <Select defaultValue="Option2-2">
                            <Option value="Option2-1">Option2-1</Option>
                            <Option value="Option2-2">Option2-2</Option>
                        </Select>
                    </InputGroup>
                    <br/>
                    <InputGroup compact>
                        <Select defaultValue="1">
                            <Option value="1">Between</Option>
                            <Option value="2">Except</Option>
                        </Select>
                        <Input
                            style={{
                            width: 100,
                            textAlign: 'center'
                        }}
                            placeholder="Minimum"/>
                        <Input
                            style={{
                            width: 30,
                            borderLeft: 0,
                            pointerEvents: 'none',
                            backgroundColor: '#fff'
                        }}
                            placeholder="~"
                            disabled/>
                        <Input
                            style={{
                            width: 100,
                            textAlign: 'center',
                            borderLeft: 0
                        }}
                            placeholder="Maximum"/>
                    </InputGroup>
                    <br/>
                    <InputGroup compact>
                        <Select defaultValue="Sign Up">
                            <Option value="Sign Up">Sign Up</Option>
                            <Option value="Sign In">Sign In</Option>
                        </Select>
                        <AutoComplete
                            dataSource={this.state.dataSource}
                            style={{
                            width: 200
                        }}
                            onChange={this.handleChange}
                            placeholder="Email"/>
                    </InputGroup>
                    <br/>
                    <InputGroup compact>
                        <Select
                            style={{
                            width: '30%'
                        }}
                            defaultValue="Home">
                            <Option value="Home">Home</Option>
                            <Option value="Company">Company</Option>
                        </Select>
                        <Cascader
                            style={{
                            width: '70%'
                        }}
                            options={options}
                            placeholder="Select Address"/>
                    </InputGroup>
                </div>,
                title: '输入框组合',
                code: <p>输入框的组合展现。
                        <br/>
                        注意：使用
                        <code>compact</code>
                        模式时，不需要通过
                        <code>Col</code>
                        来控制宽度。
                        <br/>
                        <code>compact</code>
                        是否用紧凑模式
                    </p>
            }, {
                show: <TextArea rows={4}/>,
                title: '文本域',
                code: <p>多行输入</p>
            }, {
                show: <NumericInput
                    style={{
                    width: 120
                }}
                    value={this.state.value}
                    onChange={this.onChange}/>,
                title: '输入时格式化展示',
                code: <p>结合
                        <code></code>
                        组件，实现一个数值输入框，方便内容超长时的全量展现。</p>
            }
        ];
        return (
            <section className='Section_box'>
                <Row gutter={10}>
                    <Col span={12}>
                        {left.map((el, i) => {
                            return code(el.show, el.code, el.title, i);
                        })
}
                    </Col>
                    <Col span={12}>
                        {right.map((el, i) => {
                            return code(el.show, el.code, el.title, i);
                        })
}
                    </Col>
                </Row>
            </section>
        )
    }
}

export default input
