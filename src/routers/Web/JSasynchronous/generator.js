/**
 *  生成器函数 返回一个 Generator 对象。 <br>
    生成器函数在执行时暂停，后面又能在暂停处继续执行。<br>
    调用一个生成器函数不会立即执行内部函数，而是返回一个 生成器的迭代器对象。<br>
    当迭代器的 next() 方法首次被调用后，其内部的语句将执行到第一个 yield 的位置。<br>
    yield 紧跟 迭代器要返回的值。如果 用 yield*，则表示将执行权交给了另一个迭代器（当前迭代器暂停执行）。 <br>
    next() 方法返回一个对象，这个对象包含两个属性：value 和 done，value 表示本次 yield 表达式的，done 表示是否结束（done 为Boolean）。<br>
    当调用 next（） 方法时，如果传入了参数，那个参数将会回传给上一条 yield 语句左边的变量。<br>
    当在 生成器 中显式的使用 return 时，生成器将变为完成状态即调用 next done 将返回 true，如果 return 后面跟有一个值，那么这个值是next 返回的 value。
*/

function *foo(x){
    let y = 2 * (yield x + 1 )
    let z = yield (y/3);
    console.log(x,y,z);
    return (x+y+z);
}

let it = foo(5);
console.log(it.next());
console.log(it.next(12));
console.log(it.next(1));