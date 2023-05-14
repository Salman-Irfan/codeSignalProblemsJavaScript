function solution(inputArray, elemToReplace, substitutionElem) {
    if(0<=inputArray.length && inputArray.length<= 10**4){ // checking constraint one
        for(let i in inputArray){
            if(0<=inputArray[i] && inputArray[i] <= 10**9){ // checking constraint two
                if(inputArray[i] === elemToReplace){
                inputArray[i] = substitutionElem
                }    
            }
        }
        return inputArray   
    }
}
