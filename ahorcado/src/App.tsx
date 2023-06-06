import { useEffect, useState } from 'react'
import { letters } from './helpers/letters'
import { HangImage } from './components/HangImage'
import { getRandomWord } from './helpers/getRanddomWord'

import './App.css'


function App() {

  const [word] = useState(getRandomWord());
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [attempts, setAttempst] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  // Determinar solo si la persona perdio
  useEffect(() => {
    if (attempts >= 9) {
      setLose(true);
    }
  }, [attempts]) //hooks

  // Determinar si la persona ganò
  useEffect(() => {
    const currrenHiddenWord = hiddenWord.split(' ').join('');
    if (currrenHiddenWord === word) {
      setWon(true)
    }
  }, [hiddenWord])


  const chekLetter = (letter: string) => {
    if (lose) return;
    if (won) return;

    if (!word.includes(letter)) {
      setAttempst(Math.min(attempts + 1, 9));
      return;
    }

    const hiddenWordArray = hiddenWord.split(' ');

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }

    setHiddenWord(hiddenWordArray.join(' '));
  }

  return (
    <div className="app">

      {/* Imagenes */}

      <HangImage
        imageNumber={attempts}
      />

      {/* palabra oculata */}

      <h3>{hiddenWord}</h3>

      {/* contador de intetos */}

      <h3>Intentos {attempts}</h3>

      {/* Mensaje si perdio */}

      {
        (lose) ? <h2> Perdiò {word}</h2>
          : ''
      }

      {/* mensaje si gano */}
      {
        (won) ? <h2> Felicidades, Ganaste </h2>
          : ''
      }

      {/* Botones */}

      {
        letters.map((letter) => (
          <button
            onClick={() => chekLetter(letter)}
            key={letter}
          >{letter}</button>
        ))

      }





    </div>

  )


}

export default App
