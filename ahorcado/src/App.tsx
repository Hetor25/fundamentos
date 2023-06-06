import { useState } from 'react'
import { letters } from './helpers/letters'
import { HangImage } from './components/HangImage'

import './App.css'


function App() {

  const [word] = useState('COMPUTADORA');
  const [hidedenWord] = useState('_ '.repeat(word.length))
  const [attempts, setAttempst] = useState(0)

  const chekLetter = (letter: string) => {
    setAttempst(Math.min(attempts + 1, 9));
  }

  return (
    <div className="app">

      {/* Imagenes */}

      <HangImage
        imageNumber={attempts}
      />

      {/* palabra oculata */}

      <h3>{hidedenWord}</h3>

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
