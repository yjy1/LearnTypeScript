import Snake  from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
// 游戏控制器，控制其他的所有类
class GameController{
    snake:Snake
    food:Food
    scorePanel:ScorePanel
    // 创建一个属性来存储蛇的移动方向 也就是按健的方向 
    direction:string = ''

    constructor( ){
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }
    // 游戏的初始化方法，调用后游戏即开始
    init(){
        // document.addEventListener('keydown', this.handleKeydownEvent)
        document.addEventListener('keydown', this.handleKeydownEvent.bind(this))
    }
    //创建一个键盘按下的响应函数
    handleKeydownEvent(event:KeyboardEvent){
        // console.log(event.key);
        console.log(this);
        
        /* 
            ArrowUp
            ArrowDown
            ArrowLeft
            ArrowRight
        */
       // 需要检查event.key的值是否合法(用户是否按了正确的按键)
        if (event.key == "ArrowUp" || event.key == "ArrowDown" || event.key == "ArrowLeft" || event.key == "ArrowRight"){
            // 修改direction属性
            this.direction = event.key
        }
    }
}
export default  GameController