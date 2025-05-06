"use client"
import Input from './input/input';
import Select from './input/select';
import SelectUfBr from './input/select_ufbr';

export default function Endereco() {
  return (
    <div className="pl-5">
      <h2 className="text-base font-semibold">3. Endereço Residencial</h2>

      <div className="flex flex-col p-3 mb-4 w-full gap-4">

        <div className="flex w-full gap-4">
          <div className="w-[22.5%]">
            <Input
              id="cep"
              type="text"
              label="CEP"
              placeholder="00000-000"
            />
          </div>
          <div className="w-[42.5%]">
            <Input
              id="cidade"
              type="text"
              label="Cidade"
              placeholder="Insira o nome"
            />
          </div>
          <div className="w-[22.5%]">
            <SelectUfBr default_value="Selecione" label="Estado" />
          </div>
          <div className="w-[12.5%]">
            <Input
              id="numero"
              type="text"
              label="Número"
              placeholder="Número"
            />
          </div>
        </div>

        <div className="flex w-full gap-4">
          <div className="w-[37.5%]">
            <Input
              id="rua"
              type="text"
              label="Rua"
              placeholder="Nome da rua"
            />
          </div>
          <div className="w-[37.5%]">
            <Input
              id="bairro"
              type="text"
              label="Bairro"
              placeholder="Nome do bairro"
            />
          </div>
          <div className="w-[25%]">
            <Input
              id="complemento"
              type="text"
              label="Complemento"
              placeholder="Digite"
            />
          </div>
        </div>

      </div>
    </div>
  )
}
