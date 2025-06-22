function removeFalsy(arr) {
  return arr.filter(Boolean);
}

let sample = [NaN, 0, 15, false, -22, '', undefined, 47, null];

console.log(removeFalsy(sample)); 