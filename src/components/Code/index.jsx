import React, {Component} from 'react'

class Code extends Component {
    render() {
        const {show,title,code} = this.props;
        return (
            <section className='Button_box'>
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
        )
    }
}

export default Code
