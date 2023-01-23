/* function fn(a: number): number {
    return a
} */

/* 在定义两数或是类时，如果遇到类型不明确就可以使用泛型 */
function fn<T>(a: T): T {
    return a
}
// 可以直接调用具有泛型的函数
let result = fn(2) //不指定泛型，TS 可以自动对类型进行推断
let result2 = fn<string>('hello') // 指定泛型
//泛型可以同时指定多个
function fn2<T, K>(a: T, b: K): T {
    console.log(b);
    return a
}
fn2<number,string>(10,'hello !')

interface Inter{
    length:number    
}
// T extends Inter 表示泛型T必须时Inter实现类(子类)
function fn3<T extends Inter>(a: T): number {
    return  a.length
}
fn3('123')
fn3({length:3})

class MyClass<T>{
    name: T
    constructor(name:T){
        this.name = name
    }
}
const c = new MyClass<string>('孙悟空')
// const c = new MyClass(234)