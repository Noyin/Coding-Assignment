const findFirstRepeatingElement = require('../assignment2');

describe('findFirstRepeatingElement', () => {
  it('should return the first element that repeats', () => {
    expect(findFirstRepeatingElement([100, 5, 3, 1, 0, 5, -8])).toBe('5 [5 is the first element that repeats]');
  });
});

describe('findFirstRepeatingElement', () => {
  test('should return \"No repeating value\" when input array contain no repeating elements', () => {
    expect(findFirstRepeatingElement([100, 5, 3, 1, 0, 7, -8])).toBe('No repeating value');
  });
});

describe('findFirstRepeatingElement', () => {
  it('should return \"No repeating value\" when input array is empty', () => {
    expect(findFirstRepeatingElement([])).toBe('No repeating value');
  });
});

describe('findFirstRepeatingElement', () => {
  it('should return \"No repeating value\" when input array is null', () => {
    expect(findFirstRepeatingElement(null)).toBe('No repeating value');
  });
});