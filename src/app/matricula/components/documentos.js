"use client";
import Input from './input/input';
import SelectUfBr from './input/select_ufbr';

export default function Documentos() {
  return (
    <div className="pl-5">
      <h2 className="text-base font-semibold">2. Documentos</h2>

      <div className="flex p-3 mb-4 w-full gap-4">

        {/* Coluna esquerda */}
        <div className="flex w-1/2 gap-4">
          <div className="flex flex-col gap-2 w-full">
            <Input
              id="rg"
              type="text"
              label="RG"
              placeholder="00.000000-00"
            />
            <Input
              id="cert_nasc"
              type="text"
              label="Certidão de Nascimento"
              placeholder="000.000.000-00"
            />
            <Input
              id="titulo_eleitor"
              type="text"
              label="Título de Eleitor"
              placeholder="000.000.000-00"
            />
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <Input
              id="org_exp"
              type="text"
              label="Órgão Expeditor"
              placeholder="Insira o nome"
            />

            <div className="flex gap-2">
              <div className="w-2/3">
                <Input
                  id="emissao"
                  type="date"
                  label="Emissão"
                />
              </div>
              <div className="w-1/3">
                <Input
                  id="folha"
                  type="text"
                  label="Folha"
                  placeholder="000"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <div className="w-2/3">
                <Input
                  id="emissao2"
                  type="date"
                  label="Emissão"
                />
              </div>
              <div className="w-1/3">
                <SelectUfBr />
              </div>
            </div>
          </div>
        </div>

        {/* Coluna direita */}
        <div className="flex flex-col gap-4 w-1/2">
          <div className="flex gap-2">
            <div className="w-[55%]">
              <Input
                id="cpf"
                type="text"
                label="CPF"
                placeholder="000.000.000-00"
              />
            </div>
            <div className="w-[30%]">
              <Input
                id="exp_cpf"
                type="date"
                label="Expedição"
              />
            </div>
            <div className="w-[15%]">
              <SelectUfBr />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="w-[70%]">
              <Input
                id="nome_cartorio"
                type="text"
                label="Nome do Cartório"
                placeholder="Insira o nome"
              />
            </div>
            <div className="w-[30%]">
              <Input
                id="livro_cartorio"
                type="text"
                label="Livro"
                placeholder="000"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
