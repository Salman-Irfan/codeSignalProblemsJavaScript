function solution(a) {
    let altSum = [0,0]
    let sum1 =0 
    let sum2 = 0
    if (1 <= a.length && a.length <= 100000){
        for (let i in a){
            if (45 <= a[i] && a[i] <= 100) {
                if ((i % 2) === 0){
                    sum1+=a[i]
                    altSum[0]=sum1
                }else {
                    sum2+=a[i]
                    altSum[1]=sum2
                }    
            }
        }    
    }
    
    return altSum
}
