function full_year(date) {
  return date.toLocaleDateString('en-US', { year: '2-digit' });
}

dt = new Date(2015, 10, 1);  
console.log(full_year(dt)); 