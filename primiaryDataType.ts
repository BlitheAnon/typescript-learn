let boo: boolean=true;

//构造函数boolean创造的对象不是布尔值
//Boolean为包装对象，是js的构造函数，boolean为基本数据类型
//new Boolean返回Boolean对象
// let newBoo: boolean=new Boolean(1);
//或
let newBoo2: boolean=Boolean(1);

//number类
//ES6 提供了二进制和八进制数值的最新的写法，分别用前缀 0b（0B）和 0o（0O）表示。
//16进制,0x
//10进制
let decLiteral: number=6
//16进制
let hexLiteral: number=0xf00d;
//8进制
let binaryLiteral: number=0b1010;

let notANumber: number=NaN;
let infinityNumber: number=Infinity;



//字符串
let myName: string='blithe';
let myAge:number=25;
//ES6模板字符串，${expr} 用来在模板字符串中嵌入表达式
console.log(`name:${myName},age:${myAge};`);

//空值
//ts中可使用void表示无返回值函数
function alertName(): void{
    alert('xx');
}
let unusable: void=undefined;
let unusable2: void=null;


//null和undefined是所有类型的子类型
// undefined和null可赋值为其他类型变量
let num: number=undefined;
let bool: boolean=null;
//而void类型变量不能为其他类型变量赋值
// let str: void;
// let newStr: number=str;
