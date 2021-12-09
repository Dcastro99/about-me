'use strict';

//console.log('hi');

let userName = prompt('whats you name?');
alert('Hi' + ', ' + userName);


let doILikeMusic;

function musicQuestion() {
  doILikeMusic = prompt('Do I like music? Yes or No?');
  doILikeMusic.toLowerCase();
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
  console.log(instrument);

  if (instrument === 'piano') {
    //console.log('Yes, I play piano!')

    alert('Yes, I play piano!');
  } else {
    //console.log('No, I play piano');
    alert('No, I play piano');
  }
}



musicQuestion();
instrumentQuestion();
