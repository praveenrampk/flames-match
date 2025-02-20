/**
 * Flames Match Calculator
 * @param {string} name1 - First person's name
 * @param {string} name2 - Second person's name
 * @returns {string} - Relationship result (Friends, Love, etc.)
 */
function flamesMatch(name1, name2) {
  if (!name1 || !name2) throw new Error("Both names are required");

  // Convert names to lowercase and remove spaces
  name1 = name1.toLowerCase().replace(/\s/g, "");
  name2 = name2.toLowerCase().replace(/\s/g, "");

  // Count unmatched characters
  let combined = name1 + name2;
  for (let char of name1) {
    if (name2.includes(char)) {
      combined = combined.replace(char, "");
      name2 = name2.replace(char, "");
    }
  }

  const flames = [
    "Friends",
    "Love",
    "Affection",
    "Marriage",
    "Enemy",
    "Siblings",
  ];
  let count = combined.length;

  while (flames.length > 1) {
    let removeIndex = (count % flames.length) - 1;
    if (removeIndex >= 0) {
      flames.splice(removeIndex, 1);
    } else {
      flames.splice(flames.length - 1, 1);
    }
  }

  return flames[0];
}

module.exports = flamesMatch;
