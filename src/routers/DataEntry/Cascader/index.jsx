import React, {Component} from 'react'
import {Row,Col,Cascader,Button} from 'antd'
import {data1,data2,data3,data4} from './data'

class cascader extends Component {
    constructor(props){
        super(props);
        this.state={
            text:'Unselect',
            options: [{
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    isLeaf: false,
                }, {
                    value: 'jiangsu',
                    label: 'Jiangsu',
                    isLeaf: false,
                }],
        }
    }
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
        let size = ['large','default','small'];
        let left = [
            {
                title:'基本',
                show: <Cascader options={data1} onChange={(v)=>{console.log(v);
                }} placeholder="Please select" />,
                code: <p>省市区级联。</p>
            },
            {
                title:'可自定义显示',
                show: <span>
                    {this.state.text}
                    &nbsp;
                    <Cascader options={data1} onChange={(v,s)=>{
                        this.setState({
                            text: s.map(o => o.label).join(', '),
                        });
                    }}>
                    <Button>Change city</Button>
                    </Cascader>
                </span>,
                code: <p>切换按钮和结果分开。</p>
            },
            {
                title:'禁用选项',
                show: <Cascader options={data2} onChange={()=>{}} />,
                code: <p>通过指定 options 里的 <code>disabled</code> 字段。</p>
            },
            {
                title:'大小',
                show: <div>
                    {
                        size.map((el,i)=>{
                            return <div key={i} style={{margin:'10px 0'}}><Cascader size={el} options={data1} /></div>
                        })
                    }
                </div>,
                code: <p>不同大小的级联选择器。</p>
            },
            {
                title:'搜索',
                show: <Cascader
                    options={data1}
                    onChange={()=>{}}
                    placeholder="Please select"
                    showSearch={(inputValue, path)=>{
                        return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
                    }}
                />,
                code: <p>可以直接搜索选项并选择。 <br/> <code>Cascader[showSearch]</code> 暂不支持服务端搜索 <br/>  
                        <code>some</code> 方法 方法用于检测数组中的元素是否满足指定条件（函数提供） <br/>
                        <code>some()</code> 方法会依次执行数组的每个元素： <br/>
                        如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。 <br/>
                        如果没有满足条件的元素，则返回false。 </p>
            }
        ];
        let right = [
            {
                title:'默认值',
                show:<Cascader defaultValue={['zhejiang', 'hangzhou', 'xihu']} style={{width:'300px'}} options={data1} onChange={(v)=>{console.log(v)}} />,
                code: <p>默认值通过数组的方式指定。</p>
            },
            {
                title:'移入显示',
                show:<Cascader
                    options={data1}
                    expandTrigger="hover"
                    displayRender={(l)=>{
                        return l[l.length - 1]
                    }}
                    onChange={(v)=>{console.log(v)}}
                />,
                code: <p>通过移入展开下级菜单，点击完成选择。<code>displayRender</code> 选择展示后的渲染函数 </p>
            },
            {
                title:'选择即改变',
                show: <Cascader options={data1} onChange={()=>{}} changeOnSelect style={{width:'300px'}}/>,
                code: <p>这种交互允许只选中父级选项。 <code>changeOnSelect</code> 当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示 </p>
            },
            {
                title:'自定义选项',
                show: <Cascader
                    options={data3}
                    defaultValue={['zhejiang', 'hangzhou', 'xihu']}
                    displayRender={(labels, selectedOptions) => labels.map((label, i) => {
                        const option = selectedOptions[i];
                        if (i === labels.length - 1) {
                            return (
                            <span key={option.value}>
                                {label} (<span onClick={(e, label, option)=>{
                                    e.stopPropagation();
                                    console.log('clicked', label, option);
                                }}>{option.code}</span>)
                            </span>
                            );
                        }
                        return <span key={option.value}>{label} / </span>;
                    })}
                    style={{ width: '100%' }}
                />
            },
            {
                title:'动态加载选项',
                show: <Cascader
                    options={this.state.options}
                    loadData={(selectedOptions) => {
                        const targetOption = selectedOptions[selectedOptions.length - 1];
                        targetOption.loading = true;
                    
                        // load options lazily
                        setTimeout(() => {
                            targetOption.loading = false;
                            targetOption.children = [{
                                label: `${targetOption.label} Dynamic 1`,
                                value: 'dynamic1',
                            }, {
                                label: `${targetOption.label} Dynamic 2`,
                                value: 'dynamic2',
                            }];
                            this.setState({
                                options: [...this.state.options],
                            });
                        }, 1000);
                        }
                    }
                    changeOnSelect
                />,
                code: <p>使用 <code>loadData</code> 实现动态加载选项。 <br/>注意： <code>loadData</code> 与 <code>showSearch</code> 无法一起使用。 </p>
            },
            {
                title:'自定义字段名',
                show: <Cascader fieldNames={{ label: 'name', value: 'code', children: 'items' }} options={data4} placeholder="Please select" />,
                code: <p>自定义字段名。 <code> {`fieldNames={{ label: 'name', value: 'code', children: 'items' }}`} </code> </p>
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

export default cascader
