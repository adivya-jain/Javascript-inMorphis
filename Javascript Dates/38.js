function daylights_savings(dt) {
  const jan = new Date(dt.getFullYear(), 0, 1).getTimezoneOffset();
  const jul = new Date(dt.getFullYear(), 6, 1).getTimezoneOffset();
  return Math.min(jan, jul) !== dt.getTimezoneOffset() ? 1 : 0;
}

console.log(daylights_savings(new Date()));