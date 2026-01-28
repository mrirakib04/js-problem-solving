// Problem-1: Sum of an Array
const nums = [2, 5, 8, 10, 15];

// A reusable function
const sumNums = (numbers) => {
  let sum = 0; // An 0 value sum variable for calculation

  // A loop for plus the numbers from array, one by one
  for (let i = 0; i < numbers.length; i++) {
    // Plus number from the array with sum
    sum += numbers[i]; // Based on index
  }

  return sum; // Return the total after calculation
};

// Let's run
console.log(sumNums(nums)); // Output: 40
