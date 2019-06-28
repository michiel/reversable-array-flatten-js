# Reversable Array-Flatten

```js
const initialArray = [1,2,3, [4, 5, [6, 7, [8, 9]]]];

// [ 1, 2, 3, [
//   4, 5, [
//     6, 7, [
//       8, 9 
//         ] ] ] ]

const {reverse, flattenedArray } = reversableFlatten(initialArry);

const addOne = x=>x+1;

const mappedArray = flattenedArray.map(addOne);
const restoredArray = reverse(mappedArray);

// restoredArray is
// [ 2, 3, 4, [
//    5, 6, [
//      7, 8, [
//        9, 10
//          ] ] ] ]

```

