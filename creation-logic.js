'use strict';

var creation = document.getElementById('userInput');
creation.addEventListener('submit', createCharacter);

function createCharacter(event) {
  event.preventDefault();
  console.log('YAY!');

  var userName = event.target.user.value;
  console.log(userName);

  var character = event.target.characterName.value;
  console.log(character);

  var genderType = event.target.gender.value;
  console.log(genderType);

  var user = new NewUser(userName, character, genderType);
  var stringifiedUser = JSON.stringify(user);
  localStorage.user = stringifiedUser;
  console.log(localStorage);
}

function NewUser(username, characterName, gender){
  this.username = username;
  this.characterName = characterName;
  this.gender = gender;
};
