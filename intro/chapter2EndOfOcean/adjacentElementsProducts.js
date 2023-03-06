function solution(inputArray) {
    let newArr = [];
    for (let i = 0; i < inputArray.length -1; i++){
        newArr[i] = (inputArray[i] * inputArray[i+1])
    }
    const highest = Math.max(...newArr);
    return highest;
}
let inputArray = [3, 6, -2, -5, 7, 3]
console.log(inputArray)
let a = solution(inputArray)
console.log(a)