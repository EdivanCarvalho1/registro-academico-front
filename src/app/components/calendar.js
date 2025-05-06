'use client'
import { useState, useEffect } from 'react';

const Calendario = () => {
    const today = new Date();
    const todayMonth = today.toLocaleString('pt-BR', { month: 'long' });
    const todayYear = today.getFullYear();

    const dayLabels = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    // Função para obter os dias do mês atual
    function getDatesOfCurrentMonth() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth(); // Janeiro é 0
        const dates = [];

        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            dates.push(date.toISOString().split('T')[0]);
        }

        return dates;
    }

    const [dates, setDates] = useState(getDatesOfCurrentMonth());

    // Atualiza as datas do mês
    useEffect(() => {
        const newDates = getDatesOfCurrentMonth();
        setDates(newDates);
    }, []); // Chama uma vez ao carregar o componente

    return (
        <div className='mt-15 ml-15'>
            <table className=' text-[white]'>
                <thead>
                    <tr>
                        <th className='bg-[#f9cf64] p-0.5 w-76 rounded-l-2xl text-2xl font-light'>
                            {todayMonth.toUpperCase()}
                        </th>
                        <th className='bg-[#b697e8] p-0.5 w-76 rounded-r-2xl text-2xl font-light'>
                            {todayYear}
                        </th>
                    </tr>
                </thead>
            </table>
            <h1 className='text-2xl font-bold mt-10 text-[#493159]'>
                {todayMonth.charAt(0).toUpperCase() + todayMonth.slice(1)}{' '}
                <span className='font-light'>{todayYear}</span>
            </h1>

            <div className='flex flex-wrap mt-2 gap-1 w-[calc(7*5.5rem)]'>
                {/* Cabeçalho dos dias da semana */}
                {dayLabels.map((label, index) => (
                    <div key={`label-${index}`} className='w-20 h-10 bg-white text-[16px] text-[#493159] flex items-center justify-center font-semibold'>
                        {label}
                    </div>
                ))}

                {/* Espaços vazios antes do primeiro dia do mês */}
                {(() => {
                    const firstDay = new Date(dates[0]).getDay(); // Descobre o primeiro dia do mês
                    return Array.from({ length: firstDay }, (_, i) => (
                        <div key={`empty-${i}`} className='bg-[#f5f5f5] rounded-xl text-[16px] w-20 h-24'></div>
                    ));
                })()}

                {/* Dias do mês */}
                {dates.map((date, index) => {
                    const day = parseInt(date.split('-')[2], 10);
                    const isToday = day === today.getDate() && todayMonth === new Date(date).toLocaleString('pt-BR', { month: 'long' }) && todayYear === new Date(date).getFullYear();

                    return (
                        <div
                            key={`date-${index}`}
                            className={`w-20 h-24 flex justify-start rounded-xl border border-gray-300 ${isToday ? 'bg-[#493159] text-white border-[#493159]' : 'bg-white text-[#493159]'}`}
                        >
                            <p className={`ml-1 text-[16px] font-bold ${isToday ? 'font-semibold' : ''}`}>
                                {day}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div >
    );
}

export default Calendario;
