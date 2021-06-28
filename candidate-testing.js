const input = require('readline-sync');

let candidateName = "";
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;
question = "Who was the first American woman in space? ";
correctAnswer = "Sally Ride";
candidateAnswer = "";
candidateAnswers = [];
questions = ["Who was the first American woman in space?", "True or false: 5 kilometer == 5000 meters?",	"(5 + 3)/2 * 10 = ?", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "What is the minimum crew size for the ISS?"]
correctAnswers = ["sally ride", "true", 40, "trajectory", 3]




function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
  console.log("Hello,", candidateName, "and welcome to the candidate surveyor!");
  return candidateName
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer
for (let x = 0; x < questions.length; x++) {
  candidateAnswers[x] = input.question(`${questions[x]}`);
  }
  for (let y = 0; y < candidateAnswers.length; y = y + 1) {
  console.log(`You answered: ${candidateAnswers[y]}. The Correct answer is: ${correctAnswers[y]}`);
  }
  return candidateAnswers
}

let numCorrect = 0
let numIncorrect = 0

function gradeQuiz() {
// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly
for (let z = 0; z < candidateAnswers.length; z++) {
  if (candidateAnswers[z].toLowerCase() == correctAnswers[z]) {
    numCorrect = numCorrect + 1;
  }
  else {
    numIncorrect = numIncorrect + 1;
  }
}
console.log(`You scored ${numCorrect} out of ${questions.length}.`);
if (numCorrect / questions.length >= .8) {
  console.log(`Final score: ${numCorrect} out of  ${questions.length}! You passed!`)
}
else {
    console.log(`Final score: ${numCorrect} out of  ${questions.length} percent. You failed!`)
}
return numCorrect
}

function runProgram() {
  askForName();
  askQuestion();
  gradeQuiz();
}

// Replace the basic feedback from TODO 1.2c with a template literal that displays each of the candidate's responses in addition to the corresponding correct answers.


// Don't write any code below this line
// And don't change these or your program will not run as expected
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram,
};