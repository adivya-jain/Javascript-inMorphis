function diff_minutes(dt1, dt2) {
  const diffMs = dt2 - dt1;
  return Math.floor(diffMs / 60000);
}

const dt44a = new Date("October 13, 2014 11:11:00");
const dt44b = new Date("October 13, 2014 11:13:00");
console.log(diff_minutes(dt44a, dt44b)); // 2