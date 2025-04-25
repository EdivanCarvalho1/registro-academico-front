import React from 'react'
import Header from '../matricula/components/header/header'
import Consulta from './components/consulta'
import Relatorio from './components/relatorio'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-700 flex justify-center">
      <div className="bg-white w-full max-w-screen-xl">
        <Header />
        <div className="w-full">
          <div className="flex justify-center items-center mt-10">
              <Image src="/icons8-voltar-32.png"
              width={30}
              height={30}
              alt="voltar"
              />
            <h1 className="text-2xl text-black font-bold">
              Registro Escolar</h1>
          </div>
          <div className="flex flex-col m-7 justify-center items-center">
            <div className="inline-flex">
              <Consulta color="bg-amber-300" />
              <Relatorio color="bg-amber-300" />
            </div>
            <div className="mt-4 inline-flex">
              <Consulta color="bg-purple-400" />
              <Relatorio color="bg-purple-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
