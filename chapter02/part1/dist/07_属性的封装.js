"use strict";
(function () {
    /*
        TS可以在属性前添加属性的修饰符
            public 修饰的属性可以在任意位置访问(修改) 默认值
            private 私有属性，私有属性只能在类内部进行访问 修改
                通过在类中添加方法使得私有属性可以被外部访同
            protected 受包含的属性，只能在当前类和当前类的子类中使用
    */
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /*
            getter方法用来读取属性
            setter方法用来设置属性
                它们被称为属性的存取器
        */
        // 定义方法，用来获取name 属性
        // getName() {
        //     return this._name
        // }
        // // 定义方法，用来设置name 属性
        // setName(name: string) {
        //     this._name = name
        // }
        // setAge(value: number) {
        //     // 判断年龄是否合法
        //     if (value >= 1)
        //         this._age = value
        // }
        // Ts设置getter方法的方式
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        set age(value) {
            if (value >= 1)
                this._age = value;
        }
    }
    const p = new Person('ycj', 26);
    /* 现在属性是在对象中设置的，属性可以任意的被修改
           属性可以任意被修改将会导致对象中的数据变得非常不安全
    */
    //  p._name = 'yangchengjie'
    //  p._age = -27
    //  console.log(p);
    //  console.log(p.getName());
    // p.setName('yang')
    // p.setAge(-27)
    // p.name = 'aaa'
    // p.age = 22
    // console.log(p);
    // console.log(p.name);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    // class C {
    //     name: string
    //     age: number
    //     // 可以直接将属性定义在构造函数中
    //     constructor(name: string, age: number) {
    //         this.name = name
    //         this.age = age;
    //     }
    // }
    class C {
        // 可以直接将属性定义在构造函数中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const b = new B(10);
    console.log(b);
    const c = new C('我是C', 11);
    console.log(c);
})();
