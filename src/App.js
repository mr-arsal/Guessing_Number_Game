// import logo from './logo.svg';
import './App.css';

function App() {

  const game = () => {
    let random = Math.floor(Math.random() * 101);
    console.log(random)
    let input;
    do {
      input = prompt('Guess any number between 0 and 100');
      input = Number.parseInt(input)
      if (input < random) {
        alert('Guessed Number is less than correct number')
      } else if (input > random) {
        alert('Guessed Number is higher than correct number')
      } else if (input === random) {
        alert(`Congartulations! You win the game. ${input} is the correct number.`)
      }
    } while (input !== random)
  }


  return (
    <div className='background'>
      <h1 className='fs-4'>Guess the correct number 
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
        You can't go back unless 
        <br />
        you guess the correct number. 
      </div>
    </div>

  );
}

export default App;
