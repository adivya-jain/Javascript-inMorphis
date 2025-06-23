function numeric_month(date) {
  return date.toLocaleDateString('en-US', { month: 'numeric' });
}
dt = new Date(2015, 10, 1);  
console.log(numeric_month(dt)); 