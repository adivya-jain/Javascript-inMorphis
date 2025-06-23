function lowercase_meridiem(dt) {
  return dt.getHours() < 12 ? 'am' : 'pm';
}

console.log(lowercase_meridiem(new Date(2023,0,1,10))); // "am"
console.log(lowercase_meridiem(new Date(2023,0,1,15))); // "pm"