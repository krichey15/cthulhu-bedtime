'use strict';

var loginButtonEl = document.getElementById('login');
console.log(loginButtonEl);

loginButtonEl.addEventListener('submit', handleButton);

var userNameValueExample = 'username';
var stringifiedUsername = JSON.stringify(userNameValueExample);
localStorage.username = stringifiedUsername;

console.log(localStorage.username);

function handleButton(event) {
  event.preventDefault();
  var usernameValue = JSON.parse(localStorage.username);
  if(event.target.username.value == usernameValue) {
    window.location.assign('story.html');
  } else {
    alert('Invalid Username. If you haven\'t already created a Username, click \'Create Character\' and start creating your story!');
    console.log('Invalid username, username does not exist.');
  }
}
