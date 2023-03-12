const calculateActualPrice = (price, percentage, isHigher) => {
    // Calculate the actual price based on the percentage increase or decrease
    let factor = 1;
    if (isHigher) {
        factor = 1 + percentage / 100;
    } else {
        factor = 1 - percentage / 100;
    }
    const actualPrice = price / factor;
    return actualPrice;
}

const solution = (prices, notes, x) => {
    // calculating the actual price
    let actualPrice = []
    if (1 <= prices.length && prices.length <= 10) { // constraints checking
        for (let i in notes) {
            if (20 <= prices[i] && prices[i] <= 35000) {
                if (notes[i].includes("higher")) {
                    // Extract the percentage increase from the note
                    const percentageStr = notes[i].split(" ")[0];
                    const percentage = parseFloat(percentageStr);
                    console.log(percentage); // Output: 10.0
                    const actualPriceVal = calculateActualPrice(prices[i], percentage, true);
                    actualPrice.push(actualPriceVal);
                } else if (notes[i].includes("lower")) {
                    // Extract the percentage decrease from the note
                    const percentageStr = notes[i].split(" ")[0];
                    const percentage = parseFloat(percentageStr);
                    console.log(percentage); // Output: 5.0
                    const actualPriceVal = calculateActualPrice(prices[i], percentage, false);
                    actualPrice.push(actualPriceVal);
                } else {
                    // The note specifies that the price is the same as in-store
                    console.log("Price is the same as in-store");
                    actualPrice.push(prices[i]);
                }
            }
        }

    }

    let totalPrice = 0
    let actualTotalPrice = 0
    for (let i in prices) {
        totalPrice += prices[i]
        actualTotalPrice += actualPrice[i]
    }
    if ((totalPrice - actualTotalPrice) <= x + 0.000001) { // introducing tolerance so that higher floating values could be ignored 
        return true
    } else {
        return false
    }
}
