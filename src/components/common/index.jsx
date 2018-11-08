import React, {Component} from 'react'
import Code from "../Code/index"
import {Row,Col} from 'antd'

class Common extends Component {
    render() {
        let {left,right} = this.props;
        return (
            <section className='Section_box'>
                <Row gutter={10}>
                    <Col span={12}>
                        {
                            left.map((el, i) => {
                                return <Code show={el.show} code={el.code} title={el.title} key={i}></Code>
                            })
                        }
                    </Col>
                    <Col span={12}>
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
