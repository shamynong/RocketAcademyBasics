var numberOfGames = 0;
var numberOfWins = 0;

var main = function (input) {
  // Attribute 1 = sissors , 2 = paper, 3= Stone
  var diceResults = rollDice();
  var output;

  var winPercentage = Math.floor((numberOfWins / numberOfGames) * 100);

  if (diceResults != 0) {
    numberOfGames = numberOfGames + 1;
  }

  // if the dice result is 1
  if (diceResults == 1) {
    var computerResult = `scissors`;
    if (input == `scissors`) {
      output = `Draw`;
    }
    if (input == `paper`) {
      output = `lose`;
    }
    if (input == `stone`) {
      numberOfWins += 1;
      output = `win`;
    }
  } else if (diceResults == 2) {
    var computerResult = `paper`;
  }
  if (input == `scissors`) {
    numberOfWins += 1;
    output = `win`;
  }
  if (input == `paper`) {
    output = `Draw`;
  }
  if (input == `stone`) {
    output = `lose`;
  } else if (diceResults == 3) {
    var computerResult = `stone`;
    if (input == `scissors`) {
      output = `lose`;
    }
    if (input == `paper`) {
      numberOfWins += 1;
      output = `win`;
    }
    if (input == `stone`) {
      output = `Draw`;
    }
  }

  console.log(`Dice Result: ${diceResults}`);
  console.log(`Number of games: ${numberOfGames}`);
  return `the computer choose ${computerResult}, you choose ${input}, you ${output} , ${winPercentage}`;
};
var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 3;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};
