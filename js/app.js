'use strict';

//console.log('hi');

let userName = prompt('whats you name?');
alert('Hi' + ', ' + userName);
let totalAnswers = 0;

function musicQuestion() {

  let doILikeMusic = prompt('Do I like music? Yes or No?').toLowerCase();

  console.log(doILikeMusic);

  if (doILikeMusic.slice(0,1) ==='y') {
    // console.log('Yes, I like music!'); }
    alert('Yes, I like music!');
    totalAnswers++;
  } else {
    //console.log('No, I do like music');
    alert('No, I do like music');
  }
}

function instrumentQuestion() {
  let instrument = prompt('Do I like playing the banjo? yes or no?').toLowerCase();

  console.log(instrument);

  if (instrument.slice(0,1) === 'n') {
    //console.log('Yes, I play piano!')

    alert('correct, I do not like playing the banjo!');
    totalAnswers++;
  } else {
    //console.log('No, I play piano');
    alert('No, I do not like playing the banjo.');
  }
}



function travelQuestion() {
  let travel = prompt('Do I like travelling? Yes or No?').toLowerCase();

  console.log(travel);

  if (travel.slice(0,1) === 'y') {
    //console.log('Yes, I do like to travel!')

    alert('Yes, I like to travel!');
    totalAnswers++;
  } else {
    //console.log('No, I do like travelling');
    alert('No, I do like travelling!');
  }
}

function foodQuestion() {
  let cubanFood = prompt('Do I like cuban food? Yes or No?').toLowerCase();
  console.log(cubanFood);

  if (cubanFood.slice(0,1) === 'y') {
    //console.log('Yes, I do love cuban food!')

    alert('Yes, I love cuban food!');
    totalAnswers++;
  } else {
    //console.log('No, I do like cuban food');
    alert('No, I do like cuban food!');
  }
}
function runningQuestion() {
  let running = prompt('Do I like running? Yes or No?').toLowerCase();

  console.log(running);

  if (running.slice(0,1) === 'n') {
    //console.log('youre correct! I don't like running.')

    alert('youre correct! I dont like running.');
    totalAnswers++;
  } else {
    //console.log('No, I do like travelling');
    alert('No, I do not like running!');
  }
}
function howManyInstruments(){
  let answer = '';
  let tries = 0;
  let correctAnswer = false;
  do{
    answer = prompt('How many instruments do I play? (1-10)?');
    tries++;
    if(answer > 4){
      alert('Try again');
      alert('You are too high!');
    }else if(answer < 4){
      alert('Try again');
      alert('You are too low!');
    } else{
      alert('You are correct!');
      correctAnswer = true;
      totalAnswers++;
    }
  }

  while(answer !=='4'&& tries<4);
  if(!correctAnswer){
    alert('Nice try, but I play 4 instruments!');
  }
}

function instrumentIPlay(){

  let answers = ['piano','guitar','bass','drums'];
  let attempts = 6;
  let correctGuess = false;

  do{
    let answer = prompt('What instruments do I play?');
    attempts--;
    let found = false;
    for (let i = 0; i < answers.length; i++){
      if (answers[i] === answer){
        found = true;
      }
    }
    if (found){

      alert('That is correct! I play '+ answer);
      correctGuess = true;
      totalAnswers++;
    } else{
      alert('Nope! Try again! You have ' + attempts + ' attepmt(s) left.');
    }
  }
  while(!correctGuess && attempts!==0);
  if(!correctGuess){
    alert('Nice try, but I play piano, guitar, drums, and bass!');
  }
}

function gameQuestion() {

  alert('Thanks for playin ' + userName + '!');
  alert('You got ' + totalAnswers + ' out of 7 questions correct!');

}
musicQuestion();
travelQuestion();
foodQuestion();
runningQuestion();
instrumentQuestion();
howManyInstruments();
instrumentIPlay();
gameQuestion();

