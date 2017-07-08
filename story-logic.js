'use strict';

////Click event on choice
///Displays next story element
///Each story element is an object with the string, constructed from local storage, and choices
///First checks if local storage has constructed story strings in it: localStorage.?
///If there is no user information, send to user creation page
///If there is local storage, display the first page object in the array and choices at end
///Click event which option was chosen. logs that in final scenario object

///gets what is in local storage and puts it in the story objects
function convertStory(){
  ///change name based on what Kyle decides will be the name of local storage
  var storyObjects;
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
    console.log(storyObjects);
  }
}

convertStory();
