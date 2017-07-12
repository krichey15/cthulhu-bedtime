'use strict';

var creation = document.getElementById('user-input');
creation.addEventListener('submit', createCharacter);

function createCharacter(event) {
  event.preventDefault();
  console.log('YAY!');
  var femaleArray = ['she', 'She', 'her', 'Her'];
  var maleArray = ['he', 'He', 'his', 'His'];
  var otherArray = ['they', 'They', 'their', 'them'];

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

  storyTime(character, genderType);
  window.location.assign('story.html');
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

function storyTime(character, genderType){
  var raeStory = 'Dear Cthulhu, I have many urges and desires, but on this most sacred of nights, there is only one thing that I want. I cannot commit my request to digital media, but please look into my heart of hearts and grant my dearest wish. And I would also like a pony.' + '<br />' + 'Yours Truly, ' + character + '<br />' + '<br />' + character + ' finished ' + genderType[2] + ' letter, and with a shaking hand, clicked the send button. ' + character + ' waited several seconds, unsure if ' + genderType[0] + ' would ever receive a response to ' + genderType[2] + ' request, but knew that in the end, if ' + genderType[2] + ' wish was granted, the results would be obvious. ' + character + ' stood, stretching, sore from sitting for so long in front of ' + genderType[2] + ' computer. ' + genderType[1] + ' glanced out the window, squinting at the ominously bright moon. It\'s a good time for a walk, ' + character + ' thought. ' + genderType[1] + ' put on ' + genderType[2] + ' shoes, grabbed a fresh-baked cinnamon roll, and headed out the door, into the night. It was warm and muggy, fireflies glowing in the air. ' + character + ' held out ' + genderType[2] + ' hands, catching one of the bioluminescent bugs. ' + genderType[1] + '…';

  var raeChoiceOne = 'Smear the firefly along the sidewalk in an arcane symbol.';
  var raeChoiceTwo = 'Put the firefly in a jar.';

  var carsonStory = 'With the firefly\'s fate sealed, ' + character + ' continued to stroll down the dimly lit street. Each step seemed to crash loudly in the muggy, still air, shattering the silence. Unusually quiet tonight, thought ' + character + '. ' + genderType[3] + ' eyes drifted upwards. Amidst the large rolling clouds staining the night sky, the moon seemed brighter now, teeming with what seemed to be a red glow. ' + '<br />' + '<br />' + 'An uneasy sensation broke ' + character + '\'s gaze. ' + genderType[3] + '  eyes darted toward the street as a sense of danger washed over ' + genderType[2] + '. All of a sudden ' + genderType[0] + '  got the sense that ' + genderType[0] + '  was being watched. ' + character + ' quickened ' + genderType[2] + '  pace as ' + genderType[0] + '  neared the trail entrance.' + '<br />' + '<br />' + 'Tall trees stretched above ' + genderType[2] + '  as ' + genderType[0] + '  walked upon the forest floor like giants in the darkness, when a patch of moonlight poking through the trees revealed something profound. ' + character + ' stood over a moonlit tree stump with a small dagger sitting on top of it.' + '<br />' + '<br />' + 'CTHULHU WAITS whispered throughout the trees surrounding ' + name + '...';

  var carsonChoiceOne = character + ' takes the dagger, feeling a rush of energy flow throughout ' + genderType[2] + ' body.';
  var carsonChoiceTwo = 'Feeling too uneasy about the blade before ' + genderType[2] + ' , ' + character + ' turns away from the artifact and continues along the trail.';

  var kyleStory = 'With fear pouring over ' + genderType[2] + ' body, ' + character + ' felt like ' + genderType[0] + ' had no choice but to continue deeper into the woods. With every single step a new horror would appear in ' + character + '\'s mind. Flashes of every fear ' + genderType[0] + ' ever had, appeared so real in these woods. ' + character + '\'s mother brutally murdered. Spiders crawling out of all the trees and up ' + genderType[2] + ' body. Giant rubber ducks surrounding ' + genderType[2] + '. It took everything ' + character + ' had to keep going while ' + genderType[2] + ' fears kept creeping in. ' + '<br />' + '<br />' + 'Finally at the end of the path ' + character + ' came across an empty patch of what just seemed like pure darkness. A noise pierced the silence…' + '<br />' + '<br />' + 'NEIGH...' + '<br />' + '<br />' + 'It was a horse, all that for a horse. Wait not a horse! A Pony!!!!! ' + character + ' was filled with pure joy!!' + '<br />' + '<br />' + 'Cthulhu\’s voice broke the joy: “What deal are you willing to make for this?”';

  var kyleChoiceOne = 'I give you my life.';
  var kyleChoiceTwo = 'Steals horse while shouting “FREEDOM!!!”';

  var goodEnding = character + 'turns and throws the jar full of fireflies at Cthulhu…it shatters. If you were there and listened close you would be able hear the fireflies shout \“FREEDOM!\”. As ' + character + ' rides into the darkness on ' + genderType[2] + ' new pony, Cthulhu stands in awe and whispers \“Man, what a badass\”.';

  var neutralEnding;

  var badEnding = 'Cthulhu smiled. Maybe.' + '<br />' + '\“I will grant your wish, ' + character + '. Take this pony, secure in the knowledge that entropy will reign.\”' + '<br />' + character + ', pure joy shining on ' + genderType[2] + ' face, led ' + genderType[2] + ' pony from the dark clearing, finally eating ' + genderType[2] + ' cinnamon roll as ' + genderType[0] + ' strolled along the moonlit path. It was all worth it,' + character + ' thought to themselves.' + '<br />' + 'Then ' + genderType[0] + ' died from cinnamon roll poisoning.' + '<br />' + 'And then the heat-death of the universe happened sometime later.' + '<br />' + 'GO CHAOS!';

  var par1 = new Paragraph(raeStory, raeChoiceOne, raeChoiceTwo);
  var par2 = new Paragraph(carsonStory, carsonChoiceOne, carsonChoiceTwo);
  var par3 = new Paragraph(kyleStory, kyleChoiceOne, kyleChoiceTwo);
  var goodEnd = new Paragraph(goodEnding);
  var neutEnd = new Paragraph(neutralEnding);
  var badEnd = new Paragraph(badEnding);

  var storyArray = [par1, par2, par3, goodEnd, neutEnd, badEnd];
  var stringifiedStories = JSON.stringify(storyArray);
  localStorage.storyArray = stringifiedStories;
}
