function min_date(dates) {
  return new Date(Math.min.apply(null, dates.map(d => new Date(d)))).toISOString().slice(0, 10);
}