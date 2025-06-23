function month_start_date(dt) {
  return new Date(dt.getFullYear(), dt.getMonth(), 1);
}

const dt52 = new Date();
console.log(month_start_date(dt52).toString());