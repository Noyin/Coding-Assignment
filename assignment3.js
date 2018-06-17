function findTriplets(array, sum) {
  // Return false if array is null or its length is less than 3
  if (array === null || array.length < 3) {
    console.log('No triplets');
    return false;
  }

  // To facilitate an optimal solution, the array is sorted in increasing order
  const sortedArray = array.sort((a, b) => a > b);

  // Loop through the sorted array
  for (let i = 0; i < sortedArray.length; i += 1) {
    // Keep track of elements in subarray (array after index i) with j assigned the start index;
    let j = i + 1;
    // k is assigned the end index;
    let k = sortedArray.length - 1;
    // Start a while loop which executes while j < k;
    while (j < k) {
      const total = sortedArray[i] + sortedArray[j] + sortedArray[k];
      // If total the sum of the value at indeces i, j, k equals to inputted sum,
      // a triplet exists, print the triplet and return true
      if (total === sum) {
        console.log(`${sortedArray[i]}, ${sortedArray[j]}, ${sortedArray[k]}`);
        return true;
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

  // Return false if no triplets are found
  console.log('No triplets');
  return false;
}

module.exports = findTriplets;
