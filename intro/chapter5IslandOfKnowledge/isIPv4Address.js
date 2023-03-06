function solution(inputString) {
    if (1 <= inputString.length && inputString.length <= 30){
        const parts = inputString.split('.')
        if (parts.length != 4){
            return false
        }
        for (let i in parts){
            const part = parts[i]
            if (part === ''){
                return false
            }
            if (part.startsWith('0') && part.length > 1){
                // leading zero(s) in number
                return false
            }
            for (let j in part){
                if (part[j] < '0' || part[j] > '9' || (part[j] === '.' && j === 0)) {
                    // non-digit character that is not a dot in part, or dot as the first character in part
                    return false
                }
            }
            const num = Number(part)
            if (num < 0 || num > 255){
                return false
            }
        }
    }
    return true
}
