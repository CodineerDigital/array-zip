# array-zip

This function takes in two arrays `arr1` and `arr2`, and returns an array of tuples. The length of the returned array is the length of the shortest input array.

## Example

```typescript
const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const zippedArr = zip(arr1, arr2);
console.log(zippedArr); // [[1, 'a'], [2, 'b'], [3, 'c']]
```

## Parameters

- `arr1`: The first array.
- `arr2`: The second array.

## Return value

An array of tuples. Each tuple contains an element from `arr1` as the first element and an element from `arr2` as the second element.

## Notes

- If either of the input arrays is empty, the returned array will also be empty.
- If the input arrays are of different lengths, the returned array will only contain as many tuples as there are elements in the shorter array. The remaining elements in the longer array will be ignored.
