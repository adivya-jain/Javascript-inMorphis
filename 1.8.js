let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = parseInt(prompt("Guess a number between 1 and 10:"));
if(userGuess === randomNumber) {
    console.log("Good Work");
}else{
    console.log("Not Matched")
}