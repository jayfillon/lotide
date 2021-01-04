const head = function(array) {
  let firstElement = array[0];

  if (array && array.length) {
    return firstElement;
  } else {
    return undefined;
  }
};

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

/* Test Code */
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined); // Empty array as undefined
assertEqual(head([1]), 1); // Array with only one element
