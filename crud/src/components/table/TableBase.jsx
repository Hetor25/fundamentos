import React from 'react'
import { catalogoNombres } from '../../helpers/fakeData'
import { FormButton } from '../base/FormButton'


export const TableBase = () => {
  return (
  
  
    <div className="container">

      <div className="flex justify-end" >
      <FormButton />
      </div>


      <table className="w-full bg-white shadown mt-5 table-auto">
        <thead className="bg-sky-600 text-white">
          <tr>
            <td className="p-2">Nombre</td>
            <td className="p-2">Apellido paterno</td>
            <td className="p-2">Apellido materno</td>
            <td className="p-2">Edad</td>
            <td className="p-2">Genero</td>
            <td className="p-2">Ingresar</td>
          </tr>
        </thead>
        <tbody>


          {catalogoNombres.map((catalogoNombres) =>

            <tr>
              <td className="p-3">{catalogoNombres.nombre}</td>
              <td className="p-3">{catalogoNombres.paterno}</td>
              <td className="p-3">{catalogoNombres.materno}</td>
              <td className="p-3">{catalogoNombres.edad}</td>
              <td className="p-3">{catalogoNombres.genero}</td>

              <button className="bg-red-500 text-white px-3 py-1 font-bold uppercase rounded-full m-2">
                editar
              </button>
              <button className="bg-sky-800 text-white px-3 py-1 font-bold uppercase rounded-full m-2">
                enviar
              </button>
            </tr>


          )}





        </tbody>




      </table>
    </div>


  )
}
