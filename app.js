const number = prompt('Enter the number that you want to guess:');

const guessTheNumber = (number) => {
  let startPosition = 0;
  let endPosition = 100;

  for (let i = startPosition; i <= endPosition; i++) {
    let middlePosition = prompt(`Enter the middle value between ${startPosition} and ${endPosition}`);

    if (middlePosition === number) {
      alert('U r right');
      return number;
    }
    if (middlePosition > number) {
      alert('Entered number is less than yours.')
      endPosition = middlePosition;
      continue;
    } else if (middlePosition < number) {
      alert('Entered number is bigger');
      startPosition = middlePosition;
      continue;
    }
  }
};

let guessed = guessTheNumber(number);
console.log(guessed);
