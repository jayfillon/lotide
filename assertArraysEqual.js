const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (firstArray, secondArray) {
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
