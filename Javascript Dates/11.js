function max_date(dates) {
  return new Date(Math.max.apply(null, dates.map(d => new Date(d)))).toISOString().slice(0, 10);
}