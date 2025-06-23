function full_year(date) {
  return date.toLocaleDateString('en-US', { year: 'numeric' });
}

dt = new Date(2015, 10, 1);  
console.log(full_year(dt)); 