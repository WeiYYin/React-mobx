/**
 * 数组的 内置函数
 * Array 对象是用于 构造数组的 全局对象
 * Array 属性 length constructor prototype
 * Array 对象 方法 
 * Array.from()   Array.isArray()    Array.of()  
 * Array.prototype.concat()  
 * Array.prototype.copyWithin()
 * Array.prototype.entries()
 * Array.prototype.every()
 * Array.prototype.fill()
 * Array.prototype.filter()
 * Array.prototype.find()
 * Array.prototype.findIndex()
 * Array.prototype.flat()
 * Array.prototype.flatMap()
 * Array.prototype.forEach()
 * Array.prototype.includes()
 * Array.prototype.indexOf()
 * Array.prototype.join()
 * Array.prototype.keys()
 * Array.prototype.lastIndexOf()
 * Array.prototype.map()
 * Array.prototype.pop()
 * Array.prototype.push()
 * Array.prototype.reduce()
 * Array.prototype.reduceRight()
 * Array.prototype.reverse()
 * Array.prototype.shift()
 * Array.prototype.slice()
 * Array.prototype.some()
 * Array.prototype.sort()
 * Array.prototype.splice()
 * Array.prototype.toLocaleString()
 * Array.prototype.toSource()
 * Array.prototype.toString()
 * Array.prototype.unshift()
 * Array.prototype.values()
 * Array.prototype[@@iterator]
 * get Array[@@species]
*/

function GetArray(){
    return new Array(1,2,3,4,5,6);
}
let target_1 = GetArray();


/** 
 * Array.from(arrayLike,mapFn,thisArg)
 * 从一个 类数组 或 可迭代对象 创建一个 新的 浅拷贝的 数组实例。
 * arrayLike 类数组 或 可迭代对象
 * mapFn 新数组中的每一个 元素 都会执行该回调函数
 * thisArg 执行 mapFn 时 指定的 this 对象
 * 
 * 返回一个 新的 数组实例
*/

let target_2 = Array.from(target_1,(el,index)=>{
    return el + 1;
})
console.log(target_2,'array from');


/**
 * Array.isArray()
 * 确定 传递的 值 是否为 Array
 * 返回 true false
*/
console.log(Array.isArray(target_2),'array isArray');


/**
 * Array.of(element,element0,element1,....,elementN)
 * 创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
 * 同 new Array(element,element,....elementN); 类似
*/

let target_3 = Array.of(1,2,3,4);
console.log(target_3);



/**
 * Array.prototype.concat(arg1,arg2,argN)
 * 用于 合并 两个 或 多个 数组 （ 不会改变现有数组  返回一个新数组 ）  浅复制
*/

let target_4 = [{a:'123'},123];
let target_4_concat = target_4.concat(target_3);
console.log(target_4_concat);
target_4[0].a = '321';
console.log(target_4_concat,target_4,'浅拷贝 ');


/**
 * Array.prototype.copyWithin(target,start,end) 参数 必须为整数
 * 浅 复制 数组的 一部分 到 同一数组的另一位置，并返回它， 不改变数组长度。
 * target 0 为基底的索引，复制序列到该位置。如果是负数，target 将从末尾开始计算。（如果 target 大于等于 arr.length，将会不发生拷贝。如果 target 在 start 之后，复制的序列将被修改以符合 arr.length。）
 * start 0 为基底的索引，开始复制元素的起始位置。如果是负数，start 将从末尾开始计算。（如果 start 被忽略，copyWithin 将会从0开始复制。）
 * end 0 为基底的索引，开始复制元素的结束位置。copyWithin 将会拷贝到该位置，但不包括 end 这个位置的元素。如果是负数， end 将从末尾开始计算。 （如果 end 被忽略，copyWithin 方法将会一直复制至数组结尾（默认为 arr.length））
 * 
 * 复制的 一部分 将会 替换掉 原位置数据
 * 
*/

let target_5 = GetArray();
console.log(target_5);
let c = target_5.copyWithin(0,-2,-1);
console.log(target_5,c);


/**
 * Array.prototype.entries() 
 * 返回 一个新的 Array Iterator 对象 该对象 包含 数组中 每一个 索引的 键值对
*/

let target_6 = GetArray();
let target_6_entries = target_6.entries();
Array.from(target_6_entries).forEach(([key,value],)=>{
    console.log(key,value,'array entries'); // 0  index  1 value 
})


