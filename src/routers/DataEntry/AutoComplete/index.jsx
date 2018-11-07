import React, {Component} from 'react'
import {Row,Col,AutoComplete,Input} from 'antd'
import {observable} from 'mobx'
import {observer} from 'mobx-react'

const Option = AutoComplete.Option;
const {TextArea} = Input;
@observer
class componentName extends Component {
    @observable data = [[],[],[],['Burns Bay Road', 'Downing Street', 'Wall Street']];
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
        let children = this.data[1].map((el,i)=>{
            return <Option key={el}> {el} </Option>
        })
        let left = [
            {
                title:'基本使用',
                show: <AutoComplete 
                    dataSource={this.data[0]}
                    style={{ width: 200 }}
                    onSearch={(value)=>{
                        this.data[0] = !value ? [] : [
                            value,
                            value + value,
                            value + value + value,
                        ]
                    }}
                    placeholder="input here"
                />,
                code: <p> 基本使用。通过 <code>dataSource</code> 设置自动完成的数据源</p>
            },
            {
                title:'自定义输入组件',
                show: <AutoComplete
                    dataSource={this.data[2]}
                    style={{ width: 200 }}
                    onSearch={(value)=>{
                        this.data[2] = !value ? [] : [
                            value,
                            value + value,
                            value + value + value,
                        ]
                    }}
                >
                    <TextArea
                    placeholder="input here"
                    className="custom"
                    style={{ height: 50 }}
                    />
                </AutoComplete>,
                code: <p>自定义输入组件。</p>
            },
            {
                title:'查询模式',
                show:'',
                code: <p>查询模式: 确定类目   </p>
            }
        ];
        let right = [
            {
                title:'自定义选项',
                show: <AutoComplete
                    style={{ width: 200 }}
                    onSearch={(value)=>{
                        this.data[1] = ['gmail.com', '163.com', 'qq.com'].map(el=>{
                            return `${value}${el}`
                        })
                    }}
                    placeholder="input here"
                >
                    {children}
                </AutoComplete>
            },
            {
                title:'不区分大小写',
                show: <AutoComplete
                        style={{ width: 200 }}
                        dataSource={this.data[3]}
                        placeholder="try to type `b`"
                        filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                    />
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

export default componentName
