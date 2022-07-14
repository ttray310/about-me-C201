'use strict';

let siteVisitor = prompt('What is your name?');
let scoreOverall = 0;
let scoreAttempts = 0;

alert(`Welcome to my guessing game, ${siteVisitor}! Try and guess things about me!!`);

let guessQuestOne = prompt('Do you think I\'m a dog person?').toLowerCase();

if (guessQuestOne === 'yes' || guessQuestOne === 'ya' || guessQuestOne === 'yep' || guessQuestOne === 'y'){
  alert('Very good guess.');
  scoreOverall++;
  // console.log('Very good guess.');
} else {
  alert('No... I have alergies to cats, and they suck.');
  scoreAttempts++;
  // console.log('No... I have alergies to cats, and they suck.');
}

console.log(scoreOverall);
let guessQuestTwo = prompt('Do you think I eat animals?').toLowerCase();

if (guessQuestTwo === 'yes' || guessQuestTwo === 'ya' || guessQuestTwo === 'yep' || guessQuestTwo === 'y'){
  alert('Actually, I don\'t eat any animcal since March of 2019!!');
  scoreOverall++;
  // console.log('Actually, I don\'t eat any animcal since March of 2019!!');
} else {
  alert('A fellow vegan spotted in the WILD??');
  scoreAttempts++;
  // console.log('A fellow vegan spotted in the WILD??');
}

let guessQuestThree = prompt('Do you think my favorite video game is Zelda?').toLowerCase();

if (guessQuestThree === 'yes' || guessQuestThree === 'ya' || guessQuestThree === 'yep' || guessQuestThree === 'y'){
  alert('Yeah! Those games are just special!');
  scoreOverall++;
  // console.log('Yeah! Those games are just special');
} else {
  alert('I enjoy the puzzle aspect of it the most.');
  scoreAttempts++;
  // console.log('Try again, you pick have picked up something, da na na');
}

let guessQuestFour = prompt('How about hobbies, do I look like I have enjoy snowboarding?');

if (guessQuestFour === 'yes' || guessQuestFour === 'ya' || guessQuestFour === 'yep' || guessQuestFour === 'y'){
  alert('Yeah, absolutely, snowboarding is a blast!');
  scoreOverall++;
  // console.log('');
} else {
  alert('Actually, I\'ve been snowboarding since I was 17.');
  scoreAttempts++;
  // console.log('HA! What is spare time? I have a wife and a house and kids and animals and...');
}

let guessQuestFive = prompt('How about music, could you see me listening to blues?').toLowerCase();

if (guessQuestFive === 'yes' || guessQuestFive === 'ya' || guessQuestFive === 'yep' || guessQuestFive === 'y'){
  alert('Yupppp. I grew uplistening to Stevie Ray Vaughn. Best guitarist in my ears.');
  scoreOverall++;
  // console.log('Yupppp. I grew uplistening to Stevie Ray Vaughn. Best guitarist in my eyes.');
} else {
  alert('Actually, it was great. Still like to jam out to things that give those vibes.');
  scoreAttempts++;
  // console.log('Actually, it was great. Still like to jam out to things that give those vibes.');
}

let guessQuestSix = prompt('Want to play a game?? Guessing games are not the worst...');

if (guessQuestSix === 'yes' || guessQuestSix === 'ya' || guessQuestSix === 'yep' || guessQuestSix === 'y'){
  alert('Glad to hear it. Move along, hit next.');
} else {
  alert('Well.. actually, that\'s too bad.');
  scoreAttempts++;
}

let guessQSixCount = 4;
let myNumber = '13' ;
let questSixAnswer = false;

while(guessQSixCount && !questSixAnswer){
  let questSixGameAnswer = prompt ('What number is my favorite? (1-20)');
  // guessQSixCount--;
  if (questSixGameAnswer === myNumber){
    alert ('Nice pick!! Onto question 7 then?');
    scoreOverall++;
    questSixAnswer = true;
  } else if(questSixGameAnswer > 13){
    alert (`Not the number, but keep going!. Tries remaining: ${guessQSixCount-1}. Try a bit lower.`);
    scoreAttempts++;
    guessQSixCount--;
  } else {
    alert (`Not the number, but keep going!. Tries remaining: ${guessQSixCount-1}. Try a bit higher.`);
    scoreAttempts++;
    guessQSixCount--;
  }
}

let sportGameList = ['baseball','football','basketball'];
let sportGuessAttempt = 6;
let sportGameAnswer = false;

// for (let i=0; i < sportGameList.length ; i++){
//   console.log(`Option ${i+1}: ${sportGameList[i]}`);
// }

while(sportGuessAttempt && !sportGameAnswer){
  let guessQuestSeven = prompt('What was my favorite sport growing up? I played for about 10 years.').toLowerCase();
  sportGuessAttempt--;
  if ((guessQuestSeven === sportGameList[0]) || (guessQuestSeven === sportGameList[1]) || (guessQuestSeven === sportGameList[2])){
    alert ('Nice pick! I played sports for years, and still like to mess around.');
    scoreOverall++;
    sportGameAnswer = true;
  } else {
    alert ('Try again! There\'s only so many sports.');
    scoreAttempts++;
  }
}

alert(`These were my favorite sports growing up : ${sportGameList}.`);

alert(`Thanks for visiting my page. Your score ${scoreOverall} out of ${scoreAttempts+scoreOverall} which is ${100*(scoreOverall/(scoreAttempts+scoreOverall))}%.`);





// for (let i=0; i<guessQSixCount; i++){
//   prompt('Okay, 1-20. Pick a number.');
//  baseball, soccer,

alert(`Thanks for playing along ${siteVisitor}, it was fun for me... I think?!`);
