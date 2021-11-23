"use strict";
/*
  Back to the two gymnastics teams, the Dolphins and the Koalas! 
  There is a new gymnastics discipline, which works differently.
  
  Each team competes 3 times, and then the average of the 3 scores is calculated 
  (so one average score per team).
  A team onlywins if it has at least double the average score of the other team. 
  Otherwise, no team wins!
  
  Your tasks:
  1. Create an arrow function 'calcAverage'to calculate the average of 3 scores
  2. Use the function to calculate the average for both teams
  3.Create a function 'checkWinner' that takes the average score of each team as parameters 
  ('avgDolhins'and 'avgKoalas'), and then logs the winner to the console, 
  together with the victory points, according to the rule above. 
  Example: "Koalas win (30 vs. 13)"
  4.Use the 'checkWinner'function to determine the winner for both Data1 and Data2.
  
  Ignore draws this time
  
  Test data:
  
  Data1: 
  Dolphins score 44, 23 and 71. 
  Koalas score 65, 54 and 49
  
  Data2: 
  Dolphins score 85, 54 and 41. 
  Koalas score 23, 34 and 27
  
  Hints:
  
  To calculate average of 3 values, 
  add them all together and divide by 3. 
  
  To check if number A is at least double number B, 
  check for A >= 2 * B. 
  Apply this to the team's average scores 
  
  😉GOOD LUCK 😀
*/

const calcAverage = scores => {
  const rounds = scores.length;
  const scoreSum = scores.reduce((prev, curr) => prev + curr, 0);
  const average = scoreSum / rounds;

  return average;
}

const isDoubleAvg = (avg1, avg2) => avg1 >= avg2 * 2;

const checkWinner = (avgDolphins, avgKoalas) => {
  const dolphinsWins = isDoubleAvg(avgDolphins, avgKoalas);
  const koalasWins = isDoubleAvg(avgKoalas, avgDolphins);

  console.log('Dolhpins: ', dolphinsWins);
  console.log('Koalas: ', koalasWins);

  if (!dolphinsWins && !koalasWins) {
    return "No one wins! Draw!";
  }

  if (dolphinsWins) {
    return `Team Dolphins wins! (${avgDolphins} vs ${avgKoalas})`;
  }

  if (koalasWins) {
    return `Team Koalas wins! (${avgKoalas} vs ${avgDolphins})`;
  }

  return "Scores calculated. Check console for the winner.";
}

const data1 = {
  dolphins: {
    scores: [44, 23, 71],
    get scoreAverage() {
      return calcAverage(this.scores);
    }
  },
  koalas: {
    scores: [65, 54, 49],
    get scoreAverage() {
      return calcAverage(this.scores);
    }
  },
  get winner() {
    return checkWinner(this.dolphins.scoreAverage, this.koalas.scoreAverage);
  }
}

const data2 = {
  dolphins: {
    scores: [85, 54, 41],
    get scoreAverage() {
      return calcAverage(this.scores);
    }
  },
  koalas: {
    scores: [23, 34, 27],
    get scoreAverage() {
      return calcAverage(this.scores);
    }
  },
  get winner() {
    return checkWinner(this.dolphins.scoreAverage, this.koalas.scoreAverage);
  }
}

console.log(`Data1 winner: ${data1.winner}. Data2 winner: ${data2.winner}`);