function createSummator() {
  let currentSum = 0; 

  return function(num) {
    currentSum += num;
    return currentSum;
  };
}

const sum = createSummator();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));