function solution(n) {
    let nTimesTwo = n * 2
    let leadingCoeficient = n * n * 2
    let area = 0
    if(1 <= n && n <= 10000){
    if (n == 1) {
        area = n;
    } else if (n == 2){
        area = 5;
    } else {
        area = (leadingCoeficient-nTimesTwo)+1;
    }
    return area;    
    }
    return area;
    
    
}

let n = 1

let ans = solution(n)

console.log(ans)