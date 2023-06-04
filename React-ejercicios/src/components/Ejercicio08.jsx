import React from 'react'

const numeroMayor = (ciclo) => {



    let maximo = ciclo[0]
    for (let i = 0; i < ciclo.length; i++) {
        if (ciclo[i].length > maximo.length) {
            maximo = ciclo[i]
        }
    }

return maximo

}

let ciclo = ['hazael','hector','mayra','marisela']



console.log(numeroMayor(ciclo))

const Ejercicio08 = () => {
  return (
    <div>
      
    </div>
  )
}

export default Ejercicio08
