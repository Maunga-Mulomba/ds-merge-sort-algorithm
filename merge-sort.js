// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let half = Math.floor(arr.length / 2);

  let left = arr.slice(0, half);
  left = mergeSort(left);

  let right = arr.slice(half);
  right = mergeSort(right);

  return merge(left, right);
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  let result = [];

  let pointerA = 0;
  let pointerB = 0;

  while (arrA[pointerA] !== undefined && arrB[pointerB] !== undefined) {
    if (arrA[pointerA] < arrB[pointerB]) {
      result.push(arrA[pointerA]);
      pointerA++;
    } else {
      result.push(arrB[pointerB]);
      pointerB++;
    }
  }

  if (arrA[pointerA] === undefined && arrB[pointerB] !== undefined) {
    let restOfB = arrB.slice(pointerB);
    restOfB.forEach((num) => result.push(num));
  } else if (arrA[pointerA] !== undefined && arrB[pointerB] === undefined) {
    let restOfA = arrA.slice(pointerA);
    restOfA.forEach((num) => result.push(num));
  }

  return result;
}

module.exports = [merge, mergeSort];
