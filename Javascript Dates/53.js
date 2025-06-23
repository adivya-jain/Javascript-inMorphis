function month_end_date(dt) {
  return new Date(dt.getFullYear(), dt.getMonth() + 1, 0);
}

const dt53 = new Date();
console.log(month_end_date(dt53).toString());