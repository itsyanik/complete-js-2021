/*
  # Coding Challenge #3
  There are two gymnastics teams, Dolphinsand Koalas. 
  They compete against each other 3 times. 
  The winner with the highest average score wins a trophy!
  
  Your tasks:
  1.Calculate the average score for each team, using the test data below
  2.Compare the team's average scores to determine the winner of the competition, 
  and print it to the console. 
  
  Don't forget that there can be a draw, so test for that as well 
  (draw means they have the same average score)
  
  3.Bonus 1: Include a requirement for a minimum score of 100. 
  With this rule, a team only wins if it has a higher score than the other team, 
  and the same time a score of at least 100 points. 
  
  Hint: Use a logical operator to test for minimum score, 
  as well as multiple else-if blocks 😉
  
  4.Bonus 2:Minimum score also applies to a draw! 
  So a draw only happens when both teams have the same score and 
  both have a score greater or equal 100 points. 
  Otherwise, no team wins the trophy
  
  Test data:
  Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
  Data Bonus1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
  Data Bonus2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
  
  GOOD LUCK 😀
*/

// Task 1
const getAverage = scores => {
  const rounds = scores.length;
  const scoreSum = scores.reduce((prev, curr) => prev + curr, 0);
  const average = scoreSum / rounds;

  return average;
}

// Bonus 1
const scored100 = scores => {
  const hundredOrMore = scores.filter(score => score >= 100);

  return Boolean(hundredOrMore.length);
}

// Task 2
const determineWinner = (teamOne, teamTwo) => {
  if (teamOne.average > teamTwo.average && teamOne.canWin) {
    return `Team ${teamOne.name} has the high score with ${teamOne.average.toFixed(2)}!`;
  }

  if (teamOne.average < teamTwo.average && teamTwo.canWin) {
    return `Team ${teamTwo.name} has the high score with ${teamTwo.average.toFixed(2)}!`;
  }

  // Bonus 2
  if (teamOne.average === teamTwo.average && teamOne.canWin && teamTwo.canWin) {
    return "No winners! Scores are tied!";
  }

  if (!teamOne.canWin && !teamTwo.canWin) {
    return "No minimum score met for any of the teams! Draw!!";
  }

  return "Looks like something went wrong with the function. Check your logic and fix it."
}

const challengeThreeDataOne = {
  dolphins: {
    name: "Dolphins",
    scores: [96, 108, 89],
    get average() {
      return getAverage(this.scores);
    },
    get canWin() {
      return scored100(this.scores);
    }
  },
  koalas: {
    name: "Koalas",
    scores: [88, 91, 110],
    get average() {
      return getAverage(this.scores);
    },
    get canWin() {
      return scored100(this.scores);
    }
  },
  get winner() {
    return determineWinner(this.dolphins, this.koalas);
  }
}

const challengeThreeDataBonusOne = {
  dolphins: {
    name: "Dolphins",
    scores: [97, 112, 101],
    get average() {
      return getAverage(this.scores);
    },
    get canWin() {
      return scored100(this.scores);
    }
  },
  koalas: {
    name: "Koalas",
    scores: [109, 95, 123],
    get average() {
      return getAverage(this.scores);
    },
    get canWin() {
      return scored100(this.scores);
    }
  },
  get winner() {
    return determineWinner(this.dolphins, this.koalas);
  }
}

const challengeThreeDataBonusTwo = {
  dolphins: {
    name: "Dolphins",
    scores: [97, 112, 101],
    get average() {
      return getAverage(this.scores);
    },
    get canWin() {
      return scored100(this.scores);
    }
  },
  koalas: {
    name: "Koalas",
    scores: [109, 95, 106],
    get average() {
      return getAverage(this.scores);
    },
    get canWin() {
      return scored100(this.scores);
    }
  },
  get winner() {
    return determineWinner(this.dolphins, this.koalas);
  }
}

console.log(`First data: ${challengeThreeDataOne.winner}`);
console.log(`Bonus data one: ${challengeThreeDataBonusOne.winner}`);
console.log(`Bonus data two: ${challengeThreeDataBonusTwo.winner}`);