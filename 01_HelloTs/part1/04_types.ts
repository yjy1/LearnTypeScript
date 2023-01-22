// object表示一个js对象
let a: object
a = {}
a = function () {

}

// {}用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值，属性名：属性值}
// let b: { name: string }
// let b: { name: string, age: number }
let b: { name: string, age?: number }
//b.name = 2 /* Type 'number' is not assignable to type 'string' */
//b.name = 'ycj' /* Variable 'b' is used before being assigned.ts(2454)*/
//b = {} /* Property 'name' is missing in type '{}' but required in type '{ name: string; }' */
// b = { name: 3 }
//b = { aa: '3' }
// b = { name: 'ycj', age: 26 }
b = { name: 'ycj' }

//  [proName: string]: any 表示任意类型的属性
let c: { name: string, [proName: string]: any }
c = { name: 'yangchengjie', age: 26, weight: "55kg ", gender: '男' }

let d: Function
d = () => {

}
d = function () {

}

/* 
    设置函数结构的类型声明：
        语法：（形参1：类型1，形参2：类型2）=>返回值
*/
let dd: (a: number, b: number) => number
dd = function (a, b): number {
    return a + b
}

// string[]表示字符串数组
let e: string[]
e = ['a', 'b', 'c']
// e = [1, 2, 3]
// e = [{ name: 'ycj' }]

// 数值类型的数组
let f: number[]
f = [1, 2, 3]

let g: Array<string>
g = ['a', 'b', 'c']
// g = [1,2,3]

let g2: Array<number>
g2 = [1, 2]

let g3: Array<object>
g3 = [{ name: 'ycj' }, { age: 26 }]

let g4: Array<any>

/* 
    元组，就是固定长度的数组
        语法：[类型，类型]
*/
let h: [string, string]
h = ['hello', 'abc']
// h = ['hello', 'abc',123]

/* 
    enum枚举
*/
// let i: Enumerator
// let i: { name: string, gender: string }
enum Gender {
    '男' = 1,
    '女' = 0
}
// let i: { name: string, gender: 0 | 1 }
let i: { name: string, gender: Gender }
i = {
    name: '杨程杰',
    gender: Gender.男
}
console.log(i.gender === Gender.男);

// &表示同时
let j: { name: string } & { age: number }
j = { name: 'ycj', age: 26 }

// 类型的别名

// type myType = string
// let m: myType
// m = 3

// let k: 1 | 2 | 3 | 4 | 5
// let l: 1 | 2 | 3 | 4 | 5
// let m: 1 | 2 | 3 | 4 | 5
type myType = 1 | 2 | 3 | 4 | 5
let k: myType
let l: myType
let m: myType
k = 1
k = 6