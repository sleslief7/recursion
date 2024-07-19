const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  let sortedArr = [];
  while (leftSorted.length || rightSorted.length) {
    if (!leftSorted.length) {
      sortedArr.push(rightSorted.shift());
    } else if (!rightSorted.length) {
      sortedArr.push(leftSorted.shift());
    } else if (leftSorted[0] > rightSorted[0]) {
      sortedArr.push(rightSorted.shift());
    } else {
      sortedArr.push(leftSorted.shift());
    }
  }
  return sortedArr;
};

console.log(mergeSort([4, 8, 7, 2, 11, 1, 3]));
