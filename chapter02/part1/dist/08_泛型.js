"use strict";
/* function fn(a: number): number {
    return a
} */
/* 在定义两数或是类时，如果遇到类型不明确就可以使用泛型 */
function fn(a) {
    return a;
}
// 可以直接调用具有泛型的函数
let result = fn(2); //不指定泛型，TS 可以自动对类型进行推断
let result2 = fn('hello'); // 指定泛型
//泛型可以同时指定多个
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(10, 'hello !');
// T extends Inter 表示泛型T必须时Inter实现类(子类)
function fn3(a) {
    return a.length;
}
fn3('123');
fn3({ length: 3 });
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const c = new MyClass('孙悟空');
// const c = new MyClass(234)
