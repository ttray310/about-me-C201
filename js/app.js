'use strict';

let siteVisitor = prompt('What is your name?');

alert(`Welcome to my guessing game, ${siteVisitor}! Try and guess things about me!!`);

let guessQuestOne = prompt('Do you think I\'m a dog or cat person?').toLowerCase();

if (guessQuestOne === 'dog' || guessQuestOne === 'dogs'){
  alert('Very good guess.');
} else {
  alert('No... I have alergies to cats actually.');
}

let guessQuestTwo = prompt('Do you think I eat animals?').toLowerCase();

if (guessQuestTwo === 'yes' || guessQuestTwo === 'ya' || guessQuestTwo === 'yep'){
  alert('Actually, I don\'t eat any animcal since March of 2019!!');
} else {
  alert('A fellow vegan spotted in the WILD??');
}

let guessQuestThree = prompt('What do you think my favorite video game is? What\'s the link again...').toLowerCase();

if (guessQuestThree === 'zelda'){
  alert('Yeah! Those games are just special');
} else {
  alert('Try again, you pick have picked up something, da na na');
}

let guessQuestFour = prompt('How about hobbies? What could I like to do with my spare time?');

if (guessQuestFour === ''){
  alert('');
} else {
  alert('HA! What is spare time? I have a wife and a house and kids and animals and...');
}

let guessQuestFive = prompt('How about music. What type of music do I listen to that you might not think. Hint: BB King was one of the greats.').toLowerCase();

if (guessQuestFive === 'blues'){
  alert('Yupppp. I grew uplistening to Stevie Ray Vaughn. Best guitarist in my eyes.');
} else if(guessQuestFive === 'jazz'){
  alert('Mostly right. Jazz is very close, but the correct answer actually is Blues.');
} else {
  alert('Nah, but I\'m sure you can keep guessing.');
}


alert(`Thanks for playing along ${siteVisitor}, it was fun for me... I think?!`);
