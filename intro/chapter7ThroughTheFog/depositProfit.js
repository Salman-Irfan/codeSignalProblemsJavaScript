function solution(deposit, rate, threshold) {
    if (1 <= deposit && deposit <= 100 && 1 <= rate && rate <= 100) {
        let years = 0;

        while (deposit < threshold) {
            deposit += deposit * (rate / 100);
            years++;
        }

        return years;
    }
}
