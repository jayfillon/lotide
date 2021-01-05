const tail = function(array) {
  const firstElement = array[0];
  const tail = [];

  if (array.length <= 0) {
    return tail; // Returns an empty array
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== firstElement) {
      tail.push(array[i]);
    }
  }

  console.log(`Tail array elements (Modified) : ${tail}`);
  return tail; //Return a new array of words without it's 'head' (array[0])
};

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

// Test Case: Check the returned array elements.
console.log("\n🌟 Test Case: Check the returned array elements 🌟");
const result = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // Ensure we get back two elements.
assertEqual(result[0], "Lighthouse"); // Ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // Ensure second element is "Labs"

// Test Case: Check original array
console.log("\n🌟 Test Case: Check original array 🌟");
const words = ["Yo yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // Original array should still have 3 elements.

// Test Case: Check empty array.
console.log("\nTest Case: Check empty array.");
const empty = tail([]);
assertEqual(empty.length, 0);

// Test Case: Check array with one element
console.log("\n🌟 Test Case: Check array with one element 🌟");
const oneElement = tail(["Jericho"]);
assertEqual(oneElement.length, 0);
