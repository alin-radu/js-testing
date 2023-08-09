const sum = require('.');

// basic tests
describe('basic tests', () => {
  // 1
  test('should add 1 + 2 to equal 3', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  // 2
  test('object assignment .not.toBe', () => {
    const obj = {};
    expect(obj).not.toBe({});
  });

  // 3
  test('object assignment .toEqual', () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

// truthy or falsy
describe('truthy or falsy', () => {
  // 1
  test('null .not.toBeTruthy', () => {
    const n = null;
    expect(n).not.toBeTruthy();
  });

  // 2
  test('null .toBeFalsy', () => {
    const n = null;
    expect(n).toBeFalsy();
  });

  // 3
  test('null .toBeNull', () => {
    const n = null;
    expect(n).toBeNull();
  });

  // 4
  test('null .not.toBeUndefined', () => {
    const n = null;
    expect(n).not.toBeUndefined();
  });

  // 5
  test('null .toBeDefined', () => {
    const n = null;
    expect(n).toBeDefined();
  });
});

// numbers
describe('numbers', () => {
  // 1
  test('2 + 2 .toBe', () => {
    const value = 2 + 2;
    expect(value).toBe(4);
  });

  // 2
  test('2 + 2 .toBeGreaterThan', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
  });

  // 3
  test('adding floating point numbers .toBeCloseTo', () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });
});

// strings
describe('strings', () => {
  // 1
  test('there is no I in team .not.toMatch', () => {
    expect('team').not.toMatch(/I/);
  });

  // 2
  test('but there is a "stop" in Christoph .toMatch', () => {
    expect('Christoph').toMatch(/stop/);
  });
});

// arrays
const shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'];

describe('arrays', () => {
  // 1
  test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });
});

// exceptions
const compileAndroidCode = () => {
  throw new Error('you are using the wrong JDK!');
};

describe('exceptions', () => {
  // 1
  test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK'); // expected that the Error to contain the message
    expect(() => compileAndroidCode()).toThrow(/JDK/); // expected that the Error to contain the message
    expect(() => compileAndroidCode()).toThrow(Error);
  });
});
