function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    
    const diceImg = document.getElementById('dice').getElementsByTagName('img')[0];
    diceImg.src = `./img/${randomNumber}.png`;
}