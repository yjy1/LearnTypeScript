// 也可以直接使用字面量进行类型声明
let a: 10
a = 10
/* Type '11' is not assignable to type '10'.ts(2322)
 */
// a = 11 

// 可以用 | 来连接多个类型
let b :'male' | 'female'
b = 'male'
b = 'female'
// b = 'a'

let c: boolean | string
c = true 
c = 'yangchengjie'

// any表示的是任意类型，一个变量设置类型为any之后相当于关闭了ts类型检测
// let d: any
// 若不指定类型，则默认为any类型（隐式的）
let d 
d = 'ycj'
d = 10
d = true
d =[]
d = {}
d = null
d = undefined

// unknown 表示未知类型的值
let e: unknown
e = 1
e = 'yangchengjie'
e = false
e = []
e = {}
e = null
e = undefined

let s :string
// d的类型是any，可以赋值给任意变量
s = d
/* Type 'unknown' is not assignable to type 'string'.ts(2322)
 */
// unknown实际上是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
// s = e //报错
if(typeof e === "string"){ //不报错，因为做了类型判断
    s = e
}

// 类型断言,可以用来告诉解析器变量的实际类型
/* 
    语法：
        变量 as 类型
        <类型> 变量
*/
s = e as string
s = <string>e

function fn():boolean{
    return true
}
function fn2():void{
    return undefined
}
function fn3(){
    return null
}
/* function fn4(num: any): true | 123 | null
*/
function fn4(num){
    if(num) return true
    else if(num == '123') return 123
    else return null
}
// never 表示永远不会返回结果
function fn5():never{
    throw new Error('error!')
}