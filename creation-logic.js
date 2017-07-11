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

function Paragraph(story, choiceOne, choiceTwo){
  this.story = story;
  this.choiceOne = choiceOne;
  this.choiceTwo = choiceTwo;
};

var raeStory = 'Dear Cthulhu, I have many urges and desires, but on this most sacred of nights, there is only one thing that I want. I cannot commit my request to digital media, but please look into my heart of hearts and grant my dearest wish. And I would also like a pony. Yours Truly, ' + localStorage.user.character + '\n' + '\n' + localStorage.user.character + 'finished ' + localStorage.user.genderType[2] + ' letter, and with a shaking hand, clicked the Send button. ' + localStorage.user.character + ' waited several seconds, unsure if ' + localStorage.user.genderType[0] + ' would ever receive a response to ' + localStorage.user.genderType[2] + ' request, but knew that in the end, if ' + localStorage.user.genderType[2] + ' wish was granted, the results would be obvious. ' + localStorage.user.character + ' stood, stretching, sore from sitting for so long in front of ' + localStorage.user.genderType[2] + ' computer. ' + localStorage.user.genderType[1] + ' glanced out the window, squinting at the ominously bright moon. It\'s a good time for a walk,' + localStorage.user.character + ' thought.' + localStorage.user.genderType[1] + ' put on ' + localStorage.user.genderType[2] + ' shoes, grabbed a fresh-baked cinnamon roll, and headed out the door, into the night. It was warm and muggy, fireflies glowing in the air. ' + localStorage.user.character + ' held out ' + localStorage.user.genderType[2] + ' hands, catching one of the bioluminescent bugs. ' + localStorage.user.genderType[1] + '…';

var raeChoiceOne = 'Put the firefly in a jar.';
var raeChoiceTwo = 'Smear the firefly along the sidewalk in an arcane symbol.';

var carsonStory = 'With the firefly\'s fate sealed, ' + localStorage.user.character + ' continued to stroll down the dimly lit street. Each step seemed to crash loudly in the muggy, still air, shattering the silence. Unusually quiet tonight, thought ' + localStorage.user.character + '. ' + localStorage.user.genderType[3] + ' eyes drifted upwards. Amidst the large rolling clouds staining the night sky, the moon seemed brighter now, teeming with what seemed to be a red glow. An uneasy sensation broke ' + localStorage.user.character + '\'s gaze. ' + localStorage.user.genderType[3] + '  eyes darted toward the street as a sense of danger washed over ' + localStorage.user.genderType[2] + '. All of a sudden ' + localStorage.user.genderType[0] + '  got the sense that ' + localStorage.user.genderType[0] + '  was being watched. ' + localStorage.user.character + ' quickened ' + localStorage.user.genderType[2] + '  pace as ' + localStorage.user.genderType[0] + '  neared the trail entrance. Tall trees stretched above ' + localStorage.user.genderType[2] + '  as ' + localStorage.user.genderType[0] + '  walked upon the forest floor like giants in the darkness, when a patch of moonlight poking through the trees revealed something profound. ' + localStorage.user.character + ' stood over a moonlit tree stump with a small dagger sitting on top of it. CTHULHU WAITS whispered throughout the trees surrounding ' + localStorage.user.name + '…';

var carsonChoiceOne = localStorage.user.character + ' takes the dagger, feeling a rush of energy flow throughout ' + localStorage.user.genderType[2] + ' body.';
var carsonChoiceTwo = 'Feeling too uneasy about the blade before ' + localStorage.user.genderType[2] + ' , ' + localStorage.user.character + ' turns away from the artifact and continues along the trail.';

var kyleStory = 'With fear pouring over ' + localStorage.user.genderType[2] + ' body, ' + localStorage.user.character + ' felt like ' + localStorage.user.genderType[0] + ' had no choice but to continue deeper into the woods. With every single step a new horror would appear in ' + localStorage.user.character + '\'s mind. Flashes of every fear ' + localStorage.user.genderType[0] + ' ever had appeared so real in these woods. ' + localStorage.user.character + '\'s mother brutally murdered. Spiders crawling out of all the trees and up ' + localStorage.user.genderType[2] + ' body. Giant rubber ducks surrounding ' + localStorage.user.genderType[2] + '. It took everything ' + localStorage.user.character + ' had to keep going while ' + localStorage.user.genderType[2] + ' fears kept creeping in. ' + '\n' + + '\n' + 'Finally at the end of the path ' + localStorage.user.character + ' came across an empty patch of what just seemed like pure darkness. A noise pierced the silence…' + '\n' + '\n' + 'NEIGH...' + '\n' + '\n' + 'It was a horse, all that for a horse. Wait not a horse! A Pony!!!!! ' + localStorage.user.character + ' was filled with pure joy!!' + '\n' + '\n' + 'Cthulhu\’s voice broke the joy: “What deal are you willing to make for this?”';

var kyleChoiceOne = 'I give you my life.';
var kyleChoiceTwo = 'Steals horse while shouting “FREEDOM!!!”';

var par1 = new Paragraph(raeStory, raeChoiceOne, raeChoiceTwo);
var par2 = new Paragraph(carsonStory, carsonChoiceOne, carsonChoiceTwo);
var par3 = new Paragraph(kyleStory, kyleChoiceOne, kyleChoiceTwo);

var storyArray = [par1, par2, par3];
var stringifiedStories = JSON.stringify(storyArray);
localStorage.storyArray = stringifiedStories;
