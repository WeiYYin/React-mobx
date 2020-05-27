/*
    Object.defineProperty(target,prop,descriptor) 方法会直接 在对象上定义一个新属性 ， 或者修改 一个现有属性 并返回这个对象
    vue 双向绑定 通过 此 实现 （ 属性拦截器 ）

    descriptor  {
        configurable:当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。(configurable特性表示对象的属性是否可以被删除，以及除value和writable特性外的其他特性是否可以被修改。) ,

        writable:当writable属性设置为false时，该属性被称为“不可写”。它不能被重新分配。

        enumerable: 定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举。

        value: 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。

        get: 一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。当访问该属性时，该方法会被执行，方法执行时没有参数传入，但是会传入this对象（由于继承关系，这里的this并不一定是定义该属性的对象）。

        set: 一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。当属性值修改时，触发执行该方法。该方法将接受唯一参数，即该属性新的参数值。
    }

    如果一个描述符不具有value,writable,get 和 set 任意一个关键字，那么它将被认为是一个数据描述符。
    如果一个描述符同时有(value或writable)和(get或set)关键字，将会产生一个异常。
*/


let target = {
    a:1,
    b:2,
}

// 对 target.b 进行了复写
Object.defineProperty(target,'b',{
    value:3,
    configurable:true,
    writable:true,
    enumerable:true,
})
console.log(target.b);


//  通过 Object.defineProperty 监听 set 方法 实现数据的双向绑定
let value = '';
Object.defineProperty(target,'b',{
    set:function(v){
        value = v;
    },
    get:function(){
        return `[${value}]`;
    },
})
target.b = '312';
console.log(target.b);



/*
    Proxy ES6 新增属性
    Proxy 对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）。 vue 3 中 通过 Proxy 实现数据的双向绑定
    Proxy(target,handler) 
    target 用Proxy包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
    handler 一个对象，其属性是当执行一个操作时定义代理的行为的函数。(
        handler 包含 
        constructor  
        apply  
        defineProperty  
        deleteProperty  
        get  
        getOwnPropertyDescriptor  
        getPrototypeOf   
        has  
        isExtensible  
        ownKeys  
        preventExtensions  
        set  
        setPrototypeOf 
    )
*/

// handler.apply(target,thisArg,argumentsList)  用于 拦截函数的调用
console.log('proxy 应用')
function Sum(a,b){
    return a + b;
}
let proxy_1 = new Proxy(Sum,{
    apply:function(target,thisArg,argumentsList){
        console.log(target,thisArg,argumentsList,'proxy apply');
        // return target(...argumentsList)
        return 'apply replace'
    },
})
console.log(Sum(1,2));
console.log(proxy_1(1,2));



// handler.construct(target,argumentsList,newTarget)  用于拦截 new 操作符  为了使new操作符在生成的Proxy对象上生效，用于初始化代理的目标对象自身必须具有[[Construct]]内部方法（即 new target 必须是有效的）。  可拦截（  new proxy(...args)  Reflect.construct()  ） 

function demo(v){
    this.value = v;
}

const proxy_2 = new Proxy(demo,{
    construct(target,argumentsList,newTarget){
        console.log(target,argumentsList,newTarget,'proxy construct');
        // return new target(...argumentsList);
        return new target(123)
    },
})
console.log(new proxy_2(32).value);

/*
    handler.defineProperty(target, property, descriptor) 用于拦截 Object.defineProperty 操作  Reflect.defineProperty() proxy.property='value'
    defineProperty 方法必须以一个 Boolean 返回，表示定义该属性的操作成功与否。
    操作 和 Object.defineProperty 类似
    如果目标对象不可扩展， 将不能添加属性。
    不能添加或者修改一个属性为不可配置的，如果它不作为一个目标对象的不可配置的属性存在的话。
    如果目标对象存在一个对应的可配置属性，这个属性可能不会是不可配置的。
    如果一个属性在目标对象中存在对应的属性，那么 Object.defineProperty(target, prop, descriptor) 将不会抛出异常。
    在严格模式下， false 作为 handler.defineProperty 方法的返回值的话将会抛出 TypeError 异常.
*/


let target_1 = {
    a:1,
    b:2,
}
let target_2 = new Proxy(target_1,{
    defineProperty:function(target,property,descriptor){
        console.log(target,property,descriptor,'proxy defineProperty');
        return false;
    },
})
console.log(target_2);
target_2.b = 3;

/*
    handler.deleteProperty(target，property)  用于 拦截 删除操作
    deleteProperty 必须返回一个 Boolean 类型的值，表示了该属性是否被成功删除。
    拦截 Reflect.deleteProperty()  delete proxy[foo] 和 delete proxy.foo
    如果目标对象的属性是不可配置的，那么该属性不能被删除。
*/

