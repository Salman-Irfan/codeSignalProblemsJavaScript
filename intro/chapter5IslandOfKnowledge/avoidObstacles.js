function solution(inputArray) {
    let step = 1
    let maxCoord = Math.max(...inputArray); // find the maximum coordinate value
    let indexArray = Array(maxCoord + 1).fill(false); // create an array to mark obstacle positions
    
    for (let i in inputArray){ // marking point on index array
        if(2<=inputArray.length && inputArray.length <=1000){ // constraints
            if(1<=inputArray[i] && inputArray[i]<=1000){ // constraints
                indexArray[inputArray[i]] = inputArray[i]
            }else{
                return false
            }
        }else {
            return false
        }
    }
    
    while (true) {
        let canJump = true
        let position = 0
        while (position <= maxCoord){
            if(indexArray[position]){ // if obstacle found
                canJump = false
                break // jump length isn't feasible
            }else { // check next
                position+=step
            }
        }
        if(canJump){
            return step
        }else {
            step ++ // modify the step limit
        }
    }
    
}
