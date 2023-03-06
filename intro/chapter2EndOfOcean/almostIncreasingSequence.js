function solution(sequence) {
  let count = 0;
  if (2 <= sequence.length && sequence.length <= 100000) {
    for (let i = 1; i < sequence.length; i++) {
      if (-100000 <= sequence[i] && sequence[i] <= 100000) {
        if (sequence[i] <= sequence[i - 1]) {
          count++;
          if (count > 1) return false;
          if (
            sequence[i] <= sequence[i - 2] &&
            sequence[i + 1] <= sequence[i - 1]
          )
            return false; //[1, 2, 5, 4, 3] pointer => i = 3, element = 4
        }
      }
    }
  }
  return true;
}
