import React from "react";
export default function Quadro(){
    return(
<div>
            <div className="text-start w-full h-full">
                <div> 
                    
                        <div className=" flex justify-end items-end opacity-40">
                            <select className="border border-gray-300">jsdhj
                                <option value="">Todos os Cursos</option>
                            </select>
                            <select className="border border-gray-300">jsdhj
                                <option value="">Todos os Requerimentos</option>
                            </select>
                    </div>


                    <div className=" text-[#493159] m-2">
                        <span className="text-xs underline ">Filtrar por:</span>
                        <span className="text-sm"><span> </span>Mais Recente</span>
                    </div> 
                    <table className="table-auto ">
                        <thead className=" ">
                            <tr className="bg-[#493159] border rounded-lg text-white ">
                        <th className="px-4 py-2 border text-start">Matricula</th>
                        <th className="px-4 py-2 border text-start">Nome do Aluno</th>
                        <th className="px-4 py-2 border text-start">Curso</th>
                        <th className="px-4 py-2 border text-start">Tipo de Requerimento</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#493159]">
                            <tr className="px-4 py-2 ">
                                <td className="px-2 py-3 border">202311660168</td>
                                <td className="px-2 py-3 border">Maria Cecília Vasconcelos Azeredo</td>
                                <td className="px-2 py-3 border">B. Design </td>
                                <td className="px-2 py-3 border">Histórico Escolar</td>
                            </tr>
                            <tr className="px-4 py-2">
                                <td className="px-2 py-3 border">202160396032</td>
                                <td className="px-2 py-3 border">Beatriz Padrão Areas</td>
                                <td className="px-2 py-3 border">B. Teatro</td>
                                <td className="px-2 py-3 border">Histórico Escolar</td>
                            </tr>
                            <tr className="px-4 py-2">
                                <td className="px-2 py-3 border">202304960704</td>
                                <td className="px-2 py-3 border">Maria Alice Alves Gomes Fonseca</td>
                                <td className="px-2 py-3 border">L. Ciências da Natureza</td>
                                <td className="px-2 py-3 border">Histórico Escolar</td>
                            </tr>
                            <tr className="">
                                <td className="px-2 py-3 border">201933440692</td>
                                <td className="px-2 py-3 border">Rafael Oliviera Martins</td>
                                <td className="px-2 py-3 border">T. I. Edificações</td>
                                <td className="px-2 py-3 border">Atestado de Matrícula</td>
                            </tr>
                            <tr className="px-4 py-2">
                                <td className="px-2 py-3 border">202311660168</td>
                                <td className="px-2 py-3 border">João Pedro Pereira Lima </td>
                                <td className="px-2 py-3 border">T. S. Química</td>
                                <td className="px-2 py-3 border">Atestado de Matrícula</td>
                            </tr>
                            <tr className=" ">
                                <td className="px-2 py-3 border">202311660168</td>
                                <td className="px-2 py-3 border">Amanda Rocha Fernandes</td>
                                <td className="px-2 py-3 border">T. C. Estradas</td>
                                <td className="px-2 py-3 border">Histórico Escolar</td>
                            </tr>
                            <tr className="">
                                <td className="px-2 py-3 border">202111663896</td>
                                <td className="px-2 py-3 border">Myllena Alves da Silva</td>
                                <td className="px-2 py-3 border">B. Engenharia da Computação</td>
                                <td className="px-2 py-3 border">Atestado de Matrícula</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}
        