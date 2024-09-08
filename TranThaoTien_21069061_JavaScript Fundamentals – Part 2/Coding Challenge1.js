// Code challenges 1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new  gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins

// Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// Use the function to calculate the average for both teams
function calculateScore(score1, score2, score3) {
    let averageScore = (score1 + score2 + score3) / 3;
    return averageScore;
  }

  let dolphinAverage = Math.round(calculateScore(96, 108, 89));
  let koalaAverage = Math.round(calculateScore(109, 900, 106));
  
  function checkWinner(dolphinAverage, koalaAverage) {
    if (dolphinAverage >= 2 * koalaAverage) {
      console.log(`Dolphins win! They have ${dolphinAverage} and Koalas only have ${koalaAverage}`);
    } else if (koalaAverage >= 2 * dolphinAverage) {
      console.log(`Koalas win! They have ${koalaAverage} and Dolphins only have ${dolphinAverage}`);
    } else {
      console.log("Looks like no one won, let's go again!");
    }
  }
  
  checkWinner(dolphinAverage, koalaAverage);
  