import {update as updateWorm, draw as drawWorm, WORM_SPEED, getWormHead, wormIntersection} from './worm.js'
import {update as updateFood, draw as drawFood} from './food.js'
import {outSideGrid} from './grid.js'


// let Score = document.querySelector('.score');
// Score.textContent = scoreNum;

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

// backsound.play()


function main(currentTime){
    if(gameOver){
        endsound.play()
               document.querySelector(".GameOver").style.display = "block";
        return document.querySelector(".GameOver .text").innerText = ""
        // return alert('you lose')
    
    }

    window.requestAnimationFrame(main)
    let secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / WORM_SPEED) return

    console.log("Render")
    lastRenderTime = currentTime

    update()
    draw()
}



window.requestAnimationFrame(main)

function update(){
    updateWorm()
    updateFood()
    checkDeath()
}

function draw(){
    gameBoard.innerHTML = '';
    drawWorm(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outSideGrid(getWormHead()) || wormIntersection()
}




