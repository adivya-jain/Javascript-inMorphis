function isAlphaDashUnderscore(value) {
    return /^[A-Za-z_-]+$/.test(value);
  }
  

  console.log(isAlphaDashUnderscore("Name_Example-Test")); // true
  console.log(isAlphaDashUnderscore("Test123"));           // false
  