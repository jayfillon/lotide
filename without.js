const without = function(sourceArray, itemsToRemoveArray) {
  let filteredArray = [];

  //Add into the Source Array if item is not found in ItemsToRemoveArray
  filteredArray = sourceArray.filter(
    (item) => !itemsToRemoveArray.includes(item)
  );

  return filteredArray;
};

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

//Test case to make sure we're altering the array
const array = [1, 2, 3];
assertArraysEqual(without(array, [1]), [2, 3]);

//Test case to make sure it checks types
const arrayTwo = ["1", "2", "3"];
assertArraysEqual(without(arrayTwo, [1, 2, "3"]), ["1", "2"]);

//Test Case to make sure we're not altering the original array.
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
