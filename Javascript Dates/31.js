function uppercase_meridiem(dt) {
  return dt.getHours() < 12 ? 'AM' : 'PM';
}

console.log(uppercase_meridiem(new Date(2023,0,1,10))); // "AM"
console.log(uppercase_meridiem(new Date(2023,0,1,15))); // "PM"