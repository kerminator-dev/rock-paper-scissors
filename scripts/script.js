let score = JSON.parse(localStorage.getItem('score'));
if (!score)
{
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}

UpdateScoreElement();

function UpdateScoreElement()
{
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function UpdateMovesElement(playerMove, computerMove)
{
  document.querySelector('.js-moves').innerHTML = `You <img class="move-icon" src="images/${playerMove}-emoji.png"/> <img class="move-icon" src="images/${computerMove}-emoji.png"/> Computer`;
}

function UpdateResultElement(result)
{
  document.querySelector('.js-result').innerHTML = result;
}

function ResetScore()
{
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  localStorage.removeItem('score');

  UpdateScoreElement();
}

function PlayGame(playerMove)
{
  let computerMove = GetComputerMove();
  let result = '';

  if (playerMove === computerMove) {
    result = 'Tie!';
  } else if (playerMove === 'Rock' && computerMove === 'Paper') {
    result = 'You lose!';
  } else if (playerMove === 'Rock' && computerMove === 'Scissors') {
    result = 'You win!';
  } else if (playerMove === 'Paper' && computerMove === 'Rock') {
    result = 'You win!';
  } else if (playerMove === 'Paper' && computerMove === 'Scissors') {
    result = 'You lose!';
  } else if (playerMove === 'Scissors' && computerMove === 'Rock') {
    result = 'You lose!';
  } else if (playerMove === 'Scissors' && computerMove ===  'Paper') {
    result = 'You win!';
  }

  if (result === 'You win!') {
    score.wins++;
  } else if (result === 'You lose!') {
    score.losses++;
  }
  else if (result === 'Tie!') {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  UpdateResultElement(result);
  UpdateMovesElement(playerMove, computerMove);
  UpdateScoreElement();
}

function GetComputerMove()
{
  let randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3)
  {
    return 'Rock';
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3)
  {
    return 'Paper';
  }
  else
  {
    return 'Scissors';
  }
}