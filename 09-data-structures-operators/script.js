'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // check array destructuring MD
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Check array destructuring MD
let [first /* next is data skipped */, , second] = restaurant.categories;

// reordering
[first, second] = [second, first];

const [starterOrder, mainOrder] = restaurant.order(2, 0);

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper 
    and the others are field players. For Bayern Munich (team 1) 
    create one variable ('gk') with the goalkeeper's name, 
    and one array ('fieldPlayers') with all the remaining 10 field players.
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. 
    So create a new array ('players1Final') containing all 
    the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, 
    create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives 
    an arbitrary number of player names (NOT an array) 
    and prints each of them to the console, 
    along with the number of goals that were scored in total 
    (number of player names passed in)
7. The team with the lower odd is more likely to win. 
    Print to the console which team is more likely to win, 
    WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: 
  Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
  Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Challenge 1-1
const [players1, players2] = game.players;

// Challenge 1-2
const [gk, ...fieldPlayers] = players1;

// Challenge 1-3
const allPlayers = [...players1, ...players2];

// Challenge 1-4
const player1Finals = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// Challenge 1-5
// BETTER: const { odds: { team1, x: draw, team2 } } = game
const { team1, x: draw, team2 } = game.odds;

// Challege 1-6
const printGoals = function (...goals) {
  console.log(`Total goals scored: ${goals.length}, by ${goals} respectively`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// Challenge 1-7
team1 > team2 && console.log('Team 1 is more likey to win.');
team1 < team2 && console.log('Team 2 is more likey to win.');

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, 
    along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console 
    (We already studied how to calculate averages, 
    you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
    Odd of victory Bayern Munich: 1.33
    Odd of draw: 3.25
    Odd of victory Borrussia Dortmund: 6.5
    Get the team names directly from the game object, don't hardcode them 
    (except for "draw"). 
  HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains 
  the names of the players who scored as properties, 
  and the number of goals as the value. 
  In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// Challenge 2-1

for (const [index, goal] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(index) + 1}: ${goal}`);
}

// Challenge 2-2
let oddAvg = 0;
const oddsValues = Object.values(game.odds);

for (const odd of oddsValues) oddAvg += odd;

console.log(`Average Odd: ${(oddAvg / oddsValues.length).toFixed(2)}`);

// Challenge 2-3
const oddEntries = Object.entries(game.odds);
const oddKeys = Object.keys(game.odds);

for (const [team, odd] of oddEntries) {
  // Previous answer was incorrect, as no team name was identified
  // it was solved by simply looking at game[team]
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd} `);
}

// Challenge 2-BONUS
let scorers = {};
const { scored } = game;

for (const score of scored) {
  scorers[score] = scorers[score] ? scorers[score] + 1 : 1;
}

console.log(scorers);

///////////////////////////////////////
// Coding Challenge #3

/* 
  Let's continue with our football betting app! 
  This time, we have a map with a log of the events 
  that happened during the game. 
  The values are the events themselves, 
  and the keys are the minutes in which each event happened 
  (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened 
  (no duplicates)
2. After the game has finished, 
  it was found that the yellow card from minute 64 was unfair. 
  So remove this event from the game events log.
3. Print the following string to the console: 
  "An event happened, on average, every 9 minutes" 
  (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, 
  marking whether it's in the first half 
  or second half (after 45 min) of the game, like this:
  [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Challenge 3-1
console.log('Total events: ', gameEvents.size);
// const events = new Set([ ...gameEvents]) // Close, but incorrect!
const events = [...new Set(gameEvents.values())];
console.log(`${events.length} Unique events: `, events);

// Challenge 3-2
gameEvents.delete(64);
console.log(gameEvents);

// Challenge 3-3
// Close, but the average calc is incorrect.
// console.log(
//   `An event happened, on average, every ${(gameEvents.size / (92 / 60)).toFixed(
//     2
//   )} minutes`
// );

// Improved with answer from challenge:
const duration = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${duration / gameEvents.size} minutes`
);

// Challenge 3-4
for (const [time, event] of gameEvents) {
  if (Number(time) <= 45) {
    console.log(`[FIRST HALF] ${time}: ${event}`);
  } else if (Number(time) > 45 && Number(time) < 90) {
    console.log(`[SECOND HALF] ${time}: ${event}`);
  } else {
    console.log(`[EXTRA TIME] ${time}: ${event}`);
  }
}

///////////////////////////////////////
// Coding Challenge #4

/* 
  Write a program that receives a list of variable names written in 
    underscore_case and convert them to camelCase.

  The input will come from a textarea inserted into the DOM (see code below), 
  and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// Challenge 4
// works_with_any_number_of_undersocores
const underscoreCaseToCamelCase = function (string, stars) {
  const lowerCase = string.toLowerCase();
  const words = lowerCase.split('_');
  const camelCase = [];
  const starsRepeat = '✅'.repeat(stars);

  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      camelCase.push(words[0]);
    } else {
      camelCase.push(`${words[i][0].toUpperCase()}${words[i].slice(1)}`);
    }
  }

  console.log(`${camelCase.join('')} ${starsRepeat}`);
};

// underscoreCaseToCamelCase('underscore_case');
// underscoreCaseToCamelCase('first_name');
// underscoreCaseToCamelCase('Some_Variable');
// underscoreCaseToCamelCase('calculate_AGE');
// underscoreCaseToCamelCase('delayed_departure');
console.log('-------------------');
underscoreCaseToCamelCase('philosophy_in_a_cat');
underscoreCaseToCamelCase('works_with_any_number_of_undersocores');

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const allInsertedWords = text.split('\n');

  for (const [index, word] of allInsertedWords.entries()) {
    underscoreCaseToCamelCase(word.trim(), index + 1);
  }
});
