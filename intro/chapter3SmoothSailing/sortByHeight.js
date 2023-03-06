function solution(a) {
  if (1 <= a.length && a.length <= 1000) {
    const b = a.filter((x) => x !== -1);
    b.sort((a, b) => a - b);
    let j = 0;
    for (let i = 0; i < a.length; i++) {
      if (-1 <= a[i] && a[i] <= 1000) {
        if (a[i] !== -1) {
          a[i] = b[j];
          j++;
        }
      }
    }
  }

  return a;
}
