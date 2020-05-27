/*
    this 的 指向问题
*/
console.log('Base one ')
function foo() {
    console.log(this.a)
}
var a = 1
foo()

const obj = {
    a: 2,
    foo: foo
}
obj.foo()

let c = new foo();


let s = {}
let fn = function () { console.log(this) }
fn.bind(s).bind()()

/*
    call 和 apply 实例
*/

let one = function(){
    this.name = '312';
}
let two = function(){
    console.log(this.name,'two');
    one.call(this);
}
two();


let three = function(){
    this.name = '312';
    four.apply(this);
}
let four = function(){
    console.log(this);
    console.log(this.name,'four');
}
four()

let five = function(){
    console.log(this.name,'five');
}
let fn1 = five.bind({name:'vvv'});
fn1();




/**
 * Function.prototype.call(thisArg,arg1,arg2,....,argN) 
 * 使用一个 指定的 this 值 和单独给出的一个参数或者多个参数 调用一个函数。
 * 该方法 与 apply 类似，只有一个 区别 ，apply 接受一个包含多个参数的数组 。call 接受一个 参数列表 
 * 
*/

let call_ = function(){
    console.log(this.name,'call',arguments)
}
call_.call({name:321},'one');



/**
 * Function.prototype.apply(thisArg,[arg1,arg2,...])
 * 使用一个指定的 this 值 和 一个数组提供的参数
 * 
*/

let max_ = [1,2,3,54,33,2];
console.log(Math.max.apply(null,max_));

console.log(Math.max.call(null,...max_));

