function timeConvert(mins) {
  let hours = Math.floor(mins / 60);
  let minutes = mins % 60;
  return `${mins} minutes = ${hours} hour(s) and ${minutes} minute(s).`;
}