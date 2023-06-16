import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const GifBuscador = () => {

    const [palabras, setPalabras] = useState(['juan', 'fernando'])
    const [nombreGif, setNombreGif] = useState('') 
    const ParaEnviar = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setNombreGif('hector')
        setPalabras([...palabras,"hector"])
    }



    return (
        <div>
            <h1> gif buscador </h1>

            <form onSubmit={ParaEnviar} >
                <TextField  label="Outlined" variant="outlined" name='nombreGif' value={nombreGif} />
                <Button type="submit" variant="contained">Contained</Button>
            </form>

            <ol>


                {palabras.map(palabra => {
                    return (



                        <li>
                            {palabra}
                        </li>


                    )



                })}
            </ol>



        </div>
    )
}

export default GifBuscador
