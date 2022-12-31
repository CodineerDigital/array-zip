/**
 * Zips two arrays together into an array of tuples. The length of the returned array is the length of the shortest input array.
 * @param arr1 The first array.
 * @param arr2 The second array.
 * @returns An array of tuples.
 */
function zip<T, U>(arr1: T[], arr2: U[]): Array<[T, U]> {
    return arr1.map((x, i) => [x, arr2[i]]);
}