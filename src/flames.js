/**
 * Flames Match Calculator
 *
 * This function takes two names, removes common characters, and then uses the count
 * of the remaining characters to determine the relationship based on the FLAMES game.
 *
 * @param {string} name1 - First person's name.
 * @param {string} name2 - Second person's name.
 * @returns {string} - Relationship result (e.g., "Friends", "Love", "Affection", "Marriage", "Enemy", "Siblings").
 * @throws {Error} - Throws an error if either name is not provided.
 */
function flamesMatch(name1, name2) {
  // Validate that both names are provided
  if (!name1 || !name2) {
    throw new Error("Both names are required");
  }

  // Normalize the names: convert to lowercase and remove all spaces
  name1 = name1.toLowerCase().replace(/\s/g, "");
  name2 = name2.toLowerCase().replace(/\s/g, "");

  // Combine both names for further processing
  // The idea is to remove matching characters from the combined string
  let combined = name1 + name2;

  // For every character in name1, if it exists in name2, remove one occurrence from both
  for (let char of name1) {
    if (name2.includes(char)) {
      // Remove the matching character from the combined string
      combined = combined.replace(char, "");
      // Remove the first occurrence of the character from name2
      name2 = name2.replace(char, "");
    }
  }

  // Define the FLAMES relationship categories
  const flames = [
    "Friends",
    "Love",
    "Affection",
    "Marriage",
    "Enemy",
    "Siblings",
  ];

  // The count is the number of characters remaining after removal
  let count = combined.length;

  // Cycle through the flames array until only one element remains
  // The removal index is determined by the count modulo the length of the flames array
  while (flames.length > 1) {
    let removeIndex = (count % flames.length) - 1;

    // If removeIndex is non-negative, remove the element at that index
    if (removeIndex >= 0) {
      flames.splice(removeIndex, 1);
    } else {
      // If removeIndex is -1, remove the last element in the array
      flames.splice(flames.length - 1, 1);
    }
  }

  // Return the remaining relationship outcome
  return flames[0];
}

// Export the flamesMatch function for use in other modules
module.exports = flamesMatch;
