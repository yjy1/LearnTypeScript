"use strict";
(function () {
    // 定义一个annimal类
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHellog() {
            console.log('动物在叫');
        }
    }
    // 定义一个表示狗的类
    /* Dog extends Animal- 
    此时，Animal被称为类，Dog 被称为子类
    使用继承后，子类将会拥有父类所有的方法和属性
    这样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法 
    如果希望在子类中添加一些父类中没有的属性或方法直接加就行
    如果在子类中添加了和父类相同的方法，则子类方法会覆盖掉父类的方法
        这种子类覆盖掉父类方法的形式，我们称为方法重写
    */
    class Dog extends Animal{
         run(){
            console.log(`${this.name}在跑~`);
         }
         sayHellog() {
            console.log(`${this.name}在叫~`);
        }
    }
    class Cat extends Animal{
        run(){
            console.log(`${this.name}在跑~`);
         }
    }
    const d = new Dog('小白', 2);
    const c = new Cat('小黑', 3);
    console.log(d);
    console.log(c);
    d.sayHellog()
    d.run()
    c.run()
    c.sayHellog()
})();
