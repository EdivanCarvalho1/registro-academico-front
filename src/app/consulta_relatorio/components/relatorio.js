import React from 'react'

export default function Relatorio(){
  return (
    <div className='border rounded-2xl bg-slate-50 '>
    <header className='bg-amber-400 rounded-2xl p-5 '>
    Relatorio

    </header>
    <div className='flex flex-column text-black p-2 items-start justify-items-start'>
      <a className='bg-gray-200 w-full'>Requerimentos</a>
      <a className='bg-gray-200 w-full'>Listagem</a>
      <a className='bg-gray-200 w-full'>Boletim</a>
      <a className='bg-gray-200 w-full'>Diario</a>
      <a className='bg-gray-200 w-full'>Matriz</a>
      <a className='bg-gray-200 w-full'>Pedidos de matricula</a>
      <a className='bg-gray-200 w-full'>Alteração de nota</a>
    </div>
    </div>
  )
}

