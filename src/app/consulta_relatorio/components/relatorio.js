import React from 'react'

export default function Relatorio({color}){
  return (
    <div className="border rounded-2xl bg-slate-50 ">
      <header className={`rounded-2xl p-5 ${color}`}>Relatorio</header>
      <div className="flex flex-column text-black p-2 items-start justify-items-start">
        <a href='#' className='bg-gray-200 w-full rounded-sm text-black text-decoration-none'>Requerimentos</a>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-black text-decoration-none'>Listagem</a>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-black text-decoration-none'>Boletim</a>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-black text-decoration-none'>Diario</a>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-black text-decoration-none'>Matriz</a>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-black text-decoration-none'>Pedidos de matricula</a>
        <a href='#' className='bg-gray-200 w-full rounded-sm text-black text-decoration-none'>Alteração de nota</a>
      </div>
    </div>
  );
}

