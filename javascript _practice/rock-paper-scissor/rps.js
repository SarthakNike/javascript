let playerscore = 0;
let Computerscore = 0;

function play(playerchoice) {
    const choices = ['rock','paper','scissors'];
    const computerchoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';
    if (playerchoice === computerchoice) {
        result = 'Its a tie!!!';
    }else if (
        (playerchoice === 'rock' && computerchoice === 'scissors') ||
        (playerchoice === 'paper' && computerchoice === 'rock') ||
        (playerchoice === 'scissors' && computerchoice === 'paper')
    ) {
        result = 'You Win!!!';
        playerscore++;
    }else {
        result = 'You Lose!!!';
        Computerscore++;
    }

    document.getElementById('result').innerText = `You chose ${playerchoice}, Computer chose ${computerchoice}. ${result}`;
    document.getElementById('playerscore').innerText = playerscore;
    document.getElementById('computerscore').innerText = Computerscore;
}