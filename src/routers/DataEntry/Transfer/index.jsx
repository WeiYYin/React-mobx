import React, {Component} from 'react'
import {Col,Row} from 'antd';
import Code from "@/components/Code/index"
import One from './components/One'
import Two from './components/Two'
import Three from './components/Three'

export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        let left = [
            {
                show: <One/>,
                title:'基本用法',
                code: <p>
                    <code> dataSource </code> 数据源，其中的数据将会被渲染到左边一栏中，targetKeys 中指定的除外。 <br/>
                    <code> disabled </code> 是否禁用 <br/>
                    回调函数 <code>onChange </code>&nbsp;&nbsp; <code>onSelectChange </code>&nbsp;&nbsp;   <code>onScroll </code>
                </p>
            },
            {
                show: <Two />,
                title:'带搜索框的',
                code: <p>
                    带搜索框的穿梭框，可以自定义搜索函数。  <code>onSearch</code>
                </p>
            },
            {
                show: <Three />,
                title:'高级用法',
                code: <p>
                    <code> dataSource </code> 数据源 <code> showSearch </code> 显示搜索框   <br/>
                    <code>listStyle</code>  	两个穿梭框的自定义样式 <br/>
                    <code>render</code>  自定义列表渲染 
                    <code>operations</code> 操作文案集合，顺序从上至下
                    <code>targetKeys</code> 右侧已选中 选项 <br/>
                    <code>onChange</code> 选择后 回调
                    <code>footer</code> 底部渲染函数
                </p>
            }
        ];
        return (
            <section className='Section_box'>
                <Row gutter={10}>
                    <Col span={25}>
                        {left.map((el,i) => {
                            return <Code show={el.show} code={el.code} title={el.title} key={i}></Code>
                        })
}
                    </Col>
                </Row>
            </section>
        )
    }
}

export default index
