(function () {
    // 定义一个表示狗的类
    class Dog {
        name: string
        age: number
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
        sayHellog(){
            console.log('汪汪汪');
        }
    }
    const d = new Dog('小白',2)
    console.log(d);
    
})()