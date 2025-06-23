function add_months(dt, months) {
  let newDate = new Date(dt);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
}

const dt43 = new Date(2014, 10, 2);
console.log(add_months(dt43, 10).toString());