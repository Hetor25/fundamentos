import React from 'react'

const Ejercicio02 = () => {

    let nombres = {
        nombre: "hector",
        paterno: "Romero",
        materno: "gonzalez",
    }
 

    // Agregar coas al Objetos
    nombres.edad= 23
    nombres.peso= "75kg"
    nombres.genero= "masculino"
    console.log(nombres)



    //console.log(nombre.paterno)
    const { nombre, paterno, materno,} = nombres

    return (
        <div>
            <div>

            {nombre}
            </div>
            <div>

            {paterno}
            </div>
            <div>

            {materno}
            </div>
            
        </div>
        
    )
}

export default Ejercicio02
