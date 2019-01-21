import React, {Component} from 'react'
import Code from "../Code/index"
import {Row,Col} from 'antd'

class Common extends Component {
    render() {
        let {left,right} = this.props;
        let col = {
            left:12,right:12,
        }
        if(!!!right&&right.length<1){
            col = {left:24,right:0}
        }
        return (
            <section className='Section_box'>
                <Row gutter={10}>
                    <Col span={col.left}>
                        {
                            left.map((el, i) => {
                                return <Code show={el.show} code={el.code} title={el.title} key={i}></Code>
                            })
                        }
                    </Col>
                    <Col span={col.right}>
                        {
                            right.map((el, i) => {
                                return <Code show={el.show} code={el.code} title={el.title} key={i}></Code>
                            })
                        }
                    </Col>
                </Row>
            </section>
        )
    }
}

export default Common
