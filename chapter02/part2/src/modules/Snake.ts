class Snake{
    // 表示蛇头的元素
    head:HTMLElement
    // 蛇的身体(包括蛇头)
    bodies: HTMLCollection
    // 获取蛇的容器
    element:HTMLElement
    constructor( ){
        this.head = document.querySelector('#snake > div')!
        this.element = document.getElementById('snake')!
        this.bodies = this.element.getElementsByTagName('div') 
    }
    // 获取蛇的坐标(蛇头坐标)
    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }
    set X(value:number){
        // 如果新值和旧值相同，则直接返回不再修改
        if(value === this.X) return
        // X的值的合法范围0-290之间
        if (value < 0 || value > 290){
            // 进入判断说明蛇墙了
            throw new Error('蛇撞墙了')
        }
        this.head.style.left = value + 'px'
    }
    set Y(value:number){
        if(value === this.Y) return
        if (value < 0 || value > 290){
            // 进入判断说明蛇墙了
            throw new Error('蛇撞墙了')
        }
        this.head.style.top = value + 'px'
    }

    // 蛇增加身体的方法
    addBody(){
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }
}
export default Snake