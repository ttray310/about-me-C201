'use strict';

let siteVisitor = prompt('What is your name?');

alert(`Welcome to my guessing game, ${siteVisitor}! Try and guess things about me!!`);

let guessQuestOne = prompt('Do you think I\'m a dog person?').toLowerCase();

if (guessQuestOne === 'yes' || guessQuestOne === 'ya' || guessQuestOne === 'yep' || guessQuestOne === 'y'){
  alert('Very good guess.');
} else {
  alert('No... I have alergies to cats, and they suck.');
}

let guessQuestTwo = prompt('Do you think I eat animals?').toLowerCase();

if (guessQuestTwo === 'yes' || guessQuestTwo === 'ya' || guessQuestTwo === 'yep' || guessQuestTwo === 'y'){
  alert('Actually, I don\'t eat any animcal since March of 2019!!');
} else {
  alert('A fellow vegan spotted in the WILD??');
}

let guessQuestThree = prompt('What do you think my favorite video game is Zelda?').toLowerCase();

if (guessQuestThree === 'yes' || guessQuestThree === 'ya' || guessQuestThree === 'yep' || guessQuestThree === 'y'){
  alert('Yeah! Those games are just special');
} else {
  alert('Try again, you pick have picked up something, da na na');
}

let guessQuestFour = prompt('How about hobbies, Do I look like I have spare time?');

if (guessQuestFour === 'yes' || guessQuestFour === 'ya' || guessQuestFour === 'yep' || guessQuestFour === 'y'){
  alert('');
} else {
  alert('HA! What is spare time? I have a wife and a house and kids and animals and...');
}

let guessQuestFive = prompt('How about music, could you see me listening to blues?').toLowerCase();

if (guessQuestFive === 'yes' || guessQuestFive === 'ya' || guessQuestFive === 'yep' || guessQuestFive === 'y'){
  alert('Yupppp. I grew uplistening to Stevie Ray Vaughn. Best guitarist in my eyes.');
} else {
  alert('Actually, it was great. Still like to jam out to things that give those vibes.');
}


alert(`Thanks for playing along ${siteVisitor}, it was fun for me... I think?!`);