let target_3 = new Proxy({a:1,c:2},{
    deleteProperty:function(target,property){
        console.log(target,property,'deleteProperty');
        return false;
    }
})

delete target_3.c
console.log(target_3.c,'Proxy deleteProperty');




/*
    handler.get(target, property, receiver)  方法用于拦截对象的读取属性操作。
    receiver  Proxy或者继承Proxy的对象

    如果要访问的目标属性是不可写以及不可配置的，则返回的值必须与该目标属性的值相同。
    如果要访问的目标属性没有配置访问方法，即get方法是undefined的，则返回值必须为undefined。
*/

let target_4 = new Proxy({},{
    get:function(target,property,receiver){
        console.log(target,property,receiver,'proxy get');
        return 'proxy get'
    },
})

console.log(target_4.a);


/*
    handler.getOwnPropertyDescriptor(targe,prop) 是 Object.getOwnPropertyDescriptor()  的钩子。
    getOwnPropertyDescriptor 方法必须返回一个 object 或 undefined。
    如果属性作为目标对象的不可配置的属性存在，则该属性无法报告为不存在。
    如果属性作为目标对象的属性存在，并且目标对象不可扩展，则该属性无法报告为不存在。
    如果属性不存在作为目标对象的属性，并且目标对象不可扩展，则不能将其报告为存在。
    属性不能被报告为不可配置，如果它不作为目标对象的自身属性存在，或者作为目标对象的可配置的属性存在。 configurable 必须为 true
    Object.getOwnPropertyDescriptor（target）的结果可以使用 Object.defineProperty 应用于目标对象，也不会抛出异常。
    返回对象中 （ 属性描述符 （ value writable ） 和 存取描述符 (get  set) 不可同时返回 ）
    当 设置 set 未设置 get 时 读取该属性将返回 undefined
    Object.getOwnPropertyDescriptor() 方法返回指定对象上一个自有属性对应的属性描述符。( value configurable enumerable writable set get )
    （自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）
    (在 ES5 中，如果该方法的第一个参数不是对象（而是原始类型），那么就会产生出现 TypeError。而在 ES2015，第一个的参数不是对象的话就会被强制转换为对象。)
*/  

let target_5 = new Proxy({a:1,b:2,c:3},{
    getOwnPropertyDescriptor:function(target,prop){
        console.log(target,prop,'proxy getOwnPropertyDescriptor');
        return { configurable: true, value: 1};
    }
})
console.log(Object.getOwnPropertyDescriptor(target_5,'a'));


/*
    handler.getPrototypeOf(target)  当读取代理对象的原型时，该方法就会被调用。

    Object.getPrototypeOf()
    Reflect.getPrototypeOf()
    __proto__
    Object.prototype.isPrototypeOf()
    instanceof

    抛出异常 
    getPrototypeOf() 方法返回的不是对象也不是 null。
    目标对象是不可扩展的，且 getPrototypeOf() 方法返回的原型不是目标对象本身的原型。
*/

let target_6 = new Proxy({},{
    getPrototypeOf:function(target){
        console.log(target,'proxy getPrototypeOf');
        return null;
    },
})
console.log(target_6.__proto__);



/*
    handler.has(target,prop)  方法是针对 in 操作符的代理方法。
    has 方法返回一个 boolean 属性的值.
*/

let target_7 = new Proxy({a:1,b:2,},{
    has:function(target,prop){
        console.log(target,prop,'proxy has');
        
        // return prop in target;
        return false;
    },
})
console.log('a' in target_7);


/*
    handler.isExtensible() 方法 用于拦截 Object.isExtensible();
    isExtensible方法必须返回一个 Boolean值或可转换成Boolean的值。

    Object.isExtensible() 方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）。

    约束 
    Object.isExtensible(proxy) 
    必须同Object.isExtensible(target)返回相同值。
    也就是必须返回true或者为true的值,返回false和为false的值都会报错。
*/

let target_8_1 = {};
Object.preventExtensions(target_8_1)

let target_8 = new Proxy(target_8_1,{
    isExtensible:function(target){
        console.log(target,'proxy isExtensible');
        // 返回 false 会 TypeError
        return false;
    }
})
console.log(Object.isExtensible(target_8));
console.log(Object.isExtensible(target_8_1));



/*
    handler.ownKeys(target) 方法用于拦截  
    Object.getOwnPropertyNames()
    Object.getOwnPropertySymbols()
    Object.keys()
    Reflect.ownKeys()

    ownKeys 方法必须返回一个可枚举对象.

    约束
    ownKeys 的结果必须是一个数组.
    数组的元素类型要么是一个 String ，要么是一个 Symbol.
    结果列表必须包含目标对象的所有不可配置（non-configurable ）、自有（own）属性的key.
    如果目标对象不可扩展，那么结果列表必须包含目标对象的所有自有（own）属性的key，不能有其它值.
*/

