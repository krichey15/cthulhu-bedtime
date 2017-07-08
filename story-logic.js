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

var choiceOneEl = document.getElementsByName('choiceOne')[0];
var choiceTwoEl = document.getElementsByName('choiceTwo')[0];

var pEl = document.createElement('p');
pEl.setAttribute('class', 'story-text');

var finalScenario = {
  choiceOne: '',
  choiceTwo: '',
  choiceThree: ''
};

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
    console.log('No character information is available');
    storyObjects = [
      {story:'This is scenario one', choiceOne: 'Choice One', choiceTwo: 'Choice Two'},
      {story:'This is scenario Two', choiceOne: 'Choice One', choiceTwo: 'Choice Two'},
      {story:'This is scenario Three', choiceOne: 'Choice One', choiceTwo: 'Choice Two'}
    ];
  }
}

///shows option and choices
function displayStory(index){
  ///Get story string and display to story section
  pEl.textContent = storyObjects[index].story;
  storyPage.appendChild(pEl);

  ///get options and display to div
  var inputChoiceOne = document.getElementsByName('choiceOne')[0];
  var inputChoiceOneLabel = document.getElementById('choice-one');
  var inputChoiceTwo = document.getElementsByName('choiceTwo')[0];
  var inputChoiceTwoLabel = document.getElementById('choice-two');

  console.log(inputChoiceOne);

  inputChoiceOne.value = storyObjects[index].choiceOne;
  inputChoiceTwo.value = storyObjects[index].choiceTwo;
  inputChoiceOneLabel.textContent = storyObjects[index].choiceOne;
  inputChoiceTwoLabel.textContent = storyObjects[index].choiceTwo;
}

choiceOneEl.addEventListener('click', choiceSelection);
choiceTwoEl.addEventListener('click', choiceSelection);

function choiceSelection (event){
  ////Selecting choice logs choice to final scenario
  storyChoices.push(event.target.value);
  ///Increments scenario by 1
  storyIndex += 1;
  if(storyIndex < storyObjects.length){
    displayStory(storyIndex);
  }else {
    ///go to finalScenario
  }
}

convertStory();
displayStory(0);
