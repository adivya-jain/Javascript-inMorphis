function trimString(str) {
    return str.replace(/^\s+|\s+$/g, '');
  }
  
  // Test
  console.log(trimString("   hello world   ")); // "hello world"
  