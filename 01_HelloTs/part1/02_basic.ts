// let a
// a = 10
// a = 'hello'

// 声明一个变量，同时指定它的类型
let a: number
a = 123
/* 报错：Type 'string' is not assignable to type 'number'.ts(2322)
*/
// a = 'a' 

let b: string
b = 'hello'
// b = 123

// let c: boolean
// c = true
// c = 123

// 声明变量和赋值是同时进行的，TS可以自动对变量进行检测
let c = true
// c = 'hello'

// js中的函数是不考虑参数的类型和个数的
/* Parameter 'a' implicitly has an 'any' type, but a better type may be inferred from usage.ts(7044)
*/
// function sum(a,b){ 
//     return a + b
// }
// // console.log(sum(1,2)); // 3
// console.log(sum(1,'23456')); // '123456'
 
function sum(a: number, b: number) {
    return a + b
}
console.log(sum(10, 20));
/* Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
 */
// console.log(sum('1', 2));
/* Argument of type 'boolean' is not assignable to parameter of type 'number'.ts(2345)
 */
// console.log(sum(1, true));
/* Expected 2 arguments, but got 3.ts(2554)
*/
// sum(10, 20, 30 ) 
/* An argument for 'b' was not provided. */
// sum(10 )  
console.log();
let result = sum(10,20)


