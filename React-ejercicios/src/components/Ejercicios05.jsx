import React from 'react'

const Ejercicios05 = () => {

    //PI + Radio al cuadrado

    const Pi = 3.14

    const AreaCirculo = (radio) => {

        const cuadrado = radio * radio

        const area = Pi * cuadrado
        return area
    }


    let numeros = [1,2,3,4]







    return (
        <div>

            {
                numeros.map(numero => {
                    // ¡Que voy hacer con cada uno de esos numeros ?
                    // Sacar el area del circulo con el valor numero

                    const num = AreaCirculo(numero)


                    return (
                    <div>
                        `El area del circulo es: {num}`
                    </div>
                    )

                }
                )
    
  }

        </div>
    )
}

export default Ejercicios05
