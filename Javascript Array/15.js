let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

for (let i = 0; i < color.length; i++) {
  let position = i + 1;
  let suffix;
  if (position % 100 >= 11 && position % 100 <= 13) {
    suffix = "th"; 
  } else {
    switch (position % 10) {
      case 1: suffix = "st"; break;
      case 2: suffix = "nd"; break;
      case 3: suffix = "rd"; break;
      default: suffix = "th";
    }
  }

  console.log(`${position}${suffix} choice is ${color[i]}.`);
}