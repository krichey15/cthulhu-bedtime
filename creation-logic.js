'use strict';

var creation = document.getElementById('userInput');
creation.addEventListener('submit', createCharacter);

var femaleArray = ['she', 'She', 'her', 'Her'];
var maleArray = ['he', 'He', 'his', 'His'];
var otherArray = ['they', 'They', 'their', 'them'];

function createCharacter(event) {
  event.preventDefault();
  console.log('YAY!');

  var userName = event.target.user.value;
  console.log(userName);

  var character = event.target.characterName.value;
  console.log(character);

  var genderType = event.target.gender.value;
  console.log(genderType);

  if (genderType == 'She/Her'){
    genderType = femaleArray;
  }else if (genderType == 'He/Him') {
    genderType = maleArray;
  }else if (genderType == 'They/Them') {
    genderType = otherArray;
  }

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

function Paragraph(story, choice1, choice2){
  this.story = story;
  this.choice1 = choice1;
  this.choice2 = choice2;
};

var raeStory = 'Dear Cthulhu, I have many urges and desires, but on this most sacred of nights, there is only one thing that I want. I cannot commit my request to digital media, but please look into my heart of hearts and grant my dearest wish. And I would also like a pony. Yours Truly, ' + localStorage.user.character + '\n' + '\n' + localStorage.user.character + 'finished ' + localStorage.user.genderType[2] + ' letter, and with a shaking hand, clicked the Send button. ' + localStorage.user.character + ' waited several seconds, unsure if ' + localStorage.user.genderType[0] + ' would ever receive a response to ' + localStorage.user.genderType[2] + ' request, but knew that in the end, if ' localStorage.user.genderType[2] +  ' wish was granted, the results would be obvious. ' +  localStorage.user.character + ' stood, stretching, sore from sitting for so long in front of ' localStorage.user.genderType[2] + ' computer. ' + localStorage.user.genderType[1] + ' glanced out the window, squinting at the ominously bright moon. It\’s a good time for a walk,' + localStorage.user.character + ' thought.' + localStorage.user.genderType[1] + ' put on ' + localStorage.user.genderType[2] + ' shoes, grabbed a fresh-baked cinnamon roll, and headed out the door, into the night. It was warm and muggy, fireflies glowing in the air. ' + localStorage.user.character + ' held out ' + localStorage.user.genderType[2] + ' hands, catching one of the bioluminescent bugs. ' + localStorage.user.genderType[1] + '…';

// Choice one: Put the firefly in a jar.
// Choice two: Smeared the firefly along the sidewalk in an arcane symbol.

var par1 = new Paragraph(raeStory, choice1, choice2);
var par2 = new Paragraph(story, choice1, choice2);
var par3 = new Paragraph(story, choice1, choice2);


var storyArray = [par1, par2, par3];
var stringifiedStories = JSON.stringify(storyArray);
localStorage.storyArray = stringifiedStories;
