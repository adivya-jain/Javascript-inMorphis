function unix_to_time(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString();
}