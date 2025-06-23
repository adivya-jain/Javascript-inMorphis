function short_Days(date) {
  return date.toLocaleDateString('en-US', { weekday: 'short' });
}