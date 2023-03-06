function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    if (0<=yourLeft && yourLeft <= 20 && 0<=yourRight && yourRight <= 20){
        if((yourLeft === friendsLeft || yourLeft === friendsRight) && (yourRight === friendsRight || yourRight === friendsLeft)){
            return true
            }else {
                return false
        }    
    }
    
}
