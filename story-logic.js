'use strict';

////Click event on choice
///Displays next story element
///Each story element is an object with the string, constructed from local storage, and choices
///First checks if local storage has constructed story strings in it: localStorage.?
///If there is no user information, send to user creation page
///If there is local storage, display the first page object in the array and choices at end
///Click event which option was chosen. logs that in final scenario object

///Where story objects will go
var storyObjects;
var storyPage = document.getElementById('story-page');
var userChoices = document.getElementById('user-choices');
var storyChoices = [];
var storyIndex = 0;
var userScore = 0;

var choiceOneEl = document.getElementsByName('choiceOne')[0];
var choiceTwoEl = document.getElementsByName('choiceTwo')[0];

var pEl = document.createElement('p');
pEl.setAttribute('class', 'story-text');

// var finalScenario = {
//   choiceOne: '',
//   choiceTwo: '',
//   choiceThree: ''
// };

///gets what is in local storage and puts it in the story objects
function convertStory(){
  ///change name based on what Kyle decides will be the name of local storage
  if(localStorage.storyArray){
    ////parse into array of story objects with empty one for final scenario
    var storyObjectsString = localStorage.storyArray;
    storyObjects = JSON.parse(storyObjectsString);
    console.log('Conversion happened');
  }else {
    ///Take back to character creation page
    // alert('Please create a character for the story');
    // window.location.assign('creation.html');
    storyObjects = [
      {story:'“Dear Cthulhu, I have many urges and desires, but on this most sacred of nights, there is only one thing that I want. I cannot commit my request to digital media, but please look into my heart of hearts and grant my dearest wish. And I would also like a pony. Yours Truly, NAME ” NAME finished THEIR letter, and with a shaking hand, clicked the Send button. NAME waited several seconds, unsure if THEY would ever receive a response to THEIR request, but knew that in the end, if THEIR wish was granted, the results would be obvious. NAME stood, stretching, sore from sitting for so long in front of THEIR computer. THEY glanced out the window, squinting at the ominously bright moon. It\’s a good time for a walk, NAME thought. THEY put on THEIR shoes, grabbed a fresh-baked cinnamon roll, and headed out the door, into the night. It was warm and muggy, fireflies glowing in the air. NAME held out THEIR hands, catching one of the bioluminescent bugs. THEY…', choiceOne: 'put in jar', choiceTwo:'smear on sidewalk'},
      {story:'Story section two', choiceOne: 'Choice One', choiceTwo:'Choice Two'},
      {story:'Story section three', choiceOne: 'Choice One', choiceTwo:'Choice Two'}
    ];
  }
}

///shows option and choices
function displayStory(index){
  ///Get story string and display to story section
  pEl.innerHTML = storyObjects[index].story;
  storyPage.appendChild(pEl);

  ///get options and display to div
  var inputChoiceOne = document.getElementsByName('choiceOne')[0];
  var inputChoiceOneLabel = document.getElementById('choice-one');
  var inputChoiceTwo = document.getElementsByName('choiceTwo')[0];
  var inputChoiceTwoLabel = document.getElementById('choice-two');

  // console.log(inputChoiceOne);

  inputChoiceOne.value = storyObjects[index].choiceOne;
  inputChoiceTwo.value = storyObjects[index].choiceTwo;
  inputChoiceOneLabel.textContent = storyObjects[index].choiceOne;
  inputChoiceTwoLabel.textContent = storyObjects[index].choiceTwo;
}

choiceOneEl.addEventListener('click', choiceSelection);
choiceTwoEl.addEventListener('click', choiceSelection);

function choiceSelection (event){
  ////Selecting choice logs choice to final scenario
  storyChoices.push(event.target.name);
  console.log(storyChoices);
  console.log(event.target.name);
  ///Increments scenario by 1
  storyIndex += 1;
  if(storyIndex < 3){
    displayStory(storyIndex);
    ///Uncheck all checkboxes
    choiceOneEl.checked = false;
    choiceTwoEl.checked = false;
  } else {
    for(var i = 0; i < storyChoices.length; i++) {
      if(storyChoices[i] === 'choiceOne') {
        userScore += 2;
      } else {
        userScore += 1;
      }
    }
    finalStory(storyChoices);
    var bodyEl = document.getElementsByTagName('body')[0];
    bodyEl.removeChild(userChoices);
    ///go to finalScenario
  }
}

///sets properties of final scenario
function finalStory(choices){
  if(userScore === 6) {
    pEl.innerHTML = localStorage.badEnd;
  } else if(userScore === 3) {
    pEl.innerHTML = localStorage.goodEnd;
  } else {
    pEl.innerHTML = localStorage.neutEnd;
  }
  console.log(userScore);
  // finalScenario.choiceOne = choices[0];
  // finalScenario.choiceTwo = choices[1];
  // finalScenario.choiceThree = choices[2];
  console.log('Final Story is reached');
}

convertStory();
displayStory(0);
