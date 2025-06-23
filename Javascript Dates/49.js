function diff_years(dt1, dt2) {
  return dt2.getFullYear() - dt1.getFullYear();
}

const dt49a = new Date("June 13, 2014 08:11:00");
const dt49b = new Date("October 19, 2017 11:13:00");
console.log(diff_years(dt49a, dt49b))