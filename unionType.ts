//联合类型
//取值类型可以为多种类型中的一种

let myFavNum: string|number;
myFavNum='seven';
myFavNum=7;

myFavNum=false;//报错,未声明类型


//访问联合类型属性或方法
//TS不确定联合类型变量属于哪种类型时，只能访问联合类型共有属性或方法
function getLength(something: string|number): string{
    //return something.length;报错
    return something.toString();
}

//联合类型变量赋值，变量方法匹配其上最近赋值
let myFavType: string|number;
myFavType='xxx';
console.log(myFavType.length);
myFavType=666;
console.log(myFavType.length);//报错，number无length属性
