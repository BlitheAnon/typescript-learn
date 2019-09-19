var boo = true;
//构造函数boolean创造的对象不是布尔值
//Boolean为包装对象，是js的构造函数，boolean为基本数据类型
//new Boolean返回Boolean对象
// let newBoo: boolean=new Boolean(1);
//或
var newBoo2 = Boolean(1);
//number类
//ES6 提供了二进制和八进制数值的最新的写法，分别用前缀 0b（0B）和 0o（0O）表示。
//16进制,0x
//10进制
var decLiteral = 6;
//16进制
var hexLiteral = 0xf00d;
//8进制
var binaryLiteral = 10;
var notANumber = NaN;
var infinityNumber = Infinity;
//字符串
var myName = 'blithe';
var myAge = 25;
console.log("name:" + myName + ",age:" + myAge + ";");
