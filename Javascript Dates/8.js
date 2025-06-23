function date_diff_indays(date1, date2) {
  let d1 = new Date(date1);
  let d2 = new Date(date2);
  const diff = d2 - d1;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}