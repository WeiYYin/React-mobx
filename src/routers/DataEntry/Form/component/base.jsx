import React, {Component} from 'react'

class base extends Component {
    render() {
        return (
            <section className='Button_box'>
                <section className='Show_button'>
                    {this.props.children[0]}
                </section>
                <section className='Code_box'>
                    <div className='Code_title'> <span>{this.props.children[1]}</span> </div>
                    {!!this.props.children[2]?this.props.children[2]:''} 
                </section>
            </section>
        )
    }
}

export default base
