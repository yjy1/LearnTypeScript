import './style/index.less'
// console.log(123);


// const food = new Food()
// console.log(food.X,food.Y);
// food.change()
// console.log(food.X,food.Y);
import Food from './modules/Food'
import ScorePanel from './modules/ScorePanel'
const food = new Food()
food.change()
console.log(food);

const scorePanel = new ScorePanel(5,30)
for (let i = 0; i < 120; i++) {
    scorePanel.addScore()
}