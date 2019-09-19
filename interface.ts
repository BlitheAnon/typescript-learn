//接口
//接口是对行为的抽象，实现由class+implement

interface Person{
    name: string;
    age: number;
}

//约束tom属性和Person一致
let tom: Person={
    name: 'Tom',
    age: 25
};

//接口首字母大写，建议I前缀
//变量比接口少不允许,多也不允许
let jerry: Person={
    name: 'jerry',
    gender: 'male'
}

//可选属性
interface IPerson{
    name: string;
    age?: number;//age为可选
}

//可选属性可以不存在，不允许添加未定属性
let tim: IPerson={
    name: 'tim'
}


//任意属性，接口允许任意类型属性
interface IPeople{
    name: string;
    age?: number;
    [propName: string]:any;
}

let steve: IPeople={
    name:'steve',
    gender: 'male'
}

//注意：
//一旦定义了任意属性，
//那么确定属性和可选属性的类型都必须是它的类型的子集：
interface IHuman{
    name: string;
    age?: number;
    [xx:string]:string;//接口内所有类型必须为string子集
}


//只读属性
//对象字段只能在创建时被赋值,使用readonly，定义
interface IReadonly{
    readonly id: number;
}

let account: IReadonly={
    id: 124
}

account.id=456;//报错，只读

//注意：
//只读的约束存在于第一次给对象赋值的时候，
//而不是第一次给只读属性赋值的时候：
