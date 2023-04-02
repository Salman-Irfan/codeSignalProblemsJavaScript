function solution(inputString) {

    if (1 <= inputString.length && inputString.length <= 1000) {

        let result = "";

        for (let i in inputString) {
            let charCode = inputString.charCodeAt(i);

            // Handle lowercase letters
            if (charCode >= 97 && charCode <= 122) { // a = 97, z = 122
                charCode = ((charCode - 97 + 1) % 26) + 97;
            }

            // Handle uppercase letters
            else if (charCode >= 65 && charCode <= 90) { // A = 65, Z = 90
                charCode = ((charCode - 65 + 1) % 26) + 65;
            }

            result += String.fromCharCode(charCode);
        }
        return result;
    }
}
