import React, {Component} from 'react'
import {Row,Col} from 'antd'
import './index.less'


class grid extends Component {
    
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
                show:   <Row>
                            <Col span={12}> <div className='C_item'>col-12</div> </Col>
                            <Col span={12}><div className='C_item'>col-12</div></Col>
                            <Col span={8}><div className='C_item'>col-8</div></Col>
                            <Col span={8}><div className='C_item'>col-8</div></Col>
                            <Col span={8}><div className='C_item'>col-8</div></Col>
                            <Col span={6}><div className='C_item'>col-6</div></Col>
                            <Col span={6}><div className='C_item'>col-6</div></Col>
                            <Col span={6}><div className='C_item'>col-6</div></Col>
                            <Col span={6}><div className='C_item'>col-6</div></Col>
                        </Row>,
                code:   <code>
                            从堆叠到水平排列。<br/>
                            使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。
                        </code>,
                title:'基础栅格',
            },
            {
                show:<Row gutter={16}>
                        <Col span={6}> <div className='C_item'>col-6</div> </Col>
                        <Col span={6}>  <div className='C_item'>col-6</div> </Col>
                        <Col span={6}>  <div className='C_item'>col-6</div> </Col>
                        <Col span={6}>  <div className='C_item'>col-6</div> </Col>
                    </Row>,
                code:<p>
                    栅格常常需要和间隔进行配合，你可以使用 <code>Row</code> 的 <code>gutter</code> 属性，我们推荐使用 <code>(16+8n)px</code> 作为栅格间隔。<br/>(n 是自然数)  如果要支持响应式，可以写成 <code>{`{ xs: 8, sm: 16, md: 24, lg: 32 }`}</code>。
                </p>,
                title:'区块间隔',
            },
            {
                title:'左右偏移',
                show:<Row>
                        <Col span={8}> <div className='C_item'> col-8 </div> </Col>
                        <Col span={8} offset={8}><div className='C_item'> col-8 col-offset-8 </div></Col>

                        <Col span={6} offset={6}> <div className='C_item'> col-6 col-offset-6 </div> </Col>
                        <Col span={6} offset={6}> <div className='C_item'> col-6 col-offset-6 </div> </Col>
                        <Col span={12} offset={6}> <div className="C_item"> col-12 col-offset-6 </div> </Col>
                    </Row>,
                code: <p>
                    列偏移。 <br/>
                    使用 <code>offset</code> 可以将列向右侧偏。例如，<code> {`offset={4}`} </code> 将元素向右侧偏移了 4 个列（column）的宽度。
                </p>
            },
            {
                title:'栅格排序',
                show:<Row>
                        <Col span={18} push={6}> <div className='C_item'>col-18 col-push-6</div> </Col>
                        <Col span={6} pull={18}> <div className='C_item'>col-6 col-pull-18</div> </Col>
                    </Row>,
                code: <p>
                        列排序。 <br/>
                        通过使用 <code>push</code> 和 <code>pull</code> 类就可以很容易的改变列（column）的顺序。
                    </p>,
            },
            {
                title:'flex布局',
                show:<div>
                    <p>sub-element align left</p>
                    <Row type="flex" justify="start">
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                    </Row>
                    
                    <p>sub-element align center</p>
                    <Row type="flex" justify="center">
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                    </Row>

                    <p>sub-element align right</p>
                    <Row type="flex" justify="end">
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                    </Row>

                    <p>sub-element justify space-between</p>
                    <Row type="flex" justify="space-between">
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                    </Row>

                    <p>sub-element justify space-around</p>
                    <Row type="flex" justify="space-around">
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                    </Row>
                </div>,
                code: <p>
                    Flex 布局基础。 <br/>
                    使用 <code>row-flex</code> 定义 <code>flex</code> 布局，其子元素根据不同的值 <code>start,center,end,space-between,space-around，</code> 分别定义其在父节点里面的排版方式。
                </p>
            },
            {
                title:'flex对齐',
                show:<div className='Align'>
                    <p>Align Top</p>
                    <Row type="flex" justify="center" align="top">
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                    </Row>

                    <p>Align Center</p>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                    </Row>

                    <p>Align Bottom</p>
                    <Row type="flex" justify="space-between" align="bottom">
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                        <Col span={4}><div className='C_item'>col-4</div></Col>
                    </Row>
                </div>,
                code: <p>
                    Flex 子元素垂直对齐。
                </p>
            },
            {
                title:'Flex 排序',
                show:<Row type="flex">
                    <Col span={6} order={4}> <div className='C_item'>1 col-order-4</div> </Col>
                    <Col span={6} order={3}><div className='C_item'>2 col-order-3</div></Col>
                    <Col span={6} order={2}><div className='C_item'>3 col-order-2</div></Col>
                    <Col span={6} order={1}><div className='C_item'>4 col-order-1</div></Col>
                </Row>,
                code: <p>
                    通过 Flex 布局的 Order 来改变元素的排序。
                </p>
            },
            {
                title:'响应式布局',
                show:<Row>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}> <div className='C_item'>Col</div> </Col>
                    <Col xs={20} sm={16} md={12} lg={8} xl={4}><div className='C_item'>Col</div></Col>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}><div className='C_item'>Col</div></Col>
                </Row>,
                code: <p>
                    参照 Bootstrap 的 响应式设计，预设六个响应尺寸：<code>xs sm md lg xl  xxl</code> 。
                </p>,
            },
        ]
        return (
            <section className='Section_box'>
                {
                    list.map((el,i)=>{
                        return code(el.show,el.code,el.title,i);
                    })
                }

            </section>
        )
    }
}


export default grid
