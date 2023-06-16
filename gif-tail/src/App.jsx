import React from 'react'

const App = () => {



  // const [palabras, setPalabras] = useState(['juan', 'fernando'])
  // const [nombreGif, setNombreGif] = useState('')
  // console.log(e.target.value)
  // const ParaEnviar = (e) => {
  //   setPalabras([...palabras, "hector"])
  //   e.preventDefault()
  //   setNombreGif('hector')
  // }


  return (
    <div className="mt-36  p-1rem col-span-4  md:px-36  px-2 py-2" >
      <form className="bg-white shadow-md rounded-lg py-10 px-5s mt-5 "

      >

        <label className="uppercase py-4 m-2">ingresa</label>
        <input className="m-2" type="Ingresa Nombre"  />


        <button class="rounded-full mt-5 p-3 uppercase font-bold 
                py-2
                px-6
                bg-sky-800
                hover:bg-sky-500
                text-white
                shadow-lg"
                type='submit'
        >Ingresar</button>

      </form>















    </div>
  )
}

export default App
