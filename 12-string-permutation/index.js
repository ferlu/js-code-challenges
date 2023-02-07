function numPermutations(letters) {
  if (letters.length === 1) return 1;
  return letters.length * numPermutations(letters.slice(1));
  // ?_____ 5 * 4 => 20 * 3 => 60 * 2 => 120 * 1 => 120
}
console.log(numPermutations("hello"));
