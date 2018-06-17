const findTriplets = require('../assignment3');

describe('findTriplets', () => {
  it('should return the first triplets whose sum is equals to the inputted sum', () => {
    expect(findTriplets([12, 3, 4, 1, 6, 9, -6], 24)).toBe('3, 9, 12');
  });
});

describe('findTriplets', () => {
  it('should return the first triplets whose sum is equals to the inputted sum', () => {
    expect(findTriplets([12, 3, 4, 1, 6, 9, -6, 50, 102], 60)).toBe('1, 9, 50');
  });
});

describe('findTriplets', () => {
  test('should return \"No triplets\" when there are no triplets whose sum is equals to the inputted sum', () => {
    expect(findTriplets([13, 3, 4, 1, 6, 9, -6], 24)).toBe('No triplets');
  });
});

describe('findTriplets', () => {
  it('should return \"No triplets\" when inputted array is empty', () => {
    expect(findTriplets([])).toBe('No triplets');
  });
});

describe('findTriplets', () => {
  it('should return \"No triplets\" when inputted array is null', () => {
    expect(findTriplets(null)).toBe('No triplets');
  });
});

