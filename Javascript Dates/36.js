function minutes_with_leading_zeros(dt) {
  return String(dt.getSeconds()).padStart(2, '0');
}

console.log(minutes_with_leading_zeros(new Date(1989, 10, 1))); // "00"