import React, { Component } from 'react'

class index extends Component {
    render() {
        let content_ = [
            {
                title:'并发（concurrency）和并行（parallelism）区别',
                content:`并发是宏观概念，任务A 和 任务 B，在一段时间通过任务间的切换完成任务，称之为并发。 <br/>
                并行是微观的概念，同是完成 A 和 B ，称之为并行。`,
            },
            {
                title:'回调函数 （callback）',
                content:`当程序跑起来时，一般情况下，应用程序（application program）会时常通过API调用库里所预先备好的函数。<br>
                但是有些库函数（library function）却要求应用先传给它一个函数，好在合适的时候调用，以完成目标任务。这个被传入的、后又被调用的函数就称为回调函数（callback function）。`,
            },
            {
                title:'回调函数缺点',
                content:`容易产生回调地狱，当多个请求存在依赖性时。<br>
                    1. 嵌套函数存在耦合性，一旦改动，牵一发而动全身。 <br>
                    2. 嵌套函数过多时，错误的难以处理。
                `,
            },
            {
                title:'Generator',
                content:`生成器函数 返回一个 Generator 对象。 <br>
                    生成器函数在执行时暂停，后面又能在暂停处继续执行。<br>
                    调用一个生成器函数不会立即执行内部函数，而是返回一个 生成器的迭代器对象。<br>
                    当迭代器的 next() 方法首次被调用后，其内部的语句将执行到第一个 yield 的位置。<br>
                    yield 紧跟 迭代器要返回的值。如果 用 yield*，则表示将执行权交给了另一个迭代器（当前迭代器暂停执行）。 <br>
                    next() 方法返回一个对象，这个对象包含两个属性：value 和 done，value 表示本次 yield 表达式的，done 表示是否结束（done 为Boolean）。<br>
                    当调用 next（） 方法时，如果传入了参数，那个参数将会回传给上一条 yield 语句左边的变量。<br>
                    当在 生成器 中显式的使用 return 时，生成器将变为完成状态即调用 next done 将返回 true，如果 return 后面跟有一个值，那么这个值是next 返回的 value。
                `,
            },
            {
                title:'Promise',
                content:`
                    Promise 有三种状态 （ pending resolved  rejected ） （ 等待 完成 拒绝 ）。 <br>
                    Promise 初创建的状态为 pending ，当从 pending 状态改变为其他状态后 promise 状态固定不再改变。<br>
                    Promise 的构造 new Promise((resolve,reject)=>{  })  callback 函数 接受两个函数 resolve 和 reject 。当内部调用后 改变promise的状态 （resolved rejected） 。 <br>
                    Promise.then Promise.catch 都返回的是 promise 对象，所以可进行链式操作。 <br>
                    new Promise(value) 如果 value 是 thenable 对象，那么promise 的状态将跟随 thenable 的最终状态。（ thenable指的是一个具有 .then 方法的对象。jQuery.ajax()   ）<br>
                `,
            },
            {
                title:'async await',
                content:`
                    async 是 Generator 实现的语法糖。async 返回一个 Promise 对象。 <br>
                    async 内部返回的值 将作为 then 方法回调的参数。如果 async 内部抛出异常，返回的 promise 的状态将变为 rejected 。错误 会在 catch 中接收到。 <br>
                    async 返回的 promise 对象，会等到 内部 所有的 await 命令的promise对象执行完成，才会改变状态。 <br>

                    await 操作符用于等待一个 promise 对象 或者 任何要等待的值。只能 异步函数 async function 中使用。<br>
                    返回值 返回 Promise 对象的处理结果。如果等待的不是 Promise 对象，则返回该值自身。 <br>
                    await 表达式会暂停 async function 的执行，等到 promise 的处理完成。如果 Promise 正常处理 ( resolved = fulfilled )，其回调的 resolve 函数参数作为 await 的返回值，继续执行 async function 。 如果 Promise 处理异常 （rejected），await 表达式将会把 Promise 的异常问题抛出。

                `,
            },
        ];
        return (
            <section className='Section_box'>
                <div className='Describe_box'>
                    <h1 className='title'>
                        JS 异步编程
                    </h1>
                        {
                            content_.map((el,key)=>{
                                return <p key={key} className='content'>
                                    <div className='title_'>{el.title}</div>
                                    <p dangerouslySetInnerHTML={{__html:el.content}}></p>
                                </p>
                            })
                        }
                </div>
            </section>
        )
    }
}

export default index
