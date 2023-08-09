const axios = require('axios');
const fetchData = require('.');

const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

describe('mock functions', () => {
  // 1
  test('mock callback', () => {
    const mockCallback = jest.fn((x) => 42 + x);

    forEach([0, 1], mockCallback);

    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    expect(mockCallback.mock.results[0].value).toBe(42);
  });

  // 2
  test('mock return', () => {
    const mock = jest.fn();
    mock
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce('Hello');

    const results = mock();
    const results1 = mock();
    const results2 = mock();

    expect(results).toBe(true);
    expect(results1).toBe(false);
    expect(results2).toBe('Hello');
  });

  // 3
  test('mock axios return', async () => {
    jest.spyOn(axios, 'get').mockReturnValueOnce({
      data: {
        id: 1,
        todo: 'Get 1M Subs',
      },
    });

    const results = await fetchData(1);

    expect(results.todo).toBe('Get 1M Subs');
  });
});
