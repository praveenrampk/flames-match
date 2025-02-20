// Import the flamesMatch function from the src directory.
// Adjust the path if necessary depending on your project structure.
const flamesMatch = require("../src/flames");

/**
 * Test Case 1:
 * Testing the relationship result between "John" and "Jane".
 * This will output one of the FLAMES outcomes: "Friends", "Love", "Affection", "Marriage", "Enemy", or "Siblings".
 */
console.log("Test Case 1 - Relationship for John and Jane:");
console.log(flamesMatch("John", "Jane")); // Expected output: Relationship result (e.g., "Love")

/**
 * Test Case 2:
 * Testing the relationship result between "Alice" and "Bob".
 * This provides another example to see the FLAMES match in action.
 */
console.log("Test Case 2 - Relationship for Alice and Bob:");
console.log(flamesMatch("Alice", "Bob")); // Expected output: Relationship result
