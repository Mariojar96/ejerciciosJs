document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('startBtn');
    const gameContainer = document.getElementById('gameContainer');
    const guessInput = document.getElementById('guessInput');
    const guessBtn = document.getElementById('guessBtn');

    let magicNumber;

    startBtn.addEventListener('click', function() {
     
      magicNumber = Math.floor(Math.random() * 100) + 1;
      console.log(magicNumber); 
      gameContainer.style.display = 'block';
    });

    guessBtn.addEventListener('click', function() {
      const userGuess = parseInt(guessInput.value);
      if (userGuess === magicNumber) {
        alert('¡Felicidades! ¡Adivinaste el número!');
      
        gameContainer.style.display = 'none';
        guessInput.value = '';
      } else if (userGuess < magicNumber) {
        alert('El número que ingresaste es menor al número mágico.');
      } else {
        alert('El número que ingresaste es mayor al número mágico.');
      }
    });
  });