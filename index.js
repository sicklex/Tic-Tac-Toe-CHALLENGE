const eventEl = document.querySelector(".event-el")
const startButton = document.querySelector(".start-button")
const menssageEl = document.querySelector(".menssage-el")
let playerOne = true
let itsAlive = true
let board = ["","","","","","","","",""]
let available = []
let winner = null
const winningCondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
eventEl.addEventListener("click", e =>{
    if (e.target.matches("button")) {
        let key = e.target
        const clickedCellIndex = parseInt(key.getAttribute("data-cell-index"))
        if (board[clickedCellIndex] === "") {
            if (playerOne && itsAlive) {
                key.textContent = "X"
                board[clickedCellIndex] = "X"
                available.push("X")
                playerOne = false
            } else if (!playerOne && itsAlive) {
                key.textContent = "O"
                board[clickedCellIndex] = "O"
                available.push("X")
                playerOne = true
            }
            console.log(available.length)
            checkWinner()
        } 
    }
})

function checkWinner(){
    for (let i = 0; i <= 7;  i++) {
       const winningConditions = winningCondition[i]
        const a = board[winningConditions[0]]
        const b = board[winningConditions[1]]
        const c = board[winningConditions[2]]
        if (a === "" && b === "" && c === "") {
            continue
        }if(a === "X" && b === "X" && c === "X"){
            winner = "X"
            menssageEl.textContent = `${winner} its the winner`
            itsAlive = false
        }if(a === "O" && b === "O" && c === "O"){
            winner = "O"
            menssageEl.textContent = `${winner} its the winner`
            itsAlive = false
        }if (winner === null && available.length === 9) {
            winner = "Tie"
            menssageEl.textContent = `${winner} its the winner`
        }
    }
}


