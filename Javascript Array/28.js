// Write a JavaScript function to find the longest common starting substring in a 
// set of strings.  
// Sample array : console.log(longest_common_starting_substring(['go', 'google'])); 
// Expected result : "go"


function longest_common_starting_substring(arr) {
  if (arr.length === 0) return "";
  
  let firstStr = arr[0]; 

  for (let i = 0; i < firstStr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j][i] !== firstStr[i]) {
        return firstStr.slice(0, i); 
      }
    }
  }

  return firstStr;
}

console.log(longest_common_starting_substring(['goo', 'gogle','goohjh']))