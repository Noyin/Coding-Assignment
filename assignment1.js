// Helper function to check if a string null or empty
function isNullOrEmpty(value) {
  return value == null || value === '';
}

function checkAnagram(stringA, stringB) {
  // String to return if inputted strings are not anagrams
  const noAnagrams = 'Strings are not anagrams';

  // Check for null or empty string. return immediately if true
  if (isNullOrEmpty(stringA) || isNullOrEmpty(stringB)) {
    return noAnagrams;
  }

  // Check if strings have equal length. return immediately if false
  if (stringA.length !== stringB.length) {
    return noAnagrams;
  }

  // Create dictionaries to store number of character occurrence in both strings
  const characterCountStringA = {};
  const characterCountStringB = {};

  // Loop through each character for first string and populate
  // dictionary with character as key and number of occurrence in string as value
  for (let index = 0; index < stringA.length; index += 1) {
    const char = stringA.charAt(index);
    if (characterCountStringA[char]) {
      characterCountStringA[char] += 1;
    } else {
      characterCountStringA[char] = 1;
    }
  }

  // Loop through each character for second string and populate
  // dictionary with character as key and number of occurrence in string as value
  for (let index = 0; index < stringB.length; index += 1) {
    const char = stringB.charAt(index);
    if (characterCountStringB[char]) {
      characterCountStringB[char] += 1;
    } else {
      characterCountStringB[char] = 1;
    }
  }

  // Loop through one of the dictionaries and compare character occurrence.
  // in a case where comparing number of occurrence of a character is false,
  // return immediately
  for (key in characterCountStringA) {
    if (characterCountStringA[key] !== characterCountStringB[key]) {
      return noAnagrams;
    }
  }

  // Return this if above check passes
  return 'Input strings are anagram of each other';
}

module.exports = checkAnagram;
