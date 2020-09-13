import {onWorm, expandWorm} from './worm.js'
import {randomGridPosition} from './grid.js'
let food = {x: 10, y: 1}
const EXPANSION_RATE = 1
let scoreNum = 0;


export function update(){
    if(onWorm(food)){
        expandWorm(EXPANSION_RATE)
        scoreNum++
        food = getRandomFoodPosition()
        eatsound.play()
    }
    // return scoreNum
    document.querySelector('.score').textContent = scoreNum;
    document.querySelector('.endScore').textContent = scoreNum;
}


export function draw(gameBoard){
        let foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition(){
    let newFoodPosition;
    while( newFoodPosition == null || onWorm(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}