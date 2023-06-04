import React from 'react'

// Que voy hacer en este ejercicio Sacar de Cuadrado , triangulo
// Condiciioon solo voy a tener dos numeros

const AreaCuadrada = (a, b) => {

    return a * b


}

const AreaTriangulo = (a, b) => {
    return (a + b) / 2

}


const total = () => {

}


let numero = [3, 5]

let a = numero[0]
let b = numero[1]




const Ejercicio06 = () => {
    return (
        <>
            <div>
                El area del cuadrado es: {AreaCuadrada(a, b)}
            </div>

            <div>
                El area del triangulo es: {AreaTriangulo(a, b)}
            </div>
        </>

    )
}

export default Ejercicio06
