//任意值
//any表示允许赋值为任意类型

//普通类型，赋值不可变
let str: string='xx';
// str=7;出错

let strAny: any='xx';
strAny=7;


//任意值属性和方法
let anything: any='hello';
//可访问任意属性
console.log(anything.myName);
//可调用任意方法
anything.setName('xxx');
anything.myName.setName('holy');


//变量声明时，未指定类型，会被识别成any类型
let something;//等价于let something: any;
something='hi';
something=66;
something.setName('Tom');
