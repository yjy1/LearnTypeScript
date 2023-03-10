/* 
    对象中主要包含了两个部分:
        属性
        方法
 */
// 使用class来定义一个类
class Person {
    // 定义属性
    /*
        直接定义的属性是实例属性，需要通过对象的实例去访问:
        const per = new Person();
        per.name

        使用static开头的属性是静态属性(类属性)，可以直接通过类Person.age
        readonly开头的属性表示一个只读的属性无法修改
    */
    // readonly name: string = '孙悟空'
    name = "孙悟空"
    // 在属性前使用static 关键字可以定义类属性(静态属性)
    // static readonly age: number = 18
    static age = 18

    // 定义方法
    /* 如果方法以static 开头则方法就是类方法，可以直接通过类去调用 */
    sayHello(){
        console.log('大家好');
    }
}
const p = new Person()
console.log(p);
console.log(p.name, Person.age);
// p.name = 'ycj' /* Cannot assign to 'name' because it is a read-only property.ts(2540)*/
// Person.age = 20
p.sayHello()