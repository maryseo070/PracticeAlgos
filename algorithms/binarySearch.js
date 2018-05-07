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
    // offset += midPoint + 1;
    return binarySearch(newArr, target);
  }

  else {
    offset += midPoint + 1;
    newArr = newArr.slice(midPoint + 1);
    midPoint = Math.floor(newArr.length / 2);

    let element = newArr[midPoint] === target ? (midPoint + offset) : binarySearch(newArr, target) + offset;
    return element;
  }
}
