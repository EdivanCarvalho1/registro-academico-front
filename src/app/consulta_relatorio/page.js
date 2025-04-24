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
          <div className=''>
        <div className='flex justify-center items-center m-10'>
            <div className='m-3'>
              <Consulta/>
            </div>
            <div>
              <Relatorio/>
            </div>
          </div>
        </div>

        
      </div>



    </div>
  )
}
