function yesterday(date) {
  let d = new Date(date);
  d.setDate(d.getDate() - 1);
  return d;
}