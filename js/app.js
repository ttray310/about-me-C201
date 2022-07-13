'use strict';

let siteVisitor = prompt('What is your name?');

alert(`Welcome to my guessing game, ${siteVisitor}! Try and guess things about me!!`);

let guessQuestOne = prompt('Do you think I\'m a dog person?').toLowerCase();

if (guessQuestOne === 'yes' || guessQuestOne === 'ya' || guessQuestOne === 'yep' || guessQuestOne === 'y'){
  alert('Very good guess.');
  // console.log('Very good guess.');
} else {
  alert('No... I have alergies to cats, and they suck.');
  // console.log('No... I have alergies to cats, and they suck.');
}

let guessQuestTwo = prompt('Do you think I eat animals?').toLowerCase();

if (guessQuestTwo === 'yes' || guessQuestTwo === 'ya' || guessQuestTwo === 'yep' || guessQuestTwo === 'y'){
  alert('Actually, I don\'t eat any animcal since March of 2019!!');
  // console.log('Actually, I don\'t eat any animcal since March of 2019!!');
} else {
  alert('A fellow vegan spotted in the WILD??');
  // console.log('A fellow vegan spotted in the WILD??');
}

let guessQuestThree = prompt('Do you think my favorite video game is Zelda?').toLowerCase();

if (guessQuestThree === 'yes' || guessQuestThree === 'ya' || guessQuestThree === 'yep' || guessQuestThree === 'y'){
  alert('Yeah! Those games are just special');
  // console.log('Yeah! Those games are just special');
} else {
  alert('Try again, you pick have picked up something, da na na');
  // console.log('Try again, you pick have picked up something, da na na');
}

let guessQuestFour = prompt('How about hobbies, Do I look like I have spare time?');

if (guessQuestFour === 'yes' || guessQuestFour === 'ya' || guessQuestFour === 'yep' || guessQuestFour === 'y'){
  alert('What is spare time? Absolutely not...');
  // console.log('');
} else {
  alert('HA! I have a wife and a house and kids and animals and...');
  // console.log('HA! What is spare time? I have a wife and a house and kids and animals and...');
}

let guessQuestFive = prompt('How about music, could you see me listening to blues?').toLowerCase();

if (guessQuestFive === 'yes' || guessQuestFive === 'ya' || guessQuestFive === 'yep' || guessQuestFive === 'y'){
  alert('Yupppp. I grew uplistening to Stevie Ray Vaughn. Best guitarist in my ears.');
  // console.log('Yupppp. I grew uplistening to Stevie Ray Vaughn. Best guitarist in my eyes.');
} else {
  alert('Actually, it was great. Still like to jam out to things that give those vibes.');
  // console.log('Actually, it was great. Still like to jam out to things that give those vibes.');
}

let guessQuestSix = prompt('Want to play a game?? Guessing games are not the worst...');

if (guessQuestSix === 'yes' || guessQuestSix === 'ya' || guessQuestSix === 'yep' || guessQuestSix === 'y'){
  alert('Glad to hear it. Move along, hit next.');
} else {
  alert('Well.. actually, that\'s too bad.');
}

let guessQSixCount = 4;
let myNumber = '13' ;
let questSixAnswer = false;

while(guessQSixCount && !questSixAnswer){
  let questSixGameAnswer = prompt ('What number is my favorite? (1-20)');
  guessQSixCount--;
  if (questSixGameAnswer === myNumber){
    prompt ('Nice pick!! Onto question 7 then?');
    questSixAnswer = true;
  } else {
    console.log(`Not the number ${questSixAnswer}, but keep going!. Tries remaining: ${guessQSixCount-1}`);
  }
}


// for (let i=0; i<guessQSixCount; i++){
//   prompt('Okay, 1-20. Pick a number.');

alert(`Thanks for playing along ${siteVisitor}, it was fun for me... I think?!`);
