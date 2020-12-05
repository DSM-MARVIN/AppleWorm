
let input1 = document.querySelector('.up')
let input2 = document.querySelector('.left')
let input3 = document.querySelector('.right')
let input4 = document.querySelector('.down')
let inputDirection = { x: 0, y: 0}
let lastInputDirection = { x: 0, y: 0}

input1.addEventListener('click', ()=>{
    inputDirection = { x: 0, y: -1}
})
input2.addEventListener('click', ()=>{
    inputDirection = { x: -1, y: 0}
})
input3.addEventListener('click', ()=>{
    inputDirection = { x: 1, y:  0}
})
input4.addEventListener('click', ()=>{
    inputDirection = { x: 0, y:  1}
})

window.addEventListener('keydown', e => {
    switch(e.key){
        case 'ArrowUp' :
        if(lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1}
            break
        case 'ArrowDown' :
        if(lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y:  1}
            break
        case 'ArrowLeft' :
        if(lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0}
            break
        case 'ArrowRight' :
        if(lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y:  0}
            break
    }
})

export function getInputDirection(){
    lastInputDirection = inputDirection
    return inputDirection
}