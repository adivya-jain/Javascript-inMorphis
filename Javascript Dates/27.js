function short_months(date) {
  return date.toLocaleDateString('en-US', { month: 'short' });
}