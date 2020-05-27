// 闭包 
// 在 JS 中，闭包存在的意义就是让我们可以间接访问函数内部的变量。
console.log('Base two ')

function A(){
    let d = 1;
    window.b = function(){
        console.log(d);
    }
}

A();
window.b();


// 深浅 拷贝

// 浅拷贝  ... 和 =  Object.assign eval  属于 浅 拷贝
// Object.assign 只会拷贝所有的属性值到新的对象中，如果属性值是对象的话，拷贝的是地址，所以并不是深拷贝。 
let a = {
    age:1,
    l:{
        name:2,
        n:undefined,
    },
}
let b = a;
b.age = 2;
let c = Object.assign({},a);
c.l.name = 3;
let g = {...a};
console.log(a,b,c,g,'x');
/*
    深拷贝 方法  
    JSON.parse(JSON.stringify(xxx)) 
    具有 局限性
    会忽略 undefined
    会忽略 symbol
    不能序列化函数
    不能解决循环引用的对象

    MessageChannel （ 如果你所需拷贝的对象含有内置类型并且不包含函数 ）

*/
function deepCopy(obj){
    return new Promise(resolve=>{
        const { port1, port2 } = new MessageChannel()
        port2.onmessage = ev => resolve(ev.data)
        port1.postMessage(obj)
    })
}
(async()=>{
  let d = await deepCopy(a);
  c.l.name = 6;
  console.log(a,b,c,d);
})()




function deepClone(obj) {
  function isObject(o) {
    return (typeof o === 'object' || typeof o === 'function') && o !== null
  }

  if (!isObject(obj)) {
    throw new Error('非对象')
  }

  let isArray = Array.isArray(obj)
  let newObj = isArray ? [...obj] : { ...obj }
  Reflect.ownKeys(newObj).forEach(key => {
    newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
  })

  return newObj
}

let obj = {
  a: [1, 2, 3],
  m:1,
  b: {
    c: 2,
    d: 3
  }
}
let newObj = deepClone(obj)
newObj.m = 3;
console.log(obj.m,'xx') // 1