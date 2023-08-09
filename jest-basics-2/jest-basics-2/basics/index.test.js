const woof = require('.');

describe('basics', () => {
  test('should return string length', () => {
    const word = 'abc';
    const result = woof(word);
    expect(result).toBe(word.length);
  });
  test('should return null if no args are passed', () => {
    const result = woof();
    expect(result).toBeNull();
  });
});

test.todo('hould not allow numbers to be passed');
