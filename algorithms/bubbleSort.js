function bubbleSort(arr, func) {
  let sorted = false;

  if (!func) {
    func = (x, y) => {
      if (x < y) return -1;
      else if (x === y) return 0;
      else return 1;
    };
  }

  while (!sorted) {
  sorted = true;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (j === arr.length) continue;
        if (func(arr[i], arr[j]) === 1) {
          sorted = false;
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  }
  return arr;
}

//
// Array.prototype.bubbleSort = function(func) {
//   let sorted = false;
//
//   if (!func) {
//     func = (x, y) => {
//       if (x <= y) return -1;
//       return 1;
//     }
//   }
//
//   while (!sorted) {
//     sorted = true;
//     for (let i = 0; i < this.length; i++) {
//       if (i + 1 === this.length) continue;
//
//       if (func(this[i], this[i + 1]) === 1) {
//         sorted = false;
//         let current = this[i], next = this[i + 1];
//         this[i] = next, this[i + 1] = current;
//       }
//     }
//   }
//
//   return this;
// }
