function solution(a) {
    // constraints
    if (1 <= a.length && a.length <= 1000) {
        // initialize the minimum sum to infinity and the closest element to the first element in the array
        let minSum = Infinity;
        let closestElement = a[0];

        // loop over each element in the array
        for (let i in a) {
            // constraints
            if (-10e6 <= a[i] && a[i] <= 10e6) {
                let sum = 0;
                let x = a[i];
                // compute the sum of the absolute differences with all other elements in the array
                for (let j in a) {
                    sum += Math.abs(a[j] - x);
                }
                // if the sum for the current element is less than the current minimum, update the minimum and closest element
                if (sum < minSum) {
                    minSum = sum;
                    closestElement = x;
                }
            }
        }

        // return the closest element
        return closestElement;
    }
}
