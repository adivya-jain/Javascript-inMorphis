function case_insensitive_search(str, searchTerm) {
  return str.toLowerCase().includes(searchTerm.toLowerCase()) ? "Matched" : "Not Matched";
}


console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));   // "Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));   // "Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));  // "Not Matched"