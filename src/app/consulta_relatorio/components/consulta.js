import React from 'react'


export default function Consulta({ color }){
  return (
    <div className=' rounded-lg bg-slate-50 ml-2 mr-12 w-72 h-full '>
      <header className={`rounded-sm ${color} p-2 `}>
        Consultas
      </header>
      <div className='flex flex-col text-black justify-items-start '>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-black text-decoration-none p-2 hover:font-bold '>Requerimentos</a>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-black text-decoration-none p-2 hover:font-bold'>Listagem</a>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-black text-decoration-none p-2 hover:font-bold'>Boletim</a>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-black text-decoration-none p-2 hover:font-bold'>Diario</a>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-black text-decoration-none p-2 hover:font-bold'>Matriz</a>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-black text-decoration-none p-2 hover:font-bold' >Pedidos de matricula</a>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-black text-decoration-none p-2 hover:font-bold'>Alteração de nota</a>
      </div>
      </div>
      )
}