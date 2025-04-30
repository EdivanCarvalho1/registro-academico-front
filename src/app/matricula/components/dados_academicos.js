"use client"
import Input from './input/input';
import Select from './input/select';
import SelectUfBr from './input/select_ufbr';

export default function DadosAcademicos() {
  return (
    <div className="pl-5">
      <h2 className="text-lg font-semibold">4. Dados Acadêmicos</h2>

      <div className="flex flex-col p-3 mb-4 w-full">
        <div className="flex w-full gap-4">
          <div className="w-1/5">
            <Input
              id="campus"
              type="text"
              label="Campus"
              placeholder="Nome do Campus"
            />
          </div>
          <div className="w-[15%]">
            <Input
              id="cod_campus"
              type="text"
              label="Código"
              placeholder="000"
            />
          </div>
          <div className="w-[45%]">
            <Input
              id="curso"
              type="text"
              label="Curso"
              placeholder="Nome do Curso"
            />
          </div>
          <div className="w-1/5">
            <Select id="modalidade" label="Modalidade">
              <option value="pres">Presencial</option>
              <option value="semi-pres">Semi-presencial</option>
              <option value="ead">Distância</option>
            </Select>
          </div>
        </div>

        <div className="flex w-full gap-4 mt-4">
          <div className="w-1/5">
            <Input
              id="dia_matricula"
              type="date"
              label="Dia da Matrícula"
            />
          </div>
          <div className="w-[15%]">
            <Input
              id="periodo"
              type="text"
              label="Período"
              placeholder="0000-0"
            />
          </div>
          <div className="w-1/2">
            <Input
              id="matricula"
              type="text"
              label="Matrícula"
              placeholder="000000000000"
            />
          </div>
          <div className="w-[15%]">
            <Input
              id="pasta"
              type="text"
              label="Pasta"
              placeholder="00000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
