'use strict';

//console.log('hi');

let userName = prompt('whats you name?');
alert('Hi' + ', ' + userName);


let doILikeMusic;

function musicQuestion() {
  doILikeMusic = prompt('Do I like music? Yes or No?');
  doILikeMusic.toLowerCase();
  //doILikeMusic.toUpperCase();
  console.log(doILikeMusic);

  if (doILikeMusic === 'yes') {
    // console.log('Yes, I like music!'); }
    alert('Yes, I like music!');
  } else {
    //console.log('No, I do like music');
    alert('No, I do like music');
  }
}
let instrument;

function instrumentQuestion() {
  instrument = prompt('what instrument do I play? Piano or Drums?');
  instrument.toLowerCase();
  instrument.toUpperCase();
  console.log(instrument);

  if (instrument === 'piano') {
    //console.log('Yes, I play piano!')

    alert('Yes, I play piano!');
  } else {
    //console.log('No, I play piano');
    alert('No, I play piano');
  }
}

let travel;

function travelQuestion() {
  travel = prompt('Do I like travelling? Yes or No?');
  travel.toLowerCase();
  travel.toUpperCase();
  console.log(travel);

  if (travel === 'yes') {
    //console.log('Yes, I do like to travel!')

    alert('Yes, I like to travel!');
  } else {
    //console.log('No, I do like travelling');
    alert('No, I do like travelling!');
  }
}
let cubanFood;

function foodQuestion() {
  cubanFood = prompt('Do I like cuban food? Yes or No?');
  cubanFood.toLowerCase();
  cubanFood.toUpperCase();
  console.log(cubanFood);

  if (cubanFood === 'yes') {
    //console.log('Yes, I do love cuban food!')

    alert('Yes, I love cuban food!');
  } else {
    //console.log('No, I do like cuban food');
    alert('No, I do like cuban food!');
  }
}

let running;

function runningQuestion() {
  running = prompt('Do I like running? Yes or No?');
  running.toLowerCase();
  running.toUpperCase();
  console.log(running);

  if (running === 'no') {
    //console.log('youre correct! I don't like running.')

    alert('youre correct! I dont like running.');
  } else {
    //console.log('No, I do like travelling');
    alert('No, I do like running!');
  }
}

let game;

function gameQuestion() {
  game = prompt('Did you have fun?');
  game.toLowerCase();
  console.log(game);{

 

    alert('Thanks for playin ' + userName + '!');
  } 
}


musicQuestion();
instrumentQuestion();
travelQuestion();
foodQuestion();
runningQuestion();
gameQuestion();

