import React from 'react'
import Header from '../matricula/components/header/header'
import Consulta from './components/consulta'
import Relatorio from './components/relatorio'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <div className="bg-white w-full ">
      <Header />
        <div className="w-full">
        <div className="flex mt-14 mb-2 ml-56">
    <div className="flex items-center "> 
    
    <button>
      <a href='/matricula'>
        <Image 
      src="/icons8-voltar-32.png"
      width={25}
      height={30}
      alt="voltar"
    />
      </a>
      
    </button>
  </div>
    <div className='font-stretch-100% p-1'>
      <h5 className=" text-black  "> <strong>REGISTRO ESCOLAR</strong></h5>
    </div> 
</div>
          <div className="flex flex-col justify-center items-center mr-20">
            <div className="inline-flex">
              <div className='m-7'>
                <Consulta color="bg-[#f9cf64]" />
              </div>
              <div className='m-7'>
                <Relatorio color="bg-[#f9cf64] " />
              </div>
            </div>
            <div className="inline-flex">
            <div className='m-7'>
                <Consulta color="bg-[#b697e8]"   />
              </div>
              <div className='m-7'>
                <Relatorio color="bg-[#b697e8]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      )
}