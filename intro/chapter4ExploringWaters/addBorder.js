function solution(picture) {
    let flag = false
    const width = picture[0].length + 2;
    const border = "*".repeat(width);
    if(1 <= picture.length && picture.length <= 100){
        for (let i in picture){
            if (1<=picture[i].length && picture[i].length <= 100){
                flag = true
            }else{
                flag = false
            }
        }
        if (flag) return [border, ...picture.map(row => `*${row}*`), border];
    }
}
