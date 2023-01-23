"use strict";
(function () {
    // 定义一个表示狗的类
    class Dog {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHellog() {
            console.log('汪汪汪');
        }
    }
    const d = new Dog('小白', 2);
    console.log(d);
})();
