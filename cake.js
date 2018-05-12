// function highest_of_three(arr) {
//   let highest = Math.max(arr[0], arr[1]);
//   let lowest = Math.min(arr[0], arr[1]);
//
//   let highestTwo = (arr[0] * arr[1]);
//   let lowestTwo = (arr[0] * arr[1]);
//   let maxThree = (arr[0] * arr[1] * arr[2]);
//
//   if (arr.length < 3) {
//     throw new Error("Less than 3 items!");
//   }
//
//   for (let i = 2; i < arr.length; i++) {
//     let current = arr[i];
//     maxThree = Math.max(maxThree, (current * highestTwo), (current * lowestTwo));
//     highestTwo = Math.max(highestTwo, (current * highest), (current * lowest));
//     lowestTwo = Math.min(lowest, current);
//     highest = Math.max(highest, current);
//     lowest = Math.min(lowest, current);
//   }
//   return maxThree;
// }


// function toRomanNums(number) {
//   let romanNumerals = {
//     1: "I",
//     5: "V",
//     10: "X",
//     50: "L",
//     100: "C",
//     1000: "M"
//   };
  // keep index of keys
  //find first key that is less than the value of number
  // looking only at ranges of 3 places (1, 5, 10)
}
