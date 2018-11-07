import React, {Component} from 'react'
import {Pagination } from 'antd'

class pagination extends Component {
    constructor(props){
        super(props);
        this.state={
            current:3,
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
        let list = [
            {
                title:'基本',
                show:<Pagination defaultCurrent={1} total={50} />,
                code: <p>基础分页。</p>
            },
            {
                title:'更多',
                show:<Pagination defaultCurrent={6} total={500} />,
                code: <p>更多分页。</p>
            },
            {
                title:'改变',
                show:<Pagination showSizeChanger onShowSizeChange={(c,s)=>{console.log(c,s);
                }} defaultCurrent={3} total={500} />,
                code: <p>改变每页显示条目数。</p>,
            },
            {
                title:'跳转',
                show: <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={(page,pagesize)=>{console.log(page,pagesize)}} />,
                code: <p>快速跳转到某一页。</p>
            },
            {
                title:'迷你',
                show:<div>
                    <Pagination size="small" total={50} />
                    <Pagination size="small" total={50} showSizeChanger showQuickJumper />
                    <Pagination size="small" total={50} showTotal={(total)=>{return `Total ${total} items`}} />
                </div>,
                code: <p>迷你版本。</p>,
            },
            {
                title: '简洁',
                show: <Pagination simple defaultCurrent={2} total={50} />,
                code: <p>简单的翻页。</p>,
            },
            {
                title:'受控',
                show:<Pagination current={this.state.current} onChange={(e)=>{this.setState({
                    current:e,
                })}} total={50} />,
                code: <p>受控制的页码。</p>
            },
            {
                title:'总数',
                show: <div>
                    <Pagination
                        total={85}
                        showTotal={total => `Total ${total} items`}
                        pageSize={20}
                        defaultCurrent={1}
                    />
                    <br />
                    <Pagination
                        total={85}
                        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                        pageSize={20}
                        defaultCurrent={1}
                    />
                </div>,
                code: <p>通过设置 <code>showTotal</code> 展示总共有多少数据。</p>
            },
            {
                title:'上一步和下一步',
                show: <Pagination total={500} itemRender={(current, type, originalElement)=>{
                    if (type === 'prev') {
                        return <span>Previous</span>;
                    } if (type === 'next') {
                        return <span>Next</span>;
                    }
                    return originalElement;
                }} />,
                code: <p>修改上一步和下一步为文字链接。</p>
            }
        ]
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

export default pagination
