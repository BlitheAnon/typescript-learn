//类型断言
//手动指定一个值的类型
//<类型>值
//值 as 类型，tsx中使用
function getLength(something: string|number): number{
    return something.length;
}

//在不确定类型时访问其中一个类型的属性或方法
function getLen(something: string|number):number{
    if((<string>something).length){
        return (<string>something).length;
    }else{
        return something.toString().length;
    }
}

//注意：断言成联合类型中不存在的类型不允许eg:<string>换位<boolean>
