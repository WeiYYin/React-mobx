import React, { Component } from 'react'

class ObjectItem extends Component {
    render() {
        return (
            <section className='Section_box'>
                <div className='Describe_box'>
                    <h1 className='title'>
                        原始（Primitive）类型
                    </h1>
                    <h2 className='content'>
                        原始类型存储的都是值，没有函数可以调用 <br/>
                        string类型是不可变的，无论string类型上调用何种方法，都不会对值有改变。 <br/>
                        原始数据类型值在内存中占据固定大小的空间，因此被保存在栈内存中；<br/>
                    </h2>
                </div>
            </section>
        )
    }
}

export default ObjectItem
