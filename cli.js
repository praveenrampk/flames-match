#!/usr/bin/env node

// Import the FLAMES match function
const flamesMatch = require("./src/flames");

// Extract command-line arguments (excluding `node` and script path)
const args = process.argv.slice(2);

// Check if exactly two names are provided
if (args.length !== 2) {
  console.log("Usage: flames <name1> <name2>");
  console.log("Example: flames 'Alice' 'Bob'");
  process.exit(1); // Exit with a failure code
}

// Run the FLAMES match function and display the result
const result = flamesMatch(args[0], args[1]);
console.log(`Relationship: ${result}`);
