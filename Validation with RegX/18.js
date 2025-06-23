function isDomain(value) {
    return /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}$/.test(value);
  }
  
 
  console.log(isDomain("example.com"));      // true
  console.log(isDomain("sub.example.co.uk")); // true
  console.log(isDomain("http://example"));    // false
  