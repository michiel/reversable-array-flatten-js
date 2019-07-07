# Reversable Array-Flatten

The main function, `flatten`, reversably flattens a nested Array.

```js
const initialArray = [1,2,3, [4, 5, [6, 7, [8, 9]]]];

// [ 1, 2, 3, [
//   4, 5, [
//     6, 7, [
//       8, 9 
//         ] ] ] ]

const {restore, flattenedArray } = reversableFlatten(initialArry);

const addOne = x=>x+1;

const transformedArray = flattenedArray.map(addOne);
const restoredArray = restore(transformedArray);

// restoredArray is
// [ 2, 3, 4, [
//    5, 6, [
//      7, 8, [
//        9, 10
//          ] ] ] ]

```

