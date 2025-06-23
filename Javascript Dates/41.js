function add_years(dt, years) {
  let newDate = new Date(dt);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
}

const dt41 = new Date(2014, 10, 2);
console.log(add_years(dt41, 10).toString());