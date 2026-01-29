// Problem-2: Remove Duplicate Numbers
const nums = [2, 5, 5, 8, 10, 10, 15];

// A reusable function
const removeDuplicates = (arr) => {
  let newArr = []; // An empty array to store numbers

  // A loop to check the numbers of the array, one by one
  for (let i = 0; i < arr.length; i++) {
    // Check the the number from the array, based on index
    // If the number does not includes in the new array
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]); // Push the number in the new array
    }
  }

  return newArr; // Return the new array
};

// Let's run
console.log(removeDuplicates(nums)); // Output: [ 2, 5, 8, 10, 15 ]
