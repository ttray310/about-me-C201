'use strict';

let scoreOverall = 0;
let scoreAttempts = 0;
let siteVisitor = prompt('What is your name?');


function questionOne (){
  alert(`Welcome to my guessing game, ${siteVisitor}! Try and guess things about me!!`);

  let guessQuestOne = prompt('Do you think I\'m a dog person?').toLowerCase();

  if (guessQuestOne === 'yes' || guessQuestOne === 'ya' || guessQuestOne === 'yep' || guessQuestOne === 'y'){
    alert('Very good guess.');
    scoreOverall++;
  } else {
    alert('No... I have alergies to cats, and they suck.');
    scoreAttempts++;
  }
}
questionOne();


function questionTwo(){
  let guessQuestTwo = prompt('Do you think I\'m a vegan?').toLowerCase();

  if (guessQuestTwo === 'yes' || guessQuestTwo === 'ya' || guessQuestTwo === 'yep' || guessQuestTwo === 'y'){
    alert('Actually, true. I haven\'t eaten an animcal since March of 2019!!');
    scoreOverall++;
  } else {
    alert('Actually, I am a vegan. Please ask me about it.');
    scoreAttempts++;
  }
}
questionTwo();


function questionThree(){
  let guessQuestThree = prompt('Do you think my favorite video game is Zelda?').toLowerCase();

  if (guessQuestThree === 'yes' || guessQuestThree === 'ya' || guessQuestThree === 'yep' || guessQuestThree === 'y'){
    alert('Yeah! Those games are just special!');
    scoreOverall++;
  } else {
    alert('I enjoy the puzzle aspect of it the most.');
    scoreAttempts++;
  }
}
questionThree();


function questionFour(){
  let guessQuestFour = prompt('How about hobbies, do I look like I have enjoy snowboarding?').toLowerCase();

  if (guessQuestFour === 'yes' || guessQuestFour === 'ya' || guessQuestFour === 'yep' || guessQuestFour === 'y'){
    alert('Yeah, absolutely, snowboarding is a blast!');
    scoreOverall++;
  } else {
    alert('Actually, I\'ve been snowboarding since I was 17.');
    scoreAttempts++;
  }
}
questionFour();


function questionFive(){
  let guessQuestFive = prompt('How about music, could you see me listening to blues?').toLowerCase();
  if (guessQuestFive === 'yes' || guessQuestFive === 'ya' || guessQuestFive === 'yep' || guessQuestFive === 'y'){
    alert('Yupppp. I grew uplistening to Stevie Ray Vaughn. Best guitarist in my ears.');
    scoreOverall++;
  } else {
    alert('Actually, it was great. Still like to jam out to things that give those vibes.');
    scoreAttempts++;
  }
}
questionFive();


function questionSix(){
  let guessQuestSix = prompt('Want to play a game?? Guessing games are not the worst...');

  if (guessQuestSix === 'yes' || guessQuestSix === 'ya' || guessQuestSix === 'yep' || guessQuestSix === 'y'){
    alert('Glad to hear it. Move along, hit next.');
  } else {
    alert('Well.. actually, that\'s too bad.');
    scoreAttempts++;
  }
}
questionSix();


function questionSixWrap(){

  let guessQSixCount = 4;
  let myNumber = '13' ;
  let questSixAnswer = false;

  while(guessQSixCount && !questSixAnswer){
    let questSixGameAnswer = prompt ('What number is my favorite? (1-20)');

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
}
questionSixWrap();


function questionSeven(){

  let sportGameList = ['baseball','football','basketball'];
  let sportGuessAttempt = 6;
  let sportGameAnswer = false;

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
}
questionSeven();


alert(`Thanks for visiting my page. Your score ${scoreOverall} score out of ${scoreAttempts+scoreOverall} overall attempts which is ${100*(scoreOverall/(scoreAttempts+scoreOverall))}%.`);

alert(`Thanks for playing along ${siteVisitor}, it was fun for me... I think?!`);
