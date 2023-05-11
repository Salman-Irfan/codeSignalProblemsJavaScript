function solution(inputArray) {
    // constraint => 2 - 10
    if(2<=inputArray.length && inputArray.length<=10){
        let hasOneCharDiff = false;

        // Helper function to generate permutations of the input array
        const generatePermutations = (arr, permutation = []) => {
            if (arr.length === 0) {
                // Iterate through all permutations and check for a single character difference
                for (let i = 0; i < permutation.length - 1; i++) {
                    let diff = 0;
                    for (let j = 0; j < permutation[i].length; j++) {
                        if (permutation[i][j] !== permutation[i + 1][j]) {
                            diff++;
                        }
                    }
                    // If more than one character difference, return false
                    if (diff !== 1) {
                        return;
                    }
                }
                hasOneCharDiff = true;
            } else {
                for (let i = 0; i < arr.length; i++) {
                        // constraint 2
                        if(1<<arr[i].length && arr[i].length <=15){
                        let current = arr.slice();
                        let next = current.splice(i, 1);
                        generatePermutations(current.slice(), permutation.concat(next));
                    }
                }
            }
        };
        // Call generatePermutations function to check all permutations
        generatePermutations(inputArray);
        return hasOneCharDiff;
    }
    
}
