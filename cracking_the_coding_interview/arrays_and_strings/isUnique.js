function isUnique(string) {
  let letterCount = new Set();
  for (let i = 0; i < string.length; i++) {
    let currentLetter = string[i];
    if (!letterCount.has(currentLetter)) {
      letterCount.add(currentLetter);
    }
    else {
      return false;
    }
  }
  return true;
}
