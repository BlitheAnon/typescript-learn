//函数的类型
//函数需要对输入输出进行限制
function sum(x: number,y: number): number{
    return x+y;
}

sum(1,2,3);
sum(1);//报错，函数参数必须匹配


//函数表达式
//自写
let mySum=function(x:number,y:number): number{
    return x+y;
};

//实际ts中得函数表达式,给myS添加类型,=>左边输入类型，右边输出类型
let myS: (x: number,y:number)=>number=function(x:number,y:number):number{
    return x+y;
}

//接口定义函数形状
interface SearchFunc{
    //定义函数参数，返回值类型
    (source: string,subString: string):boolean;
}

let mySearch: SearchFunc;
mySearch=function(cc:string,ss:string){
    return cc.search(ss)!==-1;
}

//可选参数，注意：可选参数必须在必须参数后
function buildName(first: string,second?: string){
    if(second){
        return first+second;
    }else{
        return first;
    }
}

let tom=buildName('tom');


//参数默认值，不受可选参数在后限制
function buildNam(first: string,last:string='cat'){
    return first+last;
}

let jerry=buildNam('jerry');
let tiff=buildNam(undefined,'cat');

//剩余参数
function push(arr,...items) {
    items.forEach(function(item){
        arr.push(item);
    });
}
let a=[];
push(a,1,2,3);

function pushx(arr:any[],...items:any[]){
    items.forEach(function(item){
        arr.push(item);
    });
}

//注意，rest参数只能是最后一个参数


//重载,重载允许函数接受不同数量或类型的参数
//重载实现
//函数定义
function reverse(x: number):number;
function reverse(x: string):string;
//联合类型实现
function reverse(x:number|string):number|string{
    if(typeof x==='number'){
        return Number(x.toString().split('').reverse().join(''));
    }else if(typeof x==='string'){
        return x.split('').reverse().join('');
    }
}
//注意： TS会优先从函数定义开始匹配，精确定义放最后
