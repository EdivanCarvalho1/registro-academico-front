import React from 'react'
import Header from '../matricula/components/header/header'
import Image from 'next/image'
import Quadro  from './components/quadro'
import { CiCircleChevLeft } from "react-icons/ci";
  
export default function Requerimento(){
  return (
    <div className=' rounded-lg bg-slate-50 ml-2 mr-12  '>
        <div className="bg-white w-full ">
              <Header />
                <div className="w-full">
                <div className="flex mt-14 mb-2 ml-64">
            <div className="flex items-center "> 
              <a href='/consulta-relatorio'>
              <CiCircleChevLeft className="h-9 w-9 pb-2" />
              </a>
          </div>
            <div className=' text-2xl pb-2'>
              <h5 className=" text-black "> <strong>REQUERIMENTO</strong></h5>
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