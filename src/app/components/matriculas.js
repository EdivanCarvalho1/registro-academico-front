import React from "react";

const TableMatriculas = () => {
    const today = new Date();
    const todayDay = today.toLocaleDateString('pt-BR', { weekday: 'long' });
    const todayMonth = today.toLocaleString('pt-BR', { month: 'long' });
    const todayYear = today.getFullYear();
    return (
        <div className="mt-15">
            <h1 className="text-[#493159] text-xl">
                <span className="text-[#f9cf64] font-bold">
                    {todayDay.charAt(0).toUpperCase() + todayDay.slice(1).toUpperCase()}
                </span>, {today.getDate()} de {todayMonth.charAt(0).toUpperCase() + todayMonth.slice(1)}
            </h1>
            <div className="bg-[#f5f5f5] rounded-lg shadow-md h-200 mb-2">
                {/* Tabela do cabeçalho */}
                <table className="border-collapse w-full text-center">
                    <thead>
                        <tr>
                            <th className="bg-[#f5f5f5] text-[#493159] p-2 w-20 rounded-l-xl">Tarefas</th>
                            <th className="bg-[#f5f5f5] text-[#493159] p-2 w-20">Atribuído</th>
                            <th className="bg-[#f5f5f5] text-[#493159] p-2 w-20 rounded-r-xl">Status</th>
                        </tr>
                    </thead>
                </table>

                {/* Espaço entre o cabeçalho e o corpo */}
                <div className="h-2 bg-white"></div>

                {/* Tabela do corpo */}
                <table className="border-collapse w-full">
                    <tbody className="bg-[#f5f5f5] text-[#493159] text-[1rem] font-semibold">
                        <tr>
                            <td className="p-2">
                                <div className="flex items-center gap-x-2">
                                    <input type="checkbox" />
                                    <span className="flex-1 text-center ">Matricular aluno 1</span>
                                </div>
                            </td>
                            <td className="p-2 text-center">João</td>
                            <td className="p-2 text-center text-[#ec9632]">Pendente</td>
                        </tr>
                        <tr>
                            <td className="p-2">
                                <div className="flex items-center gap-x-2">
                                    <input type="checkbox" />
                                    <span className="flex-1 text-center">Matricular aluno 2</span>
                                </div>
                            </td>
                            <td className="p-2 text-center">Maria</td>
                            <td className="p-2 text-center text-[#aec171]">Entregue</td>
                        </tr>
                        <tr>
                            <td className="p-2">
                                <div className="flex items-center gap-x-2">
                                    <input type="checkbox" />
                                    <span className="flex-1 text-center">Matricular aluno 3</span>
                                </div>
                            </td>
                            <td className="p-2 text-center">Pedro</td>
                            <td className="p-2 text-center text-[#ec9632]">Pendente</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default TableMatriculas;