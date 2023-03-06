function solution(inputString) {
    if (/[^a-z]/.test(inputString)) {
        // small alphabets constraint
        return "A string consisting of lowercase English letters.";
    }

    // Create a even count array
    let evenArray = [];

    // remove character if evenArray contains,

    for (let i in inputString) {
        if (1 <= inputString.length && inputString.length <= 50) {
            // length constraint
            if (evenArray.includes(inputString[i])) {
                //aabb  --> a 1, a x, b 1, b x => []
                evenArray.splice(evenArray.indexOf(inputString[i]), 1);
                console.log(`evenArray = ${evenArray}`);
            } else {
                evenArray.push(inputString[i]);
                console.log(`evenArray = ${evenArray}`);
            }
        }
    }
    // even input length = 0, odd length = 1 => true
    if (
        (inputString.length % 2 == 0 && evenArray.length == 0) ||
        (inputString.length % 2 == 1 && evenArray.length == 1)
    ) {
        return true;
    } else return false;
}
