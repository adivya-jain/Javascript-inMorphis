function week_end_date(dt) {
  let newDate = new Date(dt);
  newDate.setDate(newDate.getDate() + (6 - newDate.getDay()));
  newDate.setHours(23, 59, 59, 999);
  return newDate;
}

const dt51 = new Date();
console.log(week_end_date(dt51).toString());