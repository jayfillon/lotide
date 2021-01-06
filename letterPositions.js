// Test Assertion Functions
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  // Loop through the firstArray length (must be same if code got here)
  for (let i = 0; i < firstArray.length; i++) {
    //Check to see if type and value of elements are equal
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

// Exercise Function
const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results.prototype.hasOwnProperty.call(sentence[i])) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [sentence.indexOf(sentence[i])];
      }
    }
  }
  return results;
};

//Test case with a small string.
assertArraysEqual(letterPositions("hello").e, [1]);
// //Test case with a big string.
assertArraysEqual(letterPositions("jericho fillon").l, [10,11]);
