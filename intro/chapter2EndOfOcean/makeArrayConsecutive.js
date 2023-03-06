function solution(statues) {
    let count = 0
    let sortedArr = [...statues]
    sortedArr.sort(function(a, b){return a - b});
    console.log(sortedArr)
    if(1 <= sortedArr.length && sortedArr.length <= 10){
        for(let i = 0; i<sortedArr.length; i++){
            
            if (statues[i] < 0 && statues > 20){ // ****
                break
            }else{
                if(i<sortedArr.length - 1){
                    if((sortedArr[i+1]-sortedArr[i]) == 1){
                        continue
                    }else{
                        sortedArr.splice((i+1),0,sortedArr[i]+1)
                        count++
                    }
            }   
            }
        }
    }
    return count
}
