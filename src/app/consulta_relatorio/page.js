import React from 'react'
import Header from '../matricula/components/header/header'
import Consulta from './components/consulta'
import Relatorio from './components/relatorio'
export default function Home(){
  return (
    <div> 
      <Header/>
      <div className='w-full h-screen'>
        <div className='flex justify-center items-center'>
          <h1>Registro Escolar</h1>
        </div>
        <div className='flex flex-col m-10 justify-center items-center'>
          
            <div className='inline-flex m-5'>
              <Consulta color="bg-amber-400"  />
              <Relatorio color="bg-amber-400"/>
          </div>
          <div>
            <div className='inline-flex'>
            <Consulta color="bg-purple-400"/>
            <Relatorio color="bg-purple-400"/>
          </div>

        </div>
        </div>
        </div>
        </div>

        



   
  )
}
