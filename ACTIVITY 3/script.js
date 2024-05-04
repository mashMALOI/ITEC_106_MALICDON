const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const promptGuess = () => {
  readline.question(`Guess a number between ${minNum} - ${maxNum}: `, (input) => {
    guess = Number(input.trim());
    if (isNaN(guess) || guess < minNum || guess > maxNum) {
      console.log("Please enter a valid number within the range.");
      promptGuess();
    } else {
      attempts++;
      if (guess < answer) {
        console.log("TOO LOW! TRY AGAIN!");
        promptGuess();
      } else if (guess > answer) {
        console.log("TOO HIGH! TRY AGAIN!");
        promptGuess();
      } else {
        console.log(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`);
        running = false;
        readline.close();
      }
    }
  });
};

promptGuess();
