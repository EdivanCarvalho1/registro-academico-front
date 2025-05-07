import React from 'react'
import Header from '../matricula/components/header/header'
import Image from 'next/image'
import Quadro  from './components/quadro'
  
export default function Requerimento(){
  return (
    <div className=' rounded-lg bg-slate-50 ml-2 mr-12  '>
        <div className="bg-white w-full ">
              <Header />
                <div className="w-full">
                <div className="flex mt-14 mb-2 ml-56">
            <div className="flex items-center "> 
            
            <button>
              <a href='/consulta-relatorio'>
                <Image 
              src="/icons8-voltar-32.png"
              width={25}
              height={30}
              alt="voltar"
            />
              </a>
              
            </button>
          </div>
            <div className=' text-2xl p-1'>
              <h5 className=" text-black  "> <strong>REQUERIMENTO</strong></h5>
            </div> 
        </div>
                  <div className="flex justify-center items-center mr-20">
                    <Quadro/>
                      
                  </div>
                </div>
              </div>
        </div>
  )
}