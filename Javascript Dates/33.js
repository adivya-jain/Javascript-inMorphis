function hours_with_zeroes(dt) {
  let hour = dt.getHours() % 12;
  hour = hour === 0 ? 12 : hour;
  return String(hour).padStart(2, '0');
}

console.log(hours_with_zeroes(new Date(1989, 10, 1))); // "12"
console.log(hours_with_zeroes(new Date(1989, 10, 1, 3))); // "03"