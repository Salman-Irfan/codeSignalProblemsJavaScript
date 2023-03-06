function solution(inputArray) {
    let longestLength = 0
    let longestLengthIndexes = []
    // 1st constraint matching
    if (1 <= inputArray.length && inputArray.length <= 10){
        for (let i in inputArray){
            //2nd constraint matching
            if (1 <= inputArray[i].length && inputArray[i].length <= 10){
                if(longestLength < inputArray[i].length)
                longestLength = inputArray[i].length
            }
        }
        for (let i in inputArray){
            if (inputArray[i].length === longestLength){
                longestLengthIndexes.push(inputArray[i])
            }
        }
        return longestLengthIndexes   
    }
}
