//数组类型
//ts中数组类型有多种定义法
let arr: number[]=[1,2,3];
let mixArr: number[]=[1,'2',3];//报错，出现其他类型

arr.push('8');//报错，数组方法参数会限制

//数组泛型Array<eleType>
let arrGen: Array<number>=[1,2,3];

//接口表示数组
interface NumberArray{
    [index: number]:number;
}

let fib: NumberArray=[1,2,3];

//类数组,array like object，如arguments
function sum(){
    let args: number[]=arguments;//arguments为一个类数组，不能用普通数组方式表示
}

function add(){
    let args:{
        [index: number]:number;
        length: number;
        callee: Function;
    }=arguments;
}

//常用的类数组都有自己的接口定义，
//如 IArguments, NodeList, HTMLCollection 等：
function sum2(){
    let args: IArguments = arguments;
}

//IArguments时TypeScript已定义，如下
interface IArguments{
    [index: number]:any;
    length: number;
    callee: Function;
}

//any数组
let anyArr: any[]=[123,'xxx',{aa:12}];
