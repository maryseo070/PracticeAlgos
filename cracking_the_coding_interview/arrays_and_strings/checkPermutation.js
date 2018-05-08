function checkPermutation(str1, str2) {
  let counter = {};

  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    if (counter[str1[i]]) {
      counter[str1[i]]++;
    }
    else {
      counter[str1[i]] = 1;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    if (counter[str2[j]]) {
      counter[str2[j]]--;
    }
    else{
      counter[str2[j]] = 1;
    }
  }

  for (key in counter) {
    if (counter[key] > 0) {
      return false;
    }
  }
  return true;
}
