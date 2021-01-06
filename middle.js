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

const middle = function(array) {
  let newArr = [];
  let startIndex = array[0];
  let endIndex = array.length - 1;
  let middleIndex = parseInt((startIndex + (endIndex - startIndex) / 2).toFixed());

  //If one or two elements, return empty array
  if (array.length <= 2) {
    return newArr;
  }

  //If even elements, add two elements in the middle, to the new Array
  if (array.length % 2 === 0) {
    for (let i = 0; i < array.length; i++) {
      if (array.indexOf(array[i]) + 1 === middleIndex) {
        newArr.push(array[i]);
        newArr.push(array[i++]);
      }
    }
  } else {
    //If odd elements, add the middle element into new Array
    for (let value of array) {
      if (array.indexOf(value) + 1 === middleIndex) {
        newArr.push(value);
      }
    }
  }

  return newArr;
};

// Test Code Runners

//Odd Test Case
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
//Even Test Case
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
//Error Test Case
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
//Random Types Test Case
assertArraysEqual(middle([2, 4, "Kobe", 8, "J"]), ["Kobe"]);
