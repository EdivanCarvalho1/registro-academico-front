"use client"
import DisabledInput from './input/disabled_input';
import Input from './input/input';
import Select from './input/select';
import SelectUfBr from './input/select_ufbr';

export default function InformacoesEspecificas() {
  return (
    <div className="pl-5">
      <h2 className="text-base font-semibold">5. Informações Específicas</h2>

      <div className="flex flex-col p-3 mb-4 w-full gap-4">
        <div className="flex w-full gap-4">
          <div className="w-[25%]">
            <DisabledInput
              id="deficiencia"
              type="text"
              label="Possui Deficiência?"
              placeholder="Nome da Deficiência"
            />
          </div>
          <div className="w-[40%]">
            <DisabledInput
              id="necessidade_especifica"
              type="text"
              label="Possui Necessidade Específica?"
              placeholder="Nome da necessidade"
            />
          </div>
          <div className="w-[20%]">
            <DisabledInput
              id="alergia"
              type="text"
              label="Possui alergia?"
              placeholder="Nome da Alergia"
            />
          </div>
          <div className="w-[15%]">
            <Input
              id="tipo_sang"
              type="text"
              label="Tipo Sanguíneo"
              placeholder="X"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
