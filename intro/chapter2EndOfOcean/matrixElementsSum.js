function solution(matrix) {
    const getI = new Set();
    let sumArr = 0
    if (1 <= matrix.length && matrix.length <= 5){
        for (let i = 0; i < matrix.length; i++){
            if (1 <= matrix[i].length && matrix[i].length <= 5){
                for (let j = 0; j < matrix[0].length; j++){
                    if (0 <= matrix[i][j] && matrix[i][j] <= 10){
                        if (matrix[i][j] === 0){
                            getI.add(j);
                        } else if (!getI.has(j)) {
                            sumArr += matrix[i][j];
                        }        
                    }
                }   
            }
        }   
    }
    return sumArr
}
