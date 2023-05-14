function solution(n, firstNumber) {
    if (4 <= n && n <= 20 && 0 <= firstNumber && firstNumber <= n - 1) {
        // checking constraints
        // Calculate the distance between firstNumber and the number opposite it
        const oppositeDistance = n / 2;

        // add this distance to firstNumber to get the number opposite it.
        const oppositeNumber = (firstNumber + oppositeDistance) % n;

        // Return the result
        return oppositeNumber;
    }
}
