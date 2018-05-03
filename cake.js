// function highest_three(arr) {
//   let max1 = arr[0];
//   let max2 = arr[0];
//   let max3 = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     let current = arr[i];
//     if (current >  max1) {
//       max3 = max2;
//       max2 = max1;
//       max1 = current;
//     }
//     if (current < max1 && current > max2) {
//       max3 = max2;
//       max2 = current;
//     }
//     if (current < max2 && current > max3) {
//       max3 = current;
//     }
//   }
//   return (max1 * max2 * max3);
// }

function highest_of_three(arr) {
  let highest = Math.max(arr[0], arr[1]);
  let lowest = Math.min(arr[0], arr[1]);

  let highestTwo = (arr[0] * arr[1]);
  let lowestTwo = (arr[0] * arr[1]);
  let maxThree = (arr[0] * arr[1] * arr[2]);

  if (arr.length < 3) {
    throw new Error("Less than 3 items!");
  }

  for (let i = 2; i < arr.length; i++) {
    let current = arr[i];
    maxThree = Math.max(maxThree, (current * highestTwo), (current * lowestTwo));
    highestTwo = Math.max(highestTwo, (current * highest), (current * lowest));
    lowestTwo = Math.min(lowest, current);
    highest = Math.max(highest, current);
    lowest = Math.min(lowest, current);
  }
  return maxThree;
}
