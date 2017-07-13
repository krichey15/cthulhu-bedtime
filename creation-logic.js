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

  var raeChoiceOne = 'Smears the firefly along the sidewalk in an arcane symbol.';
  var raeChoiceTwo = 'Put the firefly in a jar.';

  var carsonStory = 'With the firefly\'s fate sealed, ' + character + ' continued to stroll down the dimly lit street. Each step seemed to crash loudly in the muggy, still air, shattering the silence. Unusually quiet tonight, thought ' + character + '. ' + genderType[3] + ' eyes drifted upwards. Amidst the large rolling clouds staining the night sky, the moon seemed brighter now, teeming with what seemed to be a red glow. ' + '<br />' + '<br />' + 'An uneasy sensation broke ' + character + '\'s gaze. ' + genderType[3] + '  eyes darted toward the street as a sense of danger washed over ' + genderType[2] + ' body. All of a sudden ' + genderType[0] + '  got the sense that ' + genderType[0] + '  was being watched. ' + character + ' quickened ' + genderType[2] + '  pace as ' + genderType[0] + '  neared the trail entrance.' + '<br />' + '<br />' + 'Tall trees stretched above like giants in the darkness as ' + genderType[0] + ' walked upon the forest floor, when a patch of moonlight poking through the trees revealed something profound. ' + character + ' stood over a moonlit tree stump with a small dagger sitting on top of it.' + '<br />' + '<br />' + 'CTHULHU WAITS, whispered throughout the trees surrounding ' + character + '...';

  var carsonChoiceOne = character + ' takes the dagger, feeling a rush of energy flow throughout ' + genderType[2] + ' body.';
  var carsonChoiceTwo = 'Feeling too uneasy about the blade, ' + character + ' turns away from the artifact and continues along the trail.';

  var kyleStory = 'With fear pouring over ' + genderType[2] + ' body, ' + character + ' felt like ' + genderType[0] + ' had no choice but to continue deeper into the woods. With every single step a new horror would appear in ' + character + '\'s mind. Flashes of every fear ' + genderType[0] + ' ever had, appeared so real in these woods. ' + character + '\'s mother brutally murdered. Spiders crawling out of all the trees and up ' + genderType[2] + ' body. Giant rubber ducks surrounding ' + genderType[2] + '. It took everything ' + character + ' had to keep going while ' + genderType[2] + ' fears kept creeping in. ' + '<br />' + '<br />' + 'Finally at the end of the path ' + character + ' came across an empty patch of what just seemed like pure darkness. A noise pierced the silence…' + '<br />' + '<br />' + 'NEIGH...' + '<br />' + '<br />' + 'It was a horse, all that for a horse. Wait not a horse! A Pony!!!!! ' + character + ' was filled with pure joy!!' + '<br />' + '<br />' + 'Cthulhu\’s voice broke the joy: “What deal are you willing to make for this?”';

  var kyleChoiceOne = 'I give you my life.';
  var kyleChoiceTwo = 'Steals horse while shouting “FREEDOM!!!”';

  var par1 = new Paragraph(raeStory, raeChoiceOne, raeChoiceTwo);
  var par2 = new Paragraph(carsonStory, carsonChoiceOne, carsonChoiceTwo);
  var par3 = new Paragraph(kyleStory, kyleChoiceOne, kyleChoiceTwo);
  localStorage.setItem('goodEnd', 'turns and throws the jar full of fireflies at Cthulhu…it shatters. If you were there and listened close you would be able hear the fireflies shout \“FREEDOM!\”. As ' + character + ' rides into the darkness on ' + genderType[2] + ' new pony, Cthulhu stands in awe and whispers \“Man, what a badass\”.');
  localStorage.setItem('badEnd', 'Cthulhu smiled. Maybe.' + '<br /><br />' + '\“I will grant your wish, ' + character + '. Take this pony, secure in the knowledge that entropy will reign.\”' + '<br /><br />' + character + ', pure joy shining on ' + genderType[2] + ' face, led ' + genderType[2] + ' pony from the dark clearing, finally eating ' + genderType[2] + ' cinnamon roll as ' + genderType[0] + ' strolled along the moonlit path. It was all worth it, ' + character + ' thought to themselves.' + '<br /><br />' + 'Then ' + genderType[0] + ' died from cinnamon roll poisoning.' + '<br /><br />' + 'And then the heat-death of the universe happened sometime later.' + '<br /><br />' + 'GO CHAOS!');
  localStorage.setItem('neutEnd', 'Before ' + character + ' can do anything or say a word, Cthulhu shakes their head and mutters, "Wait wait... sigh... are you even really into this?" ' + character + ', caught off guard, stares at Cthulhu, who is now shrugging. Confused and slightly off put, ' + character + ' furrows ' + genderType[2] + ' brow with ' + genderType[2] + ' mouth agape racing to comprise a response. "Oh what, you\'re all confused now? Like you didn\'t write me a letter like 30 minutes ago and then see a series of three very distinct and obvious tasks to prove your undying loyalty to me?" asked Cthulhu, "Because, like, you didn\'t even do them all dude! Like I had to move things around to come up here - not a short commute by the way - and I just kinda feel like you shit all over it. ' + '<br /><br />' + character + ', still confused, responds, "No no! I- I\'m sorry Cth-",' + '<br /><br />' + '"What, you think random mystical choices just throw themselves together? Huh? Fireflys aren\'t even native to this state! I mean seriously I even brought you a pony!" Cthulhu said, cutting ' + genderType[2] + ' off and now pointing to the horse. ' + genderType[3] + ' eyes glance over at the pony, who somehow looked sad too. "You think ponies are cheap? Like I just waltzed on down to the free pony store? NO I PAID IN ADVANCE DICK," said Cthulhu, leaning forward and then turning away with his hands on his hips. ' + character + ' looked down towards the ground, sulking. "I\'m sorry, I didnt think tha-"' + '<br /><br />' + '"No you\'re totally right, you DIDN\'T think." Cthulhu said grabbing the pony\'s reigns.' + '<br /><br />' + '"NEIGH NEI-"' + '<br /><br />' + '"No don\'t neigh for ' + genderType[2] + ' Frank, don\'t neigh for that jerk. We\'re going home. But first..." All of a sudden the sweet pastry ' + character + ' had been saving floated from ' + genderType[2] + ' pocket and over to Cthulhu\'s outstretched hand. "Consider this asshole tax, poser," said Cthulhu before stepping into a dark portal and disappearing with Frank.');

  var storyArray = [par1, par2, par3];
  var stringifiedStories = JSON.stringify(storyArray);
  localStorage.storyArray = stringifiedStories;
}
