function solution(inputArray) {
    let count = 0;
    if (3<=inputArray.length && inputArray.length<=100000){
        for (let i=0; i<inputArray.length-1; i++){
            if (-100000<=inputArray[i] && inputArray[i]<=100000){
                while(inputArray[i+1]<=inputArray[i]){
                    inputArray[i+1]++
                    count++
                }    
            }
            
        }    
    }
    
    return count
}
