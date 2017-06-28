console.log("security_questions.js loaded");

let securityQuestions = [
  {question: "What's your name?", expectedAnswer : "Dan"},
  {question:"How old are you?", expectedAnswer : "Not telling"},
  {question: "Where do you live?", expectedAnswer : "Oakland"}
];

for (i=0; i<securityQuestions.length;i++) {
  promptText = securityQuestions[i].question;
  let userResponse = console.prompt(promptText);
  if (userResponse != securityQuestions[i].expectedAnswer) {
    alert("Sorry wrong answer! Try again");
    i--;
  }

}
