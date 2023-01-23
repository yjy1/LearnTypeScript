"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('hello~');
        }
    }
    class Dog extends Animal {
        //如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
        constructor(age, name) {
            super(name); // 调用父类的构造函数
            this.age = age;
        }
        sayHello() {
            // 在类时方法中 super就表示当前类的父类
            // super.sayHello()
            console.log('汪汪汪~');
        }
    }
    const d = new Dog(1, '小白');
    console.log(d);
    d.sayHello();
})();
