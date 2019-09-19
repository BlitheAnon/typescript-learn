//内置对象
//JS内置对象可直接在TS中当做定义好类型
let b: Boolean=new Boolean(1);
let e: Error= new Error('Error occurred');
let d: Date=new Date();
let r: RegExp=/[a-z]/;

//DOM和BOM内置对象
//Document、HTMLElement、Event、NodeList等
let body: HTMLElement=document.body;
let allDiv: NodeList=document.querySelectorAll('div');
document.addEventListener('click',function(e: MouseEvent) {
    //
})

//node.js不是内置对象的一部分
//TypeScript 写 node.js需引入第三方声明文件
//npm install @types/node --save-dev
