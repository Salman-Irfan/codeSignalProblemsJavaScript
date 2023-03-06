function solution(inputString) {
    if (1 <= inputString.length && inputString.length <= 100000){
        const reversedString = inputString.split('').reverse().join('');
        return inputString === reversedString;
    }
}
