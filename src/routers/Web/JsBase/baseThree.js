/*
    判断 数据类型 
    typeof ( 可对原始类型 进行类型判断 除null （ null 会返回 object  最早32位系统中  null 二进制全为0  typeof 判断 前3位 位 0的是 object） )
    instanceof （  通过比较原型 判断类型 可通过 （Symbol.hasInstance ）自定义instanceof方法 ）
    Object.prototype.toString.call(xx) （  ）
*/
function a(){

}

a.prototype.test = function(){
    console.log(123);
}
let b = {};
let d = [];
console.log(a instanceof Object);
console.log(Object.prototype.toString.call(b));
console.log(typeof null);