/**
 * Array.prototype.every(callBack(element,index,array),thisArg)
 * 测试 数组中所有元素是否 能通过 某个指定的函数 测试，返回一个 Boolean
 * 不会 改变 元数组
*/

let target_7 = GetArray();
let target_7_every = target_7.every((el,index)=>{return el > 4 });
console.log(target_7_every);


/**
 * Array.prototype.fill(value,start,end)
 * 用一个 固定值 填充数组 从 起始索引 到 终止索引 内的 全部元素。（ 不包括终止索引 ） 会替换掉 原有参数
 * 改变 数组本身
 * start 默认值 0 
 * end 终止索引 默认值为 array.length
*/

let target_8 = GetArray();
console.log(target_8);
// target_8.fill(9);
target_8.fill(9,3,4);
console.log(target_8);


/**
 * Array.prototype.filter(callBack(el,index,array),thisArg)
 * 数组筛选 筛选通过 callback 的元素，返回组成一个新数组。 通过 callback 返回值 （true false） 判断是否通过
 * 
 * thisArg callBack 运行时 替换其 this
*/

let target_9 = GetArray();
console.log(target_9,'array filter');
console.log(target_9.filter((el)=>el>5));


/**
 * Array.prototype.find(callback(el,index,array),thisArg) 返回 数组中满足提供的测试函数的 第一个元素的 值
 * 
*/

console.log(target_9.find(el=>el>4),'Array find');


/**
 * Array.prototype.findIndex(callback(el,index,array),thisArg) 同 find 类似 不过 返回的是第一个元素的索引
 * 
 * 如果不存在 返回 -1 
 * 
*/
console.log(target_9.findIndex(el=>el>4),'Array findIndex');


/**
 * Array.prototype.flat(depth) 按照一个 深度的可递归的数组， 并将所有元素 和 其子数组中的元素 合并为 一个 新数组返回 
 * 
 * flat 方法会移除 数组中的 空项
 * depth 递归层数 默认为 1
 * 
*/
let target_10 = [1,2,3,,[4,5,[6,7,8]]];
console.log(target_10.flat(),'array flat');
console.log(target_10.flat(2),'array flat');
console.log(target_10.reduce((acc,val)=>acc.concat(val),[])) // 效果相同  但是 空项 依旧会保留


/**
 * Array.prototype.flatMap(callback(el,index,array),thisArg) 使用映射函数 映射每一个元素，然后将接结果组成为 一个 新的数组。
 *  一个新的数组，其中每个元素都是回调函数的结果，并且结构深度 depth 值为1。
 * 和 Array.prototype.map() 方法 几乎相同 （  flatMap 的返回值 将 在次执行 flat 函数 等同于  Array.flat(Array.map(callback)) ）
 * 
 * 
*/

let target_11 = GetArray();

console.log(target_11.map(el=>[el*2]),'array map');
console.log(target_11.flatMap(el=>[el*2]),'array flatMap');



/**
 * Array.prototype.forEach(callback(el,index,array),thisArg)
 * 对数组的每一个元素 执行一次的函数 ( 会改变原数组元素 当前循环中不会生效 )
 * forEach 的 范围 在第一次遍历的时候就已经确定。如果 数组元素被改变，调用是依旧是第一次遍历时已确定的值，如果 原有元素被删除，将会跳过。后面添加的值不会被遍历。
 * 
 * 即 forEach 不会直接改变调用它的对象，但是那个对象可能会被 callback 函数改变。
 * 返回值 为 undefined
 * 
 * 除了抛出异常  没有办法中止 forEach
 * 
*/
console.log(target_11);
target_11.forEach((el,index)=>{
    target_11[index+1] = el + 2;
    console.log(el);
});
console.log(target_11);


/**
 * Array.prototype.includes(valueToFind,formIndex)
 * 判断数组 是否包含一个指定的值
 * 
 * formIndex 开始寻找 索引值
 * 
*/
console.log(target_11.includes(3),'array includes');


/**
 * Array.prototype.indexOf(searchElement,formIndex)
 * 
 * 返回数组 可以找到的第一元素的 索引值 不存在 返回 -1 
 * 
*/
console.log(target_11.indexOf(3),'array indexOf');



/**
 * Array.prototype.join(separator)
 * 将一个 数组 或者 类数组对象 中的所有 元素 连接成一个字符串 （ 如果只有一个 元素 则不是使用分隔符 ）
 * 
 * 元素为对象 调用 toString 方法
 * 
 * 
*/

let target_12 = [{},123];
console.log(target_12.join(','));


