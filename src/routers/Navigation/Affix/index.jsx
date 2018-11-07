import React, {Component} from 'react'
import {Affix,Button} from 'antd'

class affix extends Component {
    constructor(props){
        super(props);
        this.state = {
            top:50,
            bottom:40,
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
                show:<div>
                    <Affix offsetTop={this.state.top}>
                        <Button
                            type="primary"
                            onClick={() => {
                            this.setState({
                                top: this.state.top + 10,
                            });
                            }}
                        >
                            Affix top
                        </Button>
                        </Affix>
                        <br />
                        <Affix offsetBottom={this.state.bottom}>
                        <Button
                            type="primary"
                            onClick={() => {
                            this.setState({
                                bottom: this.state.bottom + 10,
                            });
                            }}
                        >
                            Affix bottom
                        </Button>
                        </Affix>
                    </div>,
                code: <p>
                    最简单的用法。
                </p>
            }
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

export default affix
