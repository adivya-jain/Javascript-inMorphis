function is_alphanumeric(str) {
    return /^[a-z0-9]+$/i.test(str);
  }
  
  
  console.log(is_alphanumeric("abc123")); // true
  console.log(is_alphanumeric("abc 123")); // false
  