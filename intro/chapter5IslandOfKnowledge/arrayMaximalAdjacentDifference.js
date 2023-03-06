function solution(inputArray) {
    let diff = []
    if (3<=inputArray.length && inputArray.length<=10){
        for (let i=0; i<inputArray.length-1; i++){
            if (-15 <= inputArray[i] && inputArray[i] <= 15){
                diff.push(inputArray[i+1] - inputArray[i])
            }
        }
        return Math.max(...diff.map(Math.abs))
    }
}