"use strict";

function submit() {
  let loginValue = document.querySelector('#login__username').value;
  let passwordValue = document.querySelector('#login__passwd').value;
  console.log(passwordValue);
  
  let customHeader = new Headers();
  customHeader.append('Content-Type', 'application/x-www-form-urlencoded');
  let bodyAuth = `login=${loginValue}&password=${passwordValue}`;
  
  let fetchIni = {
    method: 'POST',
    headers: customHeader,
    body: bodyAuth
  }
  
  fetch("/auth", fetchIni)
  .then(res => res.json())
  .then(
    res => {
      window.localStorage.setItem('token', res.token);
      window.localStorage.setItem('login', res.username);
      let usrLoginHtml = document.querySelector('.usr_login');
      usrLoginHtml.innerHTML = window.localStorage.getItem('login');
    }
  )
}


// Loading library after loading all elements in html
window.addEventListener("DOMContentLoaded", () => {
  let submitButton = document.querySelector('#login__submit');
  submitButton.addEventListener("click", submit);
});
