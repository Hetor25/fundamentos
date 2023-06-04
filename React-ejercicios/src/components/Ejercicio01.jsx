import React from 'react'

const Ejercicio01 = () => {

    let nombres = ["hector", "hazael", "mayra", "marisela", "roky", "manchas", "mocoso", "siri", "fernando", "ana"]
    //let confor = nombres.forEach(nombre => nombre)
    //let conMap = nombres.map(nombre => nombre)

    //console.log("for",confor)
    //console.log("map",conMap)




    return (
        <div>
            hola
            {nombres.map(nombre => (

                nombre + "S"
            )


                // console.log(nombre)


            )}
        </div>

    )
}

export default Ejercicio01
