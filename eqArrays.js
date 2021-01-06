//Implement a function eqArrays which takes in two arrays
//and returns true or false, based on a perfect match.
const eqArrays = function(firstArray, secondArray) {
  let isMatching = true;

  if (firstArray.length !== secondArray.length) {
    return false;
  }
  // Loop through the firstArray length (must be same if code got here)
  for (let i = 0; i < firstArray.length; i++) {
    //Check to see if type and value of elements are equal
    if (firstArray[i] !== secondArray[i]) {
      isMatching = false;
      return isMatching;
    }
  }

  return isMatching;
};

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

//Test-runner code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
