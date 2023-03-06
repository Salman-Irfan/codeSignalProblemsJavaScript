function solution(inputString) {
  let result = inputString;
  if (0 <= inputString.length && inputString.length <= 50) {
    while (result.indexOf("(") !== -1) {
      result = result.replace(/\(([^\(\)]*)\)/g, (_, match) => {
        return match.split("").reverse().join("");
      });
    }
  }
  return result;
}