let target_9_1 = {a:1,b:2,c:3};
let target_9 = new Proxy(target_9_1,{
    ownKeys:function(target){
        console.log(target,'proxy ownKeys');
        return ['1','2','3'];
    },
})

console.log(Object.getOwnPropertyNames(target_9_1),Object.getOwnPropertyNames(target_9),'getOwnPropertyNames');
console.log(Object.getOwnPropertySymbols(target_9_1),Object.getOwnPropertySymbols(target_9),'getOwnPropertySymbols');
console.log(Object.keys(target_9_1),Object.keys(target_9),'keys');
console.log(Reflect.ownKeys(target_9_1),Reflect.ownKeys(target_9),'Reflect ownKeys');


/*
    handler.preventExtensions() 方法用于设置对 
    Object.preventExtensions()
    Reflect.preventExtensions() 的拦截

    preventExtensions 方法返回一个布尔值.
    
    如果Object.isExtensible(proxy)是false，Object.preventExtensions(proxy)只能返回true。
*/

let target_10 = new Proxy({a:1},{
    preventExtensions:function(target){
        console.log(target,'proxy preventExtensions');
        Object.preventExtensions(target);
        return true;
    },
})
console.log(Object.preventExtensions(target_10),'123');



/*
    handler.set(target,property,value,receiver) 方法用于拦截设置属性值的操作

    receiver
    最初被调用的对象。通常是proxy本身，但handler的set方法也有可能在原型链上或以其他方式被间接地调用（因此不一定是proxy本身）。
    比如，假设有一段代码执行 obj.name = "jen"，obj不是一个proxy且自身不含name属性，但它的原型链上有一个proxy，那么那个proxy的set拦截函数会被调用，此时obj会作为receiver参数传进来。

    set方法应该返回一个布尔值，返回true代表此次设置属性成功了，如果返回false且设置属性操作发生在严格模式下，那么会抛出一个TypeError。

    拦截 
    指定属性值: proxy[foo] = bar 和 proxy.foo = bar
    指定继承者的属性值: Object.create(proxy)[foo] = bar
    Reflect.set()

    约束
    若目标属性是不可写及不可配置的，则不能改变它的值。
    如果目标属性没有配置存储方法，即set方法是undefined的，则不能设置它的值。
    在严格模式下，若set方法返回false，则会抛出一个 TypeError 异常。

    通过 set 可实现 数据的双向绑定
*/

let target_11_1 = 0;
let target_11 = new Proxy({},{
    set:function(target,property,value,receiver){
        console.log(target,property,value,receiver,'proxy set');
        target_11_1 = value;
        return true;
    },
})

target_11.a = 20;
console.log(target_11,target_11_1);


// 简易 数据监听

let watcher = (obj,setBind,getBind)=>{
    return new Proxy(obj,{
        set:function(target,property,value,receiver){
            setBind(property,value);
            return Reflect.set(target,property,value);
        },
        get:function(target,property,receiver){
            getBind(target,property);
            return Reflect.get(target,property,receiver);
        },  
    })
}

let data_ = watcher({a:1},(prop,v)=>{ console.log(`监听到 ${prop} 改变为 ${v}`) },(target,prop)=>{ console.log(`监听获取 ${prop}`) });
data_.a = 13;
console.log(data_.a);



/*
    handler.setPrototypeOf(target,prototype) 方法 用来 拦截 Object.setPrototypeOf(). （ Object.setPrototypeOf(target, prototype)  为target 设置新的原型 ）
    如果成功修改了[[Prototype]], setPrototypeOf 方法返回 true,否则返回 false.

    拦截 
    Object.setPrototypeOf()
    Reflect.setPrototypeOf()

    约束
    如果 target 不可扩展, 原型参数必须与Object.getPrototypeOf(target) 的值相同.

    .handler.setPrototypeOf()方法如果返回false，如果是 Object.setPrototypeOf()被拦截，那么会抛出一个错误，
    如果是 Reflect.setPrototypeOf()被拦截，那么就返回false。
*/

let target_12 = new Proxy({},{
    setPrototypeOf:function(target,prototype){
        console.log(target,prototype,'proxy setPrototypeOf');
        return true;
    },
})

let target_13 = {
    name:123,
}
Reflect.setPrototypeOf(target_12,target_13); // 返回 false
console.log(target_12.name);
// Object.setPrototypeOf(target_12,target_13); // 抛出异常

let a = ['1','2','3'].map(parseInt)
console.log(a);

console.log({}.toString());

console.log(Number([]));
console.log({}.toString());
console.log(Number({}.toString()));


