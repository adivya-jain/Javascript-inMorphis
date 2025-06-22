function count(str, subStr, caseSensitive = false) {
  const pattern = caseSensitive ? subStr : subStr.toLowerCase();
  const text = caseSensitive ? str : str.toLowerCase();
  return text.split(pattern).length - 1;
}
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox', false));