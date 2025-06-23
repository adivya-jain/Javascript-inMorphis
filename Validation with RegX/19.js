function isHTML(value) {
    return /<("[^"]*"|'[^']*'|[^'">])*>/.test(value);
  }
  
  
  console.log(isHTML("<div>Hello</div>")); // true
  console.log(isHTML("Just text"));        // false
  