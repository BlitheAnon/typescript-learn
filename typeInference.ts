//类型推论
//未指定类型，编译报错
let myFavoriteNumber = 'seven';
//等价于let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

//定义时未赋值，被推断为any类型
let favNum;
favNum='666';
favNum=666;