/**
 * Array.prototype.keys()
 * 返回 一个包含数组每一个 索引键的 Array Iterator 对象
 * 
*/
console.log(target_12.keys());


/**
 * Array.prototype.lastIndexOf(searchElement,fromIndex)
 * 从 数组后面查找，返回 指定元素在数组中最后一个 索引。 
 * 从 fromIndex 开始查找， 如果 数值大于或等于数组长度，则整个数组将会被查找。
 * 如果为负值， 数组仍然会从数组后面向前查找。如果为负值，其绝对值大于数组长度，则返回 -1，数组将不会查找。
 * 
 * lastIndexOf 使用 严格等于 === 即数组元素 值 和 类型 需要与搜索对象 完全相等。
 * 
*/

let target_13 = [1,3,4,5,6,7,89,9,{a:1}];
console.log(target_13.lastIndexOf(9,2)); // -1
console.log(target_13.lastIndexOf(9,-1)); // 7
console.log(target_13.lastIndexOf(9,20)); // 7
console.log(target_13.lastIndexOf(9,-20)); // -1
console.log(target_13.lastIndexOf({a:1})); // -1 
console.log(target_13.lastIndexOf(9)); // -1 


/**
 * Array.prototype.map(callback(el,index,array),thisArg)
 * 创建一个新数组，其结果是 数组中每一个元素调用 callback 返回的值。
 * map 方法本身不修改愿数组 ，不过可以在 callback 执行时修改 原数组。
 * 同 forEach 相同， map 方法处理元素的范围在 第一次 callback 调用之前就确定了，callback 调用中 原数组中的元素 改变 增加 删除，不会影响 map 执行是读取到的元素的值。
 * 
*/

let target_14 = GetArray().map(el=>el+'map'); // map 为数组原型链上的 方法所以可以链式执行
console.log(target_14);


/**
 * Array.prototype.pop() 
 * 删除数组最后一个元素 ， 并返回该元素的值。（ 会改变原数组 ）
 * 该方法具有 通用性，当通过 apply 或者 call 使用时，可以作用在 类数组对象上。（ pop 方法更具 length 属性来确定最后一个元素，如果不具有length 属性，则会将 length 设置为 0，返回undefined ）
 * 
*/

let target_15 = GetArray();
console.log(target_15);
console.log(target_15.pop(),target_15,'pop');


/**
 * Array.prototype.push(el1,el2,....,elN)
 * 将一个 或者 多个元素添加到末尾，并返回 数组新的长度。
 * 该方法 具有通用性，和 apply 或者 call 一同使用时，可应用在类数组的对象上。
 * String 为唯一的原生类数组。但是 并不适用此方法，因为字符串不可改变。（ 字符串 是对象 变量指向 String 的地址。 对 变量新的赋值是 引用新的地址空间存放字符串的值 ）
 * 
*/

let target_16 = GetArray();
// console.log(target_16.push(...target_16),'push back new length');
// console.log(Array.prototype.push.apply(target_16,[...target_16]));
console.log(Array.prototype.push.call(target_16,...target_16));



/**
 * Array.prototype.reduce(callback(accumulator,el,index,array),initialValue)
 * 对数组的 每一个元素执行 reducer (生序执行)，将其结果汇总为单个返回值。
 * 
 * accumulator 累加器 
 * initialValue 累加器的初始值 （如果未提供初始值，则使用数组的第一个元素 , 迭代器将会从 数组 索引 1 处开始迭代 （ 获取到的 index 为 0 ））
 * 
 * 在累加 过程中改变 原数组  迭代器中获取的元素值固定（不会随原数组的改变而改变）
 * 
 * 
*/


let target_17 = GetArray();
console.log(target_17);
console.log(target_17.reduce((total,el,index)=>{
    console.log(el,index);
    target_17[index]++;
    return total+el
}),target_17,'array reduce');



/**
 * Array.prototype.reduceRight()
 * 
 * 和 reduce 相同 执行顺序 为 从右到左
 * 
*/

console.log(target_17);
console.log(target_17.reduceRight((total,el,index)=>{
    console.log(el,index);
    target_17[index]++;
    return total+el
}),target_17,'array reduceRight');


/**
 * Array.prototype.reverse()
 * 将数组中的元素颠倒位置，并返回该数组。
 * 该方法 会改变原数组
 * 此方法可 通过 apply 或者 call 用于类数组对象。
*/
let target_18 = GetArray();
console.log(target_18);
console.log(target_18.reverse());


