import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
// 游戏控制器，控制其他的所有类
class GameController {
    snake: Snake
    food: Food
    scorePanel: ScorePanel
    // 创建一个属性来存储蛇的移动方向 也就是按健的方向 
    direction: string = ''
    // 创建一个属性用来记录游戏是否结束
    isLive: boolean = true
    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }
    // 游戏的初始化方法，调用后游戏即开始
    init() {
        // document.addEventListener('keydown', this.handleKeydownEvent)
        document.addEventListener('keydown', this.handleKeydownEvent.bind(this))
        
    }
    //创建一个键盘按下的响应函数
    handleKeydownEvent(event: KeyboardEvent) {
        // console.log(event.key);
        console.log(this);

        /* 
            ArrowUp
            ArrowDown
            ArrowLeft
            ArrowRight
        */
        // 需要检查event.key的值是否合法(用户是否按了正确的按键)
        if (event.key == "ArrowUp" || event.key == "ArrowDown" || event.key == "ArrowLeft" || event.key == "ArrowRight") {
            // 修改direction属性
            this.direction = event.key
        }
        // 调用run 方法，使蛇移动
        this.run()
    }
    // 创建一个控制蛇移动的方法
    run() {
        /* 
            根据方向(this.direction)来使蛇的位置改变
                向上 top 减少
                向下 top 增加
                向左 Left 减少
                向右 Left 增加
        */
        let X = this.snake.X
        let Y = this.snake.Y
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10
                break
            case "ArrowDown":
            case "Down":
                Y += 10
                break
            case "ArrowLeft":
            case "Left":
                X -= 10
                break
            case "ArrowRight":
            case "Right":
                X += 10
                break
            default:
                break
        }

        this.snake.X = X
        this.snake.Y = Y

       this.isLive && setTimeout( this.run.bind(this), 300 - (this.scorePanel.level - 1) *30);
    }
}
export default GameController