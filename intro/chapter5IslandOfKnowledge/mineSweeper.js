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
    console.log(matrixCopy)
    for (let i = 0; i <= rowsLength; i++) {
    for (let j = 0; j <= colsLength; j++) {
        if (matrixCopy[i][j]) { // if matrix has true value, converts their neighbors with ++
            if (i == 0) { // checking if it is first row
                if( j == 0) { // checking if its first column of row first
                    matrixCopy[i+1][j]++ // incrementing its bottom element
                    matrixCopy[i][j+1]++ // increment its next element
                }else if (j == colsLength) { // checking if its last column of first row
                    matrixCopy[i+1][j]++ // incrementing its bottom element
                    matrixCopy[i][j-1]++ // increment its previous element
                }else { // if the column lies in between the first row
                    matrixCopy[i+1][j]++ // incrementing its bottom element
                    matrixCopy[i][j+1]++ // increment its next element
                    matrixCopy[i][j-1]++ // increment its previous element
                }
            }else if (i == rowsLength) { // checking if it is last row
                if( j == 0) { // checking if its first column of last first
                    matrixCopy[i-1][j]++ // incrementing its upper element
                    matrixCopy[i][j+1]++ // increment its next element
                }else if (j == colsLength) { // checking if its last column of last row
                    matrixCopy[i-1][j]++ // incrementing its upper element
                    matrixCopy[i][j-1]++ // increment its previous element
                }else { // if the column lies in between the first row
                    matrixCopy[i-1][j]++ // incrementing its upper element
                    matrixCopy[i][j+1]++ // increment its next element
                    matrixCopy[i][j-1]++ // increment its previous element
                }
            }else { // if the rows are in between
                if (j == 0) { // if it exists first column of any row
                    matrixCopy[i+1][j]++ // incrementing its bottom element
                    matrixCopy[i-1][j]++ // incrementing its upper element
                    matrixCopy[i][j+1]++ // incrementing its next element
                }else if (j == colsLength) {
                    matrixCopy[i+1][j]++ // incrementing its bottom element
                    matrixCopy[i-1][j]++ // incrementing its upper element
                    matrixCopy[i][j-1]++ // incrementing its previous element
                }else {
                    matrixCopy[i+1][j]++ // incrementing its bottom element
                    matrixCopy[i-1][j]++ // incrementing its upper element
                    matrixCopy[i][j+1]++ // incrementing its next element
                    matrixCopy[i][j-1]++ // incrementing its previous element
                }
            }
        }
    }
}

    console.log(matrixCopy)
    return matrixCopy
}
