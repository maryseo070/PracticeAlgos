//finds the position of an element in a sorted array in
//constant space and logarithmic time

function binarySearch(sortedArr, target) {
  let newArr = sortedArr.slice();
  let midPoint = Math.floor(newArr.length / 2);
  let offset = 0;

  if (target === newArr[midPoint]) return midPoint;

  else if (target < newArr[midPoint]) {
    newArr = newArr.slice(0, midPoint);
    midPoint = newArr.length / 2;
    return binarySearch(newArr, target);
  }

  else {
    offset += midPoint + 1;
    newArr = newArr.slice(midPoint + 1);
    midPoint = Math.floor(newArr.length / 2);

    let element = (newArr[midPoint] === target) ?
    (midPoint + offset) : binarySearch(newArr, target) + offset;
    return element;
  }
}

// Array.prototype.myBsearch = function(target, func) {
//   if (this.length === 0) return null;
//   const mid = Math.floor(this.length / 2);
//
//   if (this[mid] === target) {
//     return mid;
//   } else if (this[mid] > target) {
//     return this.slice(0, mid).myBsearch(target);
//   } else {
//     const result = this.slice(mid + 1, this.length).myBsearch(target);
//     return result === null ? result : mid + 1 + result
//   }
// }
