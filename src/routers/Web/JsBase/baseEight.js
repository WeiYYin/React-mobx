/*
    Promise 对象用于 表示一个一步操作 的 最终完成 （ 或 失败  ）， 及其结果值  （ 异步编程的解决方案 ）
    状态 pending （初始状态，既不是成功，也不是失败状态。） 
        fulfilled (意味着操作成功完成。)
        rejected (意味着操作失败。)
    Promise 1. 对象状态不受外界影响 
            从pending变为fulfilled和从pending变为rejected。 然后结果将保存 （  resolved 已定型 ）
    Promise(executor) 
    executor ( 带 resolve 和 reject 两个参数的 函数 )
    Promise 构造函数 执行立即调用这个函数， resolve 和 reject 函数被调用时 分别将 promise 的状态改为 fulfilled（完成） 和  rejected （失败）。
    executor 内部通常进行一些 异步操作 ，异步操作完成 调用 （ resolve 和 reject 函数 ） 改变 promise 状态
    如果 executor 中抛出一个异常 promise 状态变为 rejected 。 executor 返回值 将会被忽略。
    当 resolve 和 reject 函数调用时， Promise 的 then 方法 绑定的 处理函数（handler） 会被调用（ then 方法包含两个参数： onfulfilled 和 onrejected , 它们都是Function 类型 。 ） Promise 状态为 fulfilled 调用 onfulfilled , 状态 为 rejected 时 调用 onrejected.

*/  

let target_pan = true;
let target_1 = new Promise((resolve,reject)=>{
    if(target_pan){
        resolve(123);
    }else{
        reject('error');
    }
})

target_1.then((value)=>{
    console.log(value,'promise resolved')
},(error)=>{
    console.log(error,'promise reject');
})

// 当 promise 状态 固定后 将不会在改变
target_pan = false;

target_1.then((value)=>{
    console.log(value,'promise resolved')
},(error)=>{
    console.log(error,'promise reject');
})


/*
    Promise.all(iterable) 
    iterable 一个可迭代对象
    返回一个 Promise 实例 此实例在 iterable 参数中所有的 promise 中 都完成 或 参数中不包含 promise 时 ，
    如果 参数 promise 中 有一个 失败 （ rejected ） ，此实例回调失败 ， 失败是 第一个 promise 失败的结果。 
    当传入 参数 不是 promise 对象时，值将被忽略，但仍然返回在 数组中。

    返回值 
    1. 如果 传入的参数是一个空的可迭代对象， 则返回一个 已完成状态（already resolved ）的 promise 。
    2. 如果 传入参数中 不包含 ， 则返回一个异步完成（ asynchronously resolved  ）  的 promise.
    3. Promise.all 返回的总是一个 数组 ，包含所有的传入迭代参数对象的值。
*/

let target_2_1 = new Promise((resolve,reject)=>{
    resolve('target_2_1 one')
})
let target_2_2 = new Promise((resolve,reject)=>{
    resolve('target_2_2 two')
})
let target_2_3 = new Promise((resolve,reject)=>{
    reject('target_2_3 three')
})
let target_2_4 = new Promise((resolve,reject)=>{
    resolve('target_2_4 one')
})

let target_2 = Promise.all([target_2_1,target_2_2,'312',target_2_3,target_2_3]);
target_2.then((values)=>{
    console.log(values,'Promise all');
},(error)=>{
    console.log(error,'123');
})


/*
    Promise.allSettled(iterable) 
    iterable 一个可迭代对象
    返回 一个 在所有给定的 Promise 已被 决议 或 被拒绝后 决议的 promise 对象 ，并带一个数组 ，每个对象 表示 对应的 Promise 结果
    对于那个 对象结果 都有一个 status 字符串 。如果状态是 fulfilled , 则存在一个 value 。如果状态 为 rejected ，则存在一个 reason ;
*/  

let target_3 = Promise.allSettled([target_2_1,target_2_2,'312',target_2_3,target_2_4]);
target_3.then((value)=>{
    console.log(value,'allSettled resolved');
},(error)=>{
    console.log(error,'allSettled rejected');
})


/*
    Promise.any() 
    接收一个 Promise 可迭代的 对象， 只要其中一个 promise 完成 ，就返回那个已经完成的 promise 。
    如果 可迭代对象中 没有一个 promise 完成 ，就返回一个 拒绝的 promise （ 返回值 有待商榷 ）；
    该方法 为试验性方法 ，尚未被所有浏览器 实现。
*/

// let target_4 = Promise.any([target_2_1,target_2_2,'312',target_2_3,target_2_4]);
// target_4.then((values)=>{
//     console.log(values,'promise any resolved');
// },(error)=>{
//     console.log(error,'promise any rejected');
// })




