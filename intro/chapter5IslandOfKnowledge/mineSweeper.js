// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup

function solution(matrix) {
    let rowsLength = matrix.length -1
    let colsLength = matrix[0].length -1
    let matrixCopy = [...matrix]
    for (let i in matrixCopy){
        for (let j in matrixCopy[i]){
            if(matrixCopy[i][j]){
                matrixCopy[i][j] = 1
            }else{
                matrixCopy[i][j] = 0
            }
        }
    }
    for (let i in matrixCopy){
        for (let j in matrixCopy[i]){
            if(matrixCopy[i][j]){ // if matrix has true value, converts there neighbours with 2
                if (i == 0 ){ // checking if it is first row
                    matrixCopy[i+1][j]++
                }
                else if (i == rowsLength){ // checking if it is last row 
                    matrixCopy[i-1][j]++
                }else if (j == 0){ // checking if it is first column
                    matrix[i][j+1]++
                }else if (j == colsLength){ // checking if it is last column
                    matrix[i][j-1]++
                }else { // converting the neighbours with 2
                    matrixCopy[i+1][j]++
                    matrixCopy[i-1][j]++
                    matrixCopy[i][j+1]++
                    matrixCopy[i][j-1]++
                }
            }
        }
    }
    return matrixCopy
}
