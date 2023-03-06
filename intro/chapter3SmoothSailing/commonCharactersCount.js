function solution(s1, s2) {
    let count = 0
    let s1Arr = s1.split('')
    let s2Arr = s2.split('')
    if ( (1 <= s1.length && s1.length <= 15) && (1 <= s2.length && s2.length <= 15)){
        for (let i in s1Arr){
            let index = s2Arr.indexOf(s1Arr[i])
            if(index != -1) { // if element is found, -1 showing element not founded
                count++
                s2Arr.splice(index, 1) // removing repetencies
            }
        }    
    }
    return count
}
