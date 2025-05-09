import React from 'react'
import Header from '../matricula/components/header/header'
import Consulta from './components/consulta'
import Relatorio from './components/relatorio'
import Image from 'next/image'
import { CiCircleChevLeft } from "react-icons/ci";

export default function Home() {
  return (
    <div className="">
      <div className="bg-white w-full ">
      <Header />
        <div className="w-full">
        <div className="flex mt-14 mb-2 ml-56">
    <div className="flex items-center "> 
    
    <button className='ml-4  p-1'>
      <a href='./'>
        <CiCircleChevLeft className="h-9 w-9 pb-2" />
      </a>
    </button>
  </div>
    <div className=''>
      <h5 className=" text-[#493159] font-bold text-2xl "> <strong>REGISTRO ESCOLAR</strong></h5>
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