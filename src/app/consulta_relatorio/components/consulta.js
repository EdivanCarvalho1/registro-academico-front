import React from 'react'

export default function Consulta(){
  return (
    <div className='border rounded-2xl bg-slate-50 '>
      <header className='bg-amber-400 rounded-2xl p-5 '>
      consulta

      </header>
      <div className='flex flex-column text-black p-2 items-start justify-items-start'>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-black text-decoration-none'>Requerimentos</a>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-black text-decoration-none '>Listagem</a>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-black text-decoration-none'>Boletim</a>
        <a href='#' className='text-decoration-none text-black'>Diario</a>
        <a href='#' className='text-decoration-none text-black '>Matriz</a>
        <a href='#' className='text-decoration-none text-black'>Pedidos de matricula</a>
        <a href='#' className='text-decoration-none text-black'>Alteração de nota</a>
      </div>
      </div>
  )
}

