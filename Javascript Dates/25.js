function full_month(date) {
  return date.toLocaleDateString('en-US', { month: 'long' });
}