/*
    继承
    组合继承 
*/

/*
    组合继承
    在子类的 构造函数中通过 Parent.call 继承 父类的属性 然后 改变子类的原型 来继承父类的函数

    这种继承方式优点在于构造函数可以传参，不会与父类引用属性共享，可以复用父类的函数，
    但是也存在一个缺点就是在继承父类函数的时候调用了父类构造函数，
    导致子类的原型上多了不需要的父类属性，存在内存上的浪费。
*/
console.log('继承')
function Parent(v){
    this.val = v;
}
Parent.prototype.getValue = function(){
    console.log(this.val);
}

function Child(v){
    Parent.call(this,v);
}
Child.prototype = new Parent();
let child = new Child(1);
child.getValue();


/*
    寄生组合 继承
    对组合继承进行了优化  组合继承的缺点在于 继承父类的时候 调用了 构造函数 
*/

function TwoChild(v){
    Parent.call(this,v);
}
TwoChild.prototype = Object.create(Parent.prototype,{
    constructor:{
        value:TwoChild,
        enumerable: false,
        writable: true,
        configurable: true
    }
})

let two = new TwoChild(2);
two.getValue();


/*
    class 继承 
    class 通过 extends 继承父类 （ 在子类构造函数中 必须使用 super super可看作 Parent.call(this,value) ）
*/

class ParentTow {
    constructor(value){
        this.value = value;
    }
    getValue(){
        console.log(this.value,'parentTwo');
    }
}

class ChildThree extends ParentTow{
    constructor(value){
        super(value)
        this.value = value;
    }
}

let childrenThree = new ChildThree('class 继承');
childrenThree.getValue();
