import React from 'react'



export const FormButton = ({ texto = "Ingresar", className="px-4 py-1 rounded-full" }) => {
  return (


    <div>

      <button
      className={`${className} bg-sky-800 text-white hover:bg-sky-600 drop-shadow-lg my-2 uppercase`}
      >
        {texto}
      </button>

    </div>
  )
}
