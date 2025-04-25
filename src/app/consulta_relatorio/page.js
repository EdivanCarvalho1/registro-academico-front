import React from 'react'
import Header from '../matricula/components/header/header'
import Consulta from './components/consulta'
import Relatorio from './components/relatorio'

export default function Home() {
  return (
    <div className="bg-purple-700 min-h-screen flex justify-center">
      <div className="bg-white w-full max-w-screen-xl">
        <Header />
        <div className="w-full">
          <div className="h-screen">
            <div className="flex justify-center items-center">
              <h1 className="text-2xl font-bold">Registro Escolar</h1>
            </div>
            <div className="flex flex-col m-7 justify-center items-center">
              <div className="inline-flex">
                <Consulta color="bg-amber-300" />
                <Relatorio color="bg-amber-300" />
              </div>
              <div className="mt-4">
                <div className="inline-flex">
                  <Consulta color="bg-purple-400" />
                  <Relatorio color="bg-purple-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
