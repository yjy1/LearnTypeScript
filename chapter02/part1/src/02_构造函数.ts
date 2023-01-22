 
class Dog {
    name :string
    age :number

    // constructor 被称为构造函数
    // 构造函数会在对象创建时调用
    constructor(name: string, age: number) {
        // 在实例方法中，this就表示当前当前的实例
        // 在构造两数中当前对象就是当前新建的那个对象
        // 可以通过this向新建的对象中添加属性
        this.name = name
        this.age = age
        console.log(this);
    }
    bark(){
        console.log('汪汪汪');
        // 在方法中可以通过this 来表示当前调用方法的对象
        console.log('bark--',this);
    }
} 
const d = new Dog('小白',3)
const d2 = new Dog('小黑',2)
const d3 = new Dog('旺财',4)
d.bark()
d2.bark()
// const d4 = new Dog()
// console.log(d);
// console.log(d2);
// console.log(d3);
// console.log(d4);
