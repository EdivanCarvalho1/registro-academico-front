import React from 'react'


export default function Consulta({ color }){
  return (
    <div className=' rounded-lg bg-slate-50 m-5 w-72 h-full '>
      <header className={`rounded-sm ${color} p-2 `}>
        Consultas
      </header>
      <div className='flex flex-column text-black justify-items-start'>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-black text-decoration-none p-2  '>Requerimentos</a>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-black text-decoration-none p-2'>Listagem</a>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-black text-decoration-none p-2'>Boletim</a>
        <a href='#' className='text-decoration-none text-black p-2'>Diario</a>
        <a href='#' className='text-decoration-none text-black p-2'>Matriz</a>
        <a href='#' className='text-decoration-none text-black p-2'>Pedidos de matricula</a>
        <a href='#' className='text-decoration-none text-black p-2'>Alteração de nota</a>
      </div>
      </div>
  )
}

