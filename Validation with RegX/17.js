function isHexColor(value) {
    
    return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value);
  }
  

  console.log(isHexColor("#fff"));     // true
  console.log(isHexColor("#123ABC"));  // true
  console.log(isHexColor("123ABC"));   // false
  