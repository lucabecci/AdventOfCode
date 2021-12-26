
class Solution {
    static solve(data) 
    {
        const sequency = data[0].split(",")
        let boards = []
        let board = []
        for (let k = 0; k < data.length; k++) {
            if(k > 1){
                let splited = data[k].split(" ")
                let correct = []
                for (let z = 0; z < splited.length; z++) {
                    if(splited[z].trim() !== ""){
                        correct.push(splited[z].trim())
                    }
                }
                if(correct.length > 0){
                    board.push(correct)
                }
                if(data[k] === '' || data[k] === data[data.length - 1]){
                    boards.push(board)
                    board = []
                }
            }
        }
        console.log("Sequency:", sequency)
        console.log("Boards:", boards)
        let acc = 0;
        let points = 0;
        let numberwin = 0;
        let win = false
        let boardWinner = null;
        for (let j = 0; j < sequency.length; j++) {
            if(win) break;
            if(acc > 4) {
                acc = 0
            }
            if(Math.round(sequency.length / 5) > acc){
                let v = (Number(sequency[j].trim()))
                for (let b = 0; b < boards.length; b++) {
                    for (let r = 0; r < boards[b].length; r++) {
                        let accWin = 0
                        for (let n = 0; n < boards[b][r].length; n++) {
                            if(v === Number(boards[b][r][n])){
                                boards[b][r][n] = "x"
                            }
                        }
                        for (let w = 0; w < boards[b][r].length; w++) {
                            if(boards[b][r][w] === "x") accWin++
                        }
                        if(accWin > 4) win = true
                        if(win) {
                            numberwin = (Number(sequency[j].trim()))
                            break;
                        }
                    }
                    if(win) {
                        boardWinner = boards[b]
                        break;
                    }
                }
                acc++
            }
        }
        console.log("Board winner:", boardWinner)
        for (let rw = 0; rw < boardWinner.length; rw++) {
            for (let cw = 0; cw < boardWinner[rw].length; cw++) {
                if(boardWinner[rw][cw] !== "x") points += Number(boardWinner[rw][cw])
            }     
        }
        console.log("Total points:", points * numberwin)
    }
}

module.exports = Solution;
