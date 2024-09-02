let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  draws: 0
};
UpdateScores();

function PlayerMove(playerMove) {
  const computerMove = ComputerMove();
  let result = '';

  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Draw';
    } else if (computerMove === 'Paper') {
      result = 'You Lose';
    } else if (computerMove === 'Scissors') {
      result = 'You Win';
    }
  } else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You Win';
    } else if (computerMove === 'Paper') {
      result = 'Draw';
    } else if (computerMove === 'Scissors') {
      result = 'You Lose';
    }
  } else if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You Lose';
    } else if (computerMove === 'Paper') {
      result = 'You Win';
    } else if (computerMove === 'Scissors') {
      result = 'Draw';
    }
  }

  if (result === 'You Win') {
    score.wins += 1;
  } else if (result === 'You Lose') {
    score.loses += 1;
  } else if (result === 'Draw') {
    score.draws += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  document.querySelector('.js-result').innerHTML = `${result}`;

  document.querySelector('.js-moves').innerHTML = `
    You <img class='result' src="game-icons/${playerMove}-emoji.png" alt="${playerMove}">
    <img class='result' src="game-icons/${computerMove}-emoji.png" alt="${computerMove}"> Computer
  `;

  UpdateScores();
}

function ComputerMove() {
  const RandomNumber = Math.random();
  if (RandomNumber > 0 && RandomNumber < 1 / 3) {
    return 'Rock';
  } else if (RandomNumber >= 1 / 3 && RandomNumber < 2 / 3) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function UpdateScores() {
  document.querySelector('.js-scores').innerHTML = `
    Wins: ${score.wins}, Loses: ${score.loses}, Draws: ${score.draws}
  `;
}