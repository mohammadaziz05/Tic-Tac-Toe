const boxes = document.querySelectorAll('.box')
const msg = document.getElementById("msg")
const result = document.querySelector(".result")
const resetBtn = document.getElementById("reset-btn")
const newgameBtn = document.getElementById("new-game")
let playerX = true



const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetGame = () => {
    playerX = true;
    enableBox()
    result.classList.add('.hide')    
}
const newGame = () => {
    playerX = true;
    enableBox()
    result.classList.add('hide')
    resetBtn.classList.remove('hide')    
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(playerX){
            box.textContent = 'X'
            playerX = false
        }
        else {
            box.textContent = 'O'
            playerX = true
        }
        box.disabled = true
        checkWinner()
    })
})
const enableBox = () => {
    for(let box of boxes){
        box.disabled = false
        box.textContent = ""
    }
}
const disableBox = () => {
    for(let box of boxes){
        box.disabled = true
    }

}

const showWinner = (winner) => {
    msg.textContent = `Congratulations! Player${winner} is Winner!`
    result.classList.remove("hide")
    disableBox()
    resetBtn.classList.add("hide")
}

const checkWinner = () => {
    for(let pattern of winPatterns) {
        const pos1 = boxes[pattern[0]].textContent
        const pos2 = boxes[pattern[1]].textContent
        const pos3 = boxes[pattern[2]].textContent

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){                
                showWinner(pos1)
            }
        }
    }
}

newgameBtn.addEventListener('click', newGame)
resetBtn.addEventListener('click', resetGame)
