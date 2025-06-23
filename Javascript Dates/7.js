function is_weekend(date) {
  let day = new Date(date).getDay();
  return (day === 0 || day === 6) ? "weekend" : undefined;
}

console.log(is_weekend('Nov 15, 2014'));  
console.log(is_weekend('Nov 16, 2014'));  
console.log(is_weekend('Nov 17, 2014'));