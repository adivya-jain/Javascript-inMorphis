function week_start_date(dt) {
  let newDate = new Date(dt);
  newDate.setDate(newDate.getDate() - newDate.getDay());
  newDate.setHours(0, 0, 0, 0);
  return newDate;
}

const dt50 = new Date();
console.log(week_start_date(dt50).toString());