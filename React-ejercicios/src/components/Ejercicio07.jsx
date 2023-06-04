import React from 'react'


// Como lo haria 

// Realizar un arreglo let [10,11,12]
// Realizar un ciclo en For 
// 

const numeroMayor = (ciclo) => {

    let maximo = ciclo[0]
    for (let i = 1; i < ciclo.length; i++) {
        if (ciclo[i] > maximo) {
            maximo = ciclo[i]
        }
    }

return maximo

}

let ciclo = [3,5,7,4,4,7,457,436,4,6,7,8,9,0,45,6,7]



console.log(numeroMayor(ciclo))






const Ejercicio07 = () => {
    return (
        <div>

        </div>
    )
}

export default Ejercicio07
