let btn = document.querySelector('button');
let inpt = document.querySelectorAll('input');
let error = document.querySelectorAll('label')
let password = document.querySelector('#password');
let Confirm = document.querySelector('#confirm');
let confirmLab = document.querySelector('#confirmLab');
let passwordLab = document.querySelector('#passwordLab');
let email = document.querySelector('#email')
let required = 'Field is required';

btn.addEventListener('click', function () {
  for (let i = 0; i < inpt.length; i++) {
    error[i].textContent = ""
    if (inpt[i].value.trim() === "") {
      error[i].textContent = required;
    } else if (email.value != " ") {
      validate()
    } if (Confirm.value != password.value && Confirm.value != "") {
      confirmLab.textContent = "Incorrect password"
    } else if (password.value === "") {
      passwordLab.textContent = required;
    } passwordValidate()
  }
})

function checkEmail(email) {
  let re = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi
  console.log();
  return re.test(email);
}
function validate() {
  if (checkEmail(email.value)) {
    return true;
  } else {
    document.getElementById('emailLab').textContent = 'Incorrect email';
  }
  return false;
}
function passwordValidate() {
  let str = document.getElementById("password").value;
  if (str.match(/[0-9]/g) &&
    str.match(/[A-Z]/g) &&
    str.match(/[a-z]/g) &&
    str.match(/[^a-zA-Z\d]/g) &&
    str.length >= 10) {
  }

  else if (str != "") {
    passwordLab.textContent = 'At least 1 uppercase character, 1 lowercase character, 1 digit,  1 specialcharacter and minimum 10 characters'
  }
} 