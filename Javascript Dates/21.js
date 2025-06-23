function long_Days(date) {
  return date.toLocaleDateString('en-US', { weekday: 'long' });
}
dt = new Date(2015, 10, 1);  
console.log(long_Days(dt)); 