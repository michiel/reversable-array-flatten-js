const { flatten } = require('./index')

test('It works', () => {
  const input = [1,2,3];
  const expectedOutput = [2,3,4];
  const { restore, flatlist } = flatten(input);
  expect(restore(flatlist.map(x=> x+1))).toEqual(expectedOutput);
});

test('It works II', () => {
  const input = [1,2,3, [4, 5, [6, 7, [8, 9]]]];
  const expectedOutput = [2,3,4, [5, 6, [7, 8, [9, 10]]]];
  const { restore, flatlist } = flatten(input);
  expect(restore(flatlist.map(x=> x+1))).toEqual(expectedOutput);
});

test('It works III', () => {
  const input = [[[[[1, 2]], 3]], [[4]], 5];
  const expectedOutput = [[[[[2, 3]], 4]], [[5]], 6];
  const { restore, flatlist } = flatten(input);
  expect(restore(flatlist.map(x=> x+1))).toEqual(expectedOutput);
});
