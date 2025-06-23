function timezone_name(dt) {
  // Extract timezone from toString()
  const match = dt.toString().match(/\(([^)]+)\)$/);
  return match ? match[1] : '';
}

console.log(timezone_name(new Date()));