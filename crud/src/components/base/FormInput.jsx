import React from 'react'
import { FormButton } from './FormButton'

export const FormInput = () => {
  return (
    <div >
      <div className="w-full max-w-xs drop-shadow-lg bp">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-9">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              placeholder='Nombre Completo'
            />
          </div>
          <div className="mb-9">
            <label className="block text-gray-700 text-sm font-bold mb-4">
              Correo
            </label>

            <input type="email"
              placeholder='Ingresa tu Correo'
            />
          </div>
          <FormButton
          />

        </form>



        <div>
          <form>

            <label>
              <input type="text" />
            </label>


          </form>
        </div>

      </div>

    </div>
  )
}
