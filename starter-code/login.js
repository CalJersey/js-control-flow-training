console.log("login.js loaded");

function loginFunction(){
  let userLogin = {username:"User1",password:"1234!!"};
  let passAttempts = 1;
  let passAttemptsLimit = 3;
  let strTries = "tries";
  let triesLeft = passAttemptsLimit;

  while (passAttempts <= 3) {
    let passwordTry = prompt(`Enter password for user ${userLogin.username}`);

    if (passwordTry === userLogin.password) {
      alert("Password entered correctly. Success!");
      break;
    } else {
      triesLeft = passAttemptsLimit-passAttempts;
      if (triesLeft === 1){
        strTries = "try";
      } else if (triesLeft === 0) {
        alert("FAIL!\nSorry sucka");
        break;
      }
      alert(`Password incorrect. Please try again. You have ${triesLeft} ${strTries} left.`);
      passAttempts++;
    }
  }
}
