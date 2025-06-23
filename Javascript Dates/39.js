function diff_to_GMT(dt) {
  const offset = -dt.getTimezoneOffset(); // in minutes, west is positive here
  const sign = offset >= 0 ? '+' : '-';
  const absOffset = Math.abs(offset);
  const hours = Math.floor(absOffset / 60);
  const minutes = absOffset % 60;
  return sign + String(hours).padStart(2, '0') + '.' + String(minutes * 10 / 6).padStart(3, '0');
}

console.log(diff_to_GMT(new Date())); // e.g., "+05.500"