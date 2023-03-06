function solution(a, b) {
    let diff = 0
    let indexes = []
    if (3 <= a.length && a.length <= 100000){
        for (let i in a){
            if (1 <= a[i] && a[i] <= 1000){
                if (a[i] !== b[i]){
                    diff++
                    indexes.push(i) // storing those indexes where difference occurs
                }
                if (diff > 2) {
                    return false
                }    
            }
        }    
    }
    if (diff === 2 && a[indexes[0]] === b[indexes[1]] && a[indexes[1]] === b[indexes[0]]) { // checking if it can be made equal by swapping
        return true
    }
    return diff === 0
}
