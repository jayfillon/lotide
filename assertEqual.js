const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

/* Test Code */
assertEqual("Lighthouse Labs", "Bootcamp"); // Non-identical Strings
assertEqual(1, 1); // Identical Numbers
assertEqual("Hello", "Hello"); // Identical Strings
assertEqual(2, 3); // Non-identical Numbers.
