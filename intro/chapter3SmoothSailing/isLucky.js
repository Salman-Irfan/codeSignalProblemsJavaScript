function solution(n) {
    if (10 <= n && n <= 1000000){
        let nString = n.toString()
        let firstHalf = nString.substring(0, nString.length / 2)
        let secondHalf = nString.substring(nString.length / 2)
        
        let sum1 = 0, sum2 = 0
        
        for (let i in firstHalf){
            sum1 += parseInt(firstHalf[i])
        }
        
        for (let i in secondHalf){
            sum2 += parseInt(secondHalf[i])
        }
        return sum1 === sum2    
    }
    
}
