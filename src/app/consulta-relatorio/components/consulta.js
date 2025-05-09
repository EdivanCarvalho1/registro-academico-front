import React from 'react'

export default function Consulta({ color }) {
  return (
    <div className=' rounded-lg bg-[#f5f5f5] ml-2 text-white mr-12 w-96 h-full '>
      <header className={`rounded-sm ${color} p-2 font-bold text-lg`}>
        Consultas
      </header>
      <div className='flex flex-col text-sm justify-items-start '>
        <a href='/requerimento' className='bg-gray-200 w-full rounded-sm text-base mt-0.5 text-[#493159] text-decoration-none p-2 hover:font-bold '>Requerimentos</a>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-base  mt-0.5 text-[#493159] text-decoration-none p-2 hover:font-bold'>Listagem</a>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-base mt-0.5 text-[#493159] text-decoration-none p-2 hover:font-bold'>Boletim</a>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-base mt-0.5 text-[#493159] text-decoration-none p-2 hover:font-bold'>Diario</a>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-base mt-0.5 text-[#493159] text-decoration-none p-2 hover:font-bold'>Matriz</a>
        <a href='/matricula-registro' className='bg-gray-200 w-full rounded-sm text-base mt-0.5 text-[#493159] text-decoration-none p-2 hover:font-bold' >Pedidos de matricula</a>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-base mt-0.5 text-[#493159] text-decoration-none p-2 hover:font-bold'>Alteração de nota</a>
      </div>
    </div>
  )
}