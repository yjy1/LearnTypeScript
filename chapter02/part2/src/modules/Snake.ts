class Snake {
    // 表示蛇头的元素
    head: HTMLElement
    // 蛇的身体(包括蛇头)
    bodies: HTMLCollection
    // 获取蛇的容器
    element: HTMLElement
    constructor() {
        this.head = document.querySelector('#snake > div')!
        this.element = document.getElementById('snake')!
        this.bodies = this.element.getElementsByTagName('div')
    }
    // 获取蛇的坐标(蛇头坐标)
    get X() {
        return this.head.offsetLeft
    }
    get Y() {
        return this.head.offsetTop
    }
    set X(value: number) {
        // 如果新值和旧值相同，则直接返回不再修改
        if (value === this.X) return
        // X的值的合法范围0-290之间
        if (value < 0 || value > 290) {
            // 进入判断说明蛇墙了
            throw new Error('蛇撞墙了')
        }
        // 修改x时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            // 加果发生了调头，让蛇同反方同继续移动
            if (value > this.X){
                // 如果新值value 大于旧值，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
                value = this.X - 10 
            }else{
                value = this.X + 10 
            }
        }
        this.moveBody()
        this.checkHeadBody()
        this.head.style.left = value + 'px'
    }
    set Y(value: number) {
        if (value === this.Y) return
        if (value < 0 || value > 290) {
            // 进入判断说明蛇墙了
            throw new Error('蛇撞墙了')
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            // 加果发生了调头，让蛇同反方同继续移动
            if (value > this.Y){
                // 如果新值value 大于旧值，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
                value = this.Y - 10 
            }else{
                value = this.Y + 10 
            }
        }
        this.moveBody()
        this.checkHeadBody()
        this.head.style.top = value + 'px'
    }

    // 蛇增加身体的方法
    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
        
    }
    // 添加一个蛇身体移动的方法
    moveBody() {
        console.log(this.bodies)
        /* 
            将后边的身体设置为前边身体的位置
                举例子:
                    第4节=第3节的位置
                    第3节=第2节的位置
                    第2节 = 蛇头的位置
        */
        for (let i = this.bodies.length - 1; i > 0; i--) { 
            // 获取前边身体的位置
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
            console.log('获取前边身体的位置',X,Y);
            
            // 将值设置到当前身体上
            (this.bodies[i] as HTMLElement ).style.left = X + 'px';
            (this.bodies[i] as HTMLElement ).style.top = Y + 'px';
        }
    }
    checkHeadBody(){
        // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
        for(let i=1; i<this.bodies.length; i++){
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                //进入判断说明蛇头撞到了身体，游戏结束
                throw new Error('蛇头撞到了身体了')
            }
        }
    }
}
export default Snake