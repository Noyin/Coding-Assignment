const findTriplets = require('../assignment3');

describe('findTriplets', () => {
  it('should return true if a triplet\'s sum is equals to the inputted sum', () => {
    expect(findTriplets([12, 3, 4, 1, 6, 9, -6], 24)).toBe(true);
  });
});

describe('findTriplets', () => {
  it('should return true if a triplet\'s sum is equals to the inputted sum', () => {
    expect(findTriplets([12, 3, 4, 1, 6, 9, -6, 50, 102], 60)).toBe(true);
  });
});

describe('findTriplets', () => {
  test('should return false when there are no triplets whose sum is equals to the inputted sum', () => {
    expect(findTriplets([13, 3, 4, 1, 6, 9, -6], 24)).toBe(false);
  });
});

describe('findTriplets', () => {
  it('should return false when inputted array is empty', () => {
    expect(findTriplets([])).toBe(false);
  });
});

describe('findTriplets', () => {
  it('should return false when inputted array is null', () => {
    expect(findTriplets(null)).toBe(false);
  });
});

