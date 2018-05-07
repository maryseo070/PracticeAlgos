function mergeSort(arr, func) {
  if (arr.length <= 1) return arr;

  if (!func) {
    func = (left, right) => {
      return left < right ? -1 : left > right ? 1 : 0;
    };
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
// before, I had sortedLeft = mergeSort(left, func)
//and sortedRight = mergeSort(right, func)
//this doesn't work because unlike the prototype version,
// this version calls the mergeSort recursive function both times as
//those variables are declared
// instead, we have to plug them into the merge function call

    return merge(mergeSort(left), mergeSort(right), func);
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


// Array.prototype.mergeSort = function (func) {
//   if (this.length <= 1) return this;
//
//   if (!func) func = (left,  right) => {
//     return left < right ? -1 : left > right ? 1 : 0;
//   };
//
//   const midpoint = Math.floor(this.length / 2);
//   const sortedLeft = this.slice(0, midpoint).mergeSort(func);
//   const sortedRight = this.slice(midpoint).mergeSort(func);
//
//   return sortedLeft.merge(sortedRight, func);
// };
//
// Array.prototype.merge = function (arr, func) {
//   let merged = [];
//
//   while (this.length && arr.length) {
//     switch(func(this[0], arr[0])) {
//       case -1:
//         merged.push(this.shift());
//         break;
//       case 0:
//         merged.push(this.shift());
//         break;
//       case 1:
//         merged.push(arr.shift());
//         break;
//     }
//   }
//
//   merged = merged.concat(this);
//   merged = merged.concat(arr);
//
//   return merged;
// };
