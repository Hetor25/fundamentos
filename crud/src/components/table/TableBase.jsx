import React from 'react'
import { catalogoNombres } from '../../helpers/fakeData'


export const TableBase = () => {
  return (
    <div className="container">
      <table className="w-full">
        <thead>
          <tr className="p-5 m-4">
            <td className='border border-gray-700 px-3 py-3'>Nombre</td>
            <td className='border border-gray-700 px-3 py-3'>Apellido Paterno</td>
            <td className='border border-gray-700 px-3 py-3'>Apellido Materno</td>
            <td className='border border-gray-700 px-3 py-3'>Edad</td>
            <td className='border border-gray-700 px-3 py-3'>Genero</td>
            <td className='border border-gray-500 px-3 py-3'>Ingresar</td>
          </tr>
        </thead>
      </table>

 
      <table>
        <thead>
          <tr>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
          </tr>
        </thead>
      </table>
    </div>


  )
}
