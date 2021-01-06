// Test Assertion Functions
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

// Exercise Function
// inputString: a String that consist of anything.
const countLetters = function(inputString) {
  let results = {};

  for (const char of inputString) {
    if (char !== ' ') {
      // If it's found in results, increment++
      if (results.prototype.hasOwnProperty.call(char)) {
        results[char] += 1;
      
      // Otherwise, create a new key.
      } else {
        results[char] = 1;
      }
    }
  }

  return results;
};

console.log(countLetters("jericho fillon s2"));
