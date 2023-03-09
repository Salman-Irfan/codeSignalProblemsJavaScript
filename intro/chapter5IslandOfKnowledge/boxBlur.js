function solution(image) {
    let outputArr = [];
    
    if (3<= image.length && image.length <= 100){   // constraints      
        // Iterate over every pixel in the input image except for the border pixels
        for (let i = 1; i < image.length - 1; i++) {
            outputArr[i-1] = [];
            if(3<= image[0].length && image[0].length <= 100){ // constraints

                for (let j = 1; j < image[i].length - 1; j++) {            
                    // Compute the sum of the pixel values in the 3x3 square centered around the current pixel
                    let sum = 0;
                    let count = 0;
                    if(0 <= image[i][j] && image[i][j] <= 255){ // constraints
                        for (let k = i-1; k <= i+1; k++) {
                            for (let l = j-1; l <= j+1; l++) {
                                sum += image[k][l];
                                count++;
                            }
                        }
                    }
                    // Compute the average value of the 3x3 square and round it down to the nearest integer
                    outputArr[i-1][j-1] = Math.floor(sum/count);
                }
            }
        }
    }
    return outputArr;
}
