function diff_days(dt1, dt2) {
  const diffMs = dt2 - dt1;
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

const dt46a = new Date("October 13, 2014 08:11:00");
const dt46b = new Date("October 19, 2014 11:13:00");
console.log(diff_days(dt46a, dt46b)); // 6