/*
    模块化
*/

/*
    模块化的好处
    解决命名冲突
    提供复用性
    提高代码可维护性
*/
/*
    早起模块化 （ 使用自执行函数 解决命名冲突 和 污染全局作用域 ）
*/
(function(v){
    console.log(v)
})('1');
// !function(){console.log(123)}();


/*
    AMD CMD 
    AMD 加载完模块 即可调用
    CMD 加载模块 可在 函数体 的任意地方 require 延迟加载  
*/


/*
    common.js require 

    a.js 
    module.exports = {
        a:1,
    }
    b.js 
    let modules = require('a.js');
    console.log(modules.a) // 1

*/