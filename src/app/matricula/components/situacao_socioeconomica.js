"use client";
import Input from './input/input';
import Select from './input/select';
import SelectUfBr from './input/select_ufbr';

export default function SituacaoSocioeconomica() {
  return (
    <div className="pl-5">
      <h2 className="text-base font-semibold">6. Situação Socioeconômica</h2>

      <div className="flex flex-col p-3 mb-4 w-full gap-4">
        <div className="flex w-full gap-4">
          <div className="w-[30%]">
            <Input
              id="renda"
              type="text"
              label="Renda Per Capta"
              placeholder="XX salários mínimos"
            />
          </div>
          <div className="w-[40%]">
            <Input
              id="profissao"
              type="text"
              label="Profissão do Aluno"
            />
          </div>
          <div className="w-[30%]">
            <Input
              id="familiares"
              type="number"
              label="Familiares Morando Junto"
              placeholder="00"
            />
          </div>
        </div>

        <div className="flex justify-between pr-4 mb-3 w-full">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              id="cuntr-renda"
              className="peer sr-only"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-purple-500 transition peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-transform relative" />
            <span>Contribui para a renda familiar?</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              id="filhos"
              className="peer sr-only"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-purple-500 transition peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-transform relative" />
            <span>Possui filhos?</span>
          </label>
        </div>

        <div className="flex justify-between pr-4 mb-3 w-full">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              id="desp_hosp"
              className="peer sr-only"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-purple-500 transition peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-transform relative" />
            <span>Possui despesas hospitalares?</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              id="desp_transp"
              className="peer sr-only"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-purple-500 transition peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-transform relative" />
            <span>Possui despesas com transporte?</span>
          </label>
        </div>

        <div className="flex w-full gap-4">
          <div className="w-[35%]">
            <Input
              id="forma_ingresso"
              type="text"
              label="Forma de Ingresso"
              placeholder="XXXX-XXXX-XXXX0"
            />
          </div>
          <div className="w-[35%]">
            <Input
              id="ens_med"
              type="text"
              label="Onde Cursou o Ensino Médio"
              placeholder="Nome da Escola"
            />
          </div>
          <div className="w-[30%]">
            <Input
              id="concl_end_med"
              type="number"
              label="Ano de Conclusão"
              placeholder="0000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
