const add = require('../code/add');

test('adds 1 + 2 to equal 3', () => {
    expect(add(2,2)).toBe(4);
});