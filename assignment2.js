function findFirstRepeatingElement(array) {
  // String to return if there are no repeating values in array
  const noRepeatingElement = 'No repeating value';

  // Return immediately if array is null, empty or its length is less than two
  if (array === null || array.length < 2) {
    return noRepeatingElement;
  }

  // Dictionary to store elements in the array as key and a boolean as value
  // A true value indicates the element exist in the array
  const dictionary = {};

  // Loop through array and populate dictionary.
  // In the case where an element is already added to the dictionary,
  // immediately return
  for (let index = 0; index < array.length; index += 1) {
    if (dictionary[array[index]]) {
      return `${array[index]} [${array[index]} is the first element that repeats]`;
    }

    dictionary[array[index]] = true;
  }

  // Return if there are no repeating elements in the array
  return noRepeatingElement;
}

module.exports = findFirstRepeatingElement;
