function solution(image) {
    let outputArr = [];

    if (3 <= image.length && image.length <= 100) {
        console.log("Input array size is within constraints");
        for (let i = 1; i < image.length - 1; i++) {
            outputArr[i - 1] = [];
            if (3 <= image[0].length && image[0].length <= 100) {
                console.log("Inner array size is within constraints");
                for (let j = 1; j < image[i].length - 1; j++) {
                    let sum = 0;
                    let count = 0;
                    if (0 <= image[i][j] && image[i][j] <= 255) {
                        console.log(`Processing pixel at (${i}, ${j}) with value ${image[i][j]}`);
                        for (let k = i - 1; k <= i + 1; k++) {
                            for (let l = j - 1; l <= j + 1; l++) {
                                sum += image[k][l];
                                count++;
                            }
                        }
                        outputArr[i - 1][j - 1] = Math.floor(sum / count);
                        console.log(`Average value for pixel at (${i}, ${j}) is ${outputArr[i - 1][j - 1]}`);
                    }
                }
            }
        }
    }
    console.log(outputArr);
    return outputArr;
}

// Define the input array
const image = [
    [10, 20, 30, 40, 50],
    [60, 70, 80, 90, 100],
    [110, 120, 130, 140, 150],
    [160, 170, 180, 190, 200],
    [210, 220, 230, 240, 250]
];

// Call the solution function with the input array
const outputArr = solution(image);
