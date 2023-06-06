import { letters } from './helpers/letters'
import { HangImage } from './components/HangImage'

import './App.css'


function App() {

  return (
    <div className="app">

      {/* Imagenes */}

      <HangImage
      imageNumber ={0}
      />

      {/* palabra oculata */}

      <h3>- - - - - - - - -</h3>

      {/* contador de intetos */}

      <h3>intentos: 0</h3>

      {/* Botones */}

      {
        letters.map((letters) => (
          <button
            key={letters}
          >{letters}</button>
        ))

      }





    </div>

  )


}

export default App
