let animals = [];

// beforeAll
beforeAll(() => {
  console.log('%c-> developmentConsole: beforeAll=======> ', 'color:#77dcfd');
});

// afterAll
afterAll(() => {
  console.log('%c-> developmentConsole: afterAll=======> ', 'color:#77dcfd');
});

// beforeEach
beforeEach(() => {
  animals = ['elephant', 'zebra', 'bear', 'tiger'];
});

// afterEach
afterEach(() => {
  animals = ['elephant', 'zebra', 'bear', 'tiger'];
});

describe('animals array', () => {
  // 1
  test('should add animal to end of array', () => {
    animals.push('aligator');
    expect(animals[animals.length - 1]).toBe('aligator');
  });

  // 2
  test('should add animal to beginning of array', () => {
    animals.unshift('monkey');
    expect(animals[0]).toBe('monkey');
  });

  // 3
  test('should have initial length of 4', () => {
    expect(animals.length).toBe(4);
  });
});
