function findFirstDuplicate(arr) {
  // type your code here
  // initialize an empty dictionary {"key" : "value"} {"element" : "count"}
  // iterate through the array
  // increment or update the value of key if the number is duplicated.
  // return the first key value more than 1.

  //arr = [1,2,2,3,4]

  // Create an empty object to track seen elements
  const seen = {};

  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    // Check if the value already exists in the seen object
    if (seen[value]) {
      return value; // Found the first duplicate
    }

    // Otherwise, mark this value as seen
    seen[value] = true;
  }

  // If no duplicates found
  return -1;
}

//O(n) time and O(n) space. set and object.Set is better for clarity and readability.

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// find the first repeating number in the array.return the number.
// If there is no repeating number, return -1
// If there are multiple repeating numbers, return the first one.

// And a written explanation of your solution

// initialize an empty dictionary {"key" : "value"} {"element" : "count"}
// iterate through the array
// increment or update the value of key if the number is duplicated.
// return the first key value more than 1.
