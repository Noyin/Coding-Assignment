const checkAnagram = require('../assignment1');

describe('checkAnagram', () => {
  it('should return \"Input strings are anagram of each other\" when inputted strings are anagrams', () => {
    expect(checkAnagram('abcdabcd', 'dabcabcd')).toBe('Input strings are anagram of each other');
  });
});

describe('checkAnagram', () => {
  test('should return \"Strings are not anagrams\" when inputted strings are not anagrams', () => {
    expect(checkAnagram('abcdabcf', 'dabcabcd')).toBe('Strings are not anagrams');
  });
});

describe('checkAnagram', () => {
  it('should return \"Strings are not anagrams\" when any of the inputted strings is empty', () => {
    expect(checkAnagram('', 'dabcabcd')).toBe('Strings are not anagrams');
  });
});

describe('checkAnagram', () => {
  it('should return \"Strings are not anagrams\" when any of the inputted strings is null', () => {
    expect(checkAnagram('abcdabcd', null)).toBe('Strings are not anagrams');
  });
});