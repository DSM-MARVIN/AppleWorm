import { getInputDirection } from "./input.js"

export const WORM_SPEED = 8
const wormBody = [{ x: 11, y: 11}]
let newSegments = 0

export function update(){
    addSegments()
    let inputDirection = getInputDirection()
    for(let i = wormBody.length - 2; i >= 0; i--){
        wormBody[i + 1] = { ...wormBody[i]}
    }

    wormBody[0].x += inputDirection.x
    wormBody[0].y += inputDirection.y
}

export function draw(gameBoard){
    wormBody.forEach(segment => {
        let wormElement = document.createElement('div')
        wormElement.style.gridRowStart = segment.y
        wormElement.style.gridColumnStart = segment.x
        wormElement.classList.add('worm')
        gameBoard.appendChild(wormElement)
    })
}

export function expandWorm(amount){
    newSegments += amount
}


export function onWorm(position, {ignoreHead = false} = {}){
    return wormBody.some((segment, index)=>{
        if(ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export function getWormHead(){
    return wormBody[0]
}

export function wormIntersection(){
    return onWorm(wormBody[0], {ignoreHead: true})
}

function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments(){
    for(let i = 0; i < newSegments; i++){
        wormBody.push({ ...wormBody[wormBody.length - 1]}) 
    }

    newSegments = 0;
}