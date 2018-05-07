function mergeSort(arr, func) {
  if (arr.length <= 1) return arr;

  if (!func) {
    func = (left, right) => {
      return left < right ? -1 : 1;
    };
    let middle = Math.floor(arr.length / 2);
    let sortLeft = mergeSort(arr.slice(0, middle), func);
    let sortRight = mergeSort(arr.slice(middle), func);
    console.log(sortLeft);
    console.log(sortRight);

    return merge(sortLeft, sortRight, func);
  }
}

function merge(left, right, func) {
  let merged = [];
  while (left.length && right.length) {
    switch(func(left[0], right[0])){
      case -1:
        merged.push(left.shift());
        break;
      case 0:
        merged.push(left.shift());
        break;
      case 1:
        merged.push(right.shift());
        break;
    }
  }
  merged = merged.concat(left);
  merged = merged.concat(right);

  return merged;
}
