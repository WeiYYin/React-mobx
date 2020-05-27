/*
    ES6 Reflect ( 内置对象  无法 new) 与 Proxy.handler 类似
    为 操作对象 提供新的 API
    Reflect 继承 Object 
    设计目的 
    1. 将 Object 对象的一些内部方法放到 Reflect 中。
    2. 修改 Object 方法的返回值，使其更加合理。
    3. 让 Object 的操作变为函数行为 （  a in obj , delete obj.a  ）   Reflect.has(a,obj) Reflect.deleteProperty(obj,'a');
    4. Reflect对象的方法 和 Proxy 对象的方法 一致。 两者配合使用 更加方便。
 */  
console.log(Reflect instanceof Object);


/*
    Reflect.apply(target,thisArgument,argumentsList)  通过指定的参数列表发起对目标(target)函数的调用。
    通 Function.prototype.apply 类似 （  Reflect 调用更加的简洁 ）
    target 目标函数  thisArgument target函数调用时指定的 this 对象  argumentsList target函数调用时传入的实参列表，该参数应该是一个类数组的对象。
    返回值 是调用完带着指定参数和 this 值的给定的函数后返回的结果。
    异常 如果 target 对象不可调用，抛出 TypeError。
*/

function Target_1(){
    console.log('123');
    console.log(this.value);
}
Reflect.apply(Target_1,{value:1},[]);
Target_1.apply({value:2},[]);


/*
    Reflect.construct(target,argumentsList,newTarget)  与 new 操作符类似 相当于 new Target(..args)
    newTarget 新创建的对的 原型对象
    返回值 以target（如果newTarget存在，则为newTarget）函数为构造函数，argumentList为其初始化参数的对象实例。
    异常 如果target或者newTarget不是构造函数，抛出TypeError,异常。
*/

function Target_2(v){
    this.value = v;
    console.log(this.value);
}
let target_2_1 = new Target_2('new');
let target_2_2 = Reflect.construct(Target_2,['reflect construct']);



/*
    Reflect.defineProperty(target,propertyKey,attributes)  基本等同于 Object.defineProperty()
    唯一不同是返回 Boolean 值。
    attributes 要定义或修改的属性的描述。
    返回值 表示 是否定义成功
    异常 如果 target 不是 Object 将会抛出异常
*/
let target_3 = {a:1};
console.log(Reflect.defineProperty(target_3,'a',{value:'reflect defineProperty'}),target_3.a);


/*
    Reflect.deleteProperty(target,propertyKey) 允许删除属性 （ 通 delete 操作符类似  ） 但 Reflect.deleteProperty 为函数调用
    返回 boolean 表示属性是否被删除成功
    异常 如果 target 不是 Object 将会抛出异常
    
    如果 target 不包含该属性 会返回 true
*/

let target_4 = {a:1,b:2};
delete target_4.a
console.log(target_4);
console.log(Reflect.deleteProperty(target_4,'a'));

/*
    Reflect.get(target,propertyKey,receiver) 和 从对象 target[propertyKey] 读取属性类似  （  函数执行 ）
    receiver 如果target对象中指定了 getter ，receiver 则为 getter 调用时的 this
*/

let target_5 = {a:'1',b:"2"};
console.log(Reflect.get(target_5,'b'),' reflect get ');
Object.defineProperty(target_5,'a',{
    get:function(){
        console.log(this,'reflect get receiver replace this');
        return this.a;
    },
})
Reflect.get(target_5,'a',{a:'1',b:'1'});



/*
    Reflect.getOwnPropertyDescriptor(target,propertyKey,)  与 Object.getOwnPropertyDescriptor() 类似。
    返回 如果 对象存在 则返回对应属性的 属性描述符 否则返回 undefined ( 可 使用 Proxy.getOwnPropertyDescriptor() 更换 返回值  )
    当 对应属性未设置  set get 时 默认是 返回属性的 属性描述符 ( 设置 set 或 get 后 将返回 存取描述符  )
*/

let target_6 = {a:1,b:2};
console.log(Reflect.getOwnPropertyDescriptor(target_6,'a'),'reflect getOwnPropertyDescriptor');
Object.defineProperty(target_6,'b',{
    set:function(v){
        console.log('Object defineProperty set',v);
    },
    get:function(){
        return 'Object defineProperty get';
    },
})
console.log(Reflect.getOwnPropertyDescriptor(target_6,'b'),'reflect getOwnPropertyDescriptor',target_6.b);




/*
    Reflect.getPrototypeOf(target) 同 Object.getPrototypeOfd() 方法一样 
    返回 target 的原型
    异常 如果 target 不是 Object 将抛出异常
*/

let target_7 = function(){};
target_7.prototype.a = 3;
console.log(Reflect.getPrototypeOf(target_7),Object.getPrototypeOf(target_7),'reflect getPrototypeOf');


/*
    Reflect.has(target,propertyKey) 作用 与 in 操作符 类似
    返回 Boolean 表示 对象是否存在此属性
    异常 如果 target 不是 Object 将抛出异常
*/

console.log(Reflect.has(target_6,'a'));



/*
    Reflect.isExtensible(targe) 判断对象 是否可扩展（即是否能够添加新的属性）但任可 修改 删除 已有属性 
    Reflect.preventExtensions(target)  Object.preventExtensions(target) 禁止扩展对象
    Object.seal(target) 密封对象 密封对象是指那些不能添加新的属性，不能删除已有属性，以及不能修改已有属性的可枚举性、可配置性、可写性，但可以修改已有属性的值的对象。 （可以系修改 已有属性值）
    Object.isSealed(target) 判断一个对象是否是密封的（sealed）
    Object.freeze(target) 冻结对象 冻结对象是指那些不能添加新的属性，不能修改已有属性的值，不能删除已有属性，以及不能修改已有属性的可枚举性、可配置性、可写性的对象。
*/

let target_8 = {a:1,b:2};
Reflect.preventExtensions(target_8);
target_8.a = 3;
console.log(Reflect.isExtensible(target_8),'reflect isExtensions');



/*
    REflect.ownKeys(target)
    返回 一个由自身 属性键 组成的数组
*/
console.log( Reflect.ownKeys(target_8),'Reflect ownkeys' );
let target_9 = function(){}
console.log( Reflect.ownKeys(target_9),'Reflect ownkeys' );
console.log( Reflect.ownKeys([]),'Reflect ownkeys' );



/*
    Reflect.preventExtensions(target)  阻止对象 扩展
    返回 Boolean target 是否被设置为 不可扩展对象
    异常 如果target 不是 Object 将会抛出异常
*/

let target_10 = {a:1};
console.log(Reflect.preventExtensions(target_10) ,' Reflect preventExtensions ');
console.log(Reflect.isExtensible(target_10),' Reflect isExtensible ');



/*
    Reflect.set(target,propertyKey,value,receiver) 在对象设一个属性
    receiver  (  为 setter 提供 this  )
    返回 Boolean 表示 propertyKey 是否设置成功
    异常 如果 target 不是 Object 将会抛出异常
*/

let target_11 = {a:1};
console.log(target_11);
console.log(Reflect.set(target_11,'b',3),'Reflect set');
console.log(target_11);




/*
    Reflect.setPrototypeOf(target,prototype)   与 Object.setPrototypeOf() 方法 一致 
    指定对象的 原型
    返回值 Boolean 表示 是否设置成功
    如果 目标不是 Object 或者原型不是一个 Object 或 null 会抛出异常
*/

let target_12 = {a:1};
console.log(Reflect.setPrototypeOf(target_12,{b:2}));
console.log(target_12.b);




