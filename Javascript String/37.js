function compare_strings(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}
console.log(compare_strings('abcd', 'AbcD')); 
console.log(compare_strings('ABCD', 'Abce')); 