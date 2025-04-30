"use client";
import Input from "./input/input";
import Select from "./input/select";

export default function DadosPessoais() {
  return (
    <div className="pl-5">
      <h2 className="text-base font-semibold">1. Dados Pessoais</h2>

      <div className="flex p-3 mb-4 w-full gap-6">

        {/* Coluna 1 */}
        <div className="h-full w-1/2 flex flex-col gap-4">
          <Input
            id="nomeAluno"
            type="text"
            label="Nome do Aluno"
            placeholder="Nome e Sobrenome"
          />

          <div className="flex w-full gap-4">
            <div className="w-1/2">
              <Select className="w-full" id="nacionalidade" label="Nacionalidade">
                <option value="BR">Brasil</option>
                <option value="PT">Portugal</option>
                <option value="AN">Angola</option>
                <option value="MO">Moçambique</option>
                <option value="AR">Argentina</option>
                <option value="UR">Uruguai</option>
                <option value="PG">Paraguai</option>
                <option value="CH">Chile</option>
              </Select>
            </div>

            <div className="w-1/2">
              <Input
                id="nascimentoAluno"
                type="date"
                label="Data de Nascimento"
              />
            </div>
          </div>

          <Input
            id="nomePai"
            type="text"
            label="Nome do Pai"
            placeholder="Nome e Sobrenome"
          />

          <Select id="escolaridadePai" type="text" label="Escolaridade">
            <option value="fundamental">Fundamental</option>
            <option value="medio">Médio</option>
            <option value="superior_incompleto">Superior Incompleto</option>
            <option value="superior_completo">Superior Completo</option>
            <option value="pos_incompleta">Pós Graduação Incompleta</option>
            <option value="pos_completa">Pós Graduação Completa</option>
          </Select>

          <Input
            id="nomeMae"
            type="text"
            label="Nome da Mãe"
            placeholder="Nome e Sobrenome"
          />

          <Select id="escolaridadeMae" type="text" label="Escolaridade">
            <option value="fundamental">Fundamental</option>
            <option value="medio">Médio</option>
            <option value="superior_incompleto">Superior Incompleto</option>
            <option value="superior_completo">Superior Completo</option>
            <option value="pos_incompleta">Pós Graduação Incompleta</option>
            <option value="pos_completa">Pós Graduação Completa</option>
          </Select>
        </div>

        {/* Coluna 2 */}
        <div className="h-full w-1/4 flex flex-col gap-4">
          <Input
            id="telefoneAluno"
            type="tel"
            label="Telefone"
            placeholder="+00 (00) 00000-0000"
          />

          <Select id="sexo" label="Sexo">
            <option value="masc">Masculino</option>
            <option value="fem">Feminino</option>
          </Select>

          <Input
            id="telefonePai"
            type="tel"
            label="Telefone"
            placeholder="+00 (00) 00000-0000"
          />

          <Select id="estadoCivilPai" label="Estado Civil">
            <option value="solteiro">Solteiro</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
            <option value="viúvo">Viúvo</option>
          </Select>

          <Input
            id="telefoneMae"
            type="tel"
            label="Telefone"
            placeholder="+00 (00) 00000-0000"
          />

          <Select id="estadoCivilMae" label="Estado Civil">
            <option value="solteira">Solteira</option>
            <option value="casada">Casada</option>
            <option value="divorciada">Divorciada</option>
            <option value="viúva">Viúva</option>
          </Select>
        </div>

        {/* Coluna 3 */}
        <div className="h-full w-1/4 flex flex-col gap-4">
          <Input
            id="emailAluno"
            type="mail"
            label="E-mail"
            placeholder="email@dominio.com"
          />

          <Select id="cor" label="Cor / Etnia">
            <option value="branco">Branco</option>
            <option value="negro">Negro</option>
            <option value="pardo">Pardo</option>
            <option value="indigena">Indígena</option>
            <option value="asiatico">Asiático</option>
            <option value="outro">Outro</option>
          </Select>

          <Input
            id="emailPai"
            type="mail"
            label="E-mail"
            placeholder="email@dominio.com"
          />

          <Input
            id="nascimentoPai"
            type="date"
            label="Data de Nascimento"
          />

          <Input
            id="emailMae"
            type="mail"
            label="E-mail"
            placeholder="email@dominio.com"
          />

          <Input
            id="nascimentoMae"
            type="date"
            label="Data de Nascimento"
          />
        </div>

      </div>
    </div>
  );
}
