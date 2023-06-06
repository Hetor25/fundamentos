import { useState } from 'react'
import { letters } from './helpers/letters'
import { HangImage } from './components/HangImage'

import './App.css'


function App() {

  const [word] = useState('COMPUTADORA');
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length))
  const [attempts, setAttempst] = useState(0)

  const chekLetter = (letter: string) => {

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

    setHiddenWord ( hiddenWordArray.join(' ') ); 
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
