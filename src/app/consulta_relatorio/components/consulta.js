import React from 'react'

export default function Consulta(){
  return (
    <div className='border rounded-2xl bg-slate-50 '>
      <header className='bg-amber-400 rounded-2xl p-5 '>
      consulta

      </header>
      <div className='flex flex-column text-black p-2 items-start justify-items-start'>
        <a className='bg-gray-200 w-full'>Requerimentos</a>
        <a className='bg-gray-200 w-full'>Listagem</a>
        <a className='bg-gray-200 w-full'>Boletim</a>
        <a>Diario</a>
        <a>Matriz</a>
        <a>Pedidos de matricula</a>
        <a>Alteração de nota</a>
      </div>
      </div>
  )
}

