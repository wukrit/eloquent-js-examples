function range (start, end, step = start < end ? 1 : -1) {
  const range = []
  if (step > 0) {
    for (let i = start; i <= end; i += step)
      range.push(i);
  } else if (step < 0) {
    for (let i = start; i >= end; i += step)
      range.push(i);
  }
  return range
}

function sum(arr) {
  return arr.reduce((sum, x) => sum += x)
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
