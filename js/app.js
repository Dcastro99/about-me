'use strict';

//console.log('hi');

let userName = prompt('whats you name?');
alert('Hi' + ', ' + userName);
let totalAnswers = 0;

function yesOrNoQuestion(question, expectedAnswer, correctResponse, incorrectResponse) {
  let userAnswer = prompt(question).toLowerCase().slice(0,1);

  let incorrectAnswer;
  //parse expected answer and create incorrect answer as the opposite

  if(expectedAnswer === 'y') {
    incorrectAnswer = 'n';
  } else {
    incorrectAnswer = 'y';
  }

  //check answer
  if(userAnswer === expectedAnswer) {
    //yes cool
    totalAnswers++;
    alert(correctResponse);
  } else if(userAnswer === incorrectAnswer) {
    //wrong rip
    alert(incorrectResponse);
  } else {
    //??? gibberish
    alert('Yes or no, please!');
  }
}

function numberQuestion(question, triesAllowed, expectedNumber, tryAgain){
  let answer = '';
  let tries = 0;
  let correctAnswer = false;
  do{
    answer = parseInt(prompt(question));
    tries++;
    if(answer > expectedNumber){
      alert('You are too high!');
      alert('Try again');
    }else if(answer < expectedNumber){
      alert('You are too low!');
      alert('Try again');
    } else{
      alert('You are correct!');
      correctAnswer = true;
      totalAnswers++;
    }
  }

  while(answer !== expectedNumber && tries < triesAllowed);
  if(!correctAnswer){
    alert(tryAgain);
  }
}

///['ornament', 'gift', 'christmas tree'] >> 'ornament, gift, and christmas tree'
function englishList(array){
  let builtString = '';
  for (let i = 0; i < array.length; i++){
    if(i === array.length -1){
      builtString += `and ${array[i]}`;
    } else {
      builtString += `${array[i]}, `;
    }
  }
  return builtString;
}

function arrayQuestion(question, attempts, answers, correctAnswer){
  let correctGuess = false;

  do{
    let answer = prompt(question);
    attempts--;
    let found = false;
    for (let i = 0; i < answers.length; i++){
      if (answers[i] === answer){
        found = true;
      }
    }
    if (found){
      alert(correctAnswer + answer);
      correctGuess = true;
      totalAnswers++;
    } else{
      alert('Nope! Try again! You have ' + attempts + ' attepmt(s) left.');
    }
  }
  while(!correctGuess && --attempts);
  if(!correctGuess){
    alert(`Nice try, but the correct answers were ${englishList(answers)}!`);
  }
}

yesOrNoQuestion('Do I like music? Yes or No?', 'y', 'Yes, I like music!', 'No, I do like music');
yesOrNoQuestion('Do I like travelling? Yes or No?', 'y', 'Yes, I like to travel!', 'No, I do like travelling!');
yesOrNoQuestion('Do I like cuban food? Yes or No?', 'y', 'Yes, I love cuban food!', 'No, I do like cuban food!');
yesOrNoQuestion('Do I like running? Yes or No?', 'n', 'You\'re correct! I don\'t like running.', 'No, I don\'t like running!');
yesOrNoQuestion('Do I like playing the banjo? Yes or No?', 'n', 'Correct, I don\'t like playing the banjo!', 'No, I don\'t like playing the banjo.');
numberQuestion('How many instruments do I play? (1-10)?', 4, 4, 'Nice try, but I play 4 instruments!');
arrayQuestion('What instruments do I play?', 6, ['piano','guitar','bass','drums'], 'That is correct! I play ');
alert('Thanks for playin ' + userName + '!');
alert('You got ' + totalAnswers + ' out of 7 questions correct!');
