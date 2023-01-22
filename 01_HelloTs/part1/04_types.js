// object表示一个js对象
var a;
a = {};
a = function () {
};
// {}用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值，属性名：属性值}
// let b: { name: string }
// let b: { name: string, age: number }
var b;
//b.name = 2 /* Type 'number' is not assignable to type 'string' */
//b.name = 'ycj' /* Variable 'b' is used before being assigned.ts(2454)*/
//b = {} /* Property 'name' is missing in type '{}' but required in type '{ name: string; }' */
// b = { name: 3 }
//b = { aa: '3' }
// b = { name: 'ycj', age: 26 }
b = { name: 'ycj' };
//  [proName: string]: any 表示任意类型的属性
var c;
c = { name: 'yangchengjie', age: 26, weight: "55kg ", gender: '男' };
var d;
d = function () {
};
d = function () {
};
/*
    设置函数结构的类型声明：
        语法：（形参1：类型1，形参2：类型2）=>返回值
*/
var dd;
dd = function (a, b) {
    return a + b;
};
// string[]表示字符串数组
var e;
e = ['a', 'b', 'c'];
// e = [1, 2, 3]
// e = [{ name: 'ycj' }]
// 数值类型的数组
var f;
f = [1, 2, 3];
var g;
g = ['a', 'b', 'c'];
// g = [1,2,3]
var g2;
g2 = [1, 2];
var g3;
g3 = [{ name: 'ycj' }, { age: 26 }];
var g4;
/*
    元组，就是固定长度的数组
        语法：[类型，类型]
*/
var h;
h = ['hello', 'abc'];
// h = ['hello', 'abc',123]
/*
    enum枚举
*/
// let i: Enumerator
// let i: { name: string, gender: string }
var Gender;
(function (Gender) {
    Gender[Gender["\u7537"] = 1] = "\u7537";
    Gender[Gender["\u5973"] = 0] = "\u5973";
})(Gender || (Gender = {}));
// let i: { name: string, gender: 0 | 1 }
var i;
i = {
    name: '杨程杰',
    gender: Gender.男
};
console.log(i.gender === Gender.男);
