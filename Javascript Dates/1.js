function is_date(input) {
  return input instanceof Date && !isNaN(input);
}

console.log(is_date('Nov 15, 2014'))
console.log(is_date("October 13, 2014 11:13:00"));  
console.log(is_date(new Date(86400000)));  
console.log(is_date(new Date(99,5,24,11,33,30,0)));  
console.log(is_date([1, 2, 4, 0]));