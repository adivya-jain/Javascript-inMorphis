function isSSN(value) {
    return /^\d{3}-\d{2}-\d{4}$/.test(value);
  }
  

  console.log(isSSN("123-45-6789"));  // true
  console.log(isSSN("123456789"));    // false
  