function calculate_age(dob) {
  const diff = Date.now() - dob.getTime();
  return new Date(diff).getUTCFullYear() - 1970;
}