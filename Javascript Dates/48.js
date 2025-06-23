function diff_months(dt1, dt2) {
  let years = dt2.getFullYear() - dt1.getFullYear();
  let months = dt2.getMonth() - dt1.getMonth();
  return years * 12 + months;
}

const dt48a = new Date("June 13, 2014 08:11:00");
const dt48b = new Date("October 19, 2014 11:13:00");
console.log(diff_months(dt48a, dt48b));