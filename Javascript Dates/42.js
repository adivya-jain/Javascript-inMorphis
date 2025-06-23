function add_weeks(dt, weeks) {
  let newDate = new Date(dt);
  newDate.setDate(newDate.getDate() + weeks * 7);
  return newDate;
}

const dt42 = new Date(2014, 10, 2);
console.log(add_weeks(dt42, 10).toString());