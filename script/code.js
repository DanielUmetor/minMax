
let numbers = [5, 10, 15, 20, 25];
function findMinMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return { min, max };
}
let { min, max } = findMinMax(numbers);
console.log("minimum:", min);
console.log("maximum:", max);
