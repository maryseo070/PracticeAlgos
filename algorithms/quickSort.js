// function quickSort(arr) {
//   if (arr.length < 2) return arr;
//
//   const pivot = arr[0];
//   let left = arr.slice(1).filter( (el) => el < pivot);
//   let right = arr.slice(1).filter( (el) => el > pivot);
//   left = quickSort(left);
//   right = quickSort(right);
//
//   return left.concat([pivot]).concat(right);
// }
//
// Array.prototype.quickSort = function (func) {
//   if (this.length < 2) return this;
//
//   if (!func) {
//     func = (x, y) => {
//       if (x < y) return -1;
//       return 1;
//     };
//   }
//
//   const pivot = this[0];
//   let left = this.slice(1).filter( (el) => func(el, pivot) === -1);
//   let right = this.slice(1).filter( (el) => func(el, pivot) === 1);
//   left = left.quickSort(func);
//   right = right.quickSort(func);
//
//   return left.concat([pivot]).concat(right);
// };