/**
 * Array.prototype.shift() 
 * 从数组中删除第一个元素 并返回该元素的值。
 * 如果数组为空 
 * 
*/

let target_19 = GetArray();
console.log(target_19);
console.log(target_19.shift(),target_19,'array shift');


/**
 * Array.prototype.slice(begin,end)
 * 返回一个 新数组 ，从 begin 和 end 决定的从原数组浅拷贝的值。 原数组不会改变
 * begin 默认 0 ，从该索引开始提取原始数组。
 * 如果为 负值，则表示从 倒数第几个开始提取。
 * 如果大于数组长度，则返回 空数组。
 * 如果 begin 大于 end 将返回空数组
 * 
 * end 终止提取的 索引值。
 * 如果被省略 将提取到 数组末尾。
 * 如果大于数组的长度，也会提取至数组末尾。
 * 
*/

let target_20 = GetArray();
console.log(target_20.slice(2));
console.log(target_20.slice(2,3));
console.log(target_20.slice(-2,3));



/**
 * Array.prototype.some(callback(el,index,array),thisArg)
 * 测试 数组中是不是至少有一个元素通过测试函数。返回一个 boolean
*/

console.log(target_20.some(el=>el>10),'array some');
console.log(target_20.some(el=>el<10),'array some');


/**
 * Array.prototype.sort(compareFunction(first,second))
 * compareFunction 排序函数 默认将 元素 转为字符串 比较 各个字符的Unicode位点进行排序。
 * 
 * 如果 指明了 compareFunction 函数，那么将调用函数的返回值 进行排序。
 * 如果 compareFunction(a,b) 小于 0 ，a 将会被排列到 b 之前。
 * 如果 compareFunction(a,b) 等于 0 ，那么 a 和 b 的相对位置不变。
 * 如果 compareFunction(a,b) 大于 0，那么 b 将会被排列到 a 之前
 * 
 * 即可理解为 <=0 是位置不变 ，> 0 是 b a 交换位置。
 * 该方法会该改变原数组 
 * 
*/

let target_21 = GetArray();
console.log(target_21);
console.log(target_21.sort((a,b)=>{ return b-a }),target_21);
console.log(target_21);



/**
 * Array.prototype.splice(start,deleteCount,item1,item2,item3....itemN)
 * 通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
 * start 指定修改的位置  （可为 负值  如果绝对值大于数组长度 将 从 0 开始）
 * deleteCount 指定需要删除 数组元素个数，如果 被忽略将会删除 start 后所有元素。
 * item 添加的元素从start 位置开始添加
 * 会改变 原数组
 * 
*/

let target_22 = GetArray();
console.log(target_22);
console.log(target_22.splice(2,2),target_22,'array splice');
console.log(target_22.splice(0,0,'item1','item2'),target_22,'array splice');



/**
 * Array.prototype.toLocalString(locales,options)
 * 返回一个 字符串表示 数组中的元素。 数组中个元素 使用各自的 toLocalString 转成字符串。
 * 字符串将使用一个 特定的 “,” 隔开。
 * 
 * locales 带有BCP 47语言标记的字符串或字符串数组，关于locales参数的形式与解释，请看Intl页面。
 * options 一个可配置属性的对象，对于数字 Number.prototype.toLocaleString()，对于日期 Date.prototype.toLocaleString().
 * 
*/

let target_23 = ['$2',2,4,5];
console.log(target_23.toLocaleString('ja-JP',{ style: 'currency', currency: 'JPY' }));



/**
 * Array.prototype.toString()
 * 返回一个 字符串 表示数组及其元素。
 * 
 * Array 对象 覆盖了 Object 的 toString 方法
 * 对于数组对象 toString 方法 连接数组 并返回一个字符串，其中包含以逗号隔开的每个元素。
 * 
 * 当数组 被做一个文本值 或 进行字符串拼接时，将自动调用 toString 方法。
 * 
*/

console.log(target_23.toString(),'array toString');


/**
 * Array.prototype.unshift()
 * 
 * 将一个或多个元素 添加到数组的开头，并返回 数组的新长度 （ 该方法会改变原数组 ）
 * 
*/

let target_24 = GetArray();
console.log(target_24);
console.log(target_24.unshift('array unshift 1','array unshift 2'),'array unshift',target_24);


/**
 * Array.prototype.values()
 * 
 * 返回一个 新的 Array Iterator 对象， 该对象 包含所有索引的值。
 * 
*/
let values_ = target_24.values();
for (const iterator of values_) {
    console.log(iterator);
}