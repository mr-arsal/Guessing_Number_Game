// import logo from './logo.svg';
import './App.css';

function App() {

  const game = () => {
    let random = Math.floor(Math.random() * 101);
    console.log(random)
    let input;
    let attempts = 10;
    do {
      input = prompt(`Guess any number between 0 and 100.
      ${attempts} attempts have left.`
      );
      input = Number.parseInt(input);
      attempts = attempts - 1;
      if (input < random && attempts !== 0) {
        alert('Guessed Number Is Lower Than Correct Number')
      } else if (input > random && attempts !== 0) {
        alert('Guessed Number Is Higher Than Correct Number')
      } else if (attempts === 0 && input !== random) {
        alert('Try Again❗')
      } else if (input === random) {
        alert(`Congartulations🎉 You won the game in ${10 - attempts} attempts. 
        ${input} is the correct number.`)
      }
    } while (input !== random && attempts !== 0)
  }


  return (
    <div className='background'>
      <h1 className='fs-4'>Guess the secret number
        <br />
        &#38;
        <br />
        Win the game</h1>
      <button onClick={game}>
        Start the game
      </button>
      <div className='caution'>
        <strong className=''>Warning: </strong>
        <br />
        If you try to cancel the game
        <br />
        It will cost you 1 attempt!</div>
    </div>

  );
}

export default App;
