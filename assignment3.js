function findTriplets(array, sum) {
  // Return immediately if array is null or its length is less than 3
  if (array === null || array.length < 3) {
    return 'No triplets';
  }

  // To facilitate an optimal solution, the array is sorted in increasing order
  const sortedArray = array.sort((a, b) => a > b);

  // Loop through the sorted array
  for (let index = 0; index < sortedArray.length; index += 1) {
    // Declare a fixed index i
    const i = index;
    // Keep track of elements in subarray (array after index i) with j assigned the starting index;
    let j = i + 1;
    // k is assigned the ending index;
    let k = sortedArray.length - 1;
    // Start a while loop which executes while j < k;
    while (j < k) {
      const total = sortedArray[i] + sortedArray[j] + sortedArray[k];
      // If total the sum of the value at indeces i, j, k equals to inputted sum,
      // return a triplet exists and return immediately
      if (total === sum) {
        return `${sortedArray[i]}, ${sortedArray[j]}, ${sortedArray[k]}`;
      } else if (total < sum) {
        // If total the sum of the value at indeces i, j, k is less than the inputted sum,
        // increase index j by 1;
        j += 1;
      } else {
        // If total the sum of the value at indeces i, j, k is more than the inputted sum,
        // decrease index k by 1;
        k -= 1;
      }
    }
  }

  // Return if no triplets are found
  return 'No triplets';
}

module.exports = findTriplets;
