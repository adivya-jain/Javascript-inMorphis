function diff_hours(dt1, dt2) {
  const diffMs = dt2 - dt1;
  return Math.floor(diffMs / (1000 * 60 * 60));
}

const dt45a = new Date("October 13, 2014 08:11:00");
const dt45b = new Date("October 13, 2014 11:13:00");
console.log(diff_hours(dt45a, dt45b)); // 3