/*
    Promise.prototype.catch(onRejected) 
    返回一个 promise，并且处理拒绝的情况 （ rejected ）
    同 Promise.prototype.then(undefined,onRejected) 相同

    因为 Promise.prototype.then 和  Promise.prototype.catch 方法返回promise 对象， 所以它们可以被链式调用。
    如果 onRejected 抛出一个错误或者返回一个本身失败的 Promise ，通过 catch() 返回的 Promise 被 rejected ，否则视为成功 （ resolved ）
*/

let target_5 = new Promise((resolve,reject)=>{
    resolve('resolved Promise target_5');
})
// target_5.catch((error)=>{
//     console.log(error,'target_5');
// })

target_5.then((v)=>{
    console.log(v,'then');
    return Promise.reject('oh, no!');
}).catch((e)=>{
    console.log(e,'catch');
}).then((v)=>{
    console.log(v,'then 2');
},(v)=>{
    console.log(v,'catch 2');
})


/*
    Promise.prototype.finally(onFinally) 
    在 Promise 完成后调用 （ 无论是 fulfilled 或者是 rejected )
    如果你想在 promise 执行完毕后无论其结果怎样都做一些处理或清理时，finally() 方法可能是有用的。    
*/

let target_6 = new Promise((resolve,reject)=>{
    resolve('resolved Promise target_6');
})

target_6.then((v)=>{
    console.log(v);
},(v)=>{
    console.log(v);
}).finally((v)=>{
    console.log('Promise finally');
})



/*
    Promise.prototype.then(onFulfilled,onRejected) 


    如果忽略针对某个状态的回调函数参数，或者提供非函数 (nonfunction) 参数，那么 then 方法将会丢失关于该状态的回调函数信息，但是并不会产生错误。如果调用 then 的 Promise 的状态（fulfillment 或 rejection）发生改变，但是 then 中并没有关于这种状态的回调函数，那么 then 将创建一个没有经过回调函数处理的新 Promise 对象，这个新 Promise 只是简单地接受调用这个 then 的原 Promise 的终态作为它的终态。

    返回值 （Promise）
    1. 返回了一个值 ， 那么 then 返回的 Promise 将变为 接受状态 (fulfilled), 并将返回值作为接受状态的回调函数的参数值。
    2. 没有返回值 ， 那么 then 返回的 Promise 将变为 接受状态 (fulfilled), 并将返回值作为接受状态的回调函数的参数值 （ undefined ）。
    3. 抛出一个错误，那个then 返回的Promise 将变为 拒绝状态 （ rejected ），并将抛出的错误作为 拒绝状态的 回调函数的参数值。
    4. 返回一个 已经是 接受状态的 Promise ，那么 then 返回的 Promise 也会成为接受状态，并且将那个 Promise 的接受状态的回调函数的参数值作为该被返回的Promise的接受状态回调函数的参数值。
    5. 返回一个 已经是 拒绝状态的 Promise ，那么 then 返回的 Promise 也会成为拒绝状态，并且将那个 Promise 的拒绝状态的回调函数的参数值作为该被返回的Promise的拒绝状态回调函数的参数值。
    6. 返回一个未定状态（pending）的 Promise，那么 then 返回的 Promise 也是未定状态的，并且它的终态和那个Promise的终态相同，同时，它变为终态时调用的回调函数参数与那个 Promise 变为终态时的回调函数的参数是相同的。

    由于 then 和 Promise.prototype.catch() 方法都会返回 promise，它们可以被链式调用——这同时也是一种被称为复合（ composition） 的操作。
*/






/*
    Promise.race(iterable)  iterable（迭代器）
    返回一个 Promise
    当迭代器中的 某个 promise 完成 或者 被拒绝，就采用第一个promise的值作为它的值，从而异步地解析或拒绝（一旦堆栈为空）。
    如果传的迭代是空的，则返回的 promise 将永远等待。
*/

let target_7 = Promise.race([target_2_3,target_5]);
target_7.then((v)=>{
    console.log(v,'promise race resolved');
},(e)=>{
    console.log(e,'promise race rejected');
})


/*
    Promise.reject(reason) 返回一个 带拒绝原因的 Promise 对象
*/  

Promise.reject('reject test').then(()=>{},(error)=>{
    console.log(error,'promise reject');
})


/*
    Promise.resolve(value) 
    返回一个 以给定值解析后的 Promise 对象。
    如果该值为promise，返回这个promise；如果这个值是 thenable（即带有"then" 方法)），返回的promise会“跟随”这个thenable的对象，采用它的最终状态；否则返回的promise将以此值完成。此函数将类promise对象的多层嵌套展平。
*/


console.log(Promise.prototype,'try